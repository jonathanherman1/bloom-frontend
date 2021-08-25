import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import * as contactService from '../../services/contactService.js'

const ContactDetail = (props) => {
    const [contactDetail, setContactDetail] = useState('')
    useEffect(() => {
        (async () => {
            const newContactDetail = await contactService.getContactById(props.match.params.id)
            setContactDetail(newContactDetail)
        })()
    }, []);
    return (
        <div>
            <p>Contact Details</p>
            <p>{contactDetail.name}</p>
            <p>{contactDetail.phone}</p>
            <p>{contactDetail.email}</p>
            <p>{contactDetail.department}</p>
            <p>{contactDetail.notes}</p>
        </div>
    );
}

export default withRouter(ContactDetail);