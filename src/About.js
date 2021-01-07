import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import Header from './Header'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableFooter from '@material-ui/core/TableFooter'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import { withStyles } from '@material-ui/core/styles'
import { AutoSizer, Column} from 'react-virtualized'
import Footer from './Footer'

const styles = {
	html: {
		mstextsizeadjust: 'auto',
		mozboxsizing: 'border-box',
		webkitboxsizing: 'border-box',
		webkittextsizeadjust: 'auto',
		backgroundcolor: 'LightYellow',
		boxsizing: 'border-box',
		borderradius: '0.25em',
		display: 'block',
		fontfamily: 'Roboto, sans-serif',
		fontsize: '12px',
		lineheight: '0.15rem',
		overflow: 'hidden',
		padding: '0.5rem'
	},
			
	header: {
		backgroundcolor: 'inherit',
		height: 'auto',
		position: 'fixed',
		top: 0,
	},
		
	button: {
		backgroundcolor: '#002855',
		border: '0.1rem solid #002855',
		borderradius: '0.25em',
		color: 'white',
		fontsize: '1rem',
		padding: '0.3rem 0.3rem'
	},
		
	body: {
		border: 'transparent 0',
		margin: 0,
		opacity: 1,
		overflow: 'hidden',
		padding: '0 1rem 0 0',
		width: '98%'
	},

	title: {
		backgroundcolor: '#002855',
		color: 'white',
		fontweight: 'bold',
		height: '2.5rem',
		padding: 0,
		textalign: 'center',
		width: '100%'
	},
	
	Root: {
		backgroundcolor: '#002855',
		color: 'White',
		flexGrow: 1,
		borderbottom: '0.1rem solid LightSkyBlue',
	},
		
	paper: {
		bordercollapse: 'collapse',
		color: 'LightSkyBlue',
		borderbottom: '0.1rem solid LightSkyBlue',
		overflow: 'hidden',
		//marginbottom: theme.spacing.unit,
		//padding: theme.spacing.unit,
		tablelayout: 'fixed',
		textalign: 'left',
		verticalalign: 'middle',
		width: '100%'
	},
	
	AppBar: {
		backgroundcolor: '#2196f3',
		color: 'White',
		flexGrow: 1,
		borderbottom: '0.1rem solid LightSkyBlue',
	},

	
	section: {
		backgroundcolor: 'inherit',
		height: 'auto',
		position: 'fixed',
		width: 'inherit',
	},
};		

function About(props){
	const {classes} = props;
	
	return(
		<div>
			<Header />
			<h1>About Us</h1>
			<h2>About</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam quam nulla porttitor. Euismod quis viverra nibh cras pulvinar mattis nunc. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus.</p> 
			<p>Aliquet lectus proin nibh nisl condimentum id venenatis a condimentum. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. </p> 
			<br />
			
			<p>Quis risus sed vulputate odio ut enim blandit volutpat. Leo duis ut diam quam nulla porttitor massa id neque. Aliquam vestibulum morbi blandit cursus risus at ultrices mi. </p> 
			<p>Purus in mollis nunc sed id semper risus. Nunc mattis enim ut tellus. Amet risus nullam eget felis eget nunc lobortis mattis. Lectus magna fringilla urna porttitor rhoncus dolor purus non enim. Consectetur purus ut faucibus pulvinar elementum. Et malesuada fames ac turpis egestas integer. </p>
			<br />
			<br />
			<h2>Generate excitement</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?  Lorem mollis aliquam ut porttitor. Maecenas pharetra convallis posuere morbi leo urna molestie at.</p>
			<br />
			
			<h2>Links</h2>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Lorem mollis aliquam ut porttitor. Nisl vel pretium lectus quam id leo in vitae.</p>
			
		</div>
	)
}
 
export default withStyles(styles)(About);