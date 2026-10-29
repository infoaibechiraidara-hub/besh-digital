import { NextPage } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  FileText,
  Search,
  Plus,
  Edit,
  Trash2,
  BadgeCheck,
  Upload
} from 'lucide-react'

const AdminProductsPage: NextPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const products = [
    { id: 1, title: 'Guide SEO pour débutants', price: 19.99, category: 'E-books', status: 'published', downloads: 45, date: '2024-01-15' },
    { id: 2, title: 'Template Business Plan', price: 14.99, category: 'Templates', status: 'published', downloads: 32, date: '2024-01-10' },
    { id: 3, title: 'Formation Marketing Digital', price: 49.99, category: 'Formations', status: 'draft', downloads: 0, date: '2024-01-05' },
    { id: 4, title: 'Pack d\'outils Excel', price: 24.99, category: 'Modèles Excel', status: 'published', downloads: 18, date: '2023-12-20' },
  ]

  const filteredProducts = products.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (statusFilter === 'all' || p.status === statusFilter)
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16 bg-primary-600">
          <span className="text-xl font-bold text-white">BESH DIGITAL Admin</span>
        </div>
        <nav className="mt-5 px-2">
          {[
            { name: 'Tableau de bord', icon: LayoutDashboard, href: '/admin' },
            { name: 'Produits', icon: Package, href: '/admin/produits' },
            { name: 'Commandes', icon: ShoppingCart, href: '/admin/commandes' },
            { name: 'Clients', icon: Users, href: '/admin/clients' },
            { name: 'Catégories', icon: FileText, href: '/admin/categories' },
            { name: 'Statistiques', icon: BarChart3, href: '/admin/statistiques' },
            { name: 'Paramètres', icon: Settings, href: '/admin/parametres' },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 hover:text-primary-600"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gérer les produits</h1>
              <p className="text-gray-600">Ajouter, modifier ou supprimer des produits</p>
            </div>
            <Link
              href="/admin/produits/nouveau"
              className="flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition"
            >
              <Plus className="w-5 h-5 mr-2" />
              Nouveau produit
            </Link>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Tous les statuts</option>
              <option value="published">Publié</option>
              <option value="draft">Brouillon</option>
            </select>
          </div>

          {/* Products Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Titre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Prix</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Catégorie</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Téléchargements</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 text-sm text-gray-900">#{product.id}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{product.price} €</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        product.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.status === 'published' ? 'Publié' : 'Brouillon'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{product.downloads}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{product.date}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/produits/${product.id}/éditer`} className="text-primary-600 hover:text-primary-700">
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProductsPage