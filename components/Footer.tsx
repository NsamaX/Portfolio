import translations, { Lang } from '@/lib/translations';

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const footerText = `Vijuksama · 2026 · ${translations[lang].footer}`;
  return (
    <footer>
      <p className="footer-text">{footerText}</p>
    </footer>
  );
}
