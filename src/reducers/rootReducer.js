import axios from 'axios'
const initState = {
    // const state = {
        
    // }
    
    // return state
    posts:[]
}

const rootReducer = (state = initState , action)=>{
    console.log('The posts in rootreducer')
    
    if(action.type === 'INIT'){
        console.log(action)
         axios.get('https://jsonplaceholder.typicode.com/posts/')
          .then(res => {
              console.log('The res object is')
            console.log(res.data);
           
            state.posts = res.data.slice(0,10)
            console.log('The state is',state)
            return state
            
            
          })
          console.log(state)
        return state
    }
    else{
        return state
    }
    
    
   

}

export default rootReducer;