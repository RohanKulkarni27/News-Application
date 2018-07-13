import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {Button,Spinner,Card,CardSection} from './Common';
import Header from './Components/header';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';
import Categories from './Components/Categories'


class App extends Component{
  state={loggedIn:null};
    componentDidMount(){
        
        firebase.initializeApp({
                apiKey: "AIzaSyCzt9rajFn4DaHHwo48S3dF4rJRCbDEatA",
                authDomain: "mobileapp-2bf47.firebaseapp.com",
                databaseURL: "https://mobileapp-2bf47.firebaseio.com",
                projectId: "mobileapp-2bf47",
                storageBucket: "mobileapp-2bf47.appspot.com",
                messagingSenderId: "545394774725"
            });
            firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    this.setState({loggedIn:true});
                }
                else{
                    this.setState({loggedIn:false});
                }
            });
    }
  renderForm(){
    switch(this.state.loggedIn){
        case true:
        return(
            <View>
           <Categories />
           </View>
        );
        case false:
        return(
          <View>
          <Header headerText="News" />
          <LoginForm />
          </View>
        );
      
        
        
    }
}
  render(){
    return(
      <View>
     
      {this.renderForm()}
      </View>
    )
  }
}

export default App;