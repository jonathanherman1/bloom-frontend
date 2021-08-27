import React, { useState } from 'react';

// Styles
import styles from './UpdateActivityForm.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function UpdateActivityForm(props) {
    const [formData, setFormData] = useState(props)
    
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
        props.handleUpdateActivity(formData)
    }
  
    return (
        <div className={styles.container}>
          <h2>Edit Activity</h2>
          <form 
              id="update-activity-form" 
              onSubmit={handleSubmit}
              className={styles.form}
          >
            <TextField 
              id="activity-name"
              type="text" 
              name="name"
              label="Activity"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              fullWidth
              required
              variant="outlined" 
            />
  
            <TextField
              id="activity-date"
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
              id="activity-notes"
              name="notes"
              label="Notes"
              value={formData.notes}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined" 
            />
            <TextField
              id="activity-contact-method"
              name="contact_method"
              label="Contact Method"
              value={formData.contact_method}
              onChange={handleChange}
              rows={4}
              variant="outlined" 
            />
            <TextField
              id="activity-type"
              name="type"
              label="Type"
              value={formData.type}
              onChange={handleChange}
              rows={4}
              variant="outlined" 
            />
            <Button type="submit" variant="contained" color="primary">
              Update Activity
            </Button>
          </form>
        </div>
    )
}

export default UpdateActivityForm