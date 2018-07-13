import React from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Card,CardSection} from '../Common';
import axios from 'axios';
import AppleDetails from './AppleDetails';
class Apple extends React.Component{
    static navigationOptions = {
        title:'Apple News',
        headerStyle:{
           backgroundColor:'#70A1F5',
           paddingTop:15,
          
           height:50,
           shadowColor:'#000',
           shadowOffset:{width:2,height:2},
           shadowOpacity:0.2
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
           fontSize:20,
           color:'#ffffff',
           fontFamily:'Arial'
         }
    }
    state={news:[]};
    componentWillMount(){
        axios.get('https://newsapi.org/v2/everything?q=apple&from=2018-07-11&to=2018-07-11&sortBy=popularity&apiKey=5ca0ef6e66a54e0c908b4d4c45baedb1')
        .then(response=>this.setState({news:response.data.articles})
        )
        .catch(error => {
            console.log('Error', error);
          });
    }
    renderdata(){
        return this.state.news.map(singlenews=>
             <AppleDetails key={singlenews.url} image={singlenews.urlToImage} singlenews={singlenews} />
           );
     }
    render(){
        return(
            <ScrollView style={{position:'absolute',height:680,marginTop:15,paddingTop:50}}>
            {this.renderdata()}
            </ScrollView>
        )
    }
}
const Styles = {
    viewStyle:{
        paddingTop:50,
        backgroundColor:'#ffffff',
        flex:1,
        marginTop:15,
        
    },
    textStyle:{
        fontSize:20,
        color:'#fcd14f',
        fontFamily:'Arial'
    }
}

export default Apple;