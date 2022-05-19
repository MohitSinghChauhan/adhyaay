import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './../App.css';
import './../Pages/style/events.css';
import { Link } from 'react-router-dom';

import Events1 from './events1';
import Events0 from './events0';

import {
    Timeline,
    Events,
    UrlButton,
    ImageEvent,
    TextEvent,
    YouTubeEvent,
    themes,
    createTheme,
} from '@merc/react-timeline';

const customTheme = createTheme(themes.default, {
    card: {
      backgroundColor: '#efefef',
    },
    date: {
      backgroundColor: '#f7141b',
    },
    marker: {
      borderColor: '#f7141b',
    },
    timelineTrack: {
      backgroundColor: '#f7141b',
    },
  }
);

const events2 = () => {

    const MyCustomCard = ({ children }) => (
        <div>
          <h1>Xposure</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Reel making competition</p>
        </div>
    );

    return(
        <section className='eventStyle'>
            <span style={{fontSize: "60px"}}>EVENTS</span>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span>
                <span className='dayChooserStyle' >
                    <Link className='link' to="/Events0">Day 0</Link>
                </span>
                <span className='dayChooserStyle'>
                    <Link className='link' to="/Events1">Day 1</Link>
                </span>
                <span className='choosedDayStyle'>
                    Day 2
                </span>
            </span>

            <div className='eventsArea'>
                <Timeline theme={customTheme} opts="inline-evts">
                    <Events>

                        <TextEvent date="10/03/19" card={MyCustomCard} />
                        <TextEvent date="10/03/19" card={MyCustomCard} />
                        <TextEvent date="10/03/19" card={MyCustomCard} />
                        <TextEvent date="10/03/19" card={MyCustomCard} />

                </Events>
            </Timeline>
            </div>
        </section>
    )
}

export default events2