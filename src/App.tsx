import { useState } from 'react';
import { Camera, Map as MapIcon } from 'lucide-react';
import Map from './components/Map';
import ARView from './components/ARView';

function App() {
  const [view, setView] = useState<'map' | 'ar'>('map');
  const [location] = useState<[number, number]>([-74.006, 40.7128]); // Default to NYC

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">AR Map Explorer</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* View Toggle */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex space-x-4">
              <button
                onClick={() => setView('map')}
                className={`flex items-center px-4 py-2 rounded-md ${
                  view === 'map'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <MapIcon className="w-5 h-5 mr-2" />
                Map View
              </button>
              <button
                onClick={() => setView('ar')}
                className={`flex items-center px-4 py-2 rounded-md ${
                  view === 'ar'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                <Camera className="w-5 h-5 mr-2" />
                AR View
              </button>
            </div>
          </div>

          {/* View Container */}
          <div className="h-[70vh]">
            {view === 'map' ? (
              <Map center={location} zoom={13} />
            ) : (
              <ARView />
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">How to Use</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Switch between Map and AR views using the toggle buttons above</li>
            <li>• In AR mode, point your camera at your surroundings to see augmented content</li>
            <li>• Use the map to navigate and find points of interest</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;