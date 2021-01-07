import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import { render } from 'react-dom'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
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
import VirtualizedTable from './VirtualizedTable'

export default function EscapeRoom(){
	return(
		<div className={classes.Root}>
		<Header>
			<title className="header">
				<h1 className="title">Home</h1>
				Stow Maries Aerodrome Museum
			</title>
			<title className="header">
				<h1 className="title">Contact Page</h1>
			</title>
			<title className="header">
				<h1 className="title">About Us</h1>
			</title>
			<title className="header">
				<h1 className="title">Events Page</h1>
			</title>
			<title className="header">
				<h1 className="title">Booking</h1>
			</title>
			<title className="header">
				<h1 className="title">More</h1>
			</title>
			<title className="header">
				<h1 className="title">Site Content</h1>
			</title>
			<title className="header">
				<h1 className="title">Additional Information</h1>
			</title>
		</Header>
		
		<p>This is a long form text area designed for your content that you can fill up with as many words as your heart desires. You can write articles, long mission statements, company policies, executive profiles, company awards/distinctions, office locations, shareholder reports, whitepapers, media mentions and other pieces of content that don’t fit into a shorter, more succinct space.</p>
		<p>Articles – Good topics for articles include anything related to your company – recent changes to operations, the latest company softball game – or the industry you’re in. General business trends (think national and even international) are great article fodder, too.</p>
		<p>Mission statements – You can tell a lot about a company by its mission statement. Don’t have one? Now might be a good time to create one and post it here. A good mission statement tells you what drives a company to do what it does.</p>
		<p>Company policies – Are there company policies that are particularly important to your business? Perhaps your unlimited paternity/maternity leave policy has endeared you to employees across the company. This is a good place to talk about that.</p>
		<p>Executive profiles – A company is only as strong as its executive leadership. This is a good place to show off who’s occupying the corner offices. Write a nice bio about each executive that includes what they do, how long they’ve been at it, and what got them to where they are.</p>
		
		<Footer>
			<p>image753 Copyright © 2019 Great War</p>
			<p>Museum - All Rights Reserved.</p>
			<p>Privacy Policy</p>
		</Footer>
		
		</div>		
	);
}
