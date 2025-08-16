export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Mi Banner de GitHub</h1>

        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Vista Previa:</h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img src="/api/banner" alt="GitHub Banner" className="w-full" />
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">URL para tu README de GitHub:</h3>
          <code className="bg-gray-800 text-green-400 p-2 rounded text-sm block">
            ![Banner](https://tu-dominio.vercel.app/api/banner)
          </code>
        </div>
      </div>
    </main>
  );
}
