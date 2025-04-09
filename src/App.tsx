import { AuthProvider } from './context/AuthContext';
import { AchievementProvider } from './context/AchievementContext';
import { AuthForm } from './components/AuthForm';
import { UserMenu } from './components/UserMenu';
import { useAuth } from './context/AuthContext';
import { SkillBranch } from './components/SkillBranch';
import { CollectionBranch } from './components/CollectionBranch';
import { SocialBranch } from './components/SocialBranch';

function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Disc Golf Skill Tree</h1>
          <UserMenu />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillBranch />
          <CollectionBranch />
          <SocialBranch />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AchievementProvider>
        <AppContent />
      </AchievementProvider>
    </AuthProvider>
  );
}

