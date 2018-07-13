import React from 'react';
import {View,Text} from 'react-native';

const header = (props) =>{
    return(
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>    
    );
}
const styles ={
    viewStyle:{
        backgroundColor:'#70A1F5',
        justifyContent:'center',
        paddingTop:15,
        alignItems:'center',
        height:50,
        shadowColor:'#000',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.2
    },
    textStyle:{
        fontSize:20,
        color:'#ffffff',
        fontFamily:'Arial'
    }
};
export default header;
