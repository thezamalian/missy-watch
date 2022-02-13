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
        label: 'Seiko SKX007 watch',
        imgPath:
            'https://images.unsplash.com/photo-1512034705137-dc51c5ed36f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=861&q=80',
    },
    {
        label: 'I dropped this watch into a glass of water and photographed it from above.',
        imgPath:
            'https://images.unsplash.com/photo-1580658001207-ccd9b884191c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
        label: 'Businessman checking the time',
        imgPath:
            'https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=60',
    },
    {
        label: 'Risky shot taken at the beach hoping my gear didn’t get wet.',
        imgPath:
            'https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
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
                    </div>))}

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
