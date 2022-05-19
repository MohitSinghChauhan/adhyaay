import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './../App.css';
import './../Pages/style/events.css';
import { Link } from 'react-router-dom';

import Events1 from './events1';
import Events2 from './events2';

const events0 = () => {

    return(
        <section className='eventStyle'>
            <span style={{fontSize: "60px"}}>EVENTS</span>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span>
                <span className='choosedDayStyle'>
                    Day 0
                </span>
                <span className='dayChooserStyle'>
                    <Link to="/events1">Day 1</Link>
                </span>
                <span className='dayChooserStyle'>
                    <Link to="/events2">Day 2</Link>
                </span>
            </span>
        </section>
    )
}

export default events0