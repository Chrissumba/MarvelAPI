// EventsPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { EventsPageCard } from './EventsPageCard';

 const EventsPage = () => {
  const [events, setEvents] = useState( 'https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=6a5c0755a406d9490952564f44d06492&hash=2792c3307da6bb46d3e4a6da630219c6');
  const [item, setItem] = useState();
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(events);
        setItem(res.data.data.results);
       console.log(res.data.data.results)
      } catch (error) {
        console.error('Error fetching Events:', error);
      }
    };

    fetchEvents();
  }, [events]);

  

  return (
    <div style={{ backgroundColor: ' rgba(0, 128, 0, 0.3) ',display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>

        <h2>EVENTS</h2>
       {
        (!item)?<p>Not Found</p>:<EventsPageCard data={item}/>
       }
      </div>
    );
  };
  
  export default EventsPage;