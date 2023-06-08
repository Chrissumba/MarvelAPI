import React from 'react'
import { Main } from './Components/Main';
import './Components/style.css'
import { Routes, Route, Outlet } from 'react-router-dom';
import { Marvel } from './Components/Marvel';
import EventsPage from './Components/EventsPage';
import { StoriesPage } from './Components/StoriesPage';
import ComicsPage from './Components/ComicsPage';



const App = () => {
    return ( <
        >

        <
        Routes >
        <
        Route path = "/"
        element = { < Main / > }
        /> <
        Route path = "/:id"
        element = { < Marvel / > }
        /> <
        Route path = "/events"
        element = { < EventsPage / > }
        /> <
        Route path = "/stories"
        element = { < StoriesPage / > }
        /> <
        Route path = "/comics"
        element = { < ComicsPage / > }
        /> <
        /Routes>





        <
        />
    )
}

export default App