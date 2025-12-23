'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import { contactData } from '@/data/data'; 

export default function Contact({ id }: { id: string }) {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // GET YOUR EMAIL FROM DATA FILE OR HARDCODE IT HERE
    // This is where the form submission will go
    const targetEmail = contactData.email[0]; // e.g., "contact@nitikushal.org"

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Subject: formData.subject,
          Message: formData.message,
          // Special FormSubmit.co settings:
          _template: "table", // Makes the email look nice
          _captcha: "false",  // Turn off annoying captchas if you want
          _subject: `New Message: ${formData.subject}` // Custom subject line
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Unable to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact"  className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-50/50 skew-x-12 translate-x-20 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-emerald-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            <MessageSquare size={18} />
            Get in Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            We{`'`}d Love to <span className="text-emerald-600">Hear From You</span>
          </motion.h2>
          <p className="text-gray-600 mt-4">
            Have a question, want to volunteer, or just say hello? Fill out the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm mb-4">
                  <Phone size={20} />
                </div>
                <h4 className="font-bold text-gray-900">Call Us</h4>
                {contactData.phone.map((num, i) => <p key={i} className="text-gray-600 text-sm mt-1">{num}</p>)}
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm mb-4">
                  <Mail size={20} />
                </div>
                <h4 className="font-bold text-gray-900">Email Us</h4>
                {contactData.email.map((mail, i) => <p key={i} className="text-gray-600 text-sm mt-1">{mail}</p>)}
              </div>
            </div>

            <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600 text-sm">Main Office</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {contactData.address.line1}<br />
                  {contactData.address.line2} <br />
                  {contactData.address.line3}
                </p>
                <div className="w-full h-48 bg-gray-200 rounded-xl overflow-hidden shadow-inner">
                  <iframe 
                    src={contactData.mapUrl}
                    width="100%" height="100%" style={{ border: 0 }} 
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                  ></iframe>
                </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10 relative"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 my-1 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <input name="name" type="text" required placeholder="FirstName LastName" value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input name="email" type="email" required placeholder="firstlast@example.com" value={formData.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select name="subject" value={formData.subject} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white text-gray-600"
                  >
                    <option>General Inquiry</option>
                    <option>Volunteering</option>
                    <option>Donation Support</option>
                    <option>Media / Press</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea name="message" required rows={4} placeholder="How can we help you?" value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                  ></textarea>
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-sm text-center">{errorMessage}</p>
                )}

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-emerald-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}