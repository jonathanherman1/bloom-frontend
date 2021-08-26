import React from "react"
import { Link } from "react-router-dom"

// Components
import PrevCard from "../PrevCard/PrevCard"
import Animation from "../Animation/AnimationNoCss"

// Content
import plantAnimation from "../../Assets/lottie-files/38193-relaxing-floral-animation.json"

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
