import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Styles
import styles from './NewCompanyForm.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

function NewCompanyForm(props) {
    const [formData, setFormData] = useState({
      name: '',
      location: '',
      url: '',
      summary: '',
      interested: false,
      glassdoor_rating: '',
      buisness_structure: '',
      notes: '',
      archived: false,
      owner: props.currentUser.id
    })

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
      console.log(formData)
    }
  
    const history = useHistory()
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
        business_structure: formData.buisness_structure,
        notes: '',
        owner: props.currentUser.id
      })
      history.push('/companies');
    }
  
    return (
        <div className={styles.container}>
          <Typography variant="h4" mb={1}> Add Company </Typography>
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
              rows={2}
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
              id="company-glassdoor-rating"
              type="number"
              max="5"
              name="glassdoor_rating"
              label="Glassdoor Rating"
              value={formData.glassdoor_rating}
              onChange={handleChange}
              variant="outlined" 
              required
            />
             <FormControl variant="outlined">
              <InputLabel id="buisness_structure">Buisness Structure</InputLabel>
              <Select
                labelId="buisness_structure"
                id="buisness_structure"
                value={formData.business_structure}
                onChange={(e) => setFormData({ ...formData, buisness_structure: e.target.value })}
                label="buisness_structure"
                defaultValue={""}
              >
                <MenuItem value={"Public"}>Public</MenuItem>
                <MenuItem value={"Private"}>Private</MenuItem>
                <MenuItem value={"Non_Profit"}>Non Profit</MenuItem>
              </Select>
            </FormControl>
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
            />
            <Button type="submit" variant="contained" color="primary">
              Add Company
            </Button>
          </form>
        </div>
    )
}

export default NewCompanyForm