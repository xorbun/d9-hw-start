const initialState={
    job:
    {
        content:[],
    }
}

const mainReducer =
(
    state= initialState,
    action
) =>
{
    switch(action.type)
    {
        case 'add_to_favorite':
        return{
            ...state,
            job: {
                ...state.job,
                content:[...state.job.content, action.payload]
            }
        }
        case 'delete':
        return{
            ...state,
            job: {
                ...state.job,
                content: state.job.content.filter(
                    (job,i)=> i!== action.payload
                )
            }
        }
        default: return state
    }
}
export default mainReducer