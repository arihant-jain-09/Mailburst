import axios from 'axios'
export const submitSurvey=(props)=>{
  const {form,history}=props;
  return async(dispatch)=>{    
    const res=await axios.post('/api/surveys',form);
    dispatch({type:"FETCH_USER",payload:res.data})
    history.push('/');
  }
}