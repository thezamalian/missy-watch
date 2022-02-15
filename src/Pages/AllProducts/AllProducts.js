import React, { useState, useEffect } from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import SingleProduct from '../Shared/SingleProduct/SingleProduct';

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const uri = 'https://missy-watch.herokuapp.com/products'
        fetch(uri)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <Container container>
            <Typography variant='h4' sx={{ mb: 4, mt: 8 }}>
                All of Our Watches
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map(product => (
                        <SingleProduct key={product.name} product={product} />
                    ))}
                </Grid>
                {/* Optionally just to show a lot of products */}
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map(product => (
                        <SingleProduct key={product.name} product={product} />
                    ))}
                </Grid>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map(product => (
                        <SingleProduct key={product.name} product={product} />
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}

export default AllProducts;