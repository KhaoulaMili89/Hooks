import React from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';


const ListMovies = (props) =>
{
    return (
    <div className="ListMovies">
{props.movies.map(el => (
<div className="movie">
  <Card style={{ width: '20rem' }}> 
  <Card.Img variant="top" src={el.Poster} width="300" height="400"/>
  <Card.Body>
    <Card.Title className="T">{el.Title}</Card.Title>
    <Card.Text className="Desc" >{el.Description}</Card.Text>
<StarRatingComponent value={el.Rating}/>
  </Card.Body>
</Card>
</div>
))}
    </div>
    )
    
}
export default ListMovies;