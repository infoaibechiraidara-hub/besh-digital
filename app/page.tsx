import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart, Download, Award, Shield, Clock } from 'lucide-react'

const HomePage: NextPage = () => {
  const categories = [
    { name: 'E-books', icon: '📚', slug: 'ebooks' },
    { name: 'Formations', icon: '🎓', slug: 'formations' },
    { name: 'Templates', icon: '📊', slug: 'templates' },
    { name: 'Modèles Excel', icon: '📈', slug: 'modeles-excel' },
    { name: 'Kits Marketing', icon: '🎯', slug: 'kits-marketing' },
    { name: 'Ressources CRéatives', icon: '🎨', slug: 'ressources' },
  ]

  const featuredProducts = [
    {
      id: 1,
      title: 'Guide Complet SEO pour débutants',
      description: 'Maîtrisez l\'optimisation pour les moteurs de recherche',
      price: '19.99 €',
      image: '/placeholder-product.png'
    },
    {
      id: 2,
      title: 'Pack Business Plan 2024',
      description: 'Templates et modèles pour votre entreprise',
      price: '29.99 €',
      image: '/placeholder-product.png'
    },
    {
      id: 3,
      title: 'Formation Social Media Mastery',
      description: 'Devenez expert en réseaux sociaux',
      price: '49.99 €',
      image: '/placeholder-product.png'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transformez vos idées en produits numériques rentables
            </h1>
            <p className="text-xl text-primary-100 mb-10 max-w-3xl mx-auto">
              Découvrez notre collection de produits numériques professionnels pour booster votre activité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/boutique"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
              >
                Découvrir la boutique
              </Link>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transition"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-white" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Parcourir par catégorie</h2>
            <p className="text-lg text-gray-600">Des produits numériques pour tous vos besoins</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categorie/${category.slug}`}
                className="bg-white rounded-lg p-4 text-center hover:shadow-md transition"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <span className="font-medium text-gray-700">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Produits en vedette</h2>
            <p className="text-lg text-gray-600">Nos meilleures ventes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary-600">{product.price}</span>
                    <Link
                      href={`/produit/${product.id}`}
                      className="p-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Award className="w-12 h-12 mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Qualité Garantie</h3>
              <p className="text-sm text-gray-600">Des produits professionnels et testés</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Shield className="w-12 h-12 mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Paiement Sécurisé</h3>
              <p className="text-sm text-gray-600">Vos données protégées</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Download className="w-12 h-12 mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Téléchargement Instantané</h3>
              <p className="text-sm text-gray-600">Accès immédiat après paiement</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Clock className="w-12 h-12 mx-auto text-primary-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Support 24/7</h3>
              <p className="text-sm text-gray-600">Assistance disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à commencer ?</h2>
          <p className="text-xl text-primary-100 mb-8">
            Rejoignez des milliers d'utilisateurs satisfaits
          </p>
          <Link
            href="/inscription"
            className="inline-block px-10 py-4 bg-white text-primary-600 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition"
          >
            Créer un compte
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage