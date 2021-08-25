import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './NewContactForm.module.css'

function ContactForm(props) {
    const [formData, setFormData] = useState([])

    const handleChange = (e) => {
        setFormData({ 
            ...formData, 
            // [e.target.name]: e.target.value,
            // [e.target.phone]: e.target.value,
            // [e.target.email]: e.target.value,
            // [e.target.department]: e.target.value,
            // [e.target.notes]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormData({
            name: '',
            phone: '',
            email: '',
            department: '',
            notes: '',
        })
    }

    return (
        <div className={styles.container}>
            <h3>Add a Contact</h3>
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

            <TextField 
                id="contact-phone"
                type="phone" 
                name="phone"
                label="Phone number"
                value={formData.phone}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                required
                variant="outlined" 
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
                type="department" 
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
                id="contact-notes"
                type="notes" 
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

export default ContactForm