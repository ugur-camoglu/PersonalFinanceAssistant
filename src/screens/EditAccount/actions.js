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
import { NavigationActions } from 'react-navigation';
import * as api from 'src/api';
import { alerts } from 'src/utils';

export const setAccount = createAction(
  'EDIT_ACCOUNT/SET_ACCOUNT',
  account => ({ account })
);

export const updateAccount = accountData => (dispatch, getState) => {
  const { editAccount: { account: { id }}} = getState();

  return api.updateAccount(id, accountData)
    .then(() => {
      dispatch(NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'AccountsList' })
        ]
      }));
    })
    .catch(() => alerts.showCanNotPerformOperationAlert());
};