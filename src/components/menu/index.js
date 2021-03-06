import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Bookcase from '../../view/bookcase';
import BookFormDraw from '../../view/bookFormDraw';
import Icon from 'react-native-vector-icons/FontAwesome';
import estante from '../../assets/estante.png';
import logo from '../../assets/logo1.png';
import { connect } from 'react-redux';
import { processLogout } from '../../actions';




Icon.loadFont();

const Drawer = createDrawerNavigator();

class Menu extends React.Component {

    render() {
        return (
            <Drawer.Navigator initialRouteName="Nome"
                drawerStyle={styles.drawerStyle}
                drawerContentOptions={{ labelStyle: { "color": "#fff", fontSize: 22 } }}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="Estante"
                    component={Bookcase}
                    options={{ drawerIcon: config => <Image source={estante} style={styles.imageStyle} /> }}
                />
                <Drawer.Screen
                    name="Livro"
                    component={BookFormDraw}
                    options={{ drawerIcon: config => <Icon name="plus" size={30} color="#fff" /> }}
                />
            </Drawer.Navigator>
        )
    }
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <ProfileDrawer {...props} />
            <DrawerItemList {...props} />
            <DrawerItem
                label="Sair"
                onPress={() => {
                    processLogout()
                    props.navigation.replace("Index")
                }}
                labelStyle={{ color: '#ED2E7E', fontSize: 18 }} icon={() => <Icon name="power-off" size={30} color="#ED2E7E" />}
                style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ED2E7E', marginTop: 200 }}
            />
        </DrawerContentScrollView>
    )
}

function ProfileDrawer(props) {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={logo} style={{ width: 200 }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerImage: {
        marginTop: 43,
    },
    containerText: {
        alignItems: 'center'
    },
    drawerStyle: {
        width: 231,
        backgroundColor: '#2A00A2',
        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
    },
    container: {
        alignItems: 'center',
        marginBottom: 35
    },
    imageStyle: {
        width: 40,
    },
    firstName: {
        color: '#fff',
        fontSize: 22,
    },
    lastName: {
        color: '#fff',
        fontSize: 22,
    }
})

export default connect(null, { processLogout })(Menu);