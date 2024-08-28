import React from 'react'
import Logo from '../../assets/icons/logo.svg'
import Loginicon from '../../assets/icons/login-icon.svg'
import { useKeycloak } from '@react-keycloak/web'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
    const { keycloak } = useKeycloak();
    const navigateToProfile = () => {
        navigate('/profile');
    }
    return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            {!keycloak.authenticated ? (
                <button className="login-btn">
                    <span className='btn-icon'>
                        <img src={Loginicon} alt="login-icon" />
                    </span>
                    <span onClick={() => keycloak.login()} className='btn-text'>Member Login</span>
                </button>
            ) : (
                <>
                  <button className="login-btn">
                    {/* <span className='btn-icon'>
                        <img src={Loginicon} alt="login-icon" />
                    </span> */}
                    <span onClick={navigateToProfile} className='btn-text'>Access Baaj Group</span>
                </button>
                <button className="login-btn">
                    <span className='btn-icon'>
                        <img src={Loginicon} alt="login-icon" />
                    </span>
                    <span onClick={() => keycloak.logout()} className='btn-text'>Logout</span>
                </button>
                </>
            )}
        </header>
    )
}

export default Header