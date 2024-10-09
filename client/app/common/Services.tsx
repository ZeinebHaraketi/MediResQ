import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaAmbulance, FaHeartbeat, FaStethoscope, FaUserMd, FaFileMedical } from 'react-icons/fa'; // Librairie d'icônes

const Services = () => {
  const services = [
    {
      name: "Consultations médicales d'urgence",
      description: "Service de haute qualité et disponibilité 24/7.",
      icon: <FaStethoscope size={40} />
    },
    {
      name: "Transport en ambulance",
      description: "Service rapide et sécurisé pour les urgences.",
      icon: <FaAmbulance size={40} />
    },
    {
      name: "Soins intensifs sur place",
      description: "Soins immédiats pour les cas critiques.",
      icon: <FaHeartbeat size={40} />
    },
    {
      name: "Téléconsultations médicales",
      description: "Accès rapide aux consultations à distance.",
      icon: <FaUserMd size={40} />
    },
    {
      name: "Suivi des dossiers médicaux électroniques",
      description: "Gestion complète et sécurisée des dossiers.",
      icon: <FaFileMedical size={40} />
    }
  ];

  return (
    <div>
    {/* Titre centré */}
    <h1 className="text-3xl font-bold text-center mb-10 text-cyan-800">Nos Services Médicaux</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {services.map((service, index) => (
        <Card 
          key={index} 
          className="shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:bg-white hover:text-black"
        >
          <CardHeader className="flex items-center space-x-4 p-6">
            {service.icon}
            <CardTitle className="text-lg font-semibold">{service.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-sm text-gray-700">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default Services;
