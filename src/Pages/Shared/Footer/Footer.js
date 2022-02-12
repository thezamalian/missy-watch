import React from 'react';
import { Box, Grid, Container, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link style={{ textDecoration: 'none', color: 'white', fontSize: '40px' }} color="white" to="/">
        Missy Watch
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 38,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  mr: 1,
  '&:hover': {
    color: 'white',
  },
};


const pages = ['Home', 'All Watches', 'Our Blog', 'About Us', 'Contact Us']

const Footer = () => {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'black', color: 'white', mt: '150px', mb: 0 }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={4}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item xs={6} sx={{ display: 'flex' }}>
                <Box component="a" href="https://facebook.com/" sx={iconStyle}>
                  <FacebookIcon sx={{ fontSize: '45px' }} />
                </Box>
                <Box component="a" href="https://twitter.com/" sx={iconStyle}>
                  <TwitterIcon sx={{ fontSize: '45px' }} />
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              {
                pages.map(page => <Box
                  key={page}
                  component="li"
                  sx={{ py: 0.5 }}
                >
                  <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'white' }} >
                    {page}
                  </Link>
                </Box>
                )
              }
            </Box>
          </Grid>
          <Grid item xs={6} sm={6} md={4}>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              {
                pages.map(page => <Box
                  key={page}
                  component="li"
                  sx={{ py: 0.5 }}
                >
                  <Link
                    to="/"
                    style={{ textDecoration: 'none', color: 'white' }} >
                    {page}
                  </Link>
                </Box>
                )
              }
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
};

export default Footer;