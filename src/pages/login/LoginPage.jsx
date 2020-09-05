import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Api from 'constants/Api';
import 'components/authentication/login/LoginPageContainer.scss';
import LoadingPage from 'pages/loading/LoadingPage';
import LoginPageContainer from 'components/authentication/login/LoginPageContainer';
import get from 'lodash-es/get';

const LoginPage = ({ onTokenObtained }) => {
  const isDestroyed = useRef(false);
  const [ loginInProgress, setLoginInProgress ] = useState(false);

  /**
   * @param {Credentials} credentials
   * @param {function} onSubmitError
   * @return
   */
  const onSignIn = (credentials, onSubmitError) => {
    setLoginInProgress(true);
    const onSignInErrorFn = (error) => onSignInError(error, onSubmitError);

    return axios.post(Api.AUTH_TOKEN, credentials)
      .then(onSignInSuccess)
      .catch(onSignInErrorFn)
      .finally(onSignInFinally);
  };

  const onSignInError = (error, onSubmitError) => {
    const { response } = error;
    const apiErrors = get(response, 'data', {});
    const status = get(response, 'status', 0);
    onSubmitError(apiErrors, status);
  };

  const onSignInFinally = () => {
    if (isDestroyed.current === false) {
      setLoginInProgress(false);
    }
  };

  const onSignInSuccess = (response) => {
    const { token } = response.data;
    onTokenObtained(token);
  };

  useEffect(() => {
    isDestroyed.current = false;
    return () => {
      isDestroyed.current = true;
    };
  });

  return (
    <React.Fragment>
      <LoadingPage visible={ loginInProgress } />
      <LoginPageContainer onSubmit={ onSignIn } visible={ !loginInProgress } />;
    </React.Fragment>
  );
};

LoginPage.propTypes = {
  onTokenObtained: PropTypes.func.isRequired,
};


export default LoginPage;