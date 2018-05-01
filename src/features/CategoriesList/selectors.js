import { INCOME_CATEGORY, OUTCOME_CATEGORY } from 'src/constants/categoryTypes';

const getCategoriesListByType = ({ storage: { categories: { byId, order }}}, type) => order
  .filter(id => byId[id].categoryTypeId === type)
  .map(id => byId[id]);

export const getIncomeCategoriesList = state =>
  getCategoriesListByType(state, INCOME_CATEGORY);

export const getOutcomeCategoriesList = state =>
  getCategoriesListByType(state, OUTCOME_CATEGORY);