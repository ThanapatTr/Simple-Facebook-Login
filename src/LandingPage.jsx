/* global FB */ // This comment informs ESLint that 'FB' is a global variable

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const isMountedRef = useRef(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // use to stop fetching twice when this page is loaded
    if (!isMountedRef.current) {
      isMountedRef.current = true;
    } else {
      return;
    }
    console.log("hellooo");
    const loadFacebookSDK = () => {
      console.log("initilized facebookSDK");
      window.fbAsyncInit = function () {
        FB.init({
          appId: '1112907959859459',
          cookie: true,
          xfbml: true,
          version: 'v19.0'
        });
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
    FB.getLoginStatus(function (response) {
      console.log(response);
      statusChangeCallback(response);
    });
  }, []);

  const getUserInfo = () => {
    FB.api(
      '/me',
      'GET',
      { "fields": "id,name,about,email,picture" },
      function (response) {
        console.log(response);
        setUserData(response);
      }
    );
  };

  const statusChangeCallback = (response) => {
    console.log(response);
    if (response.status === 'connected') {
      getUserInfo(); // Fetch user info if user is logged in
    } else {
      navigate('/'); // Redirect to home page if user is not logged in
    }
  };

  const handleLogoutClick = () => {
    FB.getLoginStatus(function (response) {
      if (response.status === "connected") {
        logUserOut(response); // Log user out if user if logged in
      } else {
        navigate('/');
      }
    });
  };

  const logUserOut = () => {
    FB.logout(function (response) {
      navigate('/');
    });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-lime-600 to-black">
      <div className="w-4/5 md:w-3/5 lg:w-2/5 bg-gradient-to-br from-lime-600 to-lime-900 rounded-lg shadow-xl flex flex-col md:flex-row justify-center items-center p-8">

        {/* Left Section: Greeting users */}
        <div className="w-full md:w-1/2 text-white p-8 rounded-lg">
          {userData ? (
            <div className="max-w-md text-center">
              <h2 className="text-4xl mb-4 font-bold">Welcome!</h2>
              <h2 className="text-3xl">{userData.name}</h2>
            </div>
          ) : (
            <div className="max-w-md text-center">
            </div>
          )}
        </div>

        {/* Right Section: User Profile */}
        <div className="w-full md:w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {userData ? (
              <div className="text-center">
                <img
                  className="block mx-auto rounded-full w-16 h-16 mb-4"
                  src={userData.picture.data.url}
                  alt="Profile"
                />
                <h2 className="text-2xl font-bold mb-2">{userData.name}</h2>
                <p className="text-lg text-gray-700 mb-4">{userData.email}</p>
                <p className="text-base text-gray-700">{userData.about}</p>
                <div className="flex justify-center mt-8">
                  <button
                    className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-center text-lg text-gray-700">Loading user data...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
