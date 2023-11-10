import React, { useState } from 'react';
import axios from 'axios';
import Grid from "@mui/material/Grid";
import { Navigate, useNavigate } from "react-router-dom";
import Content from "../components/Content";

function LoginForm() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000', credentials);
      console.log('Login successful:', response.data);
      navigate("/home");
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <Content>
        <Grid>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={credentials.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={credentials.password} onChange={handleChange} />
                </div>
                <button type="submit">Login</button>
            </form>
        </Grid>
    
    </Content>
  );
}

export default LoginForm;