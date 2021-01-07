import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import SecretRoom from './SecretRoom'
import Wildlife from './Wildlife'
import Booking from './Booking'
import EscapeRoom from './EscapeRoom'
import History from './History'
import Events from './Events'
//import VirtualizedTable from './VirtualizedTable'

const Main = () => {
	return (
    <main>
    	<Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Booking' component={Booking}/>
            <Route path='/Wildlife' component={Wildlife}/>
            <Route path='/SecretRoom' component={SecretRoom}/>
            <Route path='/EscapeRoom' component={EscapeRoom}/>
            <Route path='/History' component={History}/>
            <Route path='/Events' component={Events}/>
         </Switch>
    </main>
    ) 
};

    
export default Main;