import Image from 'next/image';
import translations, { Lang } from '@/lib/translations';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-name">Vijuksama</h1>
          <p className="hero-tagline"><em>{t.tagline}</em></p>
          <p className="hero-sub">{t.sub}</p>
          <div className="hero-ctas">
            <a href="#projects" className="cta-dashed">{t.cta_work}</a>
            <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="cta-dashed cta-outline">{t.cta_resume}</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="float-dot dot-1"></div>
          <div className="float-dot dot-2"></div>
          <div className="float-star">✳</div>
          <div className="float-dash">— —</div>
          <div className="torn-scrap scrap-1"></div>
          <div className="torn-scrap scrap-2"></div>

          <div className="profile-circle-wrap">
            <Image
              src="/profile.jpg"
              alt="Vijuksama"
              width={320}
              height={320}
              className="profile-circle-img"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
