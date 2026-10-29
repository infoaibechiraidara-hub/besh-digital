import { NextPage, useState } from 'react'
import { Search } from 'lucide-react'

const FaqPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [openItem, setOpenItem] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: 'Comment télécharger mes produits numériques ?',
      answer: 'Connectez-vous à votre espace client et allez dans la section "Bibliothèque". Cliquez sur le bouton "Télécharger" pour chaque produit.'
    },
    {
      id: 2,
      question: 'Combien de temps les produits sont-ils disponibles ?',
      answer: 'Les liens de téléchargement restent actifs 7 jours après l\'achat. Vous pouvez les utiliser jusqu\'à 5 fois maximum.'
    },
    {
      id: 3,
      question: 'Quels formats de fichiers sont supportés ?',
      answer: 'Nous acceptons PDF, EPUB, ZIP, RAR, 7z et autres formats courants pour les produits numériques.'
    },
    {
      id: 4,
      question: 'Comment payer sur BESH DIGITAL ?',
      answer: 'Nous acceptons CinetPay, Flutterwave, Paystack et les paiements par carte bancaire internationaux.'
    },
    {
      id: 5,
      question: 'Est-ce possible de faire un remboursement ?',
      answer: 'Les produits numériques sont élisibles au remboursement dans les 30 jours suivant l\'achat si le produit ne convient pas.'
    },
    {
      id: 6,
      question: 'Puis-je acheter des produits dans d\'autres devises ?',
      answer: 'Oui, nous supportons l\'Euro (€), Dollar US ($) et Franc CFA (XOF).'
    },
    {
      id: 7,
      question: 'Comment contacter le support technique ?',
      answer: ' Envoyez un email à support@beshdigital.com ou utilisez le formulaire de contact.'
    },
    {
      id: 8,
      question: 'Mes produits sont-ils protégés contre le piratage ?',
      answer: 'Nous utilisons des liens de téléchargement uniques avec expiration. Cependant, aucune protection numérique n\'est parfaite.'
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">FAQ</h1>
            <p className="text-gray-600">Réponses aux questions fréquentes</p>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher dans les questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* FAQs */}
          <div className="divide-y divide-gray-200">
            {faqs.filter(faq => 
              faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
            ).map((faq) => (
              <div key={faq.id}>
                <button
                  onClick={() => setOpenItem(openItem === faq.id ? null : faq.id)}
                  className="w-full flex justify-between items-center py-4 text-left"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="ml-2 w-5 h-5 flex items-center justify-center">
                    {openItem === faq.id ? '−' : '+'}
                  </span>
                </button>
                {openItem === faq.id && (
                  <p className="text-gray-600 pb-4">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-2">Vous n'utilisez pas les questions ci-dessus ?</p>
            <a href="/contact" className="text-primary-600 hover:text-primary-700 font-medium">
              Contactez-nous directement
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqPage