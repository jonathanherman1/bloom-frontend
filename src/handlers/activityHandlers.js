import * as activityService from '../services/activityService.js';

const handleDeleteActivity = async (activities, setActivities, id) => {
  try {
    const deletedActivity = await activityService.deleteOne(id);
    let actArray = activities.filter((act) => act.id !== id);
    setActivities(actArray);
    return deletedActivity;
  } catch (error) {
    throw error;
  }
};

export { handleDeleteActivity };
