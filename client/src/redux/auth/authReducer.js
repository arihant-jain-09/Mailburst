const initialState={
    user:null,
}
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_USER':
            return {user:action.payload || false}
        default: 
            return state
    }
}

export default authReducer;