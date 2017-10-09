import React, {Component} from 'react';

class FoodItem extends Component{
    
    render(){
        return (
            <p>{this.props.foodItem}</p>
        )
    }
}

export default FoodItem