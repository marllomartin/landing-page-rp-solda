import { LandingFeatureList } from '@/components/landing/feature/LandingFeatureList';
import { SiEquinixmetal } from "react-icons/si";
import { LuWrench } from "react-icons/lu";
import { GiHighGrass } from "react-icons/gi";
import { MdGrass } from "react-icons/md";
import { MdFence } from "react-icons/md";
import { TbFence } from "react-icons/tb";
import { PiMedal } from "react-icons/pi";
import { RxRulerSquare } from "react-icons/rx";


export default function Servicos() {
  const featureItems = [
    {
      title: 'Montagem de Estruturas Metálicas',
      description:
        'Construção e instalação de estruturas duráveis e personalizadas para diversas necessidades.',
      icon: <SiEquinixmetal size={40} />,
    },
    {
      title: 'Manutenção de Estruturas Metálicas',
      description:
        'Serviços de manutenção preventiva e corretiva para garantir a segurança e a durabilidade das estruturas.',
      icon: <LuWrench size={40} />,
    },
    {
      title: 'Instalação de Alambrados',
      description:
        'Alambrados de alta qualidade para proteção e delimitação de áreas residenciais, comerciais e industriais.',
      icon: <MdFence size={40} />,
    },
    {
      title: 'Instalação de Telas de Proteção e Cercamento',
      description:
        'Telas adaptadas para segurança e estética, em diferentes materiais e tamanhos.',
      icon: <TbFence size={40} />,
    },
    {
      title: 'Aplicação de Grama Sintética Esportiva',
      description:
        'Soluções ideais para campos de futebol, quadras e áreas de recreação com grama de alta durabilidade.',
      icon: <MdGrass size={40} />,
    },
    {
      title: 'Instalação de Grama Sintética Decorativa',
      description:
        'Grama artificial para paisagismo e decoração de ambientes residenciais e comerciais.',
      icon: <GiHighGrass size={40} />,
    },
    {
      title: 'Consultoria e Projeto Sob Medida',
      description:
        'Assessoria completa para entender as necessidades e desenvolver o melhor projeto para cada cliente.',
      icon: <RxRulerSquare size={40} />,
    },
    {
      title: 'Materiais de Alta Qualidade',
      description:
        'Uso de materiais resistentes e duráveis, garantindo um resultado final de longa duração e baixo custo de manutenção.',
      icon: <PiMedal size={40} />,
    },
  ];

  return (
    <div id='services'>
      <LandingFeatureList
        title={'Nossos serviços especializados'}
        description={
          'Soluções em estruturas metálicas e acabamentos para seu projeto'
        }
        featureItems={featureItems}
      />
    </div>
  );
}
