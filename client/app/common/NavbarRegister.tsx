import Link from 'next/link';

const NavbarRegister = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo ou Nom de l'application */}
        <div className="text-white font-bold text-2xl">
          <Link href="/">
            MediResQ
          </Link>
        </div>

        {/* Liens de navigation */}
        <div className="flex space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Accueil
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            À propos
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contactez-nous
          </Link>
        </div>

        {/* Boutons d'inscription et connexion */}
        <div className="flex space-x-4">
          <Link href="/auth/login">
            <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300">
              Connexion
            </button>
          </Link>
          <Link href="/auth/register">
            <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition duration-300">
              S'inscrire
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarRegister;
