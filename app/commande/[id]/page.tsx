import { NextPage } from 'next'
import { Download, CheckCircle, Clock, Shield, RefreshCw } from 'lucide-react'

const CommandePage: NextPage = ({ query }) => {
  const orderId = query?.id || 'CMD-001'
  
  const order = {
    id: orderId,
    status: 'paid',
    total: 54.98,
    currency: 'EUR',
    items: [
      { id: 1, title: 'Guide SEO pour débutants', price: 19.99, quantity: 1, downloadUrl: '/api/download/token1' },
      { id: 2, title: 'Template Business Plan', price: 14.99, quantity: 2, downloadUrl: '/api/download/token2' },
      { id: 3, title: 'Formation Marketing', price: 9.99, quantity: 1, downloadUrl: '/api/download/token3' },
    ]
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Commande #{orderId}</h1>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-1" />
              <span className="text-sm text-gray-600">Paiement confirmé</span>
            </div>
          </div>

          {/* Order Items */}
          <div className="divide-y divide-gray-200 mb-6">
            {order.items.map((item) => (
              <div key={item.id} className="py-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <div className="text-sm text-gray-500">
                    Quantité: {item.quantity} × {item.price} €
                  </div>
                </div>
                <a
                  href={item.downloadUrl}
                  className="inline-flex items-center px-3 py-1 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700 transition"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Télécharger
                </a>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border-t pt-4">
            <div className="flex justify-between py-2">
              <span className="text-gray-600">Sous-total</span>
              <span>{order.items.reduce((sum, i) => sum + i.price * i.quantity, 0)} €</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-600">TVA</span>
              <span>0 €</span>
            </div>
            <div className="flex justify-between text-lg font-bold pt-2 border-t">
              <span>Total</span>
              <span>{order.total} {order.currency}</span>
            </div>
          </div>

          {/* Download Information */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Informations de téléchargement</h3>
            <div className="flex items-center text-blue-800 text-sm">
              <Clock className="w-4 h-4 mr-1" />
              <span>Les liens de téléchargement restent actifs 7 jours</span>
            </div>
            <div className="flex items-center text-blue-800 text-sm mt-1">
              <Shield className="w-4 h-4 mr-1" />
              <span>Sécurité renforcée - Authentification requise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommandePage