import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as R from 'ramda';
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownlistComponent = ({
  minHeight,
  items,
  defaultValue,
  placeholder,
  containerStyle,
  style,
  itemStyle,
  dropDownStyle,
  DropdownlistName,
  onChangeItem,
}) => {
  return (
    <View style={{minHeight: !R.isNil(minHeight) ? minHeight : 120}}>
      <DropDownPicker
        items={!R.isNil(items) && items}
        defaultValue={!R.isNil(defaultValue) && defaultValue}
        placeholder={!R.isNil(placeholder) && placeholder}
        containerStyle={
          !R.isNil(containerStyle)
            ? containerStyle
            : {height: 40, marginTop: 10, width: '50%'}
        }
        style={style ? style : {backgroundColor: '#fafafa'}}
        itemStyle={
          !R.isNil(itemStyle)
            ? itemStyle
            : {
                justifyContent: 'flex-start',
              }
        }
        dropDownStyle={
          !R.isNil(dropDownStyle)
            ? dropDownStyle
            : {backgroundColor: '#fafafa', position: 'absolute'}
        }
        onChangeItem={item => {
          if (!R.isNil(onChangeItem)) {
            onChangeItem(DropdownlistName, item.value);
          }
        }}
      />
    </View>
  );
};
export default DropdownlistComponent;
