import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

// Components
import PrevCard from '../PrevCard/PrevCard'

// Material UI
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

// Styles
import styles from './OpportunityIndex.module.css'

const OpportunityIndex = () => {
    const [ opportunities, setOpportunities ] = useState([])

    const [viewOpps, setViewOpps] = useState('')

    const opportunitiesList = opportunities?.map((o, i) => {
        return (
        <PrevCard 
            key={i} 
            name={o.name}
            date={o.date}
            notes={o.notes}
            id={o.id}
        />
        );
    })

    useEffect(() => {
        // service call
        setViewOpps((() => {
            return opportunities.length > 0 ? opportunitiesList :
            <Box className={styles.noData}>
                <h1>No opportunities. Would you like to add one?</h1>
                <Button
                    component={Link}
                    to='/opportunities/new'
                    startIcon={<AddCircleOutlineIcon />}
                >
                   Add Opportunity
                </Button>
            </Box>
        })())
    }, []);

    return (
        <div className={styles.container}>
            {viewOpps}
        </div>
    );
}
 
export default OpportunityIndex;