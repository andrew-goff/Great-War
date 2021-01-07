import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu, { MenuItem } from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/core/Menu'

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
		backgroundcolor: '#002855',
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
		backgroundcolor: 'LightSkyBlue',
		color: 'white',
		fontweight: 'bold',
		height: '2.5rem',
		padding: 0,
		textalign: 'center',
		width: '100%'
	},
	
	Root: {
		backgroundcolor: '#2196f3',
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
		
function Header(props){
	const {classes} = props;
	return(
		<header>
			<div className={classes.Root}>
			<h1 className="h1">Stow Maries Aerodrome Museum</h1>
			<title className="header">
				<h1 className="title">Home</h1>

			</title>
				<AppBar position="static">
					<Toolbar>
						<nav>

							<h2 className="h2">More</h2>
							<ul>
								<Button><li><Link to='/'>Home</Link></li></Button>
								<Button><li><Link to='/Contact'>Contact Page</Link></li></Button>
								<Button><li><Link to='/About'>About Us</Link></li></Button>
								<Button><li><Link to='/Events'>Events Page</Link></li></Button>
								<Button><li><Link to='/Booking'>Booking</Link></li></Button>
								<Button><li><Link to='/History'>History</Link></li></Button>
								<Button><li><Link to='/Wildlife'>Wildlife Page</Link></li></Button>
								<Button><li><Link to='/SecretRoom'>Secret Room</Link></li></Button>
								<Button><li><Link to='/EscapeRoom'>Escape Room</Link></li></Button>
							</ul>
						</nav>
					</Toolbar>
				</AppBar>			
			</div>
		</header>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,	
};

export default withStyles(styles)(Header);