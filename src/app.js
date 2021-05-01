import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {fetchData} from './actions/index';

const handleClickBtn = props => {
  props.fetchData();
};

const App = props => {
  const {container, content} = styles;

  return (
    <View style={container}>
      <Button
        title="Load"
        onPress={() => {
          handleClickBtn(props);
        }}></Button>
      <View style={content}>
        {props.fetchReducer.isFetching && <Text>Loading</Text>}
        {!props.fetchReducer.isFetching && props.fetchReducer.data.length
          ? props.fetchReducer.data.map((person) => {
              return (
                <View>
                  <Text>Name: {person.name}</Text>
                  <Text>Position: {person.position}</Text>
                </View>
              );
            })
          : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    marginTop: 10,
  },
  image: {
    height: 50,
    width: '100%',
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 30,
  },
  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: 10,
  },
  content: {
    marginTop: 50,
  },
});

// Used to add reducer's state into the props
const mapStateToProps = state => ({
  fetchReducer: state.fetchReducer,
});

// Used to add action (dispatch) into the props
const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
