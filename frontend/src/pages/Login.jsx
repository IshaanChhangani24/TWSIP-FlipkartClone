import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await fetch('http://localhost:3005/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.message === 'Login successful!') {
            navigate('/home');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        
        <div className='container'>
           <form action="" className='formtag'>
            
           <h1 className='login-h'>Flipkart Login</h1>
            <label htmlFor=""> UserName:</label>
            <input 
                type="text" 
                className='UPname'
                placeholder="topperWorld@gmail.com" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            /> 
            <br />
            <label htmlFor="">Password: </label>
            <input 
                type="password" 
                className='UPname'
                placeholder="flipkartClone" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <br />
            <button onClick={handleLogin} className='login'>Login</button>
            </form>
        </div>
        
    );
};

export default Login;
