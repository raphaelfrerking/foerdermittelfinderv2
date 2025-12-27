export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="text-center">
          <div className="mb-6">
            <span className="text-6xl">💰</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Fördermittelfinder
          </h1>
          
          <p className="text-xl text-gray-700 mb-8">
            KI-gestützter Antrags-Assistent für EU-, Bundes- und Landesförderungen
          </p>
          
          <div className="bg-yellow-400 rounded-2xl p-6 mb-8">
            <p className="text-lg font-semibold text-blue-900">
              ✅ Next.js läuft erfolgreich!
            </p>
            <p className="text-sm text-blue-800 mt-2">
              Version 2.0.0 - Entwicklungsumgebung aktiv
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 text-left">
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-2xl mb-2">🔍</div>
              <h3 className="font-bold text-blue-900 mb-1">Suche</h3>
              <p className="text-sm text-gray-600">Passende Förderprogramme finden</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-2xl mb-2">🤖</div>
              <h3 className="font-bold text-blue-900 mb-1">KI-Assistent</h3>
              <p className="text-sm text-gray-600">Automatische Textgenerierung</p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="text-2xl mb-2">📄</div>
              <h3 className="font-bold text-blue-900 mb-1">Export</h3>
              <p className="text-sm text-gray-600">PDF, DOCX, Excel</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Projekt erfolgreich gestartet! 🎉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}