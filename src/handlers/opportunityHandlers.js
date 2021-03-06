import * as opportunityService from '../services/opportunityService.js';

const handleDeleteOpportunity = async (opportunities, setOpportunities, id) => {
  try {
    const deletedOpportunity = await opportunityService.deleteOne(id);
    let oppArray = opportunities.filter((opp) => parseInt(opp.id) !== parseInt(id));
    setOpportunities(oppArray);
    return deletedOpportunity;
  } catch (error) {
    throw error;
  }
};

export { handleDeleteOpportunity };
