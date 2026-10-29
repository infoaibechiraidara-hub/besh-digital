import { NextPage } from 'next'
import Link from 'next/link'
import { CheckCircle, Download, Home, Package } from 'lucide-react'

const PaiementReussiPage: NextPage = ({ searchParams }: { searchParams: { order_id?: string } }) => {
  const orderId = searchParams.order_id || 'CMD-001'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Paiement réussi !
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Merci pour votre achat. Votre commande <span className="font-mono bg-gray-100 px-2 py-1 rounded">{orderId}</span> est maintenant confirmée.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-medium text-green-900 mb-2">Accédez à vos produits :</h3>
            <ul className="space-y-2 text-green-800 text-sm">
              <li>✓ Vos fichiers sont disponibles dans votre <strong>Bibliothèque</strong></li>
              <li>✓ Vous recevrez un email de confirmation avec les liens de téléchargement</li>
              <li>✓ Les liens restent actifs 7 jours</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/espace-client/bibliotheque"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
            >
              <Download className="w-5 h-5 mr-2" />
              Accéder à ma bibliothèque
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium">
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaiementReussiPage