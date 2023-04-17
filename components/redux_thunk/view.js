import React from 'react';
import {  View, Text, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {connect} from 'react-redux';
import {increase, decrease, modify} from './action';

const renderItem = ({ item }) => (
  <View style = { styles.item }>
    <View>
      <Text>{ item.asal } - { item.tujuan }</Text>
    </View>
    <View>
      <MaterialIcons name = "flight" size={24} color="#5CA454" style={styles.plane} />
    </View>
    <View style = { styles.info }>
      <Text style = { styles.plane_type }>{ item.maskapai }</Text>
      <Text style = { styles.date_info }>{ item.waktu }</Text>
    </View>    
  </View>
);

class Counter extends React.Component{
    
    constructor(props){
        super(props);
        console.log(this.props.counter);
    }

    render(){
        return (
            <View style={styles.card}>
              <FlatList
                data={this.props.counter.value}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                
              />
            </View>
        );
    }
}

const mapStateToProps=state=>{
    return {
        counter: state.counter,
    };
}

const mapDispatchToProps = dispatch => {
	return{
        increaseTheValue : () => {
            dispatch(increase());
        },

        decreaseTheValue : () => {
            dispatch(decrease());
        },

        modifyTheValue : () => {
            dispatch(modify());
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);