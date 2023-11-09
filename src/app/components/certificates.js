'use client'
import useFetch from './../hooks/useFetch';

  export default function Certificates() {
    const apiUrl = 'https://node-autentication-app.onrender.com/api/v1/certificates'

    const items = useFetch(apiUrl);
    const sortedItems = [...items].sort((a, b) => a.id - b.id);

    return (
<div className="bg-gray-100" style={{ overflowX: 'hidden' }}> {/* Cambiado overflow-x-auto a overflow-x-hidden */}
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>

      <div className="mt-6 space-x-4">
        <div className="lg:flex lg:space-x-4 lg:py-4">
          <div
            style={{
              display: 'flex',
              overflowX: 'scroll', // Cambiado a overflow-x-scroll
              WebkitOverflowScrolling: 'touch',
              margin: '0 -10px',
            }}
          >
            {sortedItems?.map((product) => (
              <div key={product.name} className="group relative flex-shrink-0" style={{ margin: '0 10px' }}>
                <div className="relative h-80 w-80 overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={product.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={product.image}>
                    <span className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  )
}