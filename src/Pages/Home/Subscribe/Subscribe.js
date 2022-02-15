import React from 'react';
import { Box, Grid, Container, TextField, Typography, Snackbar, Button } from '@mui/material';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import Typography from '../components/Typography';
// import TextField from '../components/TextField';
// import Snackbar from '../components/Snackbar';
// import Button from '../components/Button';

const Subscribe = () => {
    const [open, setOpen] = React.useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Container component="section" sx={{ my: 10, display: 'flex' }}>
            <Grid container>
                <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            bgcolor: 'yellow',
                            py: 8,
                            px: 3,
                        }}
                    >
                        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
                            <Typography variant="h2" component="h2" gutterBottom>
                                Receive offers
                            </Typography>
                            <Typography variant="h5">
                                Taste the luxurious watches of the everyday close to your heart.
                            </Typography>
                            <TextField
                                noBorder
                                placeholder="Your email"
                                variant="standard"
                                sx={{ width: '100%', mt: 3, mb: 2 }}
                            />
                            <Button
                                type="submit"
                                // color="info"
                                variant="contained"
                                sx={{ width: '100%', height: '50px', bgcolor: 'black', '&:hover': { bgcolor: 'purple' } }}
                            >
                                Keep me updated
                            </Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
                >
                    {/* <Box
                sx={{
                position: 'absolute',
                top: -67,
                left: -67,
                right: 0,
                bottom: 0,
                width: '100%',
                background: 'url(/static/themes/onepirate/productCTAImageDots.png)',
                }}
            /> */}
                    <Box
                        component="img"
                        src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
                        alt="call to action"
                        sx={{
                            position: 'absolute',
                            top: -28,
                            left: -28,
                            right: 0,
                            bottom: 0,
                            width: '100%',
                            maxWidth: 600,
                        }}
                    />
                </Grid>
            </Grid>
            <Snackbar
                open={open}
                onClose={handleClose}
                autoHideDuration={5000}
                // closeFunc={handleClose}
                message="We will send you our best offers, once a week."
            />
        </Container>
    );
};

export default Subscribe;