'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdmin } from '@/components/Admin/AdminProvider';
import { LoginStyles } from './styles';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated, isLoading: authLoading } = useAdmin();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/admin');
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        router.push('/admin');
      } else {
        setError('Nesprávne prihlasovacie údaje');
      }
    } catch (error) {
      setError('Nastala chyba pri prihlásení');
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return (
      <LoginStyles>
        <div className="login-container">
          <div className="loading">Načítavam...</div>
        </div>
      </LoginStyles>
    );
  }

  return (
    <LoginStyles>
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>KranioFlow</h1>
            <h2>Admin Panel</h2>
            <p>Prihláste sa do administračného rozhrania</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@kranioflow.sk"
                required
                disabled={isLoading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Heslo</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={isLoading}
              />
            </div>

            <button 
              type="submit" 
              className="login-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Prihlasujem...' : 'Prihlásiť sa'}
            </button>
          </form>

          <div className="login-footer">
            <p className="demo-credentials">
              <strong>Demo prihlasovacie údaje:</strong><br />
              Email: admin@kranioflow.sk<br />
              Heslo: admin123
            </p>
          </div>
        </div>
      </div>
    </LoginStyles>
  );
}
