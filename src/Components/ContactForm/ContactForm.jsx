import React, { useState } from 'react';

import styles from './ContactForm.module.css'

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
                <label htmlFor="contact-name">Name</label>
                <input
                    id="contac-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="off"
                    placeholder="contact name"
                    required
                />
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                    id="contact-phone"
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <label htmlFor="contact-email">Email</label>
                <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="contact-department">Department</label>
                <input
                    id="contact-department"
                    type="department"
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                />
                <label htmlFor="contact-notes">Notes</label>
                <textarea
                    id="contact-notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    cols="30"
                    rows="10"
                    placeholder="type contact notes here"
                ></textarea>
                <button type="submit">
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default ContactForm