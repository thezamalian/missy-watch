import React, { useState } from 'react';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import watchAndSun from '../../../assets/watch-sun.jpg';
import useAuth from '../../../hooks/useAuth';


const BookOrder = () => {
    const [bookingData, setBookingData] = useState();
    const [date, setDate] = React.useState(new Date());

    const { user, isLoading } = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingData = { ...bookingData };

        newBookingData[field] = value;
        console.log(newBookingData);
        setBookingData(newBookingData);
    };

    const handleFormSubmit = (e) => {
        console.log(bookingData);
        e.preventDefault();
    };
    return (
        <Container sx={{ m: 0, p: 0 }}>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={4} sm={4} md={6} sx={{ display: { xs: 'none', sm: 'block' }, ms: 0 }}>
                    <img src={watchAndSun} style={{ width: '100%', marginRight: 'auto' }} alt="" />
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
                            // defaultValue={user.email}
                            onChange={handleOnChange}
                            name='name'
                            type='text'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Receiver Email"
                            variant="outlined"
                            // defaultValue={user.email}
                            onChange={handleOnChange}
                            name='email'
                            type='email'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Receiver Phone"
                            variant="outlined"
                            // defaultValue={user.email}
                            onChange={handleOnChange}
                            name='phone'
                            type='tel'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Receiver Address"
                            variant="outlined"
                            // defaultValue={user.email}
                            onChange={handleOnChange}
                            name='address'
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