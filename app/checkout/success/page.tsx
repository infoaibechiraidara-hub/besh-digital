import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle, Download, ArrowLeft } from 'lucide-react';

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');
  const productTitle = searchParams.get('product');

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Paiement réussi !
        </h1>
        
        <p className="text-gray-600 mb-6">
          Merci pour votre achat{productTitle && ` : ${productTitle}`}.
        </p>

        {orderId && (
          <div className="bg-gray-50 p-4 rounded-lg mb-6 text-left">
            <p className="text-sm text-gray-600">Numéro de commande</p>
            <p className="font-mono text-gray-900">{orderId}</p>
          </div>
        )}

        <div className="space-y-3">
          <button className="w-full py-3 px-4 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition">
            Télécharger le produit
          </button>
          
          <Link
            href="/"
            className="flex items-center justify-center py-3 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la boutique
          </Link>
        </div>
      </div>
    </div>
  );
}