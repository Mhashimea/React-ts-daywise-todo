import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './assets/ant-d.less';
import './assets/css/base.css';
import './assets/css/colors.css';
import './assets/css/common.css';
import './assets/css/custom.css';
import './assets/css/index.css';
import RouterView from './Router';
import { GetUsers } from './store/actions';
import AppStore from './store/index'
import { Provider } from 'react-redux'

function App() {
  const dispatch = useDispatch()

  const getCurrentProfile = async () => {
    dispatch(GetUsers())
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
