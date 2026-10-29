import { NextPage } from 'next'
import Link from 'next/link'
import { useParallax } from '../hooks/useParallax'

const AProposPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À propos de BESH DIGITAL</h1>
          <p className="text-xl text-primary-100">
            Notre mission : démocratiser l'accès aux ressources numériques de qualité
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Chez BESH DIGITAL, nous croyons que les ressources éducatives, professionnelles et créatives 
                devraient être accessibles à tous. Nous créons une plateforme où vous pouvez découvrir, 
                acheter et télécharger des produits numériques de haute qualité.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2 mt-0.5">✓</span>
                  <span className="text-gray-600">Produits numériques professionnels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2 mt-0.5">✓</span>
                  <span className="text-gray-600">Tarifs compétitifs pour tous les budgets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2 mt-0.5">✓</span>
                  <span className="text-gray-600">Téléchargement instantané</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2 mt-0.5">✓</span>
                  <span className="text-gray-600">Support client disponible 24/7</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-lg shadow-lg overflow-hidden">
                <img src="/images/about-1.jpg" alt="Équipe BESH DIGITAL" className="w-full h-96 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Valeurs</h2>
            <p className="text-lg text-gray-600">Les piliers de notre engagement</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Nous constamment à l'avant-garde de la technologie</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sécurité</h3>
              <p className="text-gray-600">Protection totale de vos données et fichiers</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accessibilité</h3>
              <p className="text-gray-600">Des produits pour tous les utilisateurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-600">Les personnes qui font tourner BESH DIGITAL</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-600">👨‍💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Agent IA Principal</h3>
              <p className="text-gray-600">Architecture & Développement</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AProposPage