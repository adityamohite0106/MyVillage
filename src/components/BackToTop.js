import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.pageYOffset > 300);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    // If not on home, navigate first then scroll to top
    if (location.pathname !== '/') {
      navigate('/');
      // Small delay to allow route change and layout paint before scrolling
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      title="Back to top"
      className={`back-to-top`}
      onClick={handleClick}
    >
      {/* Simple chevron up built with CSS/Unicode for no extra dependency */}
      <span className="back-to-top-icon">▲</span>
    </button>
  );
};

export default BackToTop;
