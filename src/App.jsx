/* global FB */ // This comment inform ESLint that 'FB' is a global variable

import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const isMountedRef = useRef(false);
  const navigate = useNavigate();
  const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

  useEffect(() => {
    // use to stop fetching twice when this page is loaded
    if (!isMountedRef.current) {
      isMountedRef.current = true;
    } else {
      return;
    }
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function () {
        FB.init({
          appId: facebookAppId,
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
  }, []);

  const statusChangeCallback = (response) => {
    console.log(response);
    if (response.status === 'connected') {
      navigate('/profile');
    } else {
      console.log('Please log into this webpage.');
    }
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    FB.login(function (response) {
      if (response.status === 'connected') {
        statusChangeCallback(response);
      } else {
        console.log('Login failed or cancelled.');
      }
    }, { scope: 'public_profile,email' });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-lime-600 to-black">
      <div className="w-4/5 md:w-3/5 lg:w-2/5 bg-gradient-to-br from-lime-600 to-lime-900 rounded-lg shadow-xl flex flex-col md:flex-row justify-center items-center p-8">

        {/* Left Section: Greeting Newcomers */}
        <div className="w-full md:w-1/2 text-white p-8 rounded-lg">
          <div className="max-w-md text-center">
            <h2 className="text-4xl mb-4 font-bold">Welcome!</h2>
            <p className="text-lg">Currently normal login is not available. Please use Facebook to sign in.</p>
          </div>
        </div>

        {/* Right Section: Login Form */}
        <div className="w-full md:w-1/2">
          <div className="shadow-md rounded px-8 pt-6 pb-8 bg-white" >
            <form>
              <h2 className="text-3xl mb-8 text-center font-bold text-lime-900">Login</h2>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="*********"
                />
              </div>
              <div className="mb-4 text-center">
                <button
                  className="bg-gradient-to-br from-lime-500 to-lime-700 hover:bg-gradient-to-br from-lime-600 to-lime-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                  type="submit"
                >
                  Sign In
                </button>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Forgot Password?
                </a>
              </div>
              <hr className="mb-4" />

            </form>
            <div className="flex justify-center">
              <div className="facebook-btn">
                <button
                  onClick={handleLoginClick}
                  className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                >
                  Sign in with Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default App;
