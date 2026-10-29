import { NextPage } from 'next'
import Link from 'next/link'
import { X, ShoppingCart, ArrowLeft, ChevronRight } from 'lucide-react'

const PanierPage: NextPage = () => {
  const cartItems = [
    {
      id: 1,
      product: {
        title: 'Guide Complet SEO pour débutants',
        image: '/images/product-1-cover.jpg',
      },
      price: 19.99,
      quantity: 1,
      currency: 'EUR',
    },
    {
      id: 2,
      product: {
        title: 'Template Business Plan 2024',
        image: '/images/template-business.jpg',
      },
      price: 14.99,
      quantity: 2,
      currency: 'EUR',
    },
  ]

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.07
  const total = subtotal + tax

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="bg-white rounded-lg shadow-md p-12">
            <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Votre panier est vide</h2>
            <p className="text-gray-600 mb-6">Découvrez nos produits numériques pour commencer</p>
            <Link
              href="/boutique"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition"
            >
              Contacter la boutique
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Votre Panier</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm divide-y">
              {cartItems.map((item, index) => (
                <div key={item.id} className="flex p-4">
                  <div className="relative w-24 h-24 bg-gray-200 rounded-lg mr-4 flex-shrink-0">
                    <img src={item.product.image} alt={item.product.title} className="object-cover rounded" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-900">{item.product.title}</h3>
                    <div className="text-sm text-gray-500">
                      {item.currency} {item.price.toFixed(2)} / unité
                    </div>
                    <div className="flex items-center mt-2">
                      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-sm">
                        −
                      </button>
                      <span className="mx-2">{item.quantity}</span>
                      <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-full text-sm">
                        +
                      </button>
                      <button className="ml-4 text-gray-400 hover:text-red-500">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4">
              <Link href="/boutique" className="flex items-center text-primary-600 hover:text-primary-700">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Continuer les achats
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Résumé de la commande</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span>{item.currency} {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Taxe (TVA)</span>
                  <span>{item.currency} {tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-bold text-primary-600">{item.currency} {total.toFixed(2)}</span>
                </div>
              </div>

              <Link
                href="/paiement"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
              >
                Passer à la caisse
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

let item = { currency: 'EUR' }

export default PanierPage