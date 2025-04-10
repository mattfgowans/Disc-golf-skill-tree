import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AchievementProvider } from './context/AchievementContext';
import SkillBranch from './components/SkillBranch';
import CollectionBranch from './components/CollectionBranch';
import SocialBranch from './components/SocialBranch';
import AuthForm from './components/AuthForm';
import UserMenu from './components/UserMenu';
import { useAuth } from './context/AuthContext';

function AppContent() {
  const { user } = useAuth();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-xl font-bold text-blue-600">Disc Golf Skill Tree</h1>
          <nav className="mx-6 flex space-x-1">
            <Link 
              to="/" 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Skills
            </Link>
            <Link 
              to="/collection" 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/collection' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Collection
            </Link>
            <Link 
              to="/social" 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/social' 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              Social
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            {user ? <UserMenu /> : <AuthForm />}
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<SkillBranch />} />
          <Route path="/collection" element={<CollectionBranch />} />
          <Route path="/social" element={<SocialBranch />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AchievementProvider>
          <AppContent />
        </AchievementProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

