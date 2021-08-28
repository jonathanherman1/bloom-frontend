import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'

// Services
import * as contactService from '../../../../services/contactService.js'

// Material UI
import Button from '@material-ui/core/Button';
import MuiPhoneNumber from 'material-ui-phone-number'
import TextField from '@material-ui/core/TextField';

// Styles
import styles from './ContactUpdate.module.css'

function ContactUpdate(props) {
    const [ phoneNum, setPhoneNum ] = useState()
    const [formData, setFormData] = useState('')
    const history = useHistory()
    useEffect(() => {
      (async () => {
          const contactDetail = await contactService.getContactById(props.match.params.id)
          setFormData(contactDetail)
          setPhoneNum(contactDetail.phone)
      })()
    }, [props.match.params.id]);

    const handleChange = (e) => {
        setFormData({ 
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleInput = (value) => {
        setPhoneNum(value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await props.handleUpdateContact(formData, props.match.params.id)
        history.push('/contacts')
    }

    return (
        <div className={styles.container}>
            <h3>Edit Contact</h3>
            <form
                id="add-contact-form"
                onSubmit={handleSubmit}
                className={styles.form}
            >
            <TextField 
                id="contact-name"
                type="text" 
                name="name"
                label="Name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
                InputLabelProps={{shrink: true}}
            />
            <MuiPhoneNumber 
                defaultCountry={'us'} 
                onChange={handleInput} 
                value={phoneNum}
                name="phone"
                label="Phone number"
                InputLabelProps={{shrink: true}}
            />

            <TextField 
                id="contact-email"
                type="email" 
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
                InputLabelProps={{shrink: true}}
            />

            <TextField 
                id="contact-department"
                type="text" 
                name="department"
                label="Department"
                value={formData.department}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
                InputLabelProps={{shrink: true}}
            />
            
            <TextField 
                id="contact-first-contact-through"
                type="text" 
                name="first_contact_through"
                label="First Contact Through (Name)"
                value={formData.first_contact_through}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
                InputLabelProps={{shrink: true}}
            />
 
            <TextField 
                id="contact-notes"
                type="text" 
                name="notes"
                label="Notes"
                value={formData.notes}
                onChange={handleChange}
                autoComplete="off"
                multiline
                rows={4}
                fullWidth
                required
                variant="outlined" 
                InputLabelProps={{shrink: true}}
            />
                <Button type="submit" variant="contained" color="primary">
                    Update Contact
                </Button>
            </form>
        </div>
    )
}

export default withRouter(ContactUpdate)