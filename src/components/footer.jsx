import { useState, useEffect, useCallback } from 'react';

import Icon from './icon.jsx';

import '../styles/footer.css';

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    
    const nearBottom = scrollTop + clientHeight >= scrollHeight * 0.96;
    setShowBackToTop(nearBottom);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <footer>
      <div id="contact-info">
        <h5>vijuksama@gmail.com</h5>
        <h5>Samutprakan || Thailand</h5>
      </div>
      
      <div className="svg-flex">
        <a 
          href="https://github.com/NsamaX" 
          target="_blank" 
          rel="noreferrer"
          aria-label="GitHub Profile"
        >
          <Icon iconKey="github" />
        </a>
        <a 
          href="https://www.linkedin.com/in/vijuksama-hongthongdaeng-60642a380/" 
          target="_blank" 
          rel="noreferrer"
          aria-label="LinkedIn Profile"
        >
          <Icon iconKey="linkedin" />
        </a>
      </div>
      
      <p id="copyright">&copy; 2025 Vijuksama Hongthongdaeng</p>
      
      <Icon 
        id="back-to-top" 
        iconKey="arrow-up" 
        onClick={scrollToTop}
        style={{ 
          opacity: showBackToTop ? 1 : 0,
          visibility: showBackToTop ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease'
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
        aria-label="Back to top"
      />
    </footer>
  );
}

export default Footer;