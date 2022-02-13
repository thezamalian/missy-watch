import * as React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import SingleProduct from '../Shared/SingleProduct/SingleProduct';

const products = [
    {
        name: 'Jaeger',
        img: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop',
        price: '149',
        details: 'Wearing a watch shows you are a responsible and organized person. It also makes you appear reliable and marks you off as one who values his time and money. And when you go for an interview or a meeting, these are the things that people will notice about you.',
        gender: 'Male'
    },
    {
        name: 'Audemars Piguet',
        img: 'https://images.unsplash.com/photo-1541778480-fc1752bbc2a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop',
        price: '189',
        details: 'Wearing a watch shows you are a responsible and organized person. It also makes you appear reliable and marks you off as one who values his time and money. And when you go for an interview or a meeting, these are the things that people will notice about you.',
        gender: 'Male'
    },
    {
        name: 'FitBit Constant',
        img: 'https://images.unsplash.com/photo-1579721840641-7d0e67f1204e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop',
        price: '199',
        details: 'Wearing a watch shows you are a responsible and organized person. It also makes you appear reliable and marks you off as one who values his time and money. And when you go for an interview or a meeting, these are the things that people will notice about you.',
        gender: 'Female'
    },
    {
        name: 'Smart Piaget',
        img: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop',
        price: '219',
        details: 'Wearing a watch shows you are a responsible and organized person. It also makes you appear reliable and marks you off as one who values his time and money. And when you go for an interview or a meeting, these are the things that people will notice about you.',
        gender: 'Male'
    },
    {
        name: 'Cartier',
        img: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop',
        price: '111',
        details: 'Wearing a watch shows you are a responsible and organized person. It also makes you appear reliable and marks you off as one who values his time and money. And when you go for an interview or a meeting, these are the things that people will notice about you.',
        gender: 'Female'
    },
    {
        name: 'Harry Winston',
        img: 'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop',
        price: '222',
        details: 'Wearing a watch shows you are a responsible and organized person. It also makes you appear reliable and marks you off as one who values his time and money. And when you go for an interview or a meeting, these are the things that people will notice about you.',
        gender: 'Female'
    },
]

const AllProducts = () => {
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
            </Box>
        </Container>
    );
}

export default AllProducts;