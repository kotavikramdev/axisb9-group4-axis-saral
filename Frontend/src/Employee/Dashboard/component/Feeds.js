import React, { useEffect, useState } from 'react';
import Feed from './Feed';
import classes from '../style/Feeds.module.css';
import axios from 'axios';

function Feeds(props) {
    const [feeds, setFeeds] = useState(null);
    const token = sessionStorage.getItem('jwtToken');
    const baseUrl = 'http://localhost:8710';

    // Get All Feeds
    async function getAllFeedsData() {
        await axios.get(
            `${baseUrl}/feeds`,
            {
                'headers': {
                    'Authorization': `Bearer ${token}`
                }
            }
        ).then((response) => {
            // console.log(response.data);
            // setFeeds(response.data);
            setFeeds(() => response.data.sort((a,b)=>b.dateAndTime-a.dateAndTime));
        }).catch((error) => {
            console.log(error.response.data);
        })
    }

    useEffect(() => {
        getAllFeedsData();
    },[]);

    if (feeds === null) {
        return (<div></div>);
    }
    return (
        <div>
            <div className={classes.feedsspace}>
                {feeds.map(feed => {
                    return <Feed key={feed['feedId']} data={feed}/>
                })}
            </div>
        </div>
    );
}

export default Feeds;