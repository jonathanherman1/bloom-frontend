import React from "react"
import { Link } from "react-router-dom"

// Components
import Animation from '../../../../Components/Animation/AnimationNoCss'
import PrevCard from "../../../../Components/PrevCard/PrevCard"

// Content
import plantAnimation from '../../../../Assets/lottie-files/38193-relaxing-floral-animation.json'

// Material UI
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import AddIcon from '@material-ui/icons/Add';
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

// Styles
import styles from "./ActivityIndex.module.css"

const ActivityIndex = ({ activities }) => {
	const activitiesList = () => {
		return activities.map((a, i) => {
			return (
				<Grid item xs className={styles.grid}>
				<PrevCard
					key={i}
					name={a.name}
					date={a.date}
					notes={a.notes}
					id={a.id}
          			preRoute="activities"
				/>
				</Grid>
			)
		})
	}

	const noActivities = () => {
		return (
			<Box className={styles.noData}>
				<div className={styles.animationBox}>
					<div className={styles.activityAction}>
						<h1>No activities. Would you like to add one?</h1>
						<Button
							component={Link}
							to="/activities/new"
							startIcon={<AddCircleOutlineIcon id={styles.btnAddActivity} />}
						>
							Add Activity
						</Button>
					</div>
					<div className={styles.plantanim}>
						<Animation animData={plantAnimation} />
					</div>
					
				</div>
			</Box>
		)
	}

	const button = (
		<Box className={styles.addBtnContainer}>
		<Tooltip 
			title="Add Activity" 
			aria-label="add" 
			component={Link}
			to='/activities/new'
			placement="right">
			<Fab color="primary">
				<AddIcon />
			</Fab>
			</Tooltip>
    	</Box>
	)

	return (
		<div className={styles.container}>
			 <br></br>
			<Typography variant='h5'>Activities</Typography>
			<br></br>
			{activities.length ? 
			<>
				{button}
				<Grid 
					container
					direction="row"
					justifyContent="center"
					alignItems="center">
				{activitiesList()}
				</Grid>
			</> : noActivities()
			}
			<Box mb={6}></Box>
		</div> 
	)
}

export default ActivityIndex
