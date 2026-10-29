import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ShoppingCart, Wallet, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get('product');
  const backToShop = searchParams.get('back');

  // Produits factices pour la démonstration
  const products: { [key: string]: { title: string; price: number; category: string } } = {
    '1': { title: 'Guide Comptabilité pour PME', price: 5000, category: 'e-book' },
    '2': { title: 'Logiciel Gestion de Stock', price: 15000, category: 'logiciel' },
  };

  const product = products[productId || ''];

  const handleCinetPay = async () => {
    if (!product) return;
    
    const response = await fetch('/api/payments/cinetpay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId,
        amount: product.price,
        currency: 'XOF',
        customerName: 'Client Test',
        customerEmail: 'test@example.com',
      }),
    });
    
    const data = await response.json();
    if (data.success && data.data.paymentUrl) {
      window.location.href = data.data.paymentUrl;
    }
  };

  const handlePayPal = async () => {
    if (!product) return;
    
    const response = await fetch('/api/payments/paypal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        productId,
        amount: product.price / 600, // Conversion approximative XOF -> USD
        currency: 'USD',
        customerName: 'Client Test',
        customerEmail: 'test@example.com',
      }),
    });
    
    const data = await response.json();
    if (data.success && data.data.approvalUrl) {
      window.location.href = data.data.approvalUrl;
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Produit non trouvé</h2>
          <Link href="/" className="text-primary-600 hover:underline">
            Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Info */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>
            
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-sm text-gray-600 mb-2">Catégorie</div>
              <div className="font-medium text-gray-900">{product.category}</div>
            </div>

            <div className="mb-6">
              <div className="text-sm text-gray-600 mb-2">Prix</div>
              <div className="text-3xl font-bold text-primary-600">
                {product.price.toLocaleString()} FCFA
              </div>
            </div>

            <button
              onClick={() => router.push(backToUrl || '/')}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600"
            >
              <ShoppingCart className="w-4 h-4" />
              Continuer mes achats
            </button>
          </div>

          {/* Payment Options */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Méthode de paiement
            </h2>

            <div className="space-y-4">
              {/* CinetPay Options */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Mobile Money (Afrique)</h3>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={handleCinetPay}
                    className="py-3 px-4 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 transition"
                  >
                    Orange Money
                  </button>
                  <button
                    onClick={handleCinetPay}
                    className="py-3 px-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition"
                  >
                    Wave
                  </button>
                  <button
                    onClick={handleCinetPay}
                    className="py-3 px-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition"
                  >
                    MTN
                  </button>
                </div>
              </div>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-gray-50 px-2 text-xs text-gray-500">OU</span>
                </div>
              </div>

              {/* PayPal */}
              <button
                onClick={handlePayPal}
                className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Payer avec PayPal
              </button>

              {/* Security Info */}
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-green-900">Paiement sécurisé</p>
                    <p className="text-xs text-green-700 mt-1">
                      Vos données sont protégées. Vous recevrez un lien de téléchargement immédiatement après paiement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}