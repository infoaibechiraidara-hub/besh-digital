import { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { Minus, Plus, ShoppingCart, MapPin, CreditCard, Truck, Shield, ArrowLeft } from 'lucide-react'

const PaiementPage: NextPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cinetpay')
  const [step, setStep] = useState(1)

  const order = {
    items: [
      { id: 1, title: 'Guide SEO pour débutants', price: 19.99, quantity: 1 },
      { id: 2, title: 'Template Business Plan', price: 14.99, quantity: 2 },
    ],
    subtotal: 49.97,
    tax: 3.50,
    total: 53.47,
    currency: 'EUR',
  }

  const paymentMethods = [
    { id: 'cinetpay', name: 'CinetPay', logo: '💳', countries: ['CI', 'SN', 'ML', 'BF'] },
    { id: 'wave', name: 'Wave Money', logo: '📱', countries: ['CI'] },
    { id: 'mobile-money', name: 'Mobile Money', logo: '📱', countries: ['CI', 'SN', 'ML', 'BF'] },
    { id: 'card', name: 'Carte bancaire', logo: '💳', countries: ['International'] },
  ]

  const handlePay = () => {
    // Redirect to payment provider
    window.location.href = `/api/payment?method=${paymentMethod}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Passer à la caisse</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Résumé de la commande</h2>
            
            <div className="divide-y divide-gray-200 mb-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex py-3">
                  <div className="flex-grow">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                  </div>
                  <span className="font-medium text-gray-900">{item.price * item.quantity} €</span>
                </div>
              ))}
            </div>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Sous-total</span>
                <span>{order.subtotal.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Taxe</span>
                <span>{order.tax.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{order.total.toFixed(2)} €</span>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Méthode de paiement</h2>

            <div className="space-y-3 mb-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition ${
                    paymentMethod === method.id
                      ? 'border-primary-600 bg-primary-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-2xl mr-3">{method.logo}</div>
                  <div>
                    <div className="font-medium text-gray-900">{method.name}</div>
                    <div className="text-sm text-gray-500">
                      Disponible dans: {method.countries.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handlePay}
              className="w-full py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition mb-4"
            >
              Payer {order.currency} {order.total.toFixed(2)}
            </button>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Paiement sécurisé</span>
              <Shield className="w-4 h-4" />
              <span>Garantie satisfait ou remboursé</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/panier" className="flex items-center text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Retour au panier
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaiementPage