import React from 'react';
import { Grid } from '@mui/material';

const SingleProduct = ({ Item }) => {
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Item>xs=2</Item>
        </Grid>
    );
};

export default SingleProduct;