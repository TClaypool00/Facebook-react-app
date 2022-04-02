import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id='login' className='box'>
      <form className='form'>
        <input type="text" placeholder='Email' value={email} onChange={(e) =>  setEmail(e.target.value)} />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className='button'>Log In</button>
      </form>
      <a className='link' href="facebook-reset">Forgot password?</a>
      <hr />
      <button className='button green'>Create new account</button>
    </div>
  );
}

export default App;
