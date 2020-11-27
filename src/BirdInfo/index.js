import React from 'react';
import { useParams } from 'react-router-dom';
import { Media, Button } from 'react-bootstrap';
import { birds } from '../birds';

const BirdInfo = (props) => {
  const params = useParams();
  const bird = birds.find((bird) => bird.name === params.bird);
  return (
    <Media>
      <Media.Body className='ml-5 mr-5'>
        <Button className='mt-5' onClick={() => props.history.goBack()}>
          Go Back
        </Button>
        <h3 className='text-center mt-5 mb-5'>{bird.name}</h3>
        <h5 className='text-center'>Description</h5>
        <p>{bird.description}</p>
        <h5 className='text-center'>Life History</h5>
        <p>{bird.lifeHistory}</p>
        <h5 className='text-center'>Distribution and Habitat</h5>
        <p>{bird.distributionAndHabitat}</p>
        <h5 className='text-center'>Status</h5>
        <p>{bird.status}</p>
        <h5 className='text-center'>Management and Research Needs</h5>
        <p>{bird.managementAndResearchNeeds}</p>
      </Media.Body>
    </Media>
  );
};

export default BirdInfo;
