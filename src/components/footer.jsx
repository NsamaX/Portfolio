import { useState, useEffect, useCallback } from 'react';

import Icon from './icon.jsx';

import '../styles/footer.css';

const CONTACT_INFO = {
  email: "vijuksama@gmail.com",
  location: "Samutprakan, Thailand",
  copyright: "© 2025 Vijuksama Hongthongdaeng"
};

const SOCIAL_LINKS = [
  {
    href: "https://github.com/NsamaX",
    iconKey: "github",
    label: "GitHub",
    ariaLabel: "View GitHub profile"
  },
  {
    href: "https://www.linkedin.com/in/vijuksama-hongthongdaeng-60642a380/", 
    iconKey: "linkedin",
    label: "LinkedIn",
    ariaLabel: "View LinkedIn profile"
  }
];

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
        <h5>{CONTACT_INFO.email}</h5>
        <h5>{CONTACT_INFO.location}</h5>
      </div>
      
      <div className="svg-flex">
        {SOCIAL_LINKS.map((link, index) => (
          <a 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            key={index}
            aria-label={link.ariaLabel}
          >
            <Icon iconKey={link.iconKey} />
          </a>
        ))}
      </div>
      
      <p id="copyright">{CONTACT_INFO.copyright}</p>
      
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