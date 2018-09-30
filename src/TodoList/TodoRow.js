import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import doneIcon from '../assets/checkbox-marked/checkbox-marked.png';
import pendingIcon from '../assets/checkbox-blank/checkbox-blank.png';
import { Routes } from '../App';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#607D8B',
  },
  icon: {
    tintColor: '#607D8B',
    height: 24,
    width: 24,
  },
});

class TodoRow extends Component {
  onTodoSelected = () => {
    const { navigation, todo } = this.props;
    navigation.navigate(Routes.ToDo, {
      todo,
    });
  }

  render() {
    const { todo } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onTodoSelected}>
          <Text style={styles.title}>
            {todo.title}
          </Text>
          {todo.description && (
            <Text style={styles.description}>
              {todo.description}
            </Text>
          )}
        </TouchableOpacity>
        <Image
          style={styles.icon}
          source={todo.done ? doneIcon : pendingIcon}
        />
      </View>
    );
  }
}

TodoRow.propTypes = {
  navigation: PropTypes.object.isRequired,
  todo: PropTypes.object.isRequired,
};

export default TodoRow;
