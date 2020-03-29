import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Image, TouchableOpacity } from 'react-native';

import ListMode from '../screens/ListMode';
import Selecionar from '../screens/Selecionar';
import Calendario from '../screens/Calendario';
import NovoItem from '../screens/NovoItem';
const MainNavigator = createStackNavigator({
    ListMode: {
        screen: ListMode
    },
    Selecionar: {
        screen: Selecionar
    },
    Calendario: {
        screen: Calendario
    },
    NovoItem: {
        screen: NovoItem
    }

},
    {
        defaultNavigationOptions: (props) => {
            abrirDrawer=()=>{
                props.navigation.openDrawer();
            }
            return {
                headerTransparent: true,
                headerTitleAlign: 'center',
                headerRight: () => (
                    <TouchableOpacity onPress={()=>props.navigation.openDrawer()}>
                        <View style={{ padding: 22 }} >
                            <Image source={require('../images/icon/iconDrawer.png')} />
                        </View>
                    </TouchableOpacity>
                )
            }
        }
    });

export default MainNavigator;