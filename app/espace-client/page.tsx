import { NextPage } from 'next'
import Link from 'next/link'
import { CreditCard, Calendar, Download, Search, Filter } from 'lucide-react'

const EspaceClientPage: NextPage = () => {
  const stats = {
    totalOrders: 5,
    totalSpent: 124.95,
    pendingDownloads: 3,
  }

  const recentOrders = [
    {
      id: 'CMD-001',
      date: '2024-01-15',
      total: 19.99,
      status: 'paid',
      items: 2,
    },
    {
      id: 'CMD-002',
      date: '2024-01-10',
      total: 44.98,
      status: 'paid',
      items: 3,
    },
  ]

  const downloads = [
    {
      id: 1,
      product: 'Guide SEO pour débutants',
      downloadUrl: '/api/download/abc123',
      date: '2024-01-15',
      format: 'PDF',
    },
    {
      id: 2,
      product: 'Template Business Plan',
      downloadUrl: '/api/download/def456',
      date: '2024-01-10',
      format: 'PDF',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Espace Client</h1>
          <p className="text-gray-600">Bienvenue dans votre espace personnel</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 rounded-full">
                <CreditCard className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total commandés</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 rounded-full">
                <Calendar className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Total dépensé</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalSpent} €</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 rounded-full">
                <Download className="w-6 h-6 text-primary-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-500">Téléchargements</p>
                <p className="text-2xl font-bold text-gray-900">{stats.pendingDownloads}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <Link href="/espace-client" className="py-4 text-sm font-medium text-primary-600 border-b-2 border-primary-600">
                Historique des commandes
              </Link>
              <Link href="/espace-client/bibliotheque" className="py-4 text-sm font-medium text-gray-600 hover:text-gray-900">
                Bibliothèque
              </Link>
              <Link href="/espace-client/profile" className="py-4 text-sm font-medium text-gray-600 hover:text-gray-900">
                Mon profil
              </Link>
            </nav>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Historique des commandes</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Numéro de commande</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{order.total} €</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          Payé
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        <Link href={`/commande/${order.id}`} className="text-primary-600 hover:text-primary-700">
                          Voir
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
    </div>
  )
}

export default EspaceClientPage