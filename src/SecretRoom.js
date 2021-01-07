import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import Frame from 'react-frame-component'
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
		fontfamily: 'Verdana, sans-serif',
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
		backgroundcolor: '#2002855',
		border: '0.1rem solid #2002855',
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
		backgroundcolor: '#2002855',
		color: 'white',
		fontweight: 'bold',
		height: '2.5rem',
		padding: 0,
		textalign: 'center',
		width: '100%'
	},
	
	Root: {
		backgroundcolor: '#2002855',
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

function SecretRoom(props){
	const {classes} = props;
	
	return(
		<div>
			<Header />
			ReactDOM.render(
				<Frame>
					<header>Widget: </header>
				</Frame>, document.body
			);	
			<Footer />
		</div>
	)
}

SecretRoom.propTypes = {
	classes: PropTypes.object.isRequired,	
};

export default withStyles(styles)(SecretRoom);