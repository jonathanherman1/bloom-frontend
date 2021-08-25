import React from "react"
import { Link } from "react-router-dom"

// Components
import PrevCard from "../PrevCard/PrevCard"
import Animation from "../Animation/Animation"

// Content
import seedAnimation from "../../Assets/lottie-files/73344-seed.json"

// Material UI

import Box from "@material-ui/core/Box"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Button from "@material-ui/core/Button"
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"

// Styles
import styles from "./ActivityIndex.module.css"

const ActivityIndex = ({ activities }) => {
	const activitiesList = () => {
		return activities.map((a, i) => {
			return (
				<PrevCard
					key={i}
					name={a.name}
					date={a.date}
					notes={a.notes}
					id={a.id}
          preRoute="activities"
				/>
			)
		})
	}

	const noActivities = () => {
		return (
			<Box className={styles.noData}>
				<Animation animationData={seedAnimation} />
				<h1>No activities. Would you like to add one?</h1>
				<Button
					component={Link}
					to="/activities/new"
					startIcon={<AddCircleOutlineIcon />}
				>
					Add Activity
				</Button>
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
			{activities.length 
			? 
			 <>
				{button}
				{activitiesList()}
		   	 </> 
		   : 
		   		noActivities()}
		</div>
	)
}

export default ActivityIndex
