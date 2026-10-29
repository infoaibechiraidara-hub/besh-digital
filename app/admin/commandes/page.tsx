import { NextPage } from 'next'
import Link from 'next/link'
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Settings,
  Search,
  ExternalLink,
  Download
} from 'lucide-react'

const AdminCommandesPage: NextPage = () => {
  const [statusFilter, setStatusFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const orders = [
    { 
      id: 'CMD-127', 
      customer: 'A. Koffi', 
      email: 'a.koffi@example.com', 
      total: 19.99, 
      currency: 'EUR', 
      status: 'paid', 
      paymentStatus: 'paid',
      date: '2024-01-18',
      items: 3
    },
    { 
      id: 'CMD-126', 
      customer: 'M. Diallo', 
      email: 'm.diallo@example.com', 
      total: 44.98, 
      currency: 'EUR', 
      status: 'processing', 
      paymentStatus: 'pending',
      date: '2024-01-18',
      items: 2
    },
    { 
      id: 'CMD-125', 
      customer: 'S. Traoré', 
      email: 's.traore@example.com', 
      total: 29.99, 
      currency: 'EUR', 
      status: 'completed', 
      paymentStatus: 'paid',
      date: '2024-01-17',
      items: 1
    },
    { 
      id: 'CMD-124', 
      customer: 'F. Koné', 
      email: 'f.kone@example.com', 
      total: 12.99, 
      currency: 'EUR', 
      status: 'cancelled', 
      paymentStatus: 'refunded',
      date: '2024-01-16',
      items: 1
    },
  ]

  const filteredOrders = orders.filter(order => 
    (statusFilter === 'all' || order.status === statusFilter) &&
    (searchTerm === '' || 
     order.id.includes(searchTerm) || 
     order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
     order.email.toLowerCase().includes(searchTerm.toLowerCase()))
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
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Gérer les commandes</h1>
            <p className="text-gray-600">{filteredOrders.length} commandes trouvées</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par numéro, client ou email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="all">Tous les statuts</option>
              <option value="pending">En attente</option>
              <option value="paid">Payée</option>
              <option value="processing">En cours</option>
              <option value="completed">Terminée</option>
              <option value="cancelled">Annulée</option>
            </select>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">N° Commande</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Client</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{order.customer}</div>
                      <div className="text-sm text-gray-500">{order.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {order.total} {order.currency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        order.paymentStatus === 'paid' 
                          ? 'bg-green-100 text-green-800'
                          : order.paymentStatus === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : order.status === 'cancelled'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.paymentStatus === 'paid' ? 'Payée' : 
                         order.paymentStatus === 'pending' ? 'En attente' :
                         order.status === 'cancelled' ? 'Annulée' : 'En cours'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <Link href={`/admin/commandes/${order.id}`} className="text-primary-600 hover:text-primary-700 mr-3">
                        <ExternalLink className="w-4 h-4" />
                      </Link>
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

import { useState } from 'react'

export default AdminCommandesPage