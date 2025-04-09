import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-xl font-bold">Disc Golf Skill Tree</h1>
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

