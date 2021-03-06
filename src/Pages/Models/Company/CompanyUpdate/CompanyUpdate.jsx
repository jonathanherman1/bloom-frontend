import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';

// Services
import * as companyService from '../../../../services/companyService.js'

// Material UI
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';

// Styles
import styles from './CompanyUpdate.module.css';


function CompanyUpdate(props) {
    const [formData, setFormData] = useState(props)
    const history = useHistory()
    useEffect(() => {
      (async () => {
          const companyDetail = await companyService.getCompanyById(props.match.params.id)
          setFormData(companyDetail)
      })()
    }, [props.match.params.id]);


    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      await props.handleUpdateCompany(formData, props.match.params.id)
      history.push(`/companies/${props.match.params.id}`)
    }
  
    return (
        <div className={styles.container}>
          <Typography variant="h5" mb={1}> {props.name ? `Update ${props.name}` : 'Update Company'} </Typography>
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
            />
            <TextField
              id="company-glassdoor-rating"
              type="number"
              max="5"
              name="glassdoor_rating"
              label="Glassdoor Rating"
              InputProps={{ inputProps: { min: 0, max: 5, step: 0.1 } }}
              value={formData.glassdoor_rating}
              onChange={handleChange}
              variant="outlined" 
              InputLabelProps={{shrink: true}}
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
                <MenuItem value={"Public"} {...formData?.listing_source === "Public" ? "selected" : ""}>Public</MenuItem>
                <MenuItem value={"Private"} {...formData?.listing_source === "Private" ? "selected" : ""}>Private</MenuItem>
                <MenuItem value={"Non_Profit"} {...formData?.listing_source === "Non_Profit" ? "selected" : ""}>Non Profit</MenuItem>
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