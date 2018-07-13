import React, {Component} from 'react';
import {Card,CardSection} from '../Common';
import {View,Text,Image,Linking,TouchableOpacity} from 'react-native';

const BitCoinsDetail = (props) =>{
        return(
            <Card>
               
                    <View style={styles.headerContainerMain}>
                        <Text style={styles.textHeader}>{props.singlenews.title}</Text>
                     </View>
                  
                 <View style={styles.headerContainer}>
                    <Text style={styles.textAuthor}>{props.singlenews.author}</Text>
                    <Text style={styles.textAuthor}>{props.singlenews.source.name}</Text>
                </View>
                 <View style={styles.headerContainer}>
                    <Image style={styles.ImageStyles} source={{uri:props.singlenews.urlToImage}}
                    />
                </View>
                 <View style={styles.headerContainer}>
                <Text style={styles.textDescription}>{props.singlenews.description}</Text>
                </View>
                <View style={styles.headerContainer}>
                <TouchableOpacity onPress={()=>Linking.openURL(props.singlenews.url)}>
                <Text style={styles.ReadMore}>
                                Read More
                        </Text>
                </TouchableOpacity>
                </View>   
            </Card>    
        );
    }


const styles={
    headerContainer:{
        flexDirection:'column',
        justifyContent:'space-around',
        padding:5,
        
    },
    headerContainerMain:{
        flexDirection:'column',
        justifyContent:'space-around',
        padding:5,
        backgroundColor:'#fee27e'
    },
    textStyle:{
        fontSize:12,flex:1,
        
    },
    textHeader:{
        fontSize:22,
        fontFamily:'Arial',
        color:'#ffffff'
    },
    textAuthor:{
        fontSize:10,
        fontFamily:'Arial',
        color:'#404040'
    },
    ImageStyles:{
        height:300,
        flex:1,
        width:null
    },
    textDescription:{
        fontSize:14,
        fontFamily:'Arial',
        color:'#404040'
    },
    ReadMore:{
        fontSize:12,flex:1,color:'#70A1F5'
    },
}

export default BitCoinsDetail;