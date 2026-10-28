import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-purple-600/90 hover:bg-purple-600 text-white shadow-xl shadow-purple-900/30 border border-purple-400/40 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
