import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const Marvel = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [comics, setComics] = useState(null);
    const [events, setEvents] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            const characterResponse = await axios.get(
                `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=6a5c0755a406d9490952564f44d06492&hash=2792c3307da6bb46d3e4a6da630219c6`
            );
            const comicsResponse = await axios.get(
                `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=6a5c0755a406d9490952564f44d06492&hash=2792c3307da6bb46d3e4a6da630219c6`
            );
            const eventsResponse = await axios.get(
                `https://gateway.marvel.com:443/v1/public/characters/${id}/events?ts=1&apikey=6a5c0755a406d9490952564f44d06492&hash=2792c3307da6bb46d3e4a6da630219c6`
            );
            setCharacter(characterResponse.data.data.results[0]);
            setComics(comicsResponse.data.data.results);
            setEvents(eventsResponse.data.data.results);
        };

        fetchData();
    }, [id]);

    return ( <
        div className = "box-content" > {
            character && ( <
                div className = "right-box" >
                <
                img src = { `${character.thumbnail.path}.${character.thumbnail.extension}` }
                alt = "" / >
                <
                /div>
            )
        } {
            character && ( <
                div className = "left-box" >
                <
                h1 > { character.name } < /h1> <
                h4 > { character.description } < /h4> {
                    events && ( <
                        div className = "events" >
                        <
                        h2 > Events: < /h2> <
                        ul > {
                            events.map((event) => ( <
                                li key = { event.id } > { event.title } < /li>
                            ))
                        } <
                        /ul> <
                        /div>
                    )
                } <
                /div>
            )
        } {
            comics && ( <
                div className = "comics" >
                <
                h2 > Comics: < /h2> <
                ul > {
                    comics.map((comic) => ( <
                        li key = { comic.id } > { comic.title } < /li>
                    ))
                } <
                /ul> <
                /div>
            )
        } <
        /div>
    );
};