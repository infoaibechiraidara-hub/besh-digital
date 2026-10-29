import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Search, Menu, User, Heart } from 'lucide-react';
import { useState } from 'react';

export const metadata = {
  title: 'BESH DIGITAL - Boutique de produits numériques',
  description: 'Achetez des produits numériques de qualité à prix compétitifs',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <html lang="fr" className="h-full">
      <body className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">BD</span>
              </div>
              <span className="text-xl font-bold text-primary-600">BESH DIGITAL</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-primary-600 transition">Accueil</Link>
              <Link href="/boutique" className="text-gray-600 hover:text-primary-600 transition">Boutique</Link>
              <Link href="/a-propos" className="text-gray-600 hover:text-primary-600 transition">À propos</Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600 transition">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Wishlist">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100" aria-label="Cart">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <Link href="/connexion" className="p-2 rounded-lg hover:bg-gray-100" aria-label="Login">
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-2 px-4">
                <Link href="/" className="py-2 text-gray-600 hover:text-primary-600">Accueil</Link>
                <Link href="/boutique" className="py-2 text-gray-600 hover:text-primary-600">Boutique</Link>
                <Link href="/a-propos" className="py-2 text-gray-600 hover:text-primary-600">À propos</Link>
                <Link href="/contact" className="py-2 text-gray-600 hover:text-primary-600">Contact</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and About */}
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">BD</span>
                </div>
                <span className="text-xl font-bold text-white">BESH DIGITAL</span>
              </Link>
              <p className="text-gray-400 text-sm">
                Votre boutique de produits numériques fiable et sécurisée.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-3">Navigation</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-white">Accueil</Link></li>
                <li><Link href="/boutique" className="text-gray-400 hover:text-white">Boutique</Link></li>
                <li><Link href="/a-propos" className="text-gray-400 hover:text-white">À propos</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/cgv" className="text-gray-400 hover:text-white">CGV</Link></li>
                <li><Link href="/politique-confidentialite" className="text-gray-400 hover:text-white">Confidentialité</Link></li>
                <li><Link href="/politique-remboursement" className="text-gray-400 hover:text-white">Remboursement</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} BESH DIGITAL. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </body>
    </html>
  );
}