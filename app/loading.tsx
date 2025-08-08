import { Search, Globe, Menu, TrendingUp, Users, Shield } from 'lucide-react'

export default function HomeLoading() {
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
            <div className="text-sm font-medium leading-tight">Global Investment Platform</div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-slate-700">
            <Search className="w-4 h-4" />
            <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-700">
            <Globe className="w-4 h-4" />
            <div className="w-16 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
          
          <div className="flex items-center space-x-2 text-slate-700">
            <Menu className="w-4 h-4" />
            <div className="w-10 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative h-screen">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-200 animate-pulse"></div>
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-32 h-4 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
          </div>

          <div className="mb-8">
            <div className="w-80 h-20 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="w-48 h-12 bg-gray-300 rounded animate-pulse"></div>
          </div>

          <div className="mb-12 max-w-2xl">
            <div className="w-96 h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
            <div className="w-80 h-6 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Key Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl w-full">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-white mx-auto mb-4 drop-shadow-lg" />
              <div className="w-16 h-8 bg-gray-300 rounded mx-auto mb-2 animate-pulse"></div>
              <div className="w-20 h-4 bg-gray-300 rounded mx-auto animate-pulse"></div>
            </div>

            <div className="text-center">
              <Users className="w-12 h-12 text-white mx-auto mb-4 drop-shadow-lg" />
              <div className="w-16 h-8 bg-gray-300 rounded mx-auto mb-2 animate-pulse"></div>
              <div className="w-24 h-4 bg-gray-300 rounded mx-auto animate-pulse"></div>
            </div>

            <div className="text-center">
              <Shield className="w-12 h-12 text-white mx-auto mb-4 drop-shadow-lg" />
              <div className="w-16 h-8 bg-gray-300 rounded mx-auto mb-2 animate-pulse"></div>
              <div className="w-16 h-4 bg-gray-300 rounded mx-auto animate-pulse"></div>
            </div>
          </div>

          <div className="w-40 h-12 bg-white/90 rounded-full animate-pulse"></div>
        </div>
      </main>

      {/* Investment Strategy Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-80 h-10 bg-gray-200 rounded mb-6 animate-pulse"></div>
              <div className="space-y-3 mb-8">
                <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="space-y-4 mb-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    <div className="w-40 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
              <div className="w-48 h-10 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="relative h-96">
              <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional sections with similar loading patterns */}
      {[...Array(3)].map((_, sectionIndex) => (
        <section key={sectionIndex} className={`py-20 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {sectionIndex % 2 === 0 ? (
                <>
                  <div className="relative h-96">
                    <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                  <div>
                    <div className="w-64 h-10 bg-gray-200 rounded mb-6 animate-pulse"></div>
                    <div className="space-y-3 mb-8">
                      <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-green-600 rounded-full" />
                          <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                    <div className="w-40 h-10 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="w-56 h-10 bg-gray-200 rounded mb-6 animate-pulse"></div>
                    <div className="space-y-3 mb-8">
                      <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-full h-5 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center space-x-4">
                          <div className="w-3 h-3 bg-red-600 rounded-full" />
                          <div className="w-36 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      ))}
                    </div>
                    <div className="w-44 h-10 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="relative h-96">
                    <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse"></div>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* News & Updates Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div className="w-48 h-10 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-32 h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
          
          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="border-0 shadow-sm rounded-lg overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="w-24 h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="w-full h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="space-y-2 mb-4">
                    <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Scrolling News Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex space-x-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-80 border-0 shadow-sm rounded-lg overflow-hidden">
                  <div className="h-32 bg-gray-200 animate-pulse"></div>
                  <div className="p-4">
                    <div className="w-20 h-3 bg-gray-200 rounded mb-1 animate-pulse"></div>
                    <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="w-3/4 h-3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
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
