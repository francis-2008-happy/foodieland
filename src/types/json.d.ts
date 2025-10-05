// allow importing JSON files with `import data from './file.json'`
declare module '*.json' {
  const value: any;
  export default value;
}
