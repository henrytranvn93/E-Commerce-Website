import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

import logo from '../../assets/ecommercelogo.png'
import useStyles from './styles'

function Navbar( {totalItems}) {
    const classes = useStyles();
    return (
        <>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Commerce Shop" height="25px" className={classes.image}/>
                        Commerce Shop
                    </Typography>
                    <div className={classes.grow}></div>
                    <div className={classes.button}>
                        <IconButton aria-label="Show card itesm" color='inherit'>
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>   
                    </div>
                </Toolbar>
            </AppBar>            
        </>
    )
}

export default Navbar
