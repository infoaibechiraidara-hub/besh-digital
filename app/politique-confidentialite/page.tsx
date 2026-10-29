import { NextPage } from 'next'

const PolitiqueConfidentialitePage: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Politique de Confidentialité</h1>
          
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>Cette Politique de Confidentialité explique comment BESH DIGITAL collecte, utilise et protège vos informations personnelles.</p>
            
            <h2>1. Informations collectées</h2>
            <p>
              • Données d'identification : nom, email, mot de passe<br />
              • Données de transaction : historique des achats, adresses<br />
              • Données de navigation : cookies, logs serveur<br />
              • Données de communication : messages, avis
            </p>
            
            <h2>2. Utilisation des données</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul>
              <li>Créer et gérer votre compte</li>
              <li>Traiter vos commandes et paiements</li>
              <li>Vous fournir des produits numériques</li>
              <li>Améliorer l'expérience utilisateur</li>
              <li>Envoyer des communications transactionnelles</li>
            </ul>
            
            <h2>3. Protection des données</h2>
            <p>
              • Les mots de passe sont hachés avec bcrypt<br />
              • Les transactions sont sécurisées via HTTPS<br />
              • Les fichiers sont stockés avec accès restreint<br />
              • Les données de paiement ne sont pas stockées
            </p>
            
            <h2>4. Partage des données</h2>
            <p>Vos données ne sont partagées qu'avec :</p>
            <ul>
              <li>Les services de paiement (pour le traitement)</li>
              <li>Les prestataires techniques (hébergement, support)</li>
            </ul>
            
            <h2>5. Cookies et suivi</h2>
            <p>
              • Des cookies sont utilisés pour l'analyse et l'amélioration du service<br />
              • Vous pouvez désactiver les cookies dans les paramètres de votre navigateur
            </p>
            
            <h2>6. Vos droits</h2>
            <p>Vous pouvez :</p>
            <ul>
              <li>Accéder à vos données</li>
              <li>Rectifier vos informations</li>
              <li>Supprimer votre compte</li>
              <li>Exporter vos données</li>
            </ul>
            
            <h2>7. Conservation des données</h2>
            <p>Les données sont conservées pendant 7 ans pour les transactions et jusqu'à suppression du compte pour les autres informations.</p>
            
            <h2>8. Modifications</h2>
            <p>Cette politique peut être mise à jour. Les modifications entrent en vigueur immédiatement.</p>
            
            <h2>9. Contact</h2>
            <p>support@beshdigital.com</p>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-500">
            <p>Dernière mise à jour : Janvier 2024</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolitiqueConfidentialitePage