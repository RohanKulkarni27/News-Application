import React, {Component} from 'react';
import {Text,View,TouchableOpacity,AppRegistry,Button} from 'react-native';
import firebase from 'firebase';
import LoginForm from './LoginForm';
import Wallstreet from '../News/Wallstreet';
import TechCrunch from '../News/TechCrunch';
import BitCoins from '../News/BitCoins'
import Business from '../News/Business';
import Apple from '../News/Apple';
import {createStackNavigator} from 'react-navigation';
import {NewButton} from '../Common'

class CategoriesScreen extends Component{
 static navigationOptions = {
     title:'Categories',
     headerStyle:{
        backgroundColor:'#70A1F5',
        paddingTop:15,
       
        height:50,
        shadowColor:'#000',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.2
     },
     headerTitleStyle: {
        fontSize:20,
        color:'#ffffff',
        fontFamily:'Arial'
      }
 }
    render(){
       
        return(
            <View style={Styles.viewStyle}>
              
                <View style={Styles.headLine}>
                <Text style={Styles.textStyle}>Select Your Category</Text> 
                </View>
                <NewButton>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('WallStreet')} style={Styles.buttonStyle}>
                    <Text style={Styles.textStyleButton}>
                            Direct from Wall Street Journal
                    </Text>
                </TouchableOpacity>
                </NewButton>
                <NewButton>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('TechCrunch')} style={Styles.buttonStyle}>
                    <Text style={Styles.textStyleButton}>
                           Tech News
                    </Text>
                </TouchableOpacity>
                </NewButton>
                <NewButton>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('BitCoins')} style={Styles.buttonStyle}>
                    <Text style={Styles.textStyleButton}>
                           Everything about bitcoins
                    </Text>
                </TouchableOpacity>
                </NewButton>
                <NewButton>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Business')} style={Styles.buttonStyle}>
                    <Text style={Styles.textStyleButton}>
                           Business Journal
                    </Text>
                </TouchableOpacity>
                </NewButton>
                <NewButton>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Apple')} style={Styles.buttonStyle}>
                    <Text style={Styles.textStyleButton}>
                           All about Apple
                    </Text>
                </TouchableOpacity>
                </NewButton>
                <NewButton>
                <TouchableOpacity onPress={this.logout.bind(this)} style={Styles.buttonStyle}>
                    <Text style={Styles.textStyleButton}>
                            Log Out
                    </Text>
                </TouchableOpacity>
                </NewButton>
            </View>

                
           
        );
    }
    
    logout(){
        firebase.auth().signOut();
    }
    
}

const RootStack = createStackNavigator(
    {
      Home: CategoriesScreen,
      WallStreet:Wallstreet,
      TechCrunch:TechCrunch,
      BitCoins:BitCoins,
      Business:Business,
      Apple:Apple
    }
);

const Styles={
    viewStyle:{
        paddingTop:60,
        backgroundColor:'#ffffff',
        justifyContent:'center',
        marginTop:30,
        
        height:500
    },
    textStyle:{
        fontSize:20,
        color:'#fcd14f',
        fontFamily:'Arial'
    },
    textStyleButton:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'500',
        paddingTop:20,
        paddingBottom:20
    },
    headLine:{
        alignItems:'center'
    }
}


export default class Categories extends Component {
    render(){
        return(
            <RootStack />
        )
    }
}

