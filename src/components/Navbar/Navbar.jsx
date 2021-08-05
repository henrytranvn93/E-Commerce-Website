import React from 'react'
import { Appbar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'

function Navbar() {
    return (
        <>
            <Appbar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                </Toolbar>
            </Appbar>            
        </>
    )
}

export default Navbar
