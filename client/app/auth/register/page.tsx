'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaLock, FaEyeSlash, FaEye } from 'react-icons/fa'; // Importer des icônes
import registerImage from '@/app/src/public/images/register.jpg'; // chemin relatif vers l'image
import { useState } from 'react';


const schema = z.object({
    username: z.string().min(1, "Le nom est requis").max(50, "Le nom ne doit pas dépasser 50 caractères"),
    email: z.string().email("Veuillez entrer un e-mail valide"),
    password: z.string().min(6, "Le mot de passe doit comporter au moins 6 caractères"),
   
});

type FormData = z.infer<typeof schema>;

const RegisterPage = () => {
    const [apiError, setApiError] = useState<string | null>(null); // Pour gérer les erreurs de l'API
    const [isLoading, setIsLoading] = useState<boolean>(false); // Pour gérer l'état de chargement
    const [isSuccess, setIsSuccess] = useState<boolean>(false); // Pour gérer le succès de l'inscription
    const [showPassword, setShowPassword] = useState(false); // Gérer l'affichage du mot de passe


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState); // Alterner entre true/false
    };


    const onSubmit = async (data: FormData) => {
        setIsLoading(true); // Début du chargement
        setApiError(null); // Réinitialiser l'erreur avant l'envoi

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.username,
                    email: data.email,
                    password: data.password,
                    phone: '123456789', // Ajouter un champ fictif de téléphone si nécessaire
                    role: 'patient', // Spécifier le rôle ou le demander via le formulaire
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Une erreur est survenue');
            }

            const result = await response.json();
            const token = result.token; // Supposons que le token soit dans la réponse API

            // Sauvegarder le token dans le localStorage
            localStorage.setItem('RegisterToken', token);

            console.log('Token sauvegardé dans localStorage:', token);
            setIsSuccess(true); // Succès de l'inscription

        } catch (error: any) {
            setApiError(error.message);
        } finally {
            setIsLoading(false); // Fin du chargement
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Section gauche avec l'image */}
            <div
                className="flex-1 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${registerImage.src})`, // Utilisation de l'image importée
                }}
            />

            {/* Section droite avec le formulaire */}
            <div className="flex-1 flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
                    <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Créer un compte</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Username Field */}
                        <div className="relative">
                            <Label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Nom d'utilisateur
                            </Label>
                            <div className="relative mt-1">
                            <FaUser className="absolute left-3 top-3 text-gray-400" />
                            <Input
                                    type="text"
                                    id="username"
                                    placeholder="Votre nom"
                                    {...register('username')}
                                    className="pl-10 text-black"
                                />
                            </div>
                            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                E-mail
                            </Label>
                            <div className="relative mt-1">
                            <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                            <Input
                                    type="email"
                                    id="email"
                                    placeholder="Votre e-mail"
                                    {...register('email')}
                                    className="pl-10 text-black"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mot de passe
                            </Label>
                            <div className="relative mt-1">
                                <FaLock className="absolute left-3 top-3 text-gray-400" />
                                <Input
                                    type={showPassword ? "text" : "password"} // Bascule entre text et password
                                    id="password"
                                    placeholder="Choisissez un mot de passe"
                                    {...register('password')}
                                    className="pl-10 pr-10 text-black"
                                />
                                <div className="absolute right-3 top-3 cursor-pointer text-gray-400" onClick={togglePasswordVisibility}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        {/* Submit Button */}
                        {/* <Button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                        >
                            S'inscrire
                        </Button> */}

                        <Button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                            disabled={isLoading} // Désactiver le bouton lors du chargement
                        >
                            {isLoading ? 'Inscription en cours...' : "S'inscrire"}
                        </Button>

                        {/* Affichage des erreurs API */}
                        {apiError && <p className="text-red-500 text-sm mt-4 text-center">{apiError}</p>}
                        
                        {/* Affichage du succès */}
                        {isSuccess && <p className="text-green-500 text-sm mt-4 text-center">Inscription réussie !</p>}
                    </form>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Vous avez déjà un compte&nbsp;?&nbsp;
                        <Link href="/auth/login" className="text-blue-600 hover:underline">
                            Connectez-vous ici
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
