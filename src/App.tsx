import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/HomePage/HomePage';
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';

// import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

import './App.scss';
import { ConversationsProvider } from './context/ConversationsProvider';
import { SocketProvider } from './context/SocketProvider';
import { ConversationsPage } from './pages/ConversationsPage/ConversationsPage';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <SocketProvider id={Math.floor(Math.random() * 100)}>
          <ConversationsProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chat" element={<ConversationsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </ConversationsProvider>
        </SocketProvider>
      </main>
    </div>
  );
}

export default App;
