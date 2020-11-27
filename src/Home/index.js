import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { birds } from '../birds';

const Home = (props) => {
  return (
    <Container fluid>
      <Row xs={2} lg={4}>
        {birds.map((bird, index) => (
          <Col key={index} className='mb-5 mt-5'>
            <p>{bird.name}</p>
            <Image
              onClick={() => props.history.push(`/${bird.name}`)}
              role='button'
              thumbnail={true}
              src={bird.image}
              rounded
              fluid
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
