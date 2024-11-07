import { useState } from "react";
import { Link, To, useNavigate } from "react-router-dom";


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProprietario] = useState(true); // Defina como true ou false com base no status do usuário
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLinkClick = (path: To) => {
    navigate(path);
    closeMenu(); // Fecha o menu ao clicar em um link
  };

  return (
    <>
      <div className='bg-custom-dark-blue text-white p-4 flex justify-between items-center font-bold'>
        <div className="text-lg ml-10">
          <div className="text-2xl">Sport Maps</div>
        </div>

        <div className='hidden md:flex gap-5 justify-center flex-grow'>
          <div className='hover:underline'>Início</div>
          <div className='hover:underline'>Contato</div>
          {isProprietario && (
            <Link to='/' className='hover:underline'>Perfil do Proprietário</Link>
          )}
        </div>

        <div className='hidden md:flex gap-4'>
          <button className='hover:underline bg-white text-black rounded-full w-28 p-2'>
            <div>Login</div>
          </button>
          <button className='hover:underline bg-white text-black rounded-full w-28 p-2'>
            <div>Cadastre-se</div>
          </button>
        </div>

        <button className='md:hidden text-white text-4xl' onClick={toggleMenu}>
          &#9776; {/* Código para o ícone do botão hamburger */}
        </button>
      </div>

      {isMenuOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 z-50' onClick={closeMenu}>
          <div className='bg-custom-dark-blue text-white w-1/2 h-full absolute right-0 p-4' onClick={e => e.stopPropagation()}>
            <div className='flex flex-col font-bold'>
              <div className='py-2 hover:underline' onClick={() => handleLinkClick('/home')}>Início</div>
              <div className='py-2 hover:underline' onClick={() => handleLinkClick('/contato')}>Contato</div>
              {isProprietario && (
                <div className='py-2 hover:underline' onClick={() => handleLinkClick('/proprietario')}>Perfil do Proprietário</div>
              )}
              <div className='py-2 hover:underline' onClick={() => handleLinkClick('')}>Login</div>
              <div className='py-2 hover:underline' onClick={() => handleLinkClick('')}>Cadastre-se</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
