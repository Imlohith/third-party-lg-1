import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Wallet, Person2, Language, ContentCopy } from '@mui/icons-material';
import './Dashboard.css'
import Header from '../../Container/header/Header';
import poster from '../../assets/images/poster.jpg'

function Dashboard() {
    return (
        <div className='home-root'>
            <div style={{ flex: 1, padding: 4 }}>
                <Header login={true} />
                <div className="banner">
                    <div className='poster'>
                        <img src={poster} style={{ width: '100%', height: 'auto' }} alt="poster" />
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="card-header">Member offers</div>
                        <ul className="card-list">
                            <li>
                                <div className="item-content">
                                    <span className="item-icon">📄</span>
                                    <span className="item-name">Offer 1</span>
                                </div>
                                <span className="item-option">Option</span>
                            </li>
                            <li>
                                <div className="item-content">
                                    <span className="item-icon">📄</span>
                                    <span className="item-name">Offer 2</span>
                                </div>
                                <span className="item-option">Option</span>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">Purchase tickets</div>
                        <ul className="card-list">
                            <li>
                                <div className="item-content">
                                    <span className="item-icon">📄</span>
                                    <span className="item-name">Offer 1</span>
                                </div>
                                <span className="item-option">Option</span>
                            </li>
                            <li>
                                <div className="item-content">
                                    <span className="item-icon">📄</span>
                                    <span className="item-name">Offer 2</span>
                                </div>
                                <span className="item-option">Option</span>
                            </li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="card-header">Our Gaming partners</div>
                        <ul className="card-list">
                            <li>
                                <div className="item-content">
                                    <span className="item-icon">📄</span>
                                    <span className="item-name">Offer 1</span>
                                </div>
                                <span className="item-option">Option</span>
                            </li>
                            <li>
                                <div className="item-content">
                                    <span className="item-icon">📄</span>
                                    <span className="item-name">Offer 2</span>
                                </div>
                                <span className="item-option">Option</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bottom-nav'>
                <BottomNavigation
                    sx={{ backgroundColor: '#DCF8C7', color: 'black', padding: 1 }}
                    showLabels
                >
                    <BottomNavigationAction sx={{ color: "black" }} label="News" icon={<Wallet color='primary' />} />
                    <BottomNavigationAction sx={{ color: "black" }} label="Activity" icon={<ContentCopy color='primary'  />} />
                    <BottomNavigationAction sx={{ color: "black" }} label="Cart" icon={<Language color='primary'  />} />
                    <BottomNavigationAction sx={{ color: "black" }} label="Account" icon={<Person2 color='primary'  />} />
                </BottomNavigation>
            </div>
        </div>
    )
}

export default Dashboard