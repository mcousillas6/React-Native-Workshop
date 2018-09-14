import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
} from 'react-native';
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
    description: "Before 18:00hs",
    done: true,
  },
  {
    title: 'Buy birthday preset for john',
    description: null,
    done: false,
  },
];

class TodoList extends Component {
  renderItem = ({ item }) => <TodoRow todo={item} />;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> TODO List </Text>
        <FlatList
          data={TODOS}
          renderItem={this.renderItem}
          ItemSeparatorComponent={Separator}
        />
      </SafeAreaView>
    );
  }
}

export default TodoList;
