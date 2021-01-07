import React, {Component} from 'react'
import Header from './Header'
//import NavMenu from './NavMenu'
import MainMenu1 from './MainMenu1'
import './App.css'
import Home from './Home'

class App extends Component {
	state = {
		Home: []
	}
	
	componentDidMount() {
			fetch('http://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then((data) => {
				this.setState({home: data})
			})	
			.catch(console.log)
	}
	
	render(){
		return (
		<div>
			<Header />	
			<MainMenu1 />
			<Home home={this.state.home} />
		</div>
		);
	}
}

export default App
