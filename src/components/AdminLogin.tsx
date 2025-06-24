import React, { useState } from 'react';
import axios from 'axios';

const ADMIN_USER = 'admin';
const ADMIN_PASS = '123456'; // Troque para uma senha forte depois
const API_URL = import.meta.env.VITE_API_URL;

const AdminLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(`${API_URL}/login`, { user, pass });
      localStorage.setItem('admin_token', res.data.token);
      onLogin();
    } catch (err) {
      setError('Usuário ou senha inválidos');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
      <form onSubmit={handleLogin} className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm animate-fade">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Login do Admin</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Usuário</label>
          <input type="text" className="w-full border rounded px-3 py-2" value={user} onChange={e => setUser(e.target.value)} autoFocus />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Senha</label>
          <input type="password" className="w-full border rounded px-3 py-2" value={pass} onChange={e => setPass(e.target.value)} />
        </div>
        {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <style>{`
        .animate-fade { animation: fadeIn 0.5s; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default AdminLogin; 