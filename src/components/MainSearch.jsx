import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Job from "./Job";
import { obtainjob } from "../redux/actions";
import { useDispatch,useSelector } from "react-redux";


const MainSearch = () => {
  const [query, setQuery] = useState("");
 

  const handleChange = e => {
    setQuery(e.target.value);
  };
const dispatch=useDispatch()
const jobsfromredux=useSelector((state)=>{
  return state.job.content
})
return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={(e)=>{
            e.preventDefault()
            dispatch(obtainjob(query))}}>
            
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsfromredux.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;