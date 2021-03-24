import React from 'react';
import Navbar from './nav/navbar'

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-main">
                <div className="dashboard-top">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Dashboard;