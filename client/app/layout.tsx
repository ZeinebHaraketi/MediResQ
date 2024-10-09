import { ReactNode } from 'react';
import ClientLayout from './ClientLayout'; // Nouveau composant client
import Footer from './common/Footer';
import './globals.css';

export const metadata = {
  title: 'MediResQ',
  description: 'Your App Description',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
