import React, { useEffect } from 'react';
import RouterView from './Router';
import './assets/ant-d.less'
import './assets/css/base.css'
import './assets/css/common.css'
import './assets/css/colors.css'
import './assets/css/index.css'
import './assets/css/custom.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { post } from './services/http-request';

function App() {
  const getCurrentProfile = async () => {
    const response = await post('me')
    console.log(response.data)
  }
  useEffect(() => {
    getCurrentProfile()
  }, [])
  return (
    <div className="App">
      <RouterView />
    </div>
  );
}

export default App;
