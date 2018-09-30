import React from 'react';
import { createStackNavigator } from 'react-navigation';
import TodoList from '../TodoList';
import ToDo from '../Todo';

const RootStack = createStackNavigator(
  {
    TodoList,
    ToDo,
  },
  {
    initialRouteName: 'TodoList',
  },
);

export default () => <RootStack />;

