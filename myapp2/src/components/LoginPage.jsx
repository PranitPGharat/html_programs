import { useState, useEffect } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const correctUsername = 'Pranit';
  const correctPassword = '123456';

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === correctUsername && password === correctPassword) {
      alert('Login successful!');
      setError('');
    } else {
      setError('Invalid username or password.');
    }
  };

  useEffect(() => {
    console.log('Welcome to the Login Page!');
  }, []);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        backgroundColor: '#f0f8ff',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '400px',
        margin: 'auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            style={{
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              padding: '10px',
              width: '100%',
              border: '1px solid #ccc',
              borderRadius: '5px',
              fontSize: '16px',
            }}
          />
        </div>
        <div>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              backgroundColor: '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginRight: '10px',
            }}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => {
              setUsername('');
              setPassword('');
              setError('');
            }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>
      </form>
      {error && (
        <p style={{ color: 'red', marginTop: '20px', fontWeight: 'bold' }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default LoginPage;
