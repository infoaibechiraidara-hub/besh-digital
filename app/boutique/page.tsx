import { NextPage, useState } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Filter, Grid, List, Star, Search } from 'lucide-react'

const BoutiquePage: NextPage = () => {
  const [sortBy, setSortBy] = useState('popular')
  const [filterBy, setFilterBy] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const products = [
    {
      id: 1,
      title: 'Guide Complet SEO pour débutants',
      description: 'Tous les secrets du référencement naturel pour faire décoller votre site web',
      price: 19.99,
      currency: 'EUR',
      rating: 4.8,
      reviews: 124,
      category: 'E-books',
      image: '/images/ebook-seo.jpg'
    },
    {
      id: 2,
      title: 'Template Business Plan 2024',
      description: 'Un plan d'affaires professionnel prêt à l'emploi',
      price: 14.99,
      currency: 'EUR',
      rating: 4.9,
      reviews: 87,
      category: 'Templates',
      image: '/images/template-business.jpg'
    },
    {
      id: 3,
      title: 'Formation Marketing Digital Masterclass',
      description: 'Apprenez à créer des campagnes marketing efficaces',
      price: 49.99,
      currency: 'EUR',
      rating: 4.7,
      reviews: 56,
      category: 'Formations',
      image: '/images/formations.jpg'
    },
    {
      id: 4,
      title: 'Pack d'outils Excel pour entrepreneurs',
      description: '15 templates Excel pour gérer votre entreprise',
      price: 24.99,
      currency: 'EUR',
      rating: 4.6,
      reviews: 92,
      category: 'Modèles Excel',
      image: '/images/excel-pack.jpg'
    },
    {
      id: 5,
      title: 'Guide de démarrage en freelancing',
      description: 'Comment devenir freelance et gagner plus',
      price: 12.99,
      currency: 'EUR',
      rating: 4.8,
      reviews: 78,
      category: 'E-books',
      image: '/images/freelance-guide.jpg'
    },
    {
      id: 6,
      title: 'Kit d'emails marketing conversionnels',
      description: 'Des templates d'e-mails pour booster vos ventes',
      price: 19.99,
      currency: 'EUR',
      rating: 4.5,
      reviews: 43,
      category: 'Kits Marketing',
      image: '/images/email-kit.jpg'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
          <ol className="inline-flex items-center">
            <li>
              <Link href="/" className="hover:text-primary-600">Accueil</Link>
            </li>
            <li className="mx-2">▨</li>
            <li className="text-gray-900 font-medium">Boutique</li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Nos Produits</h1>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Toutes les catégories</option>
              <option value="ebooks">E-books</option>
              <option value="formations">Formations</option>
              <option value="templates">Templates</option>
              <option value="excel">Modèles Excel</option>
              <option value="marketing">Kits Marketing</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Grid className="w-5 h-5 text-gray-500" />
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-gray-100'}`}
              >
                Grille
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-gray-100'}`}
              >
                Liste
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="popular">Popularité</option>
              <option value="price-low">Prix croissant</option>
              <option value="price-high">Prix décroissant</option>
              <option value="rating">Note</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'grid'
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1'
        }`}>
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs bg-primary-100 text-primary-800 px-2 py-1 rounded">
                    {product.category}
                  </span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-400 ml-1">({product.reviews})</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-primary-600">
                    {product.currency} {product.price.toFixed(2)}
                  </span>
                  <Link
                    href={`/produit/${product.id}`}
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition">
            Charger plus
          </button>
        </div>
      </div>
    </div>
  )
}

export default BoutiquePage