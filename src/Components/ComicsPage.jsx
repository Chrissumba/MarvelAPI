import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ComicsPageCard } from './comicsPageCard';
const ComicsPage = () => {
    const [comics, setComics] = useState( 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=6a5c0755a406d9490952564f44d06492&hash=2792c3307da6bb46d3e4a6da630219c6');
    const [item, setItem] = useState();
  
    useEffect(() => {
      const fetchComics = async () => {
        try {
          const res = await axios.get(comics);
          setItem(res.data.data.results);
          console.log(res.data.data.results)
        } catch (error) {
          console.error('Error fetching comics:', error);
        }
      };
  
      fetchComics();
    }, [comics]);

    
  
    return (
      <div style={{ backgroundColor: ' rgba(0, 128, 0, 0.3) ',backgroundImage:'url(./images/heroes.jpg)' ,display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>


          <h2>Comics</h2>
         {
          (!item)?<p>Not Found</p>:<ComicsPageCard data={item}/>
         }
        </div>
      );
    };
    
    export default ComicsPage;