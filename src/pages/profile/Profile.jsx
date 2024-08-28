import React, { useState, useEffect } from 'react'
import { AuthSDK } from 'did-idaas-sdk'
import { useNavigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const keycloakConfig = {
  url: "http://ec2-3-106-249-60.ap-southeast-2.compute.amazonaws.com:8080/realms/master",
  realm: "master",
  clientId: "external-league-ui",
  redirectUri: "http://localhost:5173/profile",
}

const AuthSdkConfig = {
  clientId: "league-app-ui",
  token_url: "http://ec2-54-66-182-249.ap-southeast-2.compute.amazonaws.com:8080/realms/third-party-1/protocol/openid-connect/token"
}

const initOptions = {
  checkLoginIframe: false
};

let instance = null;

export const getAuthSDKInstance = () => {
  if (!instance) {
    instance = new AuthSDK(AuthSdkConfig, initOptions);
    console.log('AuthSDK instance created');
  }
  return instance;
};

function Profile() {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();
  const [authSDK, setAuthSDK] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [credentialSubject, setCredentialSubject] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  // useEffect(() => {
  //   const sdk = getAuthSDKInstance();
  //   setAuthSDK(sdk);
  //   sdk.init().then(() => {
  //     if (sdk.isAuthenticated()) {
  //       setAuthenticated(true);
  //     } else {
  //       sdk.login();
  //     }
  //   }).catch(error => {
  //     console.error('Error during Keycloak initialization', error);
  //   });
  // }, []);

  useEffect(() => {
    const sdk = getAuthSDKInstance();
    setAuthSDK(sdk);
    sdk.tokenExchange(keycloak.token).then(response => {
      if (response.success) {
        console.log('Token exchange successful:', response.data);
        setAuthenticated(true);
        setAccessToken(response.data.access_token);
      } else {
        console.error(`Error during token exchange (status: ${response.statusCode}): ${response.message}`);
        // Show an alert or other UI feedback based on the status code and message
      }
    })
  }, [])

  const handleFetchVC = async () => {
    try {
      const response = await authSDK.fetchVC();
      if (response && response.length > 0) {
        // Assuming you want to display the first VC's credentialSubject
        setCredentialSubject(response[0].credentialSubject);
      }
    } catch (error) {
      console.error("Failed to fetch VC:", error);
    }
  };

  const redirect = () => {
    const targetDomain = "http://localhost:5174";
    const data = {
      token: accessToken,
    };
    const queryParams = new URLSearchParams(data).toString();
    const targetUrl = `${targetDomain}/?${queryParams}`;

    // Perform the redirect
    window.open(targetUrl, '_blank');
  }

  return (
    <>
      <div style={{ padding: 10 }}>
        <h2>Baaj Group</h2>
        {authenticated ? <button onClick={handleFetchVC}>Fetch Verified Credentials</button> : (
          <Alert severity="warning">
            Session is not available. Please login to baaj group once as a prerequisite.
          </Alert>
        )}
        {credentialSubject && (
          <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px' }}>
            <h3>User Details</h3>
            <p><strong>Username:</strong> {credentialSubject.username}</p>
            <p><strong>Email:</strong> {credentialSubject.email}</p>
            <p><strong>First Name:</strong> {credentialSubject.firstName}</p>
            <p><strong>Last Name:</strong> {credentialSubject.lastName}</p>
            <div>
              <strong>Address:</strong>
              <ul>
                <li>Street: {credentialSubject.address.street}</li>
                <li>City: {credentialSubject.address.city}</li>
                <li>Zipcode: {credentialSubject.address.zipcode}</li>
                <li>State: {credentialSubject.address.state}</li>
                <li>Country: {credentialSubject.address.country}</li>
              </ul>
            </div>
            <p><strong>Phone Number:</strong> {credentialSubject.phoneNumber}</p>
            <p><strong>Date of Birth:</strong> {credentialSubject.dateOfBirth}</p>
            <div>
              <button className="login-btn">
                <span onClick={() => navigate('/')} className='btn-text'>Home</span>
              </button>
            </div>
          </div>
        )}
        {authenticated && (
          <button className="login-btn" style={{ marginTop: '20px' }}>
            <span onClick={() => redirect()} className='btn-text'>Go to external app</span>
          </button>
        )}
      </div>
    </>
  )
}

export default Profile