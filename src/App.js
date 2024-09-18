import React, { useState, useEffect } from 'react';
import PersonalInfo from './components/PersonalInfo';
import AddressInfo from './components/AddressInfo';
import Confirmation from './components/Confirmation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Box, Button, Stack, Step, StepButton, Stepper, Typography } from '@mui/material';

const steps = ['PersonalInfo', 'AddressInfo', 'Confirmation'];

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const handleStep = (step) => () => {
    setActiveStep(step);
    setStep((prev) => prev + 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    setFormData({});
  };


  const handleNext = () => {
    if (validateStep() && isFormValid()) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setStep((prevStep) => prevStep + 1);
    }
  };

  const isFormValid = () => {
    const currentStep = step;
    let isValid = true;
  
    if (currentStep === 1) {
      isValid = formData.name.trim() && formData.email.trim() && formData.phone.trim();
    } else if (currentStep === 2) {
      isValid = formData.address1.trim() && formData.address2.trim() && formData.city.trim() && formData.state.trim() && formData.zip.trim();
    }
  
    return isValid;
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('formData'));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateStep = () => {
    let currentErrors = {};
    if (step === 1) {
      if (!formData.name.trim()) currentErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        currentErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        currentErrors.email = 'Email is invalid';
      }
      if (!formData.phone.trim()) {
        currentErrors.phone = 'Phone is required';
      } else if (!/^\+?\d{0,3}[-.\s]?\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/.test(formData.phone)) {
        currentErrors.phone = 'phone number is invalid';
      }
    } else if (step === 2) {
      if (!formData.address1.trim()) currentErrors.address1 = 'Address Line 1 is required';
      if (!formData.address2.trim()) currentErrors.address2 = 'Address Line 2 is required';
      if (!formData.city.trim()) currentErrors.city = 'City is required';
      if (!formData.state.trim()) currentErrors.state = 'State is required';
      if (!formData.zip.trim()) currentErrors.zip = 'Zip Code is required';
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted successfully:', formData);
        setIsSubmitting(false);
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }, 2000);
    }
  };

  const renderStep = () => {
    switch (activeStep) {
      case 0:
        return <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />;
      case 1:
        return <AddressInfo formData={formData} handleChange={handleChange} errors={errors} />;
      case 2:
        return <Confirmation formData={formData} />;
      case 3:
        return (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="secondary" onClick={handleReset} sx={{ mr: 1 }}>
                  Reset
                </Button>
              </Stack>
            </Box>
          </React.Fragment>
        );
      default:
        return <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />;
    }
  };

  return (
    <div className="app container">
      <h1>Multi-Step Form</h1>
      <br />
      <Box>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]} >
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <br />
        <Box>
          {renderStep()}
          {activeStep < steps.length && (
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button variant="outlined" color="inherit" size="medium" disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {activeStep < steps.length - 1 && (
                // <Button variant="outlined"  size="medium" onClick={handleNext} sx={{ mr: 1 }}>
                //   Next
                // </Button>
                <Button variant="outlined" size="medium" onClick={handleNext} sx={{ mr: 1 }} disabled={!isFormValid()}>
                  Next
                </Button>
              )}
              {activeStep === steps.length - 1 && (
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="success" onClick={handleSubmit} sx={{ mr: 1 }}>
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </Button>
                </Stack>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default App;