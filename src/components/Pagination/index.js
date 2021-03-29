import React from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';

const PaginationComponent = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <View style={{flexDirection: 'row', margin: 16}}>
      {pageNumbers.map(number => {
        return (
          <Text
            key={number}
            onPress={() => paginate(number)}
            // style={number > 1 && {paddingLeft: 8}}
            style={[styles.pagination]}>
            {number}
          </Text>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  pagination: {
    borderWidth: 0.5,
    width: 20,
    textAlign: 'center',
  },
});
export default PaginationComponent;
