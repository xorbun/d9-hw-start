import { add_to_favorite, deleter} from "../actions";


const initialState={
     
         content:[],
     
}
const addtofavorite=(state=initialState, action)=>
{
    switch(action.type)
    {
        case add_to_favorite:
        return{
            ...state,
            content:[...state.content, action.payload]
        
    }
    case deleter:
                 return{
                        ...state,
                         content: state.content.filter(
                             (job,i)=> i!== action.payload
                         )
                     
                 }
    
                 default: return state

}
}
    export default addtofavorite
