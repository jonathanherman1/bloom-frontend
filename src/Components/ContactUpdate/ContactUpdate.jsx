import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './NewContactForm.module.css'
import MuiPhoneNumber from 'material-ui-phone-number'

function ContactUpdate(props) {
    const [ phoneNum, setPhoneNum ] = useState(props.phone)
    const [formData, setFormData] = useState(props)

    const handleChange = (e) => {
        setFormData({ 
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleInput = (value) => {
        setPhoneNum(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdateContact(formData)
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
            />
            <MuiPhoneNumber 
                defaultCountry={'us'} 
                onChange={handleInput} 
                value={phoneNum}
                name="phone"
                label="Phone number"
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
            />
                <Button type="submit" variant="contained" color="primary">
                    SUBMIT
                </Button>
            </form>
        </div>
    )
}

export default ContactUpdate