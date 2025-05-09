import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  FaPaperPlane, 
  FaWhatsapp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa';

// Initialize EmailJS
emailjs.init('j_LR_Sct-sa-I7GTY');

// Custom hook for intersection observer
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);
    
    observer.observe(currentRef);
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, isInView];
};

function Contact() {
  const [sectionRef, isSectionInView] = useInView({ threshold: 0.1 });
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
      value: 'harrykigs2003@gmail.com',
      link: 'mailto:harrykigs2003@gmail.com',
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
      const serviceID = 'default_service'; 
      const templateID = 'template_6mfle9b'; 

      await emailjs.send(serviceID, templateID, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

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
    <section id="contact" ref={sectionRef} className="relative py-20 px-4 overflow-hidden bg-gray-900">
      {/* Background elements */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-indigo-900 bg-opacity-20 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-900 bg-opacity-20 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div
          className={`text-center mb-16 transition-all duration-500 ${isSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        >
          <div 
            className={`inline-block p-2 px-5 bg-indigo-900 bg-opacity-40 rounded-full mb-5 backdrop-blur-sm transition-all duration-500 ${isSectionInView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          >
            <span className="text-indigo-300 text-sm font-medium">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
              Contact Me
            </span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 bg-opacity-70 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-indigo-500 p-6 space-y-6 transition-all duration-300 hover:shadow-lg"
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
                  className="w-full bg-gray-800 bg-opacity-70 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300 hover:border-indigo-400"
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
                  className="w-full bg-gray-800 bg-opacity-70 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300 hover:border-indigo-400"
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
                  className="w-full bg-gray-800 bg-opacity-70 backdrop-blur-sm border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-all duration-300 hover:border-indigo-400"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 flex items-center justify-center space-x-2 group relative overflow-hidden transform hover:scale-[1.02]"
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
    </div> {/* Closing container div */}
    </section>
  );
}

export default Contact;