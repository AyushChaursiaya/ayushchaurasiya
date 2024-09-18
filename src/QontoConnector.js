import { StepConnector } from '@mui/material';

const QontoConnector = () => {
  return (
    <StepConnector
      alternativeLabel
      sx={{
        '& .MuiStepConnector-line': {
          borderColor: 'blue',
        },
        '& .MuiStepConnector-active': {
          borderColor: 'blue',
        },
      }}
    />
  );
};

export default QontoConnector;