import React from 'react';
import Navbar from './nav/navbar'
import Sidebar from './sidebar/sidebar';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-main">
                <header className="dashboard-header">
                    <Navbar />
                </header>
                <div className="dashboard-main-content">
                    <div className="dashboard-left-side">
                        <div className="dashboard-main-graph-container">
                            This is the graph container
                        </div>
                        <div className="dashboard-news-container">
                            This is the news container
                        </div>
                    </div>
                    <div className="dashboard-right-side">
                        <div className="dashboard-sidebar-container">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;