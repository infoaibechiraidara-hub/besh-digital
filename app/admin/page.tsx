import { NextPage } from 'next'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  FileText,
  MessageCircle,
  CreditCard,
  Database,
  BadgeCheck,
  Shield,
  TrendingUp
} from 'lucide-react'

const AdminDashboard: NextPage = () => {
  const stats = {
    totalProducts: 45,
    totalOrders: 128,
    totalRevenue: 2450.50,
    pendingOrders: 3,
    newReviews: 5,
  }

  const recentOrders = [
    { id: 'CMD-127', customer: 'A. Koffi', total: 19.99, status: 'completed', date: '2024-01-18' },
    { id: 'CMD-126', customer: 'M. Diallo', total: 44.98, status: 'pending', date: '2024-01-18' },
    { id: 'CMD-125', customer: 'S. Traoré', total: 29.99, status: 'completed', date: '2024-01-17' },
  ]

  const topProducts = [
    { name: 'Guide SEO pour débutants', sales: 45, revenue: 899.55 },
    { name: 'Template Business Plan', sales: 32, revenue: 479.68 },
    { name: 'Formation Marketing Digital', sales: 28, revenue: 1399.72 },
  ]

  const menuItems = [
    { name: 'Tableau de bord', icon: LayoutDashboard, href: '/admin' },
    { name: 'Produits', icon: Package, href: '/admin/produits' },
    { name: 'Commandes', icon: ShoppingCart, href: '/admin/commandes' },
    { name: 'Clients', icon: Users, href: '/admin/clients' },
    { name: 'Catégories', icon: Database, href: '/admin/categories' },
    { name: 'Avis', icon: Star, href: '/admin/avis' },
    { name: 'Statistiques', icon: BarChart3, href: '/admin/statistiques' },
    { name: 'Paramètres', icon: Settings, href: '/admin/parametres' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg">
        <div className="flex items-center justify-center h-16 bg-primary-600">
          <span className="text-xl font-bold text-white">BESH DIGITAL Admin</span>
        </div>
        <nav className="mt-5 px-2">
          {menuItems.map((item) => (
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
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
            <p className="text-gray-600">Vue d'ensemble de votre boutique</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Produits</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalProducts}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-3 bg-green-100 rounded-full">
                  <ShoppingCart className="w-6 h-6 text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Commandes</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <CreditCards className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">CA Total</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.totalRevenue} €</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-3 bg-red-100 rounded-full">
                  <Calendar className="w-6 h-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">En attente</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.pendingOrders}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Nouveaux avis</p>
                  <p className="text-2xl font-bold text-gray-900">{stats.newReviews}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Orders */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Commandes récentes</h2>
              <div className="divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <div key={order.id} className="py-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-gray-900">{order.id}</p>
                      <p className="text-sm text-gray-500">{order.customer}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{order.total} €</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.status === 'completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status === 'completed' ? 'Payée' : 'En attente'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/admin/commandes" className="mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium">
                Voir toutes les commandes
              </Link>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Produits les plus vendus</h2>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-500">#{index + 1}</span>
                      <span className="font-medium text-gray-900">{product.name}</span>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{product.sales} ventes</p>
                      <p className="text-sm text-gray-500">{product.revenue.toFixed(2)} €</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/admin/produits" className="mt-4 text-primary-600 hover:text-primary-700 text-sm font-medium">
                Gérer les produits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { CreditCards, Calendar, Star } from 'lucide-react'

export default AdminDashboard