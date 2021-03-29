import React, {useState, useEffect} from 'react';
import * as R from 'ramda';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import theme from '../../cores/theme/index';
import Dropdownlist from '../Dropdownlist/index';

const SearchComponent = ({data, setData, title}) => {
  const [themeSelected, setThemeSelected] = useState('lightTheme');
  const [searchValue, setSearchValue] = useState('');
  const [filterType, setFilterType] = useState({
    filterType: !R.isNil(title) && !R.isEmpty(title.value) ? title.value : [],
  });

  useEffect(() => {
    if (!R.isEmpty(data)) {
      if (!R.isEmpty(searchValue)) {
        let _data = [...data];
        if (searchValue !== ' ') {
          try {
            // _data = _data.filter(item => {
            //   const _searchValue = searchValue.toLowerCase();
            //   return item.firstName.match(_searchValue);
            // });
            // console.log(_data);
            // setData(_data);

            //filter data
            let search_data = [];
            for (let key in title) {
              const _filterData = _data.filter(item => {
                const _searchValue = searchValue.toLowerCase();
                const _filterType =
                  !R.isNil(title[key].value) && title[key].value !== 'action'
                    ? title[key].value
                    : '';
                return (
                  !R.isEmpty(_filterType) &&
                  item[`${_filterType}`].match(_searchValue)
                );
              });
              search_data = [...search_data, ..._filterData];
            }

            // dropRepeats
            const new_searchData = [];
            search_data.forEach(obj => {
              if (!new_searchData.some(o => o.key === obj.key)) {
                new_searchData.push({...obj});
              }
            });
            console.log('new_searchData', new_searchData);
            setData(new_searchData);
          } catch (error) {
            console.log(
              'error useEffect([data, searchValue]) from search component',
              error,
            );
          }
        }
      } else {
        setData(data);
      }
    }
  }, [searchValue]);

  // const handleFilterChange = (type, value) => {
  //   console.log(type, ': ', value);
  // };

  return (
    <View
      style={[
        {
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
        },
      ]}>
      {/* {!R.isNil(title) && !R.isEmpty(title) && (
        <View
          style={{
            flex: 0.5,
          }}>
          <Dropdownlist
            minHeight={120}
            items={filterType.filterType}
            // defaultValue={
            //   !R.isEmpty(filterType.filterType) ? filterType.filterType[0] : ''
            // }
            placeholder="filter"
            containerStyle={{height: 40, marginTop: 10, width: 120}}
            DropdownlistName="filterType"
            onChangeItem={handleFilterChange}
          />
        </View>
      )} */}
      <View
        style={{
          flex: 0.5,
        }}>
        <TextInput
          style={styles.input}
          onChangeText={e => setSearchValue(e)}
          value={searchValue}
          placeholder="Search"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default SearchComponent;
