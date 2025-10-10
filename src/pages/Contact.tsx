// src/pages/Contact.tsx
import React, { useState } from 'react';
import '../styles/Contact.css';
import LikeRecipes from "../components/LikeRecipes";
import Newsletter from '../components/Newsletter';


interface FormData {
  name: string;
  email: string;
  subject: string;
  enquiryType: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    enquiryType: 'Advertising',
    message: ''
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault?.();
    console.log('Form submitted:', formData);
    // TODO: replace with real submit logic (API call, validation, etc.)
  };

  return (
    <div className="contact-page">
      <h1> Contact us </h1>
      <div className="top-form">
  <img src="/chef1.webp" alt="Contact Us" className="contact-image" />
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label">NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name..."
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label className="form-label">EMAIL ADDRESS</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address..."
                className="form-input"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-field">
              <label className="form-label">SUBJECT</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Enter subject..."
                className="form-input"
              />
            </div>

            <div className="form-field">
              <label className="form-label">ENQUIRY TYPE</label>
              <div className="select-wrapper">
                <select
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option>Advertising</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Partnership</option>
                </select>
                <div className="select-arrow">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="form-field-full">
            <label className="form-label">MESSAGES</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter your messages..."
              rows={8}
              className="form-textarea"
            />
          </div>

          <button type="submit" className="form-submit">
            Submit
          </button>
        </form>
      </div>

      <Newsletter />
      <LikeRecipes />
    </div>
  );
};

export default Contact;
