import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from './Card';
import axios from 'axios';

export const Main = () => {
    const [url, setUrl] = useState(
        'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=6a5c0755a406d9490952564f44d06492&hash=2792c3307da6bb46d3e4a6da630219c6'
    );
    const [item, setItem] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetch = async() => {
            try {
                const res = await axios.get(url);
                setItem(res.data.data.results);
            } catch (error) {
                console.error('Error fetching characters:', error);
                setItem([]); // Set empty array in case of an error
            }
        };
        fetch();
    }, [url]);

    const searchMarvel = () => {
        setUrl(
            `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=6a5c0755a406d9490952564f44d06492&hash=2792c3307da6bb46d3e4a6da630219c6`
        );
    };

    return ( <
        >
        <
        div className = "header" >
        <
        div className = "bg" >
        <
        img src = "./images/marvel.jpeg"
        alt = "" / >
        <
        /div> <
        div className = "search-bar" >
        <
        img src = "./images/logo192.png"
        alt = "logo" / >
        <
        input type = "search"
        placeholder = "Search Here"
        className = "search"
        onChange = {
            (e) => setSearch(e.target.value) }
        onKeyPress = { searchMarvel }
        /> <
        /div> <
        div >
        <
        Link to = "/events" > View Events < /Link> <
        /div> <
        div >
        <
        Link to = "/stories" > View Stories < /Link> <
        /div> <
        div >
        <
        Link to = "/comics" > View Comics < /Link>  <
        /div> <
        /div> <
        div className = "content" > { item ? < Card data = { item } /> : <p>An Error has Occurred</p > } <
        /div> <
        />
    );
};