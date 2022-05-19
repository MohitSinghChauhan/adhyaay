import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import '../App.css';
import '../Pages/style/events.css';
import { Link, Outlet } from 'react-router-dom';

import Events1 from './events1';
import Events0 from './events0';

const events2 = () => {

    return(
        <section className='eventStyle'>
            <span style={{fontSize: "60px"}}>EVENTS</span>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span>
                <span className='dayChooserStyle' >
                    {/* <Link to="/Event">Day 0</Link> */}
                </span>
                <span className='dayChooserStyle'>
                    Day 1
                </span>
                <span className='choosedDayStyle'>
                    Day 2
                </span>
            </span>
        </section>
    )
}

export default events2