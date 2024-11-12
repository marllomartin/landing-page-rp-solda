import { LandingMarquee } from '@/components/landing/LandingMarquee';
import { LandingPrimaryTextCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Imagens() {
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

      <LandingMarquee animationDurationInSeconds={200}>
        <div style={{ width: 300, height: 400 }}>
          <LazyLoadImage
            src="/src/assets/images/imagem-1.jpg"
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: 400, height: 400 }}>
          <LazyLoadImage
            src="/src/assets/images/imagem-2.jpg"
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: 400, height: 400 }}>
          <LazyLoadImage
            src="/src/assets/images/imagem-3.jpg"
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: 500, height: 400 }}>
          <LazyLoadImage
            src="/src/assets/images/imagem-4.jpg"
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

        <div style={{ width: 500, height: 400 }}>
          <LazyLoadImage
            src="/src/assets/images/imagem-5.jpg"
            alt="Screenshot of the product"
            className="w-full h-full object-cover mx-4"
          />
        </div>

      </LandingMarquee>
    </div>
  );
}
