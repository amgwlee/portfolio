import React, { useState } from 'react';
import '../Styles/NavigationTabs.css';

interface Tab {
    id: string,
    label: string,
    content: React.ReactNode;
}

interface NavigationTabsProps {
    tabs: Tab[];
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <div>
            <ul className="navigation-tabs">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={activeTab === tab.id ? 'active' : ''}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="tab-content">
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={activeTab === tab.id ? 'tab active' : 'tab'}
                    >
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NavigationTabs;