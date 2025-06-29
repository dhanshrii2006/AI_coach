
// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LeftSidebar from '/components/LeftSidebar';
import AIDropdown from '/components/AIDropdown';

function App() {
    return (
        <div className="dashboard-container">
            {/* Left Sidebar */}
            <LeftSidebar />

            {/* Main Content */}
            <main className="main-content">
                <Routes>
                    <Route path="/profile" element={<h1>User Profile</h1>} />
                    <Route path="/analysis" element={<h1>Analysis</h1>} />
                    <Route path="/history" element={<h1>History</h1>} />
                    <Route path="/emotion-detection" element={<h1>Emotion Detection</h1>} />
                    <Route path="/" element={<h1>Welcome to the Dashboard</h1>} />
                </Routes>
            </main>

            {/* AI Dropdown */}
            <AIDropdown />
        </div>
    );
}

export default App;