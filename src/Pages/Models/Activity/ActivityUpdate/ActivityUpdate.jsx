import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import * as activityService from '../../../../services/activityService.js'

// Styles
import styles from './ActivityUpdate.module.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ActivityUpdate(props) {
    const [formData, setFormData] = useState('')
    const history = useHistory()
    useEffect(() => {
      (async () => {
          const activityDetail = await activityService.getActivityById(props.match.params.id)
          setFormData(activityDetail)
      })()
    }, [props.match.params.id]);

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
        await props.handleUpdateActivity(formData, props.match.params.id)
        history.push('/activities')
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
              InputLabelProps={{shrink: true}}
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
              InputLabelProps={{shrink: true}}
            />
            <TextField
              id="activity-contact-method"
              name="contact_method"
              label="Contact Method"
              value={formData.contact_method}
              onChange={handleChange}
              rows={4}
              variant="outlined" 
              InputLabelProps={{shrink: true}}
            />
            <TextField
              id="activity-type"
              name="type"
              label="Type"
              value={formData.type}
              onChange={handleChange}
              rows={4}
              variant="outlined" 
              InputLabelProps={{shrink: true}}
            />
            <Button type="submit" variant="contained" color="primary">
              Update Activity
            </Button>
          </form>
        </div>
    )
}

export default withRouter(ActivityUpdate)