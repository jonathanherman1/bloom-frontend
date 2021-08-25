import React, { useState } from 'react';

// Styles
import styles from './NewCompanyForm.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function NewCompanyForm(props) {
    const [formData, setFormData] = useState({
      name: '',
      location: '',
      url: '',
      summary: '',
      interested: false,
      glassdoor_rating: null,
      business_structure: '',
      notes: '',
    })
    
    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.handleAddCompany(formData)
      setFormData({
        name: '',
        location: '',
        url: '',
        summary: '',
        interested: formData.interested,
        glassdoor_rating: formData.glassdoor_rating,
        business_structure: '',
        notes: '',
      })
    }
  
    return (
        <div className={styles.container}>
          <h2>Add Company</h2>
          <form 
             id="add-company-form" 
             onSubmit={handleSubmit}
             className={styles.form}
          >
            <TextField 
              id="company-name"
              type="text" 
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="off"
              fullWidth
              variant="outlined" 
              required
            />
  
            <TextField
              id="company-location"
              type="text"
              name="location"
              label="Location"
              value={formData.location}
              onChange={handleChange}
              autoComplete="off"
              fullWidth
              variant="outlined"
              required
            />

            <TextField
              id="company-url"
              type="text"
              name="url"
              label="URL"
              value={formData.url}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined" 
              required
            />
            <FormControlLabel
                label="Interested"
                control={
                  <Switch
                    checked={formData.interested}
                    value={formData.interested}
                    onChange={() => setFormData({ ...formData, interested: !formData.interested })}
                    name="interested"
                    color="primary"
                  />
                }
                    
            />
                  
            <TextField
              id="company-glassdoor-rating"
              type="number"
              max={5}
              name="glassdoor_rating"
              label="Glassdoor Rating"
              value={formData.glassdoor_rating}
              onChange={handleChange}
              variant="outlined" 
              required
            />
            <TextField
              id="company-business-structure"
              type="text"
              name="business_structure"
              label="Business Structure"
              value={formData.business_structure}
              onChange={handleChange}
              multiline
              rows={2}
              variant="outlined" 
              required
            />
             <TextField
              id="company-summary"
              type="text"
              name="summary"
              label="Summary"
              value={formData.summary}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined" 
              required
            />
            <TextField
              id="company-notes"
              type="text"
              name="notes"
              label="Notes"
              value={formData.notes}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined" 
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Add Company
            </Button>
          </form>
        </div>
    )
}

export default NewCompanyForm