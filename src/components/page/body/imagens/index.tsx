import { LandingMarquee } from '@/components/landing/LandingMarquee';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import imagem1 from '../../../../assets/images/imagem-1.jpg';
import imagem2 from '../../../../assets/images/imagem-2.jpg';
import imagem3 from '../../../../assets/images/imagem-3.jpg';
import imagem4 from '../../../../assets/images/imagem-4.jpg';
import imagem5 from '../../../../assets/images/imagem-5.jpg';
import { useState, useEffect } from 'react';

export default function Imagens() {
  const [animationDuration, setAnimationDuration] = useState(200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAnimationDuration(20);
      } else {
        setAnimationDuration(200);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='about'>
      <LandingPrimaryTextCtaSection
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold leading-tight lg:whitespace-nowrap mb-5 mt-10">
              Transformando espaços com segurança e durabilidade
            </h2>
          </>
        }
        description={
          <>
            <p>
              Usamos soluções diretas e eficientes, unindo expertise em estruturas metálicas e foco na experiência do cliente para oferecer projetos duráveis e funcionais. Na RP Solda, nosso compromisso é transformar o seu espaço com qualidade e segurança.
            </p>
          </>
        }
        className="-mb-20"
        withBackground={true}
      />

      <LandingMarquee animationDurationInSeconds={animationDuration}>
        <div style={{ width: 300, height: 400 }}>
          <LazyLoadImage
            src={imagem1}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: 400, height: 400 }}>
          <LazyLoadImage
            src={imagem2}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: 400, height: 400 }}>
          <LazyLoadImage
            src={imagem3}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: 500, height: 400 }}>
          <LazyLoadImage
            src={imagem4}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: 500, height: 400 }}>
          <LazyLoadImage
            src={imagem5}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

      </LandingMarquee>
    </div>
  );
}
