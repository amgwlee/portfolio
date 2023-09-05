import React, { useState } from 'react';
import '../Styles/NavigationTabs.css';

const NavigationTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('home');

    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
    };

    return (
        <div className="navigation-tabs">
            <button
                className={activeTab === 'home' ? 'active' : ''}
                onClick={() => handleTabClick('home')}
            >
                Home
            </button>
            <button
                className={activeTab === 'about' ? 'active' : ''}
                onClick={() => handleTabClick('about')}
            >
                About
            </button>
            <button
                className={activeTab === 'portfolio' ? 'active' : ''}
                onClick={() => handleTabClick('portfolio')}
            >
                Portfolio
            </button>
        </div>
    );
};

export default NavigationTabs;