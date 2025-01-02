import { useState } from 'react';

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const users = [
    { email: 'kiranchikaraddi@gmail.com', password: 'kiran123' },
    { email: 'asutosh@gmail.com', password: 'ashutosh123' },
    { email: 'shailesh@gmail.com', password: 'shailesh123' },
    { email: 'sheldon@gmail.com', password: 'sheldon123' },
    { email: 'amith@gmail.com', password: 'amith123' },
    { email: 'rahul@gmail.com', password: 'rahul123' },
    { email: 'shyam@gmail.com', password: 'shyam123' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      onLoginSuccess(); 
      setError(''); 
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Login;















