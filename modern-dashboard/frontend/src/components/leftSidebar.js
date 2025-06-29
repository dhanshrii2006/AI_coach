// components/LeftSidebar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    // Webcam setup
    useEffect(() => {
        const videoElement = document.getElementById('webcamVideo');
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices
                .getUserMedia({ video: true })
                .then((stream) => {
                    videoElement.srcObject = stream;
                })
                .catch((err) => {
                    console.error('Error accessing webcam:', err);
                });
        }
    }, []);

    return (
        <div className="sidebar" style={{ width: isOpen ? '250px' : '60px', transition: 'width 0.3s' }}>
            <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Collapse' : 'Expand'}
            </button>
            {isOpen && (
                <ul className="sidebar-menu">
                    <li><Link to="/profile">User Profile</Link></li>
                    <li><Link to="/analysis">Analysis</Link></li>
                    <li><Link to="/history">History</Link></li>
                    <li><Link to="/emotion-detection">Emotion Detection</Link></li>
                </ul>
            )}
            <div className="emotion-box">
                <video id="webcamVideo" autoPlay playsInline style={{ width: '100%', height: '100%' }}></video>
                <div className="emotion-output">Emotion: Neutral</div>
            </div>
        </div>
    );
};

export default LeftSidebar;