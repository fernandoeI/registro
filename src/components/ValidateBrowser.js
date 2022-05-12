import React, { useEffect } from 'react';
import { isIOS, isSafari } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';

const ValidateBrowser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const validateBrowser = () => {
      if (isSafari || isIOS) {
        navigate('/invalid-browser');
        return;
      }
    }
    validateBrowser();
  }, [navigate])
  

  return (
    <div></div>
  );
};

export default ValidateBrowser;