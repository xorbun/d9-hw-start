import { Row, Col, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'



const Job = ({ data }) => {
  
  const dispatch=useDispatch()
  return(
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
    <button onclick={()=>
          {
            dispatch({
              type:'add_to_favorite',
              payload:data.company_name,
            })
          }}><Link to={`/${data.company_name}`}>{data.company_name}</Link></button>
      
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
  )
}

export default Job
