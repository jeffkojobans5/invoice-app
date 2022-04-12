import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
const queryString = require('query-string');

const backendUrl = "http://localhost:1337"

const LoginRedirect = (props) => {
  const [text, setText] = useState('Loading...');
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const parsed = queryString.parse(location.search);

  console.log(parsed);

  useEffect(() => {
    // Successfully logged with the provider
  console.log(location.search)
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(`${backendUrl}/api/auth/auth0/callback?access_token=${parsed.access_token}`)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        localStorage.setItem('jwt', res.jwt);
        localStorage.setItem('username', res.user.username);
        // setText('You have been successfully logged in. You will be redirected in a few seconds...');
        setText('');
        setTimeout(() => window.location.href = 'http://localhost:3000' , 3000); // Redirect to homepage after 3 sec
      })

      .catch(err => {
        console.log(err);
        setText('An error occurred, please see the developer console.')
      });
  }, [ navigate , location , location.search, params.providerName]);

  return <p>{text}</p>
};

export default LoginRedirect;