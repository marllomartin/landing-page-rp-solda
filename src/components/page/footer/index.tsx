import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-8">
      {/* Red horizontal line that fades out */}
      <hr style={{
        borderWidth: '2px',
        borderImage: 'linear-gradient(to right, #4c4c4c 0%, #f01b26 50%, #4c4c4c 100%) 1'
      }} />


      <div className="flex flex-col items-center justify-center mt-4">
        {/* Company Name */}
        <p className="text-lg font-bold">RP Solda</p>

        {/* Copyright Information with Dynamic Year */}
        <p className="text-sm mt-2">
          &copy; {currentYear} RP Solda. Todos os direitos reservados.
        </p>

        {/* Developer Information */}
        <p className="text-xs mt-2">
          Desenvolvido por{' '}
          <a href="https://www.linkedin.com/in/marllomartins/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Marllon Mendonça
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
