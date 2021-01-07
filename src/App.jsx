import styled from 'styled-components';
import GlobalStyled from './components/GlobalStyles';
import bg_img from './img/2850815.jpg';

const App = () => {
    return ( 
        <AppStyled className="app">
            <GlobalStyled />
            <h1>WEATHER APP</h1>
        </AppStyled>
     );
}

const AppStyled = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${bg_img});
    background-size: cover;
    h1 {
        font-size: 1.2rem;
        font-weight: 400;
        padding: 15px;
    }
`; 
 
export default App;