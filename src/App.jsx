import styled from 'styled-components';
import GlobalStyled from './components/GlobalStyles';

const App = () => {
    return ( 
        <AppStyled className="app">
            <GlobalStyled />
            <h1>WEATHER APP</h1>
        </AppStyled>
     );
}

const AppStyled = styled.div`
    
`; 
 
export default App;