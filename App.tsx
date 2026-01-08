
import React, { useState } from 'react';
import { useDataStore } from './store';
import { AppView, PublicView } from './types';
import PublicLayout from './components/PublicLayout';
import AdminLayout from './components/AdminLayout';
import LoginScreen from './components/LoginScreen';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('public');
  const [publicSubView, setPublicSubView] = useState<PublicView>({ type: 'home' });
  const store = useDataStore();

  const handleAdminSuccess = () => {
    setView('admin_dashboard');
  };

  const navigateTo = (newSubView: PublicView) => {
    setPublicSubView(newSubView);
    // 确保平滑滚动到顶部，增强高级感
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {view === 'public' && (
        <PublicLayout 
          store={store} 
          currentView={publicSubView}
          onNavigate={navigateTo}
          onSwitchToAdmin={() => setView('admin_login')} 
        />
      )}
      
      {view === 'admin_login' && (
        <LoginScreen 
          onSuccess={handleAdminSuccess} 
          onCancel={() => setView('public')}
          login={store.login}
          loading={store.loading}
        />
      )}

      {view === 'admin_dashboard' && store.currentUser && (
        <AdminLayout 
          store={store} 
          onSwitchToPublic={() => {
            store.logout();
            setView('public');
            setPublicSubView({ type: 'home' });
          }} 
        />
      )}
    </div>
  );
};

export default App;
