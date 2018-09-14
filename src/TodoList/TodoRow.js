import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import doneIcon from '../assets/checkbox-marked/checkbox-marked.png';
import pendingIcon from '../assets/checkbox-blank/checkbox-blank.png';

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

const TodoRow = ({ todo }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>
        {todo.title}
      </Text>
      {todo.description && (
        <Text style={styles.description}>
          {todo.description}
        </Text>
      )}
    </View>
    <Image
      style={styles.icon}
      source={todo.done ? doneIcon : pendingIcon}
    />
  </View>
);

export default TodoRow;
