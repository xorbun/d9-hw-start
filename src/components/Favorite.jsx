import { ListGroup } from "react-bootstrap";
import  {useSelector}  from "react-redux";
import {ListGroupItem} from "react-bootstrap";
import { useDispatch } from "react-redux";



const Favorite=()=>
{
    const dispatch= useDispatch()
    const favoritejob= useSelector ((state)=>state.job.content)
    return(
        <ListGroup>
            {favoritejob.map((fav,i) => (
              <ListGroupItem key={i}>
                {fav}
                <button onClick={()=>
          {
            dispatch({
              type:'delete',
              payload:i,
            }) }}>cancella</button>
              </ListGroupItem>
            ))}
          </ListGroup>
    )
}
export default Favorite