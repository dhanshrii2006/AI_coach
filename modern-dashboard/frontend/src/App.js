// App.js
import React from 'react';
import './App.css';
import leftSidebar from './components/LeftSidebar';
import AIDropdown from './components/AIDropdown';

function App() {
    return (
        <div className="dashboard-container">
            {/* Left Sidebar */}
            <LeftSidebar />

            {/* Main Content */}
            <main className="main-content">
                <h1>Welcome to the Emotion Detection Dashboard</h1>
                <p>This is the main content area.</p>
            </main>

            {/* AI Dropdown */}
            <AIDropdown />
        </div>
    );
}

export default App;