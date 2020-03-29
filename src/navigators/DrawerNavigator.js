import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import MainNavigator from '../navigators/MainNavigator';
import TarefasConcluidas from '../screens/TarefasConcluidas';
import { View } from 'react-native';

const DrawerNavigator = createDrawerNavigator({
    MainNavigator: {
        screen: MainNavigator
    },


},
    {
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerWidth: '100%',

        contentComponent: ({ ...props }) => {
            return (
                < TarefasConcluidas {...props} />
            )
        }

    });
export default DrawerNavigator;