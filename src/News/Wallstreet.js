import React,{Component} from 'react';
import {View,Text,ScrollView} from 'react-native';
import {Card,CardSection} from '../Common';
import axios from 'axios';
import WallstreetDetail from './WallstreetDetail'

class Wallstreet extends Component{
    
    static navigationOptions = {
        title:'Wallstreet News',
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
        axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=5ca0ef6e66a54e0c908b4d4c45baedb1')
        .then(response=>this.setState({news:response.data.articles})
        )
        .catch(error => {
            console.log('Error', error);
          });
    }
    renderData(){
       return this.state.news.map(singlenews=>
            <WallstreetDetail key={singlenews.url} image={singlenews.urlToImage} singlenews={singlenews} />
          );
    }
    
    render(){
        
        return(
           
             
            <ScrollView style={{position:'absolute',height:680,marginTop:15,paddingTop:50}}>
           
            {this.renderData()}
           
            </ScrollView>
           
           
        );
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

export default Wallstreet;