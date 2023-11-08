export const add_to_favorite="add_to_favorite"
export const deleter="delete"
export const get_job="get_job"
const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const obtainjob=(query)=>
{
    return async(dispatch)=>
    {
        fetch(baseEndpoint + query + "&limit=20")
        .then((res)=>
        {
            if(res.ok)
            {
                return res.json()
            }
            else
            {
                throw new Error("errore")
            }
        })
        .then((job)=>
        {
            console.log(job)
            dispatch({
                type:get_job,
                payload:job.data,
            })
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}