import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './../App.css';
import './../Pages/style/events.css';
import { Link } from 'react-router-dom';

import Events0 from './events0';
import Events2 from './events2';

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
  });

const events1 = () => {

    const MyCustomCard = ({ children }) => (
        <div>
          <h1>Xposure</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Reel making competition</p>
        </div>
    );

    return(
        <section className='eventStyle mainSection'>
            <span style={{fontSize: "60px"}}>EVENTS</span>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span>
                <span className='dayChooserStyle'>
                <Link className='link' to="/Events0">Day 0</Link>
                </span>
                <span className='choosedDayStyle'>
                    Day 1
                </span>
                <span className='dayChooserStyle'>
                <Link className='link' to="/Events2">Day 2</Link>
                </span>
            </span>

            <div className='eventsArea'>
                <Timeline theme={customTheme}>
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

export default events1