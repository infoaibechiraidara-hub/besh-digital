import { NextPage } from 'next'
import Link from 'next/link'
import { Download, Search, Filter, FileText, CheckCircle } from 'lucide-react'

const BibliothequePage: NextPage = () => {
  const downloads = [
    {
      id: 1,
      product: 'Guide SEO pour débutants',
      description: 'Tous les secrets du référencement naturel',
      downloadUrl: '/api/download/token1',
      date: '2024-01-15',
      format: 'PDF',
      size: '24 MB',
      status: 'ready',
    },
    {
      id: 2,
      product: 'Template Business Plan 2024',
      description: 'Plan d\'affaires professionnel',
      downloadUrl: '/api/download/token2',
      date: '2024-01-10',
      format: 'PDF',
      size: '12 MB',
      status: 'ready',
    },
    {
      id: 3,
      product: 'Formation Marketing Digital',
      description: 'Maîtrisez les réseaux sociaux',
      downloadUrl: '/api/download/token3',
      date: '2024-01-05',
      format: 'PDF',
      size: '45 MB',
      status: 'downloaded',
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Ma Bibliothèque</h1>
          <p className="text-gray-600">Accédez à tous vos produits numériques</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher dans ma bibliothèque..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Tous les statuts</option>
            <option value="ready">Prêts au téléchargement</option>
            <option value="downloaded">Déjà téléchargés</option>
          </select>
        </div>

        {/* Downloads List */}
        <div className="space-y-4">
          {downloads.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <FileText className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.product}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-400 mt-1">
                    <span>{item.format} • {item.size}</span>
                    <span>Ajouté le {item.date}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {item.status === 'ready' ? (
                  <Link
                    href={item.downloadUrl}
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger
                  </Link>
                ) : (
                  <span className="text-sm text-gray-500 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                    Téléchargé
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'

export default BibliothequePage