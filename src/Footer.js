import React, {Component} from 'react'
import { Link, Router,  } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
thead: {
	  backgroundcolor: 'LightSkyBlue',
	  color: 'white',
	  fontweight: 'bold',
	  height: '3rem',
	  padding: 0,
	  textalign: 'left',
	  width: '100%'
	},
	
	table: {
		 bordercollapse: 'collapse',
		 borderbottom: '0.1rem solid LightSkyBlue',
		 overflow: 'hidden',
		 padding: 0,
		 tablelayout: 'fixed',
		 textalign: 'left',
		 verticalalign: 'middle',
		 width: '100%'
	},
	footer: {
		fontfamily: 'Arial, Helvetica, sans-serif',
    	size: '2em',
    	style: 'normal',
    	height: '2.5rem',
    	fontweight: 'bold',
    	fontvariant:'normal',
    	texttransform: 'none',
    	backgroundcolor: 'yellow',
    	color: 'white',
    	padding: 0,
    	textalign: 'center',
    	width: '100%'
	}
}

const renderFooter = (navLink, addFooter) => {
	navLink = (title, href, action, id) => {
		let li = document.getElementById('li');
		let a = document.getElementById('a');
		if (id) { 
			a.id = id;
		}
		
		a.className = 'nav-button';
		a.href = href;
		if (action) { 
			a.addEventListener('click', action); 
		}
		a.addText(a, title);
		li.appendChild(a);
		return li;
	}
	
	addFooter = () => {
		let div = document.getElementsByTagName('FOOTER')[0];
		div.removeChildren(div);
		
		let hr = document.createElement('hr');
		hr.className = "highlight";
		div.appendChild(hr);
		
		let ul = document.createElement('ul');
		ul.className = "footer";
		div.appendChild(ul);
		
		let li = document.createElement('li');
		div.addtext(li, 'Privacy Policy');
		div.addText(li, 'image753 Copyright © 2019 Great War');
		div.addText(li, 'Welcome to Great War Airdrome Museum');
		div.addText(li, 'Museum - All Rights Reserved.');
		div.appendChild(li);
		
		ul.appendChild(navLink('ABOUT', '#', div.about, 'license'));
		
		return navLink;
	}
	
	return(
		<footer className="footer" variant="h4">
			<div>
				<p>Copyright © 2019 Great War Museum - All Rights Reserved.</p>
				<p>Privacy Policy</p>
			</div>
		</footer>
	)
}

export default renderFooter