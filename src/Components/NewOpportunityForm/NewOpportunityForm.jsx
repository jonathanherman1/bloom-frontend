import React, { useState } from 'react';

// Styles
import styles from './NewOpportunityForm.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    //   props.handleAddOpportunity(formData)
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
            <TextField 
              id="opportunity-name"
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
              id="opportunity-date"
              type="date"
              name="date"
              label="Date"
              value={formData.date}
              onChange={handleChange}
              autoComplete="off"
              required
              fullWidth
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              id="opportunity-notes"
              name="notes"
              label="Notes"
              value={formData.notes}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined" 
            />
            <Button type="submit" variant="contained" color="primary">
              Add Opportunity
            </Button>
          </form>
        </div>
    )
}

export default NewOpportunityForm