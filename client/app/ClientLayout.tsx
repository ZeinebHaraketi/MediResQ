// 'use client';

// import { usePathname } from 'next/navigation';
// import LayoutPage from './common/LayoutPage';
// import Navbar from './common/Navbar';
// import NavbarRegister from './common/NavbarRegister';

// const ClientLayout = ({ children }: { children: React.ReactNode }) => {
//   const pathname = usePathname();

//   // Vérifiez si l'utilisateur est sur la page de register
//   const isRegisterPage = pathname === '/auth/register';

//   return (
//     <>
//       {/* Affiche NavbarRegister pour la page register */}
//       {isRegisterPage ? <NavbarRegister /> : <Navbar />}
      
//       {/* N'affiche pas LayoutPage sur la page register */}
//       {!isRegisterPage && <LayoutPage />}

//       {children}
//     </>
//   );
// };

// export default ClientLayout;
'use client';

import { usePathname } from 'next/navigation';
import LayoutPage from './common/LayoutPage';
import Navbar from './common/Navbar';
import NavbarRegister from './common/NavbarRegister';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Vérifiez si l'utilisateur est sur la page de register ou de login
  const isAuthPage = pathname === '/auth/register' || pathname === '/auth/login';

  return (
    <>
      {/* Affiche NavbarRegister pour les pages register et login */}
      {isAuthPage ? <NavbarRegister /> : <Navbar />}

      {/* N'affiche pas LayoutPage sur les pages register et login */}
      {!isAuthPage && <LayoutPage /> }

      {children}
    </>
  );
};

export default ClientLayout;
