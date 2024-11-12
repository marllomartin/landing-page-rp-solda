import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingProductFeatureKeyPoints } from '@/components/landing/LandingProductFeatureKeyPoints';
import { FaInstagram } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import imagem6 from '../../../../assets/images/imagem-6.jpg';

export default function Contact() {

  return (
    <div>
      <LandingProductFeature
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold leading-tight" id='contact'>
              Fale conosco
            </h2>
          </>
        }
        descriptionComponent={
          <>
            <p className="text-xl text-gray-800">
              Vamos juntos encontrar a melhor solução para o seu projeto.
            </p>
            <div>
              <LandingProductFeatureKeyPoints
                variant="secondary"
                keyPoints={[]}
                className="mt-4"
              />
            </div>
            <div className="flex items-center justify-between w-full mt-4 text-xl">
              {/* Telefone */}
              <div className="flex items-center space-x-2">
                <MdPhone className="text-rpRed" />
                <span>
                  21 99770-3954
                </span>
              </div>
              {/* Instagram */}
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-rpRed" />
                <a
                  href="https://www.instagram.com/rpsolda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rpRed hover:underline"
                >
                  @rpsolda
                </a>
              </div>
            </div>
          </>
        }
        imageSrc={imagem6}
        imageAlt="Contato"
        imagePosition="left"
        imagePerspective="none"
        zoomOnHover={false}
        withBackground
        variant="secondary"
      />
    </div>
  );
}
