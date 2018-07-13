import React, {Component} from 'react';
import firebase from 'firebase';
import {Text,TextInput,TouchableOpacity,View} from 'react-native';
import {Button,Card,CardSection,Input,Spinner,NewButton} from '../Common';

class LoginForm extends Component{
    state = {email:'',password:'',error:'',loading:false}
    
    onButtonPress(){
        const email = this.state.email;
        const password = this.state.password;
        this.setState({error:'',loading:true});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.loginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFail.bind(this));
        });
    }
    loginFail(){
        this.setState({error:'Authentication failed',loading:false});
    }
    loginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false
        });
    }
    renderButton(){
        if(this.state.loading){
            return(
                <NewButton>
                <Spinner size="small" />
                </NewButton>
            );
        }
        else{
            return(

                <TouchableOpacity onPress={this.onButtonPress.bind(this)}>
                    <Text style={style.textStyle}>
                    Log In
                    </Text>
                </TouchableOpacity>

                 
            );
        }
    }

    render(){
        return(
          <View>
              <View style={style.HeadTop} />
               <View>
               <View style={style.headLine}>
               <Text style={style.headlinetext}>Sign In</Text>
               </View>
                <Card>
                    <CardSection>
                      <View style={style.Inputbox}>
                        <TextInput 
                        autoCorrect={false}
                        secureTextEntry={false}
                        placeholder="Email address"
                        value={this.state.email}
                        onChangeText={email=>this.setState({email})}
                        
                        style={style.textBox} />
                        </View>
                    </CardSection>    
                     <CardSection>
                     <View style={style.Inputbox}>
                     <TextInput 
                        autoCorrect={false}
                        secureTextEntry={true}
                        placeholder="Password"
                        value={this.state.password}
                        
                        onChangeText={password=>this.setState({password})}
                        style={style.textBox} />
                         </View>
                     </CardSection> 
                    
                         
                 </Card> 
                 <Text style={style.errorText} >{this.state.error}</Text>
                 <NewButton >
                          {this.renderButton()} 
                </NewButton>
                  </View>
            </View>
              
        );
    }
}

const style={
    HeadTop:{
        height:50
    },
errorText:{
    fontSize:20,
    color:'red',
    alignSelf:'center'
},
headLine:{
    justifyContent:'center',
    paddingTop:15,
    alignItems:'center',
    height:60
},
textBox:{
        color:'#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
},
headlinetext:{
    color:'#007aff',
    fontSize:34
},
Inputbox:{
    marginTop:5
},
textStyle:{
    alignSelf:'center',
    color:'#007aff',
    fontSize:34,
    fontWeight:'500',
    paddingTop:10,
    paddingBottom:10
}
};


export default LoginForm;