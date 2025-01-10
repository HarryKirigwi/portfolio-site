import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPaperPlane, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt 
} from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+254 712 345 678',
      link: `https://wa.me/254712345678`,
      color: 'text-green-500'
    },
    {
      icon: FaPhone,
      title: 'Call Me',
      value: '+254 712 345 678',
      link: 'tel:+254712345678',
      color: 'text-blue-500'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'harrison.kirigwi@example.com',
      link: 'mailto:harrison.kirigwi@example.com',
      color: 'text-red-500'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement form submission logic
      console.log('Form submitted:', formData);
      
      // Optional: Add form submission to backend or email service
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Optional: Show success message
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-lg p-6 space-y-6"
          >
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact Information
            </h3>
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center space-x-4 hover:bg-gray-700 p-3 rounded-lg transition-colors"
              >
                <method.icon className={`text-2xl ${method.color}`} />
                <div>
                  <p className="text-white font-medium">{method.title}</p>
                  <p className="text-gray-400 text-sm">{method.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <div className="flex items-center space-x-4 text-gray-400 p-3">
              <FaMapMarkerAlt className="text-2xl text-secondary" />
              <p>Nairobi, Kenya</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-secondary"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 group"
              >
                <FaPaperPlane className="group-hover:animate-bounce" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;