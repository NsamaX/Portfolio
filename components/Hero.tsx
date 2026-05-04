import Image from 'next/image';
import translations, { Lang } from '@/lib/translations';

interface HeroProps {
  lang: Lang;
}

export default function Hero({ lang }: HeroProps) {
  const t = translations[lang].hero;
  return (
    <section id="hero" className="hero-section">
      <Image
        src="/collages/pointing.png"
        alt=""
        width={280}
        height={340}
        className="hero-pointing"
        aria-hidden="true"
      />
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-name">Vijuksama</h1>
          <p className="hero-tagline"><em>{t.tagline}</em></p>
          <p className="hero-sub">{t.sub}</p>
          <div className="hero-ctas">
            <a href="#projects" className="cta-dashed">{t.cta_work}</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-dashed cta-outline">{t.cta_resume}</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="float-dot dot-1"></div>
          <div className="float-dot dot-2"></div>
          <div className="float-star">✳</div>
          <div className="float-dash">— —</div>
          <div className="torn-scrap scrap-1"></div>
          <div className="torn-scrap scrap-2"></div>

          <div className="blob-wrapper">
            <svg className="blob-svg" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="blobClip">
                  <path d="M200,30 C260,20 330,60 360,120 C390,180 390,250 360,310 C330,370 260,400 200,395 C140,390 70,360 40,300 C10,240 15,160 50,100 C85,40 140,40 200,30 Z"/>
                </clipPath>
              </defs>
              <path d="M200,30 C260,20 330,60 360,120 C390,180 390,250 360,310 C330,370 260,400 200,395 C140,390 70,360 40,300 C10,240 15,160 50,100 C85,40 140,40 200,30 Z" fill="#E8B84B" opacity="0.92"/>
              <g clipPath="url(#blobClip)">
                <rect x="60" y="60" width="280" height="280" fill="#C9A84B" opacity="0.3"/>
                <text x="200" y="185" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#7A5C1A" opacity="0.7">profile</text>
                <text x="200" y="200" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#7A5C1A" opacity="0.7">photo</text>
                <text x="200" y="215" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#7A5C1A" opacity="0.7">goes here</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
