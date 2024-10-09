"use client";  // Ensure this is present to mark it as a Client Component

import Image from 'next/image';
import hopitalImage from '@/app/src/public/images/hopital.jpg'; // chemin relatif vers l'image

const LayoutPage = () => {
    return (
        <div className="relative w-full h-[82vh]">
            {/* Utiliser next/image pour l'image de fond */}
          
            <Image 
                src={hopitalImage} 
                alt="Background Image" 
                fill   // Remplace layout="fill"
                style={{ objectFit: 'cover' }}  // Utilisation de style pour objectFit
                quality={100}
            />


            {/* Overlay pour donner un effet sombre à l'image */}
            <div className="absolute top-0 left-0 bg-black bg-opacity-50 h-full w-full">
                <header className="p-4 text-center text-white text-4xl font-semibold tracking-wider uppercase">
                    {/* Le titre d'accueil est plus grand et plus espacé */}
                    Bienvenue chez <span className="text-blue-400">MediResq</span>
                </header>

                <main className="p-8 text-white text-center">
                    <h1 className="text-5xl md:text-6xl font-bold tracking-wide leading-tight shadow-lg">
                        Services Médicaux d'Urgence
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 tracking-wide font-light">
                        Nous offrons des soins immédiats lorsque vous en avez le plus besoin.
                    </p>
                </main>

               
            </div>


        </div>
    );
};

export default LayoutPage;
