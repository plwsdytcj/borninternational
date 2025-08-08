import { Search, Globe } from 'lucide-react'

export default function NewsLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-gray-100">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 bg-slate-800 mr-3 flex items-center justify-center">
            <div className="text-white font-bold text-lg">B</div>
          </div>
          <div className="text-slate-800">
            <div className="text-sm font-medium leading-tight">Born International</div>
            <div className="text-sm font-medium leading-tight">伯恩国际</div>
            <div className="text-sm font-medium leading-tight">Global Investment Platform</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-slate-700">
            <Globe className="w-4 h-4" />
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-700">
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-64 h-12 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
            <div className="w-96 h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <div className="w-full h-12 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* News Grid Loading */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border-0 shadow-sm rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-1 h-1 bg-gray-200 rounded-full"></div>
                    <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="w-full h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="space-y-2 mb-4">
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <div className="w-40 h-10 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-48 h-8 bg-gray-700 rounded mx-auto mb-4 animate-pulse"></div>
          <div className="w-96 h-6 bg-gray-700 rounded mx-auto mb-8 animate-pulse"></div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 h-10 bg-gray-700 rounded animate-pulse"></div>
            <div className="w-24 h-10 bg-gray-700 rounded animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-white mr-3 flex items-center justify-center">
                  <div className="text-slate-900 font-bold text-lg">B</div>
                </div>
                <div className="text-white">
                  <div className="text-sm font-medium leading-tight">Born International</div>
                  <div className="text-sm font-medium leading-tight">伯恩国际</div>
                  <div className="text-sm font-medium leading-tight">Global Investment Platform</div>
                </div>
              </div>
              <div className="w-64 h-4 bg-gray-700 rounded animate-pulse"></div>
            </div>
            
            {[...Array(3)].map((_, i) => (
              <div key={i}>
                <div className="w-32 h-6 bg-gray-700 rounded mb-4 animate-pulse"></div>
                <ul className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <li key={j}>
                      <div className="w-24 h-4 bg-gray-700 rounded animate-pulse"></div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="w-64 h-4 bg-gray-700 rounded animate-pulse"></div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-20 h-4 bg-gray-700 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
