import { useEffect } from "react";
import styled from 'styled-components';
import GlobalStyled from './components/GlobalStyles';
import bg_img from './img/2850815.jpg';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './store/weather';

const App = () => {
    const dispatch = useDispatch();
    const { loading, hasError, data } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather('london'));
        console.log('Helo')
    }, [dispatch])

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