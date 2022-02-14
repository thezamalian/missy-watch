import React, { useState } from 'react';
import { Box, Container, Grid, TextField, Typography, Button, InputAdornment, IconButton, FormControl, InputLabel, OutlinedInput, CircularProgress, Alert } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import watchAndSun from '../../../assets/watch-sun.jpg';
import useAuth from '../../../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({ email: 'admin@admin.com', password: '123456' });
    const [showPassword, setShowPassword] = useState(false);

    const location = useLocation();
    const history = useHistory();

    const { user, authError, isLoading, loginWithEmail, googleSignIn, } = useAuth();

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };

        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    };

    const handleFormSubmit = (e) => {
        // console.log(loginData);
        const { email, password } = loginData;
        loginWithEmail(email, password, location, history);

        e.preventDefault();
    }

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            {isLoading ?
                <CircularProgress sx={{ mt: 8 }} />
                :
                <Container sx={{ m: 0, p: 0 }}>
                    <Grid container columns={{ xs: 4, sm: 12, md: 12 }}>

                        <Grid item xs={4} sm={6} md={6} sx={{ display: { xs: 'none', md: 'block' }, ms: 0 }}>
                            <img src={watchAndSun} style={{ width: '100%', marginRight: 'auto' }} alt="" />
                        </Grid>

                        <Grid item xs={4} sm={6} md={6} sx={{ mx: 'auto' }}>
                            <Typography variant='h4' sx={{ mb: 4, pt: 4, }}>
                                Login to Missy Watch
                            </Typography>

                            {user.email && <Alert severity='success'>You have logged in successfully!</Alert>}
                            {authError && <Alert severity='error'>{authError}</Alert>}

                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '90%' }
                                }}
                                noValidate
                                onSubmit={handleFormSubmit}
                                autoComplete="off"
                            >
                                <TextField
                                    id="outlined-basic"
                                    label="Your Email"
                                    variant="outlined"
                                    defaultValue={loginData.email}
                                    onChange={handleOnChange}
                                    name='email'
                                    type='email'
                                />
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Your Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        defaultValue={loginData.password}
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
                                        label="Your Password"
                                    />
                                </FormControl>
                                <Link to='/register'>
                                    <Button
                                        size='large'
                                        variant="text"
                                    // color='warning'
                                    // sx={{ }}
                                    >
                                        Not a User? Please Register
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
                                    Login
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
            }
        </>
    );
};

export default Login;