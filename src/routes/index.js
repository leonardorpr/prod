import { TabNavigator, StackNavigator, TabView } from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { purple, white } from '../utils/colors';

const Tabs = TabNavigator({
  Tasks: {
    screen: Tasks,
    navigationOptions: {
      tabBarLabel: 'Tarefas',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  AddTask: {
    screen: AddTask,
    navigationOptions: {
      tabBarLabel: 'Adicionar',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      tabBarLabel: 'Painel de Resultados',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-speedometer' size={30} color={tintColor} />
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    tabBarComponent: TabView.TabBarBottom,
    tabBarPosition: 'bottom',
    activeTintColor: Platform.OS === 'ios' ? purple : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : purple,
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
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      }
    }
  }
});

export default MainNavigator;
