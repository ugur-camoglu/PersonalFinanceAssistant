/*
 * selectors.js
 *
 * Copyright (c) 2017 Artsiom Staratsitarau
 *
 * This file is a part of PersonalFinanceAssistant.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import { INCOME_CATEGORY, OUTCOME_CATEGORY } from 'src/constants/categoryTypes';

const getCategoriesListByType = ({ categoriesList: { categories: { byId, order }}}, type) => order
  .filter(id => byId[id].categoryTypeId === type)
  .map(id => byId[id]);

export const getIncomeCategoriesList = state =>
  getCategoriesListByType(state, INCOME_CATEGORY);

export const getOutcomeCategoriesList = state =>
  getCategoriesListByType(state, OUTCOME_CATEGORY);

export const isCategoriesListDataFetching = state => state.categoriesList.fetching;

export const isCategoriesListDataRefreshing = state => state.categoriesList.refreshing;