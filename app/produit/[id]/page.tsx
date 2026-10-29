import { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, Star, Download, Shield, RefreshCw, Check } from 'lucide-react'
import { useState } from 'react'

const ProduitPage: NextPage = ({ query }) => {
  const productId = query.id || '1'
  const [quantity, setQuantity] = useState(1)

  const product = {
    id: parseInt(productId),
    title: 'Guide Complet SEO pour débutants',
    description: `Ce guide pratique vous accompagne pas à pas pour maîtriser le référencement naturel (SEO). Apprenez à optimiser votre contenu, améliorer votre visibilité dans les moteurs de recherche et attirer du trafic qualifié vers votre site.
    
### Ce que vous allez découvrir :
- Les fondamentaux du SEO et comment il fonctionne
- Comment optimiser vos mots-clés
- Les meilleures pratiques pour le contenu
- Les outils gratuits pour suivre votre référencement
- Des études de cas concrètes
- Des templates et checklist à télécharger
  
Ce livre numérique comporte 150 pages d'instructions détaillées, des exemples concrets et des ressources téléchargeables immédiatement après paiement.`,
    shortDescription: 'Guide complet de SEO pour débutants - 150 pages + ressources',
    price: 19.99,
    currency: 'EUR',
    rating: 4.8,
    reviews: 124,
    category: 'E-books',
    fileType: 'PDF',
    fileSize: '24 MB',
    language: 'Français',
    lastUpdated: '2024-01-15',
    downloadCount: 1247,
    format: ['PDF', 'EPUB'],
    license: 'Usage personnel et commercial autorisé',
    images: [
      '/images/product-1-cover.jpg',
      '/images/product-1-preview1.jpg',
      '/images/product-1-preview2.jpg',
    ],
    features: [
      'Mise à jour régulière',
      'Ressources exclusives',
      'Format lisible sur tous les appareils',
      'Accès immédiat après achat',
      'Sauvegarde dans votre bibliothèque',
    ]
  }

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
            <li>
              <Link href="/boutique" className="hover:text-primary-600">Boutique</Link>
            </li>
            <li className="mx-2">▨</li>
            <li className="text-gray-900 font-medium">{product.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-96">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="relative h-20 w-full">
                    <Image src={img} alt={`${idx + 1}`} fill className="object-cover" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                <span className="text-sm text-gray-400 ml-2">({product.reviews} avis)</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h1>
              
              {/* Short Description */}
              <p className="text-gray-600 mb-4">{product.shortDescription}</p>

              {/* Details */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
                <span><strong>Catégorie :</strong> {product.category}</span>
                <span><strong>Langue :</strong> {product.language}</span>
                <span><strong>Type :</strong> {product.fileType}</span>
                <span><strong>Taille :</strong> {product.fileSize}</span>
              </div>

              {/* Price and Quantity */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-3xl font-bold text-primary-600">
                  {product.currency} {product.price.toFixed(2)}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center text-lg font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Ajouter au panier
                </button>
                <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
                  <Download className="w-5 h-5 mr-2" />
                  Acheter maintenant
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Livraison instantanée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Paiement sécurisé</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-green-500" />
                    <span>30 jours pour essayer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-green-500" />
                    <span>{product.downloadCount}+ téléchargements</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Full Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Description détaillée</h2>
              <div className="prose prose-sm max-w-none text-gray-600" dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, '<br>') }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProduitPage

export async function getServerSideProps({ params }) {
  return {
    props: {
      query: {
        id: params?.id || '1',
      },
    },
  }
}