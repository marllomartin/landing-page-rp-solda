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
  const [imageDimensions, setImageDimensions] = useState({
    width: 400,
    height: 400,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAnimationDuration(30);
        setImageDimensions({
          width: 400 - 100,
          height: 400 - 100,
        });
      } else {
        setAnimationDuration(200);
        setImageDimensions({
          width: 400,
          height: 400,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='w-full'>
      <LandingPrimaryTextCtaSection
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold leading-tight lg:whitespace-nowrap mb-5 mt-10" id='about'>
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

      <LandingMarquee 
        animationDurationInSeconds={animationDuration} 
        className="w-full"
      >
        <div style={{ width: imageDimensions.width, height: imageDimensions.height }}>
          <LazyLoadImage
            src={imagem2}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: imageDimensions.width + 100, height: imageDimensions.height }}>
          <LazyLoadImage
            src={imagem5}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: imageDimensions.width, height: imageDimensions.height }}>
          <LazyLoadImage
            src={imagem3}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: imageDimensions.width + 100, height: imageDimensions.height }}>
          <LazyLoadImage
            src={imagem4}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: imageDimensions.width - 100, height: imageDimensions.height }}>
          <LazyLoadImage
            src={imagem1}
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>
      </LandingMarquee>
    </div>
  );
}
