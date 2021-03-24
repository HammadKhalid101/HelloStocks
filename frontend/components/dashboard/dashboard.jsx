import React from 'react';
import Navbar from './nav/navbar'

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-main">
                <header className="dashboard-header">
                    <Navbar />
                </header>
            </div>
        )
    }
}

export default Dashboard;