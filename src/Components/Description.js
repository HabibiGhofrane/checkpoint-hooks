import React from 'react'
import {Card, Button} from 'react-bootstrap'
import ReactPlayer from 'react-player'
import {  useNavigate, useParams } from 'react-router-dom'


const Description = ({movies}) => {
    const navigate = useNavigate()
    const {id} = useParams()
    const movieDisc = movies && movies.filter((movie) => movie.id == id)
    
   
    return (
        <div>
<Card>
  <Card.Header>{movieDisc.name}</Card.Header>
  <Card.Body>
    <Card.Title> Special title treatment </Card.Title>
    <Card.Text>
      <ReactPlayer url={movieDisc.trailerURL} />
    </Card.Text>
    <Button variant="primary" onClick={()=> navigate (-1)}>Go Back </Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default Description
