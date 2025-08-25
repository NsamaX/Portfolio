import { useEffect } from 'react';

import Icon from './icon.jsx';

import '../styles/footer.css';

function Footer() {
  useEffect(() => {
    const backToTopBTN = document.getElementById('back-to-top');

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;

      if (scrollTop + clientHeight >= scrollHeight * 0.99) {
        backToTopBTN.style.opacity = '1';
        backToTopBTN.style.visibility = 'visible';
      } else {
        backToTopBTN.style.opacity = '0';
        backToTopBTN.style.visibility = 'hidden';
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    backToTopBTN.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTopBTN.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <footer>
      <h3>Suwisa Saengdao</h3>
      <div id="contact-info">
        <h5>suwisa_saengdao@gmail.com</h5>
        <h5>Samutprakan || Thailand</h5>
      </div>
      <div className="svg-flex">
        <a href="https://github.com/NsamaX" target="_blank" rel="noopener noreferrer"><Icon iconKey="github" /></a>
        <a href="https://www.linkedin.com/in/vijuksama-hongthongdaeng-60642a380/" target="_blank" rel="noopener noreferrer"><Icon iconKey="linkedin" /></a>
      </div>
      <p>&copy; 2025 Portfolio</p>
      <Icon id="back-to-top" iconKey="arrow-up" style={{ visibility: 'hidden' }} />
    </footer>
  );
}

export default Footer;