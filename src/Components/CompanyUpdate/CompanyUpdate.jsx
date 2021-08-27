import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Styles
import styles from './CompanyUpdate.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Typography } from '@material-ui/core';

import * as companyService from '../../services/companyService.js'


function CompanyUpdate(props) {
    const [formData, setFormData] = useState(props)

    useEffect(() => {
      (async () => {
          const companyDetail = await companyService.getCompanyById(props.match.params.id)
          setFormData(companyDetail)
      })()
    }, [props.match.params.id]);


    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.handleUpdateCompany(formData, props.match.params.id)
    }
  
    return (
        <div className={styles.container}>
          <Typography variant="h4" mb={1}> {`Update ${props.name}`} </Typography>
          <form 
             id="update-company-form" 
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
              InputLabelProps={{shrink: true}}
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
              InputLabelProps={{shrink: true}}
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
              InputLabelProps={{shrink: true}}
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
              InputLabelProps={{shrink: true}}
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
              InputLabelProps={{shrink: true}}
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
              InputLabelProps={{shrink: true}}
            />
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </form>
        </div>
    )
}

export default withRouter(CompanyUpdate)