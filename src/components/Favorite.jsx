import { ListGroup } from "react-bootstrap";
import  {useSelector}  from "react-redux";
import {ListGroupItem} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleter } from "../redux/actions";


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
              type: deleter,
              payload:i,
            }) }}>cancella</button>
              </ListGroupItem>
            ))}
          </ListGroup>
    )
}
export default Favorite