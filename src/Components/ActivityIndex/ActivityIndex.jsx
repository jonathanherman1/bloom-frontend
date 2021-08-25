import React from "react"
import { Link } from "react-router-dom"

// Components
import PrevCard from "../PrevCard/PrevCard"
import Animation from "../Animation/Animation"

// Content
import seedAnimation from "../../Assets/lottie-files/73344-seed.json"

// Material UI
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
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

	return (
		<div className={styles.container}>
			{activities.length ? activitiesList() : noActivities()}
		</div>
	)
}

export default ActivityIndex
