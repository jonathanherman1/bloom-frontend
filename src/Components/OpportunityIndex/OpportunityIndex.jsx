import React, { useState, useEffect } from 'react';
import PrevCard from '../PrevCard/PrevCard'

const OpportunityIndex = () => {
    const [ opportunities, setOpportunities ] = useState([{name: 'job', date: 'idk', notes: 'lets see!', id: '1'}])

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
            id={o.id}
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