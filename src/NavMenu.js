import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Menu, { MenuItem } from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/core/Menu'
import Home from './Home'
import About from './About'
import SecretRoom from './SecretRoom'
import EscapeRoom from './EscapeRoom'
import Wildlife from './Wildlife'
import Events from './Events'

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
		 backgroundcolor: 'LightSkyBlue',
		 border: '0.1rem solid LightSkyBlue',
		 borderradius: '0.25em',
		 color: 'white',
		 fontsize: '1rem',
		 marginLeft: -12,
		 marginRight: 20,
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
	
	section: {
	  backgroundcolor: 'inherit',
	  height: 'auto',
	  position: 'fixed',
	  width: 'inherit',

	},
	
	Root: {
		backgroundcolor: 'LightSkyBlue',
		color: 'White',
		flexGrow: 1,
		borderbottom: '0.1rem solid LightSkyBlue',
	},
	
	Grow: {
		backgroundcolor: 'LightSkyBlue',
		color: 'White',
		flexGrow: 1,
	}

};	

function NavMenu(props) {
	const { classes } = props;
	return(
		<div className={classes.Root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h3" color="inherit" className={classes.Grow}>
						Inventory
					</Typography>
					<Button><li><Link to='/home'>Home</Link></li></Button>
					<Button><li><Link to='/about'>About</Link></li></Button>
					<Button><li><Link to='/escaperoom'>Escape Room</Link></li></Button>
					<Button><li><Link to='/secretroom'>Secret Room</Link></li></Button>
					<Button><li><Link to='/wildlife'>Wildlife</Link></li></Button>
					<Button><li><Link to='/events'>Events</Link></li></Button>
				</Toolbar>				
        	</AppBar>
        </div>
    );
}

NavMenu.propTypes = {
	classes: PropTypes.object.isRequired,	
};

export default withStyles(styles)(NavMenu);