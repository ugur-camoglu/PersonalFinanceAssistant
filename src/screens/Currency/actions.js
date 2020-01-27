/*
 * actions.js
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

import { createAction } from 'redux-actions';
import * as api from 'src/api';
import { getRequestQueryParameter } from './helpers';

export const fetchExchangeRatesStart = createAction('CURRENCY/FETCH_EXCHANGE_RATES_START');
export const fetchExchangeRatesFailure = createAction('CURRENCY/FETCH_EXCHANGE_RATES_FAILURE');
export const setExchangeRates = createAction(
  'CURRENCY/SET_EXCHANGE_RATES',
  data => ({
    exchangeRates: data
  })
);

export const fetchExchangeRates = () => dispatch => {
  dispatch(fetchExchangeRatesStart());

  return api.fetchExchangeRates({ q: getRequestQueryParameter() })
    .then(data => dispatch(setExchangeRates(data)))
    .catch(e => dispatch(fetchExchangeRatesFailure(e)));
};