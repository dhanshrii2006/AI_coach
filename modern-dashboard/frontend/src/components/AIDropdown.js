// components/AIDropdown.js
import React, { useState } from 'react';

const AIDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ai-dropdown-container">
            {/* Circular Button */}
            <button className="ai-button" onClick={() => setIsOpen(!isOpen)}>
                🤖
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                        <li>Option 1</li>
                        <li>Option 2</li>
                        <li>Option 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default AIDropdown;