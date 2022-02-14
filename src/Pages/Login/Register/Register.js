import React, { useState } from 'react';
import { Box, Container, Grid, TextField, Typography, Button, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import watchAndSun from '../../../assets/watch-sun.jpg';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [registrationData, setRegistrationData] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const { authError, isLoading, registerWithEmail, googleSignIn, } = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegistrationData = { ...registrationData };

        newRegistrationData[field] = value;
        console.log(newRegistrationData);
        setRegistrationData(newRegistrationData);
    };

    const handleFormSubmit = (e) => {
        // console.log(registrationData);
        const { name, photo, email, password } = registrationData;

        registerWithEmail(email, password, name, photo);

        e.preventDefault();
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Container sx={{ m: 0, p: 0 }}>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={4} sm={4} md={6} sx={{ display: { xs: 'none', sm: 'block' }, ms: 0 }}>
                    <img src={watchAndSun} style={{ width: '100%', marginRight: 'auto' }} alt="" />
                </Grid>

                <Grid item xs={4} sm={4} md={6} sx={{ mx: 'auto' }}>
                    <Typography variant='h4' sx={{ mb: 4, pt: 4, }}>
                        Register For the Best Watch
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
                            label="Your Name"
                            variant="outlined"
                            // defaultValue={registrationData.email}
                            onChange={handleOnChange}
                            name='name'
                            type='text'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Paste Your Photo URL"
                            variant="outlined"
                            // defaultValue={registrationData.email}
                            onChange={handleOnChange}
                            name='photo'
                            type='text'
                        />
                        <TextField
                            id="outlined-basic"
                            label="Your Email"
                            variant="outlined"
                            // defaultValue={registrationData.email}
                            onChange={handleOnChange}
                            name='email'
                            type='email'
                        />
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Set Your Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                // defaultValue={registrationData.password}
                                // value={values.password}
                                onChange={handleOnChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Set Your Password"
                            />
                        </FormControl>
                        <Link to='/login'>
                            <Button
                                size='large'
                                variant="text"
                            // color='warning'
                            // sx={{ }}
                            >
                                Already Registered? Please Login
                            </Button>
                        </Link>
                        <Button
                            size='large'
                            variant="contained"
                            type="submit"
                            // color='warning'
                            sx={{
                                bgcolor: 'black', color: 'white',
                                '&:hover': { bgcolor: 'yellow', color: 'black' }
                            }}
                        >
                            Register
                        </Button>
                        {/* Google sign in button  */}
                        <Typography variant='h6' sx={{ mx: 'auto', }}>
                            OR
                        </Typography>
                        <Button
                            onClick={googleSignIn}
                            size='large'
                            variant="contained"
                            // color='warning'
                            sx={{
                                bgcolor: 'yellow', color: 'black', width: '100%',
                                '&:hover': { bgcolor: 'black', color: 'white' }
                            }}
                        >
                            Continue With Google
                            <GoogleIcon sx={{ mx: 1, }} />
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Register;