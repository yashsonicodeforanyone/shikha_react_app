import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const FeedbackForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !address || !email || !phone || !feedback) {
      setError('All fields are required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Invalid email format');
      return;
    } else {
      setEmailError('');
    }
    if (!validatePhone(phone)) {
      setPhoneError('Invalid phone number format');
      return;
    } else {
      setPhoneError('');
    }

    console.log('Feedback submitted:', { firstName, lastName, address, email, phone, feedback });
    setSuccess(true);

    setFirstName('');
    setLastName('');
    setAddress('');
    setEmail('');
    setPhone('');
    setFeedback('');
    setError('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}
    >
      <Typography variant="h4" component="h2">
        Thank You
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      {success && <Alert severity="success">Feedback submitted successfully!</Alert>}
      <label>First Name</label>
      <TextField
        label="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        sx={{ 
            backgroundColor: 'white', 
            borderRadius: '4px', 
            width: '400px' 
          }}
      />
      <label>Last Name</label>
      <TextField
        label="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        sx={{ 
            backgroundColor: 'white', 
            borderRadius: '4px', 
            width: '400px' 
          }}
      />
      <label>Address</label>
      <TextField
        label="Address"
        variant="outlined"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        sx={{ 
            backgroundColor: 'white', 
            borderRadius: '4px', 
            width: '400px' 
          }}
      />
      <label>Email</label>
      <TextField
        label="Email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ 
            backgroundColor: 'white', 
            borderRadius: '4px', 
            width: '400px' 
          }}
        error={!!emailError}
        helperText={emailError}
      />
      <label>Phone Number</label>
      <TextField
        label="Phone Number"
        variant="outlined"
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        sx={{ 
            backgroundColor: 'white', 
            borderRadius: '4px', 
            width: '400px' 
          }}
        error={!!phoneError}
        helperText={phoneError}
      />
        <label>Feedback</label>
      <TextField
        label="Feedback"
        variant="outlined"
        multiline
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        sx={{ 
            backgroundColor: 'white', 
            borderRadius: '4px', 
            width: '400px' 
          }}
      />
        <div className="btn-feedback" style={{color:"white!important" ,fontWeight:"600"}}>
        <Button type="submit" variant="contained"  style={{color:"white!important" ,fontWeight:"600"}}>
        Submit Feedback
      </Button>
        </div>
  
    </Box>
  );
};

export default FeedbackForm;
