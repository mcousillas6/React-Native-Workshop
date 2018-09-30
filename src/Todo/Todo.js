import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './Todo.styles';

class Todo extends Component {
  static navigationOptions = {
    title: 'To Do',
    headerTintColor: 'black',
  };

  getParams = () => {
    const { navigation } = this.props;
    return navigation.getParam('todo', null);
  }

  renderSeparator = () => <View style={styles.separator} />

  renderTitle = title => (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        {title}
      </Text>
      {this.renderSeparator()}
    </View>
  )

  renderContent = todo => (
    <View style={styles.contentContainer}>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}> {todo.description} </Text>
      </View>
      <Button style={styles.completeButton} title="Complete" />
    </View>
  )

  render() {
    const todo = this.getParams();
    return (
      <View style={styles.container}>
        {this.renderTitle(todo.title)}
        {this.renderContent(todo)}
      </View>
    );
  }
}

export default Todo;
