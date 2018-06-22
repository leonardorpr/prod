import React from 'react';
import { TabNavigator, StackNavigator, TabView, HeaderBackButton } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';

import Login from '../components/app/login';
import CreateTask from '../components/app/task/form';
import TaskDetail from '../components/app/task/view';
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

export const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
  }
});

export const SignOut = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    },
  }
});

export const Detail = StackNavigator({
  TaskDetail: {
    screen: TaskDetail,
    navigationOptions: {
      headerTintColor: colors.accent.red,
      headerStyle: {
        backgroundColor: colors.accent.orange,
      },
      //headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />
    }
  }
});

export const RootNavigator = (logged = false) => {
  return (
    StackNavigator({
      SignOut: { screen: SignOut },
      Main: { screen: MainNavigator }
    },
    {
      headerMode: 'none',
      mode: 'modal',
      initialRouteName: logged ? 'SignOut' : 'Main',
      navigationOptions: {
        gesturesEnabled: false
      }
    })
  )
}
