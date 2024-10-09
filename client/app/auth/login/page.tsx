'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Importer des icônes
import loginImage from '@/app/src/public/images/login.jpg'; // Importer l'image de fond pour la connexion
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

// Validation schema with Zod
const schema = z.object({
    email: z.string().email("Veuillez entrer un e-mail valide"),
    password: z.string().min(6, "Le mot de passe doit comporter au moins 6 caractères"),
});

type FormData = z.infer<typeof schema>;

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false); // Gérer l'affichage du mot de passe
    const [apiError, setApiError] = useState<string | null>(null); // Gérer les erreurs de l'API
    const [isLoading, setIsLoading] = useState<boolean>(false); // Gérer l'état de chargement
    const [isSuccess, setIsSuccess] = useState<boolean>(false); // Gérer le succès de la connexion
    const router = useRouter(); // Initialiser le router pour la redirection

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
        setIsLoading(true);
        setApiError(null); // Réinitialiser l'erreur avant chaque requête

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Une erreur est survenue');
            }

            const result = await response.json();
            const token = result.token; // Supposons que le token soit dans la réponse API

            // Sauvegarder le token dans le localStorage
            localStorage.setItem('LoginToken', token);

            console.log('Token sauvegardé dans localStorage:', token);
            setIsSuccess(true); // Succès de la connexion

            router.push('/'); // Redirige vers la page d'accueil

        } catch (error: any) {
            setApiError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Section gauche avec l'image */}
            <div
                className="flex-1 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${loginImage.src})`, // Utilisation de l'image importée
                }}
            />

            {/* Section droite avec le formulaire */}
            <div className="flex-1 flex items-center justify-center bg-gray-100 p-4">
                <div className="bg-white p-8 rounded shadow-lg w-full max-w-lg">
                    <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Se connecter</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                                    {...register('email', { required: 'L\'e-mail est requis' })}
                                    className="pl-10"
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
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Connexion en cours...' : "Se connecter"}
                        </Button>

                        {/* Affichage des erreurs API */}
                        {apiError && <p className="text-red-500 text-sm mt-4 text-center">{apiError}</p>}

                        {/* Affichage du succès */}
                        {isSuccess && <p className="text-green-500 text-sm mt-4 text-center">Connexion réussie !</p>}
                    </form>

                    {/* Forgot Password and Sign Up Links */}
                    <div className="mt-6 text-center">
                        <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Mot de passe oublié ?
                        </Link>
                    </div>

                    <p className="mt-4 text-center text-sm text-gray-600">
                        Vous n'avez pas de compte ?&nbsp;
                        <Link href="/auth/register" className="text-blue-600 hover:underline">
                            Créer un compte ici
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
