import React from 'react';
import { TabNavigator, StackNavigator, TabView } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';

import CreateTask from '../components/app/task/form/create-task';
import Tasks from '../components/app/task/list';
import Dashboard from '../components/app/dashboard';

const Tabs = TabNavigator({
  Tasks: {
    screen: Tasks,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-list' size={33} color={tintColor} />
    }
  },
  CreateTask: {
    screen: CreateTask,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-add-circle-outline' size={33} color={tintColor} />
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-stats' size={33} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    showLabel: false,
    tabBarComponent: TabView.TabBarBottom,
    tabBarPosition: 'bottom',
    activeTintColor: colors.accent.red,
    style: {
      height: 50,
      backgroundColor: colors.secondary.light,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  },
  // CreateTask: {
  //   screen: CreateTask,
  //   navigationOptions: {
  //     headerTintColor: '#000',
  //     headerStyle: {
  //       backgroundColor:'#000',
  //     }
  //   }
  // }
});

export default MainNavigator;
