import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

// Material UI
import Button from '@material-ui/core/Button'
import MuiPhoneNumber from 'material-ui-phone-number'
import TextField from '@material-ui/core/TextField'

// Styles
import styles from './ContactCreate.module.css'

function ContactCreate(props) {
    const { id } = useParams()
    const [ phoneNum, setPhoneNum ] = useState('')
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        department: '',
        first_contact_through: '',
        notes: '',
        company: '',
        opportunity: id ? id : '', 
        owner: props.currentUser.id
    })

    const handleChange = (e) => {
        setFormData({ 
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleInput = (value) => {
        setPhoneNum(value)
    }

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
            formData.phone = phoneNum
            props.handleAddContact(formData)
            setFormData({
                name: '',
                phone: '',
                email: '',
                department: '',
                first_contact_through: '',
                notes: '',
                opportunity: id ? id : '', 
                owner: props.currentUser.id
            })
            setPhoneNum('')
        
        id ? history.push(`/opportunities/${id}`) : history.push('/contacts')
    }

    return (
        <div className={styles.container}>
            <h2>Add Contact</h2>
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
                variant="outlined" 
            />

            <TextField 
                id="contact-department"
                type="text" 
                name="department"
                label="Department/Role"
                value={formData.department}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
                variant="outlined" 
            />
            
            <TextField 
                id="contact-first-contact-through"
                type="text" 
                name="first_contact_through"
                label="Initial Point of Contact"
                value={formData.first_contact_through}
                onChange={handleChange}
                autoComplete="off"
                fullWidth
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
                variant="outlined" 
            />
                <Button type="submit" variant="contained" color="primary">
                    SUBMIT
                </Button>
            </form>
        </div>
    )
}

export default ContactCreate