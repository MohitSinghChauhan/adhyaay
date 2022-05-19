import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import './../App.css';
import './../Pages/style/events.css';
import { Link } from 'react-router-dom';

import Events1 from './events1';
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

const events0 = () => {

    const _event1 = ({ children }) => (
        <div>
          <h1>Xposure</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Reel making competition</p>
        </div>
    );
    const _event2 = ({ children }) => (
        <div>
          <h1>Pixels</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Best shot of the day.</p>
        </div>
    );
    const _event3 = ({ children }) => (
        <div>
          <h1>Glam Shot</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Model Shot</p>
        </div>
    );
    const _event4 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event5 = ({ children }) => (
        <div>
          <h1>Take A Shelf</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Selfie With Senior & Selfie with Group</p>
        </div>
    );
    const _event6 = ({ children }) => (
        <div>
          <h1>Photowar</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Best Of Adhyaay</p>
        </div>
    );
    const _event7 = ({ children }) => (
        <div>
          <h1>Montage</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Movie Making</p>
        </div>
    );
    const _event8 = ({ children }) => (
        <div>
          <h1>Face Painting</h1>
          <h4>Council : Cultural</h4>
          <h5>Venue : BE/FT Lawn</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event9 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event10 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event11 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event12 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event13 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event14 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event15 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event16 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event17 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event18 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event19 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event20 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event21 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event22 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event23 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event24 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event25 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event26 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event27 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event28 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event29 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event30 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event31 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event32 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event33 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );
    const _event34 = ({ children }) => (
        <div>
          <h1>Jigyasa</h1>
          <h4>Council : Photography</h4>
          <h5>Venue : Online</h5>
          <p>Photography and Writing Skill Competition</p>
        </div>
    );

    return(
        <section className='eventStyle'>
            <span style={{fontSize: "60px"}}>EVENTS</span>
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            <span>
                <span className='choosedDayStyle'>
                    Day 0
                </span>
                <span className='dayChooserStyle'>
                    <Link className='link' to="/Events1">Day 1</Link>
                </span>
                <span className='dayChooserStyle'>
                    <Link className='link' to="/Events2">Day 2</Link>
                </span>
            </span>

            <div className='eventsArea'>
                <Timeline theme={customTheme}>
                    <Events>
                        
                        <TextEvent date="10/03/19" card={_event1} />
                        <TextEvent date="10/03/19" card={_event2} />
                        <TextEvent date="10/03/19" card={_event3} />
                        <TextEvent date="10/03/19" card={_event4} />
                        <TextEvent date="10/03/19" card={_event5} />
                        <TextEvent date="10/03/19" card={_event6} />
                        <TextEvent date="10/03/19" card={_event7} />
                        <TextEvent date="10/03/19" card={_event8} />
                        <TextEvent date="10/03/19" card={_event9} />
                        <TextEvent date="10/03/19" card={_event10} />
                        <TextEvent date="10/03/19" card={_event11} />
                        <TextEvent date="10/03/19" card={_event12} />
                        <TextEvent date="10/03/19" card={_event13} />
                        <TextEvent date="10/03/19" card={_event14} />
                        <TextEvent date="10/03/19" card={_event15} />
                        <TextEvent date="10/03/19" card={_event16} />
                        <TextEvent date="10/03/19" card={_event17} />
                        <TextEvent date="10/03/19" card={_event18} />
                        <TextEvent date="10/03/19" card={_event19} />
                        <TextEvent date="10/03/19" card={_event20} />
                        <TextEvent date="10/03/19" card={_event21} />
                        <TextEvent date="10/03/19" card={_event22} />
                        <TextEvent date="10/03/19" card={_event23} />
                        <TextEvent date="10/03/19" card={_event24} />
                        <TextEvent date="10/03/19" card={_event25} />
                        <TextEvent date="10/03/19" card={_event26} />
                        <TextEvent date="10/03/19" card={_event27} />
                        <TextEvent date="10/03/19" card={_event28} />
                        <TextEvent date="10/03/19" card={_event29} />
                        <TextEvent date="10/03/19" card={_event30} />
                        <TextEvent date="10/03/19" card={_event31} />
                        <TextEvent date="10/03/19" card={_event32} />
                        <TextEvent date="10/03/19" card={_event33} />
                        <TextEvent date="10/03/19" card={_event34} />

                </Events>
            </Timeline>
            </div>
        </section>
    )
}

export default events0