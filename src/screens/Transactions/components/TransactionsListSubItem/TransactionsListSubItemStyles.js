/*
 * TransactionsListSubItemStyles.js
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

import { StyleSheet } from 'react-native';
import { colors } from 'src/styles';

export default StyleSheet.create({
  subItemContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: '#E0E0E0',
    borderBottomColor: colors.SILVER,
    borderBottomWidth: 1
  },
  subItemMain: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  subItemNote: {
    marginTop: 4,
    fontStyle: 'italic'
  },
  subItemDateContainer: {
    flex: 1
  }
});
