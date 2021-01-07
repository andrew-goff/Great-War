import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Imagecarousel from './Imagecarousel'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import Header from './Header'
import Beaver from './images/Beaver.JPG'
import Goldcrest from './images/Goldcrest_Stretton.JPG'
import Hare from  './images/Hare (taken by Denis Stretton).jpg'
import Owl from './images/Owl.JPG'
import Sparrow from './images/Sparrow.JPG'
import Squirrel from './images/Squirrel.JPG'
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

function Image(props)
{
	var items = [
		{ 	
			src: "Beaver.JPG",
			width: "100",
			height: "100",
			name: "Beaver",
			description: "Picture of Beaver"
		},
		{ 
			src: "Goldcrest_Stretton.JPG",
			width: "100",
			height: "100",
			name: "Goldcrest",
			description: "Picture of Goldcrest"
		},
		{ 
			src: "Beaver.JPG",
			width: "100",
			height: "100",
			name: "Beaver",
			description: "Picture of Beaver"
		},
		{ 
		    src: "Hare (taken by Denis Stretton).jpg",
			width: "100",
			height: "100",
			name: "Hare",
			description: "Picture of Hare"
		},
		{ 
			src: "Owl.JPG",
			width: "100",
			height: "100",
			name: "Owl",
			description: "Picture of Owl"
		},
		{ 
			src: "Sparrow.JPG",
			width: "100",
			height: "100",
			name: "Sparrow",
			description: "Picture of Sparrow"
		},
		{ 
			src: "Squirrel.JPG",
			width: "100",
			height: "100",
			name: "Squirrel",
			description: "Picture of Squirrel"
		}
	]
	
	return(
		<div>
			<Carousel>
			{
				items.map((item, i) => <Item key={i} item={item} />)
			}
			</Carousel>
			<p>{props.item.src}</p>
			<p>{props.item.name}</p>
			<p>{props.item.description}</p>			
		</div>
	)
}


function Wildlife(props)
{
	const {classes} = props;
	return(
		<div id="wildlife">
			<br />
			<h2>About the Wildlife</h2>
			<br />
			<h2>Photo Gallery</h2>
			<Paper>
				<p>image431image432image433image434image435image436image437</p>
			</Paper>
			<Button variant="contained" color="primary" className="Button">Click</Button>
				<ul>
					<p width="25" height="25"><img src={Beaver} ></img></p>
					<p>Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<p>Id aliquet risus feugiat in. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Condimentum mattis pellentesque id nibh tortor id aliquet.</p>
					<br />
				</ul>
				<ul>
					<p width="25" height="25"><img src={Sparrow} ></img></p>
					<p>Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in.</p>
					<p>Blandit cursus risus at ultrices mi tempus imperdiet nulla. Condimentum mattis pellentesque id nibh tortor id aliquet. </p>
					<br />
				</ul>
				<ul>
					<p width="25" height="25"><img src={Owl} ></img></p>
					<p>Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Condimentum mattis pellentesque id nibh tortor id aliquet.</p>  
					<br />
				</ul>
			<h2>Additional Wildlife Section</h2>
			<Grid container direction="row" justify="left" alignitems="left" className={classes.Root}>
				<p>image500.</p> 
				<p>Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p> 
			</Grid>
			<Grid container direction="row" justify="center" alignitems="center" className={classes.Root}>
				<p>image501.</p> 
				<p>Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p> 
			</Grid>
			<Grid container direction="row" justify="right" alignitems="right" className={classes.Root}>
				<p>image502. Lorem ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, .</p>
			</Grid> 

		</div>
	);
}

Wildlife.propTypes = {
	classes: PropTypes.object.isRequired,	
};

export default withStyles(styles)(Wildlife);

