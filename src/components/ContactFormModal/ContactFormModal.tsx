import React, { useState, useEffect } from 'react';
import './ContactFormModal.css';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  phoneNumber: string;
  workEmail: string;
  interestedIn: string;
  numberOfEmployees: string;
  projectOverview: string;
  howDidYouHear: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    phoneNumber: '',
    workEmail: '',
    interestedIn: '',
    numberOfEmployees: '',
    projectOverview: '',
    howDidYouHear: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid email address';
    }
    if (!formData.interestedIn) newErrors.interestedIn = 'Please select what you\'re interested in';
    if (!formData.numberOfEmployees) newErrors.numberOfEmployees = 'Please select number of employees';
    if (!formData.projectOverview.trim()) newErrors.projectOverview = 'Project overview is required';
    if (!formData.howDidYouHear) newErrors.howDidYouHear = 'Please select how you heard about us';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      setShowThankYou(true);
      
      // Close modal and show thank you message
      onClose();
      
      // Reset form after showing thank you
      setTimeout(() => {
        setShowThankYou(false);
        setFormData({
          firstName: '',
          lastName: '',
          companyName: '',
          phoneNumber: '',
          workEmail: '',
          interestedIn: '',
          numberOfEmployees: '',
          projectOverview: '',
          howDidYouHear: ''
        });
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmitAnother = () => {
    setShowThankYou(false);
    setIsSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      phoneNumber: '',
      workEmail: '',
      interestedIn: '',
      numberOfEmployees: '',
      projectOverview: '',
      howDidYouHear: ''
    });
  };

  // Show thank you message if form was submitted
  if (showThankYou) {
    return (
      <div className="thank-you-container">
        <div className="thank-you-content">
          <h2>Thank you for your submission!</h2>
          <p>
            We appreciate your interest in our video production services. 
            An Account Executive will get back to you within 2 hours during 
            business hours (Monday–Friday, 8 AM–6 PM).
          </p>
          <p>We look forward to bringing your vision to life!</p>
          <button className="submit-another-btn" onClick={handleSubmitAnother}>
            Submit Another Response
          </button>
        </div>
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="contact-modal-overlay" onClick={handleOverlayClick}>
      <div className="contact-modal">
        <button className="contact-modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="contact-modal-header">
          <h2>Let's talk video.</h2>
          <p>
            Please fill out the form below, and an Account Executive will follow up 
            within 2 hours (Business hours are Monday–Friday, 8 AM–6 PM). If 
            you're trying to reach someone else, please visit our{' '}
            <a href="/contact" className="contact-link">contact page</a>.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name*"
                value={formData.firstName}
                onChange={handleInputChange}
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                value={formData.lastName}
                onChange={handleInputChange}
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="companyName"
                placeholder="Company name*"
                value={formData.companyName}
                onChange={handleInputChange}
                className={errors.companyName ? 'error' : ''}
              />
              {errors.companyName && <span className="error-message">{errors.companyName}</span>}
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone number"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="workEmail"
              placeholder="Work email address*"
              value={formData.workEmail}
              onChange={handleInputChange}
              className={errors.workEmail ? 'error' : ''}
            />
            {errors.workEmail && <span className="error-message">{errors.workEmail}</span>}
          </div>

          <div className="form-group">
            <select
              name="interestedIn"
              value={formData.interestedIn}
              onChange={handleInputChange}
              className={errors.interestedIn ? 'error' : ''}
            >
              <option value="">I'm interested in*</option>
              <option value="brand-video">Brand Video</option>
              <option value="product-demo">Product Demo</option>
              <option value="testimonial">Customer Testimonial</option>
              <option value="training">Training Video</option>
              <option value="event">Event Coverage</option>
              <option value="animation">Animation</option>
              <option value="other">Other</option>
            </select>
            {errors.interestedIn && <span className="error-message">{errors.interestedIn}</span>}
          </div>

          <div className="form-group">
            <select
              name="numberOfEmployees"
              value={formData.numberOfEmployees}
              onChange={handleInputChange}
              className={errors.numberOfEmployees ? 'error' : ''}
            >
              <option value="">Number of employees*</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>
            {errors.numberOfEmployees && <span className="error-message">{errors.numberOfEmployees}</span>}
          </div>

          <div className="form-group">
            <textarea
              name="projectOverview"
              placeholder="Please provide an overview of your video project*"
              value={formData.projectOverview}
              onChange={handleInputChange}
              rows={4}
              className={errors.projectOverview ? 'error' : ''}
            />
            {errors.projectOverview && <span className="error-message">{errors.projectOverview}</span>}
          </div>

          <div className="form-group">
            <select
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleInputChange}
              className={errors.howDidYouHear ? 'error' : ''}
            >
              <option value="">How did you hear about us?*</option>
              <option value="google">Google Search</option>
              <option value="social-media">Social Media</option>
              <option value="referral">Referral</option>
              <option value="advertising">Online Advertising</option>
              <option value="event">Event/Conference</option>
              <option value="other">Other</option>
            </select>
            {errors.howDidYouHear && <span className="error-message">{errors.howDidYouHear}</span>}
          </div>

          <button 
            type="submit" 
            className="contact-submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;