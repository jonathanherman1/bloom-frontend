import * as companyService from '../services/companyService.js';

const handleDeleteCompany = async (companies, setCompanies, id) => {
  try {
    const deletedCompany = await companyService.deleteOne(id);
    let comArray = companies.filter((com) => com.id !== id);
    setCompanies(comArray);
    return deletedCompany;
  } catch (error) {
    throw error;
  }
};

export { handleDeleteCompany };
