import React, { Component } from 'react';
import Home from './Pages/Home';
import CSGO from './Pages/CSGO';
import Dota2 from './Pages/Dota2';

export default class ApiGet extends Component {
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount(){
        fetch("www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json()
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.drinks
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        ))
    }
    render() {
        const{error,isLoaded, items}
        if (error) {
            return<p> Error {error.message}</p>
        } else if (!isLoaded) {
            return<p> Loading...</p>
        } else {
            return (
                <ul>
                    {items.map(item =>(
                        <li>
                            {item.strDrink}
                        </li>
                    ))}
                </ul>
                )
        }
        
    }
}
