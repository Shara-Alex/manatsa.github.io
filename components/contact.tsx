// src/components/Contact.tsx
import React, { useState } from 'react';
import { FaGithub, FaFileDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { personal } from '../data/personal';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = personal.resumePath;
    link.download = "Manatsa_Mbanje_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="contact" className="py-20 bg-whatsapp-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="w-20 h-1 bg-green-500 mb-10"></div>

        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitSuccess && (
                <div className="bg-green-500/10 text-green-400 p-4 rounded-lg">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-whatsapp-dark-700 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-whatsapp-dark-600 focus:ring-green-500'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-whatsapp-dark-700 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-whatsapp-dark-600 focus:ring-green-500'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject *</label>
                <input
                  type="text"
                  id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full bg-whatsapp-dark-700 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                      errors.subject 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-whatsapp-dark-600 focus:ring-green-500'
                    }`}
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full bg-whatsapp-dark-700 border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-whatsapp-dark-600 focus:ring-green-500'
                    }`}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors duration-300 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            <div className="lg:w-1/2">
              <div className="bg-whatsapp-dark-700 rounded-xl p-8 h-full">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-green-500 mt-1 mr-4">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Email</h4>
                      <a
                        href={`mailto:${personal.contact.email}`}
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                      >
                        {personal.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-green-500 mt-1 mr-4">
                      <FaPhone className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Phone</h4>
                      <a
                        href={`tel:${personal.contact.phone}`}
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                      >
                        {personal.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-green-500 mt-1 mr-4">
                      <FaGithub className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">GitHub</h4>
                      <a
                        href={personal.contact.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                      >
                        {personal.contact.github}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-green-500 mt-1 mr-4">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-gray-300 font-medium">Location</h4>
                      <p className="text-gray-400">
                        {personal.contact.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="text-gray-300 font-medium mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href={personal.contact.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-whatsapp-dark-600 flex items-center justify-center text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-colors duration-300"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    {/* Add LinkedIn and Instagram if you have them */}
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-whatsapp-dark-600 flex items-center justify-center text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-colors duration-300 opacity-50 cursor-not-allowed"
                      title="Coming soon"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-whatsapp-dark-600 flex items-center justify-center text-gray-300 hover:text-green-400 hover:bg-green-500/10 transition-colors duration-300 opacity-50 cursor-not-allowed"
                      title="Coming soon"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={downloadResume}
                    className="inline-flex items-center px-4 py-2 bg-green-500/10 text-green-400 rounded-lg hover:bg-green-500/20 transition-colors duration-300"
                  >
                    <FaFileDownload className="mr-2" />
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;