import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FeedData from './FeedData';
import classes from '../style/AllFeedsData.module.css';

function AllFeedsData(props) {
    const [feeds, setFeeds] = useState(null);
    const token = sessionStorage.getItem('jwtToken');
    const baseUrl = 'http://localhost:8711';

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
            <div className={classes.adminfeedsspace}>
                {feeds.map(feed => {
                    return <FeedData key={feed['feedId']} data={feed}/>
                })}
            </div>
        </div>
    );
}

export default AllFeedsData;