import { useState } from 'react'
import { Box, Container, InputLabel, Select, TextField, FormControl, MenuItem, Button, CircularProgress, Typography, Paper, createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { SmartToy, Send, ContentCopy } from '@mui/icons-material';
import './App.css'
import axios from 'axios';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00ffff',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: 'transparent',
      paper: 'rgba(255, 255, 255, 0.1)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      background: 'linear-gradient(45deg, #00ffff 30%, #ff4081 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.3)',
            },
            '&:hover fieldset': {
              borderColor: '#00ffff',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00ffff',
            },
          },
        },
      },
    },
  },
});

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleSubmit = async()=>{
    setLoading(true);
    setError('');
    setGeneratedReply('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", { 
        emailContent, 
        tone
      });
      setGeneratedReply(typeof response.data === 'string' ? response.data : JSON.stringify(response.data));
     
    } catch (error) {
      setError('An error occurred while generating the reply.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };


  return (        
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <SmartToy sx={{ fontSize: 60, color: '#00ffff', mb: 2 }} />
          <Typography variant="h4" component="h1" gutterBottom>
            AI Email Writer
          </Typography>
          <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Generate intelligent email replies with AI
          </Typography>
        </Box>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }} className="ai-glow">
          <Typography variant="h6" gutterBottom sx={{ color: '#00ffff' }}>
            Input Details
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={6}
            variant="outlined"
            label="Original Email Content"
            value={emailContent || ''}
            onChange={(e)=> setEmailContent(e.target.value)}
            sx={{ mb: 2 }}
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Tone (Optional)</InputLabel>
            <Select
              value={tone || ''}
              label={"Tone (Optional)"}
              onChange={(e) => setTone(e.target.value)}
            >
              <MenuItem value="Friendly">Friendly</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
              <MenuItem value="Casual">Casual</MenuItem>
              <MenuItem value="Formal">Formal</MenuItem>
              <MenuItem value="Sympathetic">Sympathetic</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            onClick={handleSubmit}
            startIcon={loading ? <CircularProgress size={20} /> : <Send />}
            disabled={loading}
            sx={{ 
              background: 'linear-gradient(45deg, #00ffff 30%, #ff4081 90%)',
              '&:hover': {
                background: 'linear-gradient(45deg, #00cccc 30%, #ff1a66 90%)',
              }
            }}
          >
            {loading ? 'Generating...' : 'Generate Reply'}
          </Button>
        </Paper>
        {error && (
          <Paper elevation={3} sx={{ p: 2, mb: 3, backgroundColor: 'rgba(255, 0, 0, 0.1)' }}>
            <Typography variant="body1" color="error">
              {error}
            </Typography>
          </Paper>
        )}
        {generatedReply && (
          <Paper elevation={3} sx={{ p: 3 }} className="ai-glow">
            <Typography variant="h6" gutterBottom sx={{ color: '#00ffff' }}>
              Generated Reply
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={6}
              variant="outlined"
              value={generatedReply}
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />
            <Button
              variant="outlined"
              onClick={() => {
                navigator.clipboard.writeText(generatedReply);
              }}
              startIcon={<ContentCopy />}
              sx={{ 
                borderColor: '#00ffff',
                color: '#00ffff',
                '&:hover': {
                  borderColor: '#00cccc',
                  backgroundColor: 'rgba(0, 255, 255, 0.1)',
                }
              }}
            >
              Copy to Clipboard
            </Button>
          </Paper>
        )}
      </Container>
    </ThemeProvider>
  )
}

export default App
