// scripts/convert-to-webp.js
// Usage: node scripts/convert-to-webp.js
// Converts .jpg/.jpeg/.png images under public/ to .webp, backing up originals to public-backup-<timestamp>

const fs = require('fs');
const fsp = require('fs').promises;
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const BACKUP_DIR = path.resolve(__dirname, '..', `public-backup-${Date.now()}`);

async function copyDir(src, dest) {
  await fsp.mkdir(dest, { recursive: true });
  const entries = await fsp.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fsp.copyFile(srcPath, destPath);
    }
  }
}

function globPromise(pattern) {
  return new Promise((resolve, reject) => {
    glob(pattern, (err, matches) => {
      if (err) reject(err);
      else resolve(matches);
    });
  });
}

async function convertFileToWebp(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const dir = path.dirname(filePath);
  const base = path.basename(filePath, ext);
  const outPath = path.join(dir, `${base}.webp`);

  try {
    await sharp(filePath)
      .rotate()
      .webp({ quality: 80 })
      .toFile(outPath);

    // delete original file
    await fsp.unlink(filePath);
    console.log(`Converted: ${filePath} -> ${outPath}`);
  } catch (err) {
    console.error(`Failed to convert ${filePath}:`, err.message || err);
  }
}

async function main() {
  console.log('Backing up public/ to', BACKUP_DIR);
  await copyDir(PUBLIC_DIR, BACKUP_DIR);
  console.log('Backup complete.');

  const pattern = path.join(PUBLIC_DIR, '**', '*.+(jpg|jpeg|png)');
  const files = await globPromise(pattern);
  console.log(`Found ${files.length} image files to convert.`);

  for (const f of files) {
    await convertFileToWebp(f);
  }

  console.log('All done. Originals saved in', BACKUP_DIR);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
