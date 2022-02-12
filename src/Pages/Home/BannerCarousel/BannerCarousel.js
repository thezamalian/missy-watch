import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, MobileStepper, Button } from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

function BannerCarousel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Box
                                component="img"
                                sx={{
                                    height: '50vw',
                                    display: 'block',
                                    // maxWidth: "90%",
                                    overflow: 'hidden',
                                    width: '100%',
                                    mx: 'auto'
                                }}
                                src={step.imgPath}
                                alt={step.label}
                            />
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="large"
                        sx={{ mt: '-50vw' }}
                        color="warning"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {/* Next */}
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft sx={{ fontSize: '40px', border: '1px solid black', borderRadius: '5%', '&:hover': { bgcolor: 'black' } }} />
                        ) : (
                            <KeyboardArrowRight sx={{ fontSize: '40px', border: '1px solid black', borderRadius: '5%', '&:hover': { bgcolor: 'black' } }} />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="large"
                        sx={{ mt: '-50vw' }}
                        color="warning"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight sx={{ fontSize: '40px', border: '1px solid black', borderRadius: '5%', '&:hover': { bgcolor: 'black' } }} />
                        ) : (
                            <KeyboardArrowLeft sx={{ fontSize: '40px', border: '1px solid black', borderRadius: '5%', '&:hover': { bgcolor: 'black' } }} />
                        )}
                        {/* Back */}
                    </Button>
                }
            />
        </Box>
    );
}

export default BannerCarousel;
