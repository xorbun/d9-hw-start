import { get_job } from "../actions";



const initialState={
     
    content:[],

}
const addjob=(state=initialState, action)=>
{
    switch(action.type)
    {
        case get_job:
        return{
            ...state,
                content: action.payload,
        }
        default: return state
    }
}
export default addjob