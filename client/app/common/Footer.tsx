"use client";  // Ensure this is present to mark it as a Client Component

const Footer = () => {
    return (
        <footer className="bg-blue-600 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-lg font-semibold">
                    © 2024 <span className="text-blue-300">MediResq</span> - Tous droits réservés
                </p>
                <p className="mt-2 text-sm">
                    <a href="/mentions-legales" className="hover:underline">Mentions légales</a> | 
                    <a href="/politique-de-confidentialite" className="hover:underline ml-2">Politique de confidentialité</a>
                </p>
                <p className="mt-2 text-sm">
                    Contactez-nous : <a href="mailto:contact@mediresq.com" className="hover:underline text-blue-300">contact@mediresq.com</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
