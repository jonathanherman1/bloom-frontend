import React, { useState, useEffect } from 'react';
import PrevCard from '../PrevCard/PrevCard'

const OpportunityIndex = () => {
    const [ opportunities, setOpportunities ] = useState([{name: 'job', date: 'idk', notes: 'lets see!'}])

    useEffect(() => {
        // service call
    }, []);

    const opportunitiesList = opportunities.map((o, i) => {
        return (
        <PrevCard 
            key={i} 
            name={o.name}
            date={o.date}
            notes={o.notes}
        />
        );
    })

    return (
        <div>
            {opportunitiesList}
        </div>
    );
}
 
export default OpportunityIndex;