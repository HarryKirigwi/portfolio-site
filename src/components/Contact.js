import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import EmailJS
import { 
  FaPaperPlane, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (isSuccess || isError) {
      timeoutId = setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 3000); // 3 seconds
    }
    return () => clearTimeout(timeoutId); // Cleanup timeout on component unmount
  }, [isSuccess, isError]);

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+254 705 483 375',
      link: `https://wa.me/254705483375`,
      color: 'text-green-500'
    },
    {
      icon: FaPhone,
      title: 'Call Me',
      value: '+254 05 483 375',
      link: 'tel:+254705483375',
      color: 'text-blue-500'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'harrykirigwi@gmail.com',
      link: 'mailto:harrykirigwi@gmail.com',
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
    setIsSubmitting(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      // Send email using EmailJS
      const serviceID = 'default_service'; // Replace with your service ID if different
      const templateID = 'template_6mfle9b'; // Your template ID
      const publicKey = 'j_LR_Sct-sa-I7GTY'; // Your public key

      await emailjs.send(serviceID, templateID, formData, publicKey);

      // Reset form
      setFormData({ name: '', email: '', message: '' });

      // Show success message
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
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
                disabled={isSubmitting}
                className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2 group relative overflow-hidden"
              >
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isSubmitting ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-2"
                >
                  <FaPaperPlane className="group-hover:animate-bounce" />
                  <span>Send Message</span>
                </motion.span>
                {isSubmitting && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                  </motion.div>
                )}
              </button>

              {/* Success and Error Messages */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center space-x-2 text-green-500"
                  >
                    <FaCheckCircle />
                    <span>Message sent successfully!</span>
                  </motion.div>
                )}
                {isError && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center space-x-2 text-red-500"
                  >
                    <FaTimesCircle />
                    <span>Failed to send message. Please try again.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;