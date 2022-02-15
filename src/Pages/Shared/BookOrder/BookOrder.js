import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import useAuth from '../../../hooks/useAuth';
import { useParams } from 'react-router-dom';


const BookOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();

    const [date, setDate] = useState(new Date());
    const [bookingData, setBookingData] = useState({ receiverName: user.displayName, receiverEmail: user.email, receivingDateTime: date, isPending: true, orderer: user, });

    const [product, setProduct] = useState({});

    useEffect(() => {
        const uri = `https://missy-watch.herokuapp.com/products/${id}`
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setBookingData({ ...bookingData, product, });
            });
    }, [id, product, bookingData]);

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingData = { ...bookingData };

        newBookingData[field] = value;
        console.log(newBookingData);
        setBookingData(newBookingData);
    };

    const handleFormSubmit = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(bookingData)
        }
        const uri = 'https://missy-watch.herokuapp.com/orders';

        fetch(uri, requestOptions)
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('This Product is Booked Successfully!');
                }
            });

        console.log(bookingData);
        e.preventDefault();
    };
    return (
        <Container sx={{ m: 0, p: 0 }}>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={4} sm={4} md={6} sx={{ display: { xs: 'none', sm: 'block' }, ms: 0 }}>
                    <img src={product.img} style={{ width: '100%', marginRight: 'auto' }} alt="" />
                    <Typography variant="h4">
                        {product.name}
                    </Typography>
                    <Typography variant="body1">
                        Price: ${product.price}
                    </Typography>
                    <Typography variant="body2">
                        {product.details}
                    </Typography>
                </Grid>

                <Grid item xs={4} sm={4} md={6} sx={{ mx: 'auto' }}>
                    <Typography variant='h4' sx={{ mb: 4, pt: 4, }}>
                        Book This Watch Right Now
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch', }
                        }}
                        noValidate
                        onSubmit={handleFormSubmit}
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-basic"
                            label="Receiver Name"
                            variant="outlined"
                            defaultValue={user.displayName}
                            onChange={handleOnChange}
                            name='receiverName'
                            type='text'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Receiver Email"
                            variant="outlined"
                            defaultValue={user.email}
                            onChange={handleOnChange}
                            name='receiverEmail'
                            type='email'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Receiver Phone"
                            variant="outlined"
                            // defaultValue={user.email}
                            onChange={handleOnChange}
                            name='receiverPhone'
                            type='tel'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Receiver Address"
                            variant="outlined"
                            // defaultValue={user.email}
                            onChange={handleOnChange}
                            name='receiverAddress'
                            type='text'
                        />
                        <LocalizationProvider
                            dateAdapter={AdapterDateFns}
                        >
                            <DateTimePicker
                                minDate={new Date()}
                                minTime={new Date(0, 0, 0, 8)}
                                renderInput={(params) => <TextField
                                    {...params}
                                    fullWidth
                                    id="outlined-basic"
                                    label="Receiving Time and Date"
                                    sx={{ mx: 'auto' }}
                                    name="receivingDateTime"
                                />}
                                value={date}
                                onChange={(newDate) => {
                                    setDate(newDate);
                                }}
                            />
                        </LocalizationProvider>

                        <Button
                            size='large'
                            variant="contained"
                            // color='warning'
                            type='submit'
                            sx={{
                                mt: 4, bgcolor: 'black', color: 'white', width: '100%',
                                '&:hover': { bgcolor: 'yellow', color: 'black' }
                            }}
                        >
                            Book Order Now
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default BookOrder;