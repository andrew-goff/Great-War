import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { DataGrid } from '@material-ui/data-grid'
import { DataFormat } from 'data-format'
//import 'react-data-grid/dist/react-data-grid.css'
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
import Popper from '@material-ui/core/Popper'
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
		fontfamily: 'Roboto, sans-serif',
		position: 'fixed',
		top: 0,
	},
		
	Button: {
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

const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'title', headerName: 'Title', width: 90 },
	{ field: 'quantity', headerName: 'Quantity', type: 'number', width: 90  },
	{ field: 'description', headerName: 'Description', width: 200 
	}	
];

const rows = [
	{ id: 1, title: 'First Item', quantity: 12, description: 'Add a description about this item'},
	{ id: 2, title: 'Second Item', quantity: 15, description: 'Add a description about this item'},
	{ id: 3, title: 'Third Item', quantity: 22, description: 'Add a description about this item'}
];

const rows1 = [
	{ id: 1, title: 'First Item', quantity: 12, description: 'Add a description about this item' },
	{ id: 2, title: 'Second Item', quantity: 15, description: 'Add a description about this item'},
	{ id: 3, title: 'Third Item', quantity: 22, description: 'Add a description about this item'}
];	

export default function Booking(withStyles)
{	
	return(
		<div id="booking">
			<Header />
			
			<h1>Yearly Ticket Pass</h1>
			<h2>Ticket Prices</h2>
				<DataGrid columns={columns} rows={rows} pageSize={3} />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			<h1>Day Tickets</h1>
			<h2>Day Museum Tickets</h2>
				<DataGrid columns={columns} rows={rows1} pageSize={3} />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			<p>Add a footnote if this applies to your business</p>
			
			<p>image19</p>
			<p>City Walking Tour</p>
			<p>£20.00</p>

			<Button variant="contained" color="primary">Buy Now</Button>
			<p>image2</p>
			
			<p>Pay with PayPal or a debit/credit card.</p>
			<p>A unique walking tour of the City with time to enjoy lunch and shopping too! Maximize your sightseeing with this exceptional tour.</p>
			<Footer />
		</div>
	)
}

