import React, { Component } from 'react';
import {
  SafeAreaView,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import TodoRow from './TodoRow';
import Separator from './Separator';

const TODOS = [
  {
    title: 'Buy milk',
    description: "2L, don't for get to get the vegan one too",
    done: false,
  },
  {
    title: 'Go pickup laundry',
    description: 'Before 18:00hs',
    done: true,
  },
  {
    title: 'Buy birthday preset for john',
    description: null,
    done: false,
  },
];

class TodoList extends Component {
  static navigationOptions = {
    title: 'To Do List',
    headerTintColor: 'black',
  };

  renderItem = ({ item }) => <TodoRow todo={item} navigation={this.props.navigation} />;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={TODOS}
          renderItem={this.renderItem}
          ItemSeparatorComponent={Separator}
        />
      </SafeAreaView>
    );
  }
}

TodoList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default TodoList;
