import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Send,
} from '@mui/icons-material';

export const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = () => {
    const recipient = 'thungaprathap87@gmail.com';
    const subject = formData.name ? `Message from ${formData.name}` : `Message from Website`;
    const body = `Name: ${formData.name || ''}\nEmail: ${formData.email || ''}\n\n${formData.message || ''}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', pt: 15, pb: 10 }} id="contact">
      <Container maxWidth="100%">
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" sx={{ fontSize: { xs: '4rem', md: '8rem' }, mb: 4 }}>
              SAY <br /> <Box component="span" sx={{ color: 'secondary.main' }}>HELLO.</Box>
            </Typography>
            <Typography variant="h6" sx={{ mb: 6, opacity: 0.6, maxWidth: 400 }}>
              Looking to build high-performance React applications? Let's connect and discuss your vision.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="h5" sx={{ textTransform: 'lowercase' }}>thungaprathap87@gmail.com</Typography>
              <Typography variant="h5">+91 9014150005</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Box sx={{ borderBottom: '2px solid rgba(255,255,255,0.1)', pb: 1 }}>
                <Typography variant="caption" color="secondary" sx={{ fontWeight: 900, letterSpacing: 2 }}>FULL NAME</Typography>
                <Box 
                  component="input" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  sx={{ width: '100%', bgcolor: 'transparent', border: 'none', color: 'white', py: 2, fontSize: '1.5rem', fontWeight: 700, outline: 'none', '&::placeholder': { color: 'rgba(255,255,255,0.5)' } }} 
                  placeholder="John Doe" 
                />
              </Box>
              <Box sx={{ borderBottom: '2px solid rgba(255,255,255,0.1)', pb: 1 }}>
                <Typography variant="caption" color="secondary" sx={{ fontWeight: 900, letterSpacing: 2 }}>EMAIL ADDRESS</Typography>
                <Box 
                  component="input" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  sx={{ width: '100%', bgcolor: 'transparent', border: 'none', color: 'white', py: 2, fontSize: '1.5rem', fontWeight: 700, outline: 'none', '&::placeholder': { color: 'rgba(255,255,255,0.5)' } }} 
                  placeholder="john@example.com" 
                />
              </Box>
              <Box sx={{ borderBottom: '2px solid rgba(255,255,255,0.1)', pb: 1 }}>
                <Typography variant="caption" color="secondary" sx={{ fontWeight: 900, letterSpacing: 2 }}>MESSAGE</Typography>
                <Box
                  component="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  sx={{ width: '100%', bgcolor: 'transparent', border: 'none', color: 'white', py: 2, fontSize: '1rem', fontWeight: 400, outline: 'none', resize: 'vertical', '&::placeholder': { color: 'rgba(255,255,255,0.5)' } }}
                  placeholder="Write your message here..."
                />
              </Box>
              <Button 
                variant="contained" 
                color="secondary" 
                size="large" 
                fullWidth 
                sx={{ py: 3, fontSize: '1.2rem' }} 
                endIcon={<Send />}
                onClick={handleSendMessage}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 10, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 4 }}>
          <Typography variant="caption" sx={{ fontWeight: 700, opacity: 0.4 }}>
            © 2026 PRATAP THUNGA. ENGINEERED WITH REACT AND MATERIAL UI.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <IconButton color="inherit" size="small" href="https://github.com/Pratap-Thunga"><GitHub /></IconButton>
            <IconButton color="inherit" size="small" href="https://www.linkedin.com/in/pratap-thunga1/"><LinkedIn /></IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
