// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Shared/Header'; // Додаємо компонент Header
import Login from './components/Auth/Login';
import AdminDashboard from './components/Admin/Dashboard';
import ManagerDashboard from './components/Manager/Dashboard';

function App() {
    return (
        <Router>
            <Header /> {/* Додаємо компонент Header */}
            <Routes>
                <Route path="/login" element={<Login />} />
                {/* Додайте інші публічні маршрути, які доступні всім */}
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/manager" element={<ManagerDashboard />} />
            </Routes>
        </Router>
    );
}

export default App;
