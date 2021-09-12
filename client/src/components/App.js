import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import Header from './Header/Header'
import Landing from './Landing/Landing';
import SurveyNew from './SurveyNew/SurveyNew';
import Dashboard from './Dashboard/Dashboard';
import { fetchUser } from '../redux/auth/auth.action';
import { useEffect } from 'react';
import axios from 'axios';
window.axios=axios;
const App=()=> {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    return () => {
      
    }
  }, [dispatch])
  return (
    <div className='container'>
      <BrowserRouter>
         <Header/>
         <Switch>
            <Route path='/' exact component={Landing}/>
            <Route path='/surveys' exact component={Dashboard}/>
            <Route path='/surveys/new' component={SurveyNew}/>
         </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
