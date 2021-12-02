import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import ResetStyles from './components/styles/Reset.styled';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <Header />
      <Container>
        <h1>hello world</h1>
      </Container>
    </ThemeProvider>
  );
};

export default App;
