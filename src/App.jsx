import { useEffect, useState } from "react";
import styled from 'styled-components';
import converttime from 'convert-time';
import GlobalStyled from './components/GlobalStyles';
import bg_img from './img/2850815.jpg';
import search_svg from './img/search.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './store/weather';

const App = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');
    const { data, hasError } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(fetchWeather('rajahmundry'));
    }, [dispatch])

    const handleLocationSubmit = e => {
        e.preventDefault();
        dispatch(fetchWeather(location));
    }

    return ( 
        <AppStyled className="app">
            <GlobalStyled />
            <h1>WEATHER APP</h1>
            <form onSubmit={(e) => handleLocationSubmit(e)} id="location-form">
                <input type="text" placeholder="Enter city" onChange={e => setLocation(e.target.value)} />
            </form>
            {hasError && (
                <div id="not-found-info">
                    <FontAwesomeIcon icon={faFrown} />
                    <p>Sorry, the specified city was not found.</p>
                </div>
            )}
            {!hasError && data.location && (
                <div className="weather-info">
                    <h2>{data.location.name}</h2>
                    <p className="date">{data.location.localtime.split(" ")[0]}</p>
                    <p className="time">{converttime(data.location.localtime.split(" ")[1])}</p>
                    <div className="celcius-info">
                        <img src={data.current.condition.icon} alt={data.location.name} />
                        <p>{data.current.temp_c}&#176;</p>
                    </div>
                </div>
            )}
            <div id="developer-info">
                <p>Developed and maintained by
                    <a href="mailto:mani333007@gmail.com"> mani333007@gmail.com</a>
                </p>
            </div>
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
        margin-bottom: 0px;
    }
    form {
        display: flex;
        justify-content: center;
        padding: 20px;
    }
    input {
        padding: 13px 15px 13px 45px;
        border-radius: 30px;
        font-size: 1.2rem;
        outline: none;
        border: none;
        width: 100%;
        font-family: 'Montserrat', sans-serif;
        background-image: url(${search_svg});
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: 17px;
        box-shadow: 1px 2px 3px 2px rgba(0,0,0,0.1);
    }
    .weather-info {
        padding: 20px;
        h2 {
            font-size: 2rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        .date {
            font-size: 1.6rem;
            margin-bottom: 0.5rem;
        }
        .time {
            font-size: 1.4rem;
        }
        .celcius-info {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 30px 0;
            img {
                height: 120px;
            }
            p {
                font-size: 3.5rem;
            }
        }
    }
    #developer-info {
        position: fixed;
        bottom: 0px;
        left: 0px;
        padding: 10px;
        a {
            color: #fff;
        }
    }
    #not-found-info {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        padding: 10px;
        p {
            padding: 10px;
        }
    }

    @media screen and (min-width: 600px) {
        h1 {
            margin-bottom: 80px;
        }
        input {
            width: 650px;
        }
        .weather-info {
            h2 {
                font-size: 3.5rem;
                margin-bottom: 1rem;
            }
            .date {
                font-size: 2.3rem;
                margin-bottom: 1rem;
            }
            .time {
                font-size: 2rem;
            }
            .celcius-info {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 30px 0;
                img {
                    height: 150px;
                }
                p {
                    font-size: 6.5rem;
                }
            }
        }
        #not-found-info {
            font-size: 2rem;
        }
    }
`; 
 
export default App;