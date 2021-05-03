import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
export default class Rating extends Component {
    state = {
        rating: 1
      };
      onStarClick = (nextValue, prevValue, name) => {
        this.setState({rating: nextValue});
        this.props.rating(nextValue);
      }
render(){

    return (
<div>

    <StarRatingComponent value={this.state.rating} onStarClick={this.onStarClick}/>
</div>

    )
}



}
