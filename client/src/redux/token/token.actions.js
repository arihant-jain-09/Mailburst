import axios from 'axios';
export const handleToken=(token)=>{
    
    return async(dispatch)=>{
        const response=await axios.post('/api/stripe',token);
        dispatch({type:'FETCH_USER',payload:response.data})
    }
}
//use same reducer of auth