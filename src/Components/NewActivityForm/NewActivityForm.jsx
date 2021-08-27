import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import styles from './NewActivityForm.module.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


function NewActivityForm(props) {
    const { id } = useParams()
    const [formData, setFormData] = useState({
      name: '',
      date: '',
      notes: '',
      contact_method: '',
      type: '',
      contacts: [],
      company: '',
      opportunity: id ? id : '',
      owner: props.currentUser.id
    })
    
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    const history = useHistory()
    const handleSubmit = (e) => {
      e.preventDefault()
        props.handleAddActivity(formData)
        setFormData({
          name: '',
          date: '',
          notes: '',
          contact_method: '',
          type: '',
          contacts: [],
          company: '',
          opportunity: id ? id : '',
          owner: props.currentUser.id
        })
      history.push('/activities');
    }
  
    return (
        <div className={styles.container}>
          <h2>Add Activity</h2>
          <form 
             id="add-activity-form" 
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
              Add Activity
            </Button>
          </form>
        </div>
    )
}

export default NewActivityForm