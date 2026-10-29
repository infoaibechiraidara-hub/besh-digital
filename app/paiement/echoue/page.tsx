import { NextPage } from 'next'
import Link from 'next/link'
import { XCircle, RefreshCw, Home } from 'lucide-react'

const PaiementEchouePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="mb-6">
            <XCircle className="w-20 h-20 text-red-500 mx-auto" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Paiement échoué
          </h1>
          
          <p className="text-lg text-gray-600 mb-6">
            Votre paiement n'a pas pu être processé. Veuillez réessayer ou contacter votre banque.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-left">
            <h3 className="font-medium text-yellow-900 mb-2">Possibles causes :</h3>
            <ul className="space-y-1 text-yellow-800 text-sm">
              <li>• Solde insuffisant sur votre compte</li>
              <li>• Erreur dans les informations de paiement</li>
              <li>• Provisionalisation du paiement</li>
              <li>• Refus de la banque d'émetteur</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/paiement"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Réessayer
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
            >
              Retour à l'accueil
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Besoin d'aide ? Contactez support@beshdigital.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaiementEchouePage