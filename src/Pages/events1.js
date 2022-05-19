import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../App.css';
import '../Pages/style/events.css';
import { Link, Outlet } from 'react-router-dom';

import Events0 from './events0';
import Events2 from './events2';

const events1 = () => {

    return(
        <section className='eventStyle'>
            <span style={{fontSize: "60px"}}>EVENTS</span>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span>
                <span className='dayChooserStyle'>
                <Link to="/Event0">Day 0</Link>
                </span>
                <span className='choosedDayStyle'>
                    Day 1
                </span>
                <span className='dayChooserStyle'>
                <Link to="/Event2">Day 2</Link>
                </span>
            </span>
        </section>
    )
}

export default events1