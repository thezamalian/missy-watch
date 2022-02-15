import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const pages = ['All Watches', 'Our Blog', 'About Us'];
const pageLinks = ['all-watches', 'our-blog', 'about-us'];

const userPanel = ['My Orders', 'Make Payment', 'Place Order', 'Make Review'];
const userPanelLinks = ['my-orders', 'make-payment', 'place-order', 'make-review',];

const adminPanel = ['Manage All Orders', 'Manage Products', 'Add Product', 'Make Admin'];
const adminPanelLinks = ['manage-all-orders', 'manage-products', 'add-product', 'make-admin'];

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const { user, logout } = useAuth();
    const { email, displayName, photoURL } = user;

    const [isAdmin, setIsAdmin] = React.useState(false);

    React.useEffect(() => {
        // setHeaderFooter(true);
        const uri = 'https://missy-watch.herokuapp.com/all-admins';
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                data.forEach(admin => {
                    if (user.email === admin.email) {
                        setIsAdmin(true);
                    }
                });
            })
    }, [user.email])

    // console.log(user);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            Missy Watch
                        </NavLink>
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <NavLink
                                    to={`/${pageLinks[index]}`}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                </NavLink>

                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
                            Missy Watch
                        </NavLink>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <NavLink
                                to={`/${pageLinks[index]}`}
                                style={{ textDecoration: 'none', color: 'black' }}
                            >
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>

                    {!email ? <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                        <Button
                            size="large"
                            variant="contained"
                            color='warning'
                            sx={{ m: 2, color: 'white', display: 'block', }}
                        >
                            Login
                        </Button>
                    </NavLink> : <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open Dashboard">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={displayName} src={photoURL} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem >
                                <Typography textAlign="center">Hello {displayName}</Typography>
                            </MenuItem>
                            <Divider />
                            {isAdmin ?
                                adminPanel.map((dash, index) => (
                                    <NavLink
                                        to={`/${adminPanelLinks[index]}`}
                                        style={{ textDecoration: 'none', color: 'black' }}
                                    >
                                        <MenuItem key={dash} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{dash}</Typography>
                                        </MenuItem>
                                    </NavLink>))
                                :
                                userPanel.map((dash, index) => (
                                    <NavLink
                                        to={`/${userPanelLinks[index]}`}
                                        style={{ textDecoration: 'none', color: 'black' }}
                                    >
                                        <MenuItem key={dash} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{dash}</Typography>
                                        </MenuItem>
                                    </NavLink>))
                            }
                            <MenuItem onClick={
                                () => {
                                    handleCloseUserMenu();
                                    logout();
                                }}>
                                <Typography textAlign="center">Logout</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar >
    );
};
export default Navigation;
