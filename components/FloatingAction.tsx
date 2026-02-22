
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { CONTACT_INFO, WhatsAppIcon } from '../constants';

const FloatingAction: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[60]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-[#D4AF37] transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 pulse-animation"
        aria-label="Contact on WhatsApp"
      >
        <WhatsAppIcon size={32} />
      </a>
    </div>
  );
};

export default FloatingAction;
