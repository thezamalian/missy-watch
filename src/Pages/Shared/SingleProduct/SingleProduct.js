import React from 'react';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { name, img, price, details } = product;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="220"
                        image={img}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body1" >
                            Price: ${price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {details.slice(0, 155)}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to="/book-order" style={{ width: '100%' }}>
                        <Button fullWidth variant="contained" sx={{ bgcolor: 'black', '&:hover': { bgcolor: 'yellowgreen', color: 'black' } }}>
                            Book Now
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleProduct;