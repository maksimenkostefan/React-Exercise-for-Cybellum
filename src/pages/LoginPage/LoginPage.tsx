import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './style.scss';

import Form from '../../components/Form';
import Text from '../../components/Text/Text';
import { approveLogin } from '../../redux/actions/actionCreators';


function LoginPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const userInfo = document.cookie.split('; ').find(row => row.startsWith('access_token='))?.split('=')[1];
    if (userInfo) dispatch(approveLogin());
  }, [dispatch]);

  return (
    <>
      <div id='container'>
        <div id="form-container">
          <div id="header-text">
            <Text 
              size={26} 
              weight={500} 
              color='#53616A'
            >
              Log in
            </Text>
            <Text 
              size={14} 
              weight={500}
              color='#53616A'
              opacity='50%'
            >
              Enter your email &#038; Password. If you don't have <br/>
              an account please see your email invitation
            </Text>
          </div>
          <Form/>
        </div>
      </div>
    </>
  );
}

export default React.memo(LoginPage);
