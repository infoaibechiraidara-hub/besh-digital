import { NextPage } from 'next'
import Link from 'next/link'

const CgvPage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Conditions Générales de Vente</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>Ces Conditions Générales de Vente (« CGV ») régissent l'utilisation de la plateforme BESH DIGITAL.</p>
            
            <h2>1. Objet</h2>
            <p>Les présentes CGV définissent les conditions dans lesquelles les Clients peuvent acheter des produits numériques sur BESH DIGITAL.</p>
            
            <h2>2. Définition des produits numériques</h2>
            <p>Les produits numériques comprennent : ebooks, formations en ligne, templates, modèles Excel, kits marketing et autres ressources numériques.</p>
            
            <h2>3. Prix et paiement</h2>
            <p>
              • Tous les prix sont indiqués en Euro (€) et comprennent la TVA si applicable.<br />
              • Les paiements s'effectuent via les moyens supportés par nos partenaires (CinetPay, Flutterwave, etc.).<br />
              • Le paiement par carte bancaire sécurisé est disponible pour les clients internationaux.
            </p>
            
            <h2>4. Accès aux produits</h2>
            <p>
              • Les produits sont accessibles immédiatement après confirmation du paiement.<br />
              • Les liens de téléchargement sont valables 7 jours après la première connexion.<br />
              • Un nombre limité de téléchargements (5 max) est prévu par produit acheté.
            </p>
            
            <h2>5. Droits et limitations d'utilisation</h2>
            <p>
              • Chaque produit est attribué à titre individuel.<br />
              • L'utilisation commerciale est autorisée dans la mesque définie par la licence du produit.<br />
              • La redistribution, la revente ou la revente devant sans autorisation est interdite.
            </p>
            
            <h2>6. Remboursements</h2>
            <p>
              • En raison de la nature instantanée des produits numériques, les remboursements sont généralement refusés.<br />
              • En cas de défaut du produit, un remboursement intégral est proposé sous 30 jours.<br />
              • Les demandes de remboursement doivent être adressées via le formulaire de contact.
            </p>
            
            <h2>7. Limitatie de responsabilité</h2>
            <p>BESH DIGITAL ne garantit pas l'adéquation du produit à vos besoins spécifiques.</p>
            
            <h2>8. Force majeure</h2>
            <p>En cas de Force Majeure, les obligations sont suspendues.</p>
            
            <h2>9. Loi applicable</h2>
            <p>Les CGV sont régies par les lois de Côte d'Ivoire et, le cas échéant, par la loi française.</p>
            
            <h2>10. Contact</h2>
            <p>Pour toute question : support@beshdigital.com</p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500">
            <p>Dernière mise à jour : Janvier 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CgvPage