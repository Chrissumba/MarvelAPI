// StoriesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const StoriesPage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const res = await axios.get(
          'https://gateway.marvel.com:443/v1/public/stories?ts=1&apikey=6a5c0755a406d9490952564f44d06492&hash=2792c3307da6bb46d3e4a6da630219c6'
        );
        setStories(res.data.data.results);
      } catch (error) {
        console.error('Error fetching stories:', error);
        setStories([]); // Set empty array in case of an error
      }
    };

    fetchStories();
  }, []);

  return (
    <div style={{ backgroundColor: 'lightgreen' }}>
      <h2>Stories</h2>
      {stories.length > 0 ? (
        <ul>
          {stories.map((story, index) => (
            <React.Fragment key={story.id}>
              <li>{story.title}</li>
              {index !== stories.length - 1 && <div className="story-divider" />}
            </React.Fragment>
          ))}
        </ul>
      ) : (
        <p>No stories found.</p>
      )}
    </div>
  );
};
