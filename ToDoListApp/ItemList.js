import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const ItemList = ({ text}) => {
    return (<View style={style.card}><Text>{text}</Text></View>)
}

const style = StyleSheet.create({
    card:{padding:15,backgroundColor:'pink',margin:5,fontSize:16}
})

export default ItemList;