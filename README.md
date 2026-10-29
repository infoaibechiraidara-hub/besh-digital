# BESH DIGITAL

**Boutique en ligne de produits numériques** - Votre plateforme pour acheter et vendre des produits numériques de qualité.

## 🇪🇺 Version Française

### Description

BESH DIGITAL est une boutique en ligne professionnelle permettant la vente de produits numériques (ebooks, formations, templates, modèles Excel, etc.) avec prise en charge des paiements africains et internationaux.

### Fonctionnalités

- ✅ Vente de produits numériques (ébooks, formations, templates)
- ✅ Paiements sécurisés (CinetPay, Flutterwave, Paystack)
- ✅ Téléchargements instantanés après paiement
- ✅ Interface bilingue (français/anglais)
- ✅ Espace client complet
- ✅ Dashboard administrateur
- ✅ Système de catégories et filtres
- ✅ Gestion des avis clients
- ✅ SEO optimisé

### Technologies Utilisées

- **Frontend** : Next.js 14, React 18, Tailwind CSS
- **Backend** : Python Flask
- **Base de données** : SQLite
- **Paiements** : CinetPay, Flutterwave, Paystack
- **Déploiement** : Vercel (frontend), Render/Heroku (backend)

### Prérequis

- Node.js 18+ 
- Python 3.10+
- Git

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/beshdigital/besh-digital.git
cd besh-digital

# Installer les dépendances
npm install
pip install -r requirements.txt

# Configuration
cp .env.example .env
# Modifier .env avec vos paramètres

# Démarrer le backend
python server.py

# Démarrer le frontend
npm run dev

# Accéder à http://localhost:3000
```

### Structure du Projet

```
besh-digital/
├── app/                    # Pages Next.js
│   ├── page.tsx           # Page d'accueil
│   ├── boutique/           # Boutique
│   ├── panier/             # Panier
│   ├── paiement/           # Paiement
│   ├── connexion/          # Connexion
│   ├── inscription/        # Inscription
│   ├── espace-client/      # Espace client
│   └── admin/              # Dashboard admin
├── backend/                # Code backend Python
├── database/               # Schéma base de données
├── styles/                 # Styles globaux
└── public/                # Fichiers statiques
```

### Configuration des Paiements

#### CinetPay ( Recommandé pour Afrique de l'Ouest )

- **Orange Money** : Côte d'Ivoire, Mali, Sénégal, Togo
- **Wave** : Sénégal, Côte d'Ivoire
- **MTN Mobile Money** : Mali, Sénégal, Togo, Cameroun

#### PayPal

- Paiement par compte PayPal ou carte
- Support international

### Variables d'Environnement

Voir le fichier `.env.example` pour toutes les variables disponibles.

### Pages Principales

| Page | Route | Description |
|------|-------|-------------|
| Accueil | `/` | Page d'accueil |
| Boutique | `/boutique` | Catalogue des produits |
| Panier | `/panier` | Gestion du panier |
| Paiement | `/paiement` | Processus de paiement |
| Connexion | `/connexion` | Connexion utilisateur |
| Inscription | `/inscription` | Création de compte |
| Espace Client | `/espace-client` | Historique et téléchargements |
| Admin | `/admin` | Dashboard administrateur |

### Environnements

- **Développement** : `npm run dev` (Frontend: 3000, Backend: 5000)
- **Production** : `npm run build && npm start`

### Sécurité

- Hachage des mots de passe avec bcrypt
- JWT pour l'authentification
- Protection contre CSRF/XSS
- Validation des entrées
- Webhooks sécurisés pour les paiements

### Limites de Sécurité

⚠️ **Important** : Aucune solution n'est parfaite. Les protections mises en place réduisent les risques mais ne peuvent garantir une sécurité absolue contre la reproduction illégale de fichiers numériques.

### Licence

Ce projet est propriétaire de BESH DIGITAL. Toute reproduction non autorisée est interdite.

### Support

Pour toute question, contactez : support@beshdigital.com

---

## 🇬🇧 English Version

### Description

BESH DIGITAL is a professional online shop for digital products, supporting payments from African and international markets.

### Features

- ✅ Digital product sales (ebooks, courses, templates)
- ✅ Secure payments (CinetPay, Flutterwave, Paystack)
- ✅ Instant download after payment
- ✅ Bilingual interface (French/English)
- ✅ Complete customer dashboard
- ✅ Admin dashboard
- ✅ Category and filter system
- ✅ Customer reviews management
- ✅ SEO optimized

### Technologies

- **Frontend** : Next.js 14, React 18, Tailwind CSS
- **Backend** : Python Flask
- **Database** : SQLite
- **Payments** : CinetPay, Flutterwave, Paystack
- **Deployment** : Vercel (frontend), Render (backend)

### Installation

```bash
# Clone the repository
git clone https://github.com/beshdigital/besh-digital.git
cd besh-digital

# Install dependencies
npm install
pip install -r requirements.txt

# Configure
cp .env.example .env
# Edit .env with your settings

# Start backend
python server.py

# Start frontend
npm run dev

# Access http://localhost:3000
```

### Payment Configuration

See the Payment Integration section below for detailed instructions.

### Contributors

- **Architecte Technique** : Agent IA Principal
- **Développement Full-stack** : Équipe Technique BESH DIGITAL