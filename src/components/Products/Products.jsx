import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';


const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes.', price: '$100', image: 'https://www.pngall.com/wp-content/uploads/2016/04/Running-Shoes-PNG-Pic.png' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook.', price: '$1000', image: 'https://purepng.com/public/uploads/large/purepng.com-macbookmacbooknotebookcomputersapple-inmacbook-familyapple-laptops-1701528361631puxzf.png' },
]

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;

