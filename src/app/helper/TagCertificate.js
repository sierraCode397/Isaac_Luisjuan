"use client"

export default function TagCertificate({ certificateItems }) {
  return (
    <>
      {certificateItems.map((product) => (
        <div key={product.name} className="group relative flex-shrink-0" style={{ margin: '0 10px'}}>
          <div className="relative h-42 w-60 md:h-64 md:w-80 overflow-hidden rounded-lg bg-white">
            <img
              src={product.image}
              className="h-full w-full object-cover object-center"
              alt={product.name}
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href={product.image}>
              <span className="absolute inset-0" />
            </a>
          </h3>
        </div>
      ))}
    </>
  );
}

  