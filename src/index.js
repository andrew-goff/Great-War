//require('custom-env').env('staging')
//require('custom-env').env(true)
//console.log(process.env.SKIP_PREFLIGHT_CHECK=true)
import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import Paper from '@material-ui/core/Paper'
import Menu, { MenuItem } from '@material-ui/core/Menu'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'
//import jsx from 'react/jsx-runtime'
//import jss from 'jss'
//import preset from 'jss-preset-default';
import './App.css'
import App from './App'

render((<BrowserRouter>
			<App />
		</BrowserRouter>
), document.getElementById('root'));