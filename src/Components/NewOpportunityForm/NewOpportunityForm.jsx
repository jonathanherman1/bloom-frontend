import React, { useState } from 'react';

// Styles
import styles from './NewOpportunityForm.module.css'

function NewOpportunityForm(props) {
    const [formData, setFormData] = useState({
      name: '',
      date: '',
      notes: ''
    })
    
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.handleAddOpportunity(formData)
      setFormData({
        name: '',
        date: '',
        notes: ''
      })
    }
  
    return (
        <div className={styles.container}>
          <h2>Add Opportunity</h2>
          <form 
             id="add-opportunity-form" 
             onSubmit={handleSubmit}
             className={styles.form}
          >
            <label htmlFor="opportunity-name">Name</label>
            <input
              id="opportunity-name" 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              placeholder="opportunity name"
              required
            />
            <label htmlFor="opportunity-date">Date</label>
            <input 
              id="opportunity-date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <label htmlFor="opportunity-notes">Notes</label>
            <textarea 
              id="opportunity-notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              cols="30" 
              rows="10" 
              placeholder="type opportunity notes here"
            ></textarea>
            <button type="submit">
              Add Opportunity
            </button>
          </form>
        </div>
    )
}

export default NewOpportunityForm