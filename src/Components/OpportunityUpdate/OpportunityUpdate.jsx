import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './OpportunityUpdate.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

import * as opportunityService from '../../services/opportunityService.js'


const OpportunityUpdate = (props) => {
    const [ hover, setHover ] = useState(-1)
    const [ formData, setFormData ] = useState('')

    useEffect(() => {
      (async () => {
          const opportunityDetail = await opportunityService.getOpportunityById(props.match.params.id)
          setFormData(opportunityDetail)
      })()
    }, [props.match.params.id]);


    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
      }

      const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdateOpportunity(formData)
      }

    return (  <div className={styles.container}>
        <h2>Edit Opportunity</h2>
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
            InputLabelProps={{shrink: true}}
          />
          <Box component="fieldset" mt={1} borderColor="transparent" display="flex">
          <Typography> Interest: </Typography>
          <Rating
              name="stars"
              value={formData.rating}
              onChange={(event, newValue) => setFormData({ ...formData, rating: newValue })}
              onChangeActive={(event, newHover) => {setHover(newHover);}}
          />
          {formData.stars !== null && <Box ml={2} mt={1.5}>{[hover !== -1 ? hover : formData.rating]}</Box>}
          </Box>
          <TextField
            id="opportunity-date"
            type="date"
            name="date"
            label="Date"
            value={formData.date}
            onChange={handleChange}
            autoComplete="off"
            required
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            id="opportunity-location"
            type="location"
            name="location"
            label="Location"
            value={formData.location}
            onChange={handleChange}
            autoComplete="off"
            required
            variant="outlined"
            InputLabelProps={{shrink: true}}
          />
          <TextField
            id="opportunity-salary"
            type="number"
            name="salary"
            label="Salary"
            value={formData.salary}
            onChange={handleChange}
            autoComplete="off"
            required
            variant="outlined"
            InputLabelProps={{shrink: true}}
          />
          <TextField
            id="opportunity-responsibilities"
            type="test"
            name="responsibilities"
            label="Responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            autoComplete="off"
            multiline
            rows={2}
            required
            variant="outlined"
            InputLabelProps={{shrink: true}}
          />
          <TextField
            id="opportunity-requirements"
            type="test"
            name="requirements"
            label="Requirements"
            value={formData.requirements}
            onChange={handleChange}
            autoComplete="off"
            multiline
            rows={2}
            required
            fullWidth
            variant="outlined"
            InputLabelProps={{shrink: true}}
          />
          <TextField
            id="opportunity-years-experience-required"
            type="text"
            name="years_experience_required"
            label="Years Experience Required"
            value={formData.years_experience_required}
            onChange={handleChange}
            autoComplete="off"
            required
            variant="outlined"
            InputLabelProps={{shrink: true}}
          />
          <TextField
            id="opportunity-role_list_url"
            type="text"
            name="role_list_url"
            label="Role Listing"
            value={formData.role_list_url}
            helperText="Enter as valid URL"
            onChange={handleChange}
            autoComplete="off"
            required
            variant="outlined"
            InputLabelProps={{shrink: true}}
          />
          <FormControl variant="outlined">
            <InputLabel id="listing_source">Listing Source</InputLabel>
            <Select
              labelId="listing_source"
              id="listing_source"
              value={formData.listing_source}
              onChange={(e) => setFormData({ ...formData, listing_source: e.target.value })}
              label="listing_source"
              defaultValue={""}
            >
              <MenuItem value={"Indeed"}>Indeed</MenuItem>
              <MenuItem value={"LinkedIn"}>LinkedIn</MenuItem>
              <MenuItem value={"Jen"}>Jen told me about this directly</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="opportunity-keywords"
            type="text"
            name="keywords"
            label="Keywords"
            value={formData.keywords}
            onChange={handleChange}
            autoComplete="off"
            required
            variant="outlined"
            InputLabelProps={{shrink: true}}
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
            InputLabelProps={{shrink: true}}
          />
          <Button type="submit" variant="contained" color="primary">
            Update
          </Button>
        </form>
      </div> );
}
 
export default withRouter(OpportunityUpdate);