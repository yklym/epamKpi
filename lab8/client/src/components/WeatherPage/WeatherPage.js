import React, {
    useState,
    useEffect
} from "react";
import { useHistory } from 'react-router-dom';
import {getCookie} from "../../utils.js/cookie";
import {Spinner, Card} from "react-bootstrap";

import "./WeatherPage.css";

export default function(){
    const [currUser] = useState(getCookie("user"));
    const [cards, setCards] = useState([]);
    const history = useHistory();

    useEffect(()=>{
        if(!currUser){
            alert("Forbidden");
            history.push("/login");   
        }
        console.log("IM USING EFFECT")
        const url ="https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/924938/";
        fetch(url, {
            method : "GET",
            mode: 'cors', 

        }).then(responce=>{
            console.log(responce);
            return responce.json();
        }).then(parsedResp=>{
            setCards(parsedResp.consolidated_weather);
            console.log(cards);
        })
    }, [currUser, cards, history]);
    
    return (
        <main id="cardWrapper">
            {cards.length ? cards.map(card => weatherCard(card)): loader()}
        </main>
    );

}

function loader(){
    return(
    <div  id="loader">
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
        <p>Loading...</p>
    </div>);
}

function weatherCard(card){
    return (
        <Card style={{ width: '18rem' }} key={card.applicable_date}>
            <Card.Body>
                <Card.Title>{card.applicable_date}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{card.weather_state_name}</Card.Subtitle>
                
                    <ul className="card-text">
                        <li>max_temp : {card.max_temp}</li>
                        <li>air_pressure : {card.air_pressure}</li>
                        <li>humidity : {card.humidity}</li>
                        <li>SMTH</li>
                    </ul>

            </Card.Body>
        </Card> 
    );
}