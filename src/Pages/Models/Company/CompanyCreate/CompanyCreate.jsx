import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

// Material UI
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

// Styles
import styles from './CompanyCreate.module.css';

function CompanyCreate(props) {
    const [formData, setFormData] = useState({
      name: '',
      location: '',
      url: 'http://',
      summary: '',
      interested: false,
      glassdoor_rating: null,
      business_structure: '',
      notes: '',
      archived: false,
      owner: props.currentUser.id
    })

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    const history = useHistory()
    const handleSubmit = (e) => {
      e.preventDefault()
      props.handleAddCompany(formData)
      setFormData({
        name: '',
        location: '',
        url: 'http://',
        summary: '',
        interested: false,
        glassdoor_rating: null,
        business_structure: '',
        notes: '',
        archived: false,
        owner: props.currentUser.id
      })
      history.push('/companies');
    }
  
    return (
        <div className={styles.container}>
          <Typography variant="h5" mb={1}>Add Company</Typography>
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
            />
            <TextField
              id="company-glassdoor-rating"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 5, step: 0.1 } }}
              name="glassdoor_rating"
              label="Glassdoor Rating"
              value={formData.glassdoor_rating}
              onChange={handleChange}
              variant="outlined" 
            />
             <FormControl variant="outlined">
              <InputLabel id="business_structure">Business Structure</InputLabel>
              <Select
                labelId="business_structure"
                id="business_structure"
                value={formData.business_structure}
                onChange={(e) => setFormData({ ...formData, business_structure: e.target.value })}
                label="business_structure"
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

export default CompanyCreate