import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import List from './components/users/List';
import ServiceList from './components/services/ServiceList';

function App() {
  const [selectedForm, setSelectedForm] = useState('users');
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gerenciador</h1>
        <div className="form-selector">
          <button
            className={selectedForm === 'users' ? 'selected' : ''}
            onClick={() => setSelectedForm('users')}
          >
            Usuários
          </button>
          <button
            className={selectedForm === 'services' ? 'selected' : ''}
            onClick={() => setSelectedForm('services')}
          >
            Serviços
          </button>
        </div>
      </header>
      <main>
        {selectedForm === 'users' && <List />}
        {selectedForm === 'services' && <ServiceList />}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
