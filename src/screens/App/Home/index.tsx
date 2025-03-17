import React from 'react';
import {Text, View} from 'react-native';
import StatusBarComponent from '../../../components/global/StatusBarComponent';
import useStyles from './style';

const Index = ({}) => {
  const {styles, colors} = useStyles();

  return (
    <>
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>

      <StatusBarComponent backgroundColor={colors.BACKGROUND}  />
      <Text style={styles.txt1}>This is Hello From react native Architecture </Text>
    </View>
    </>
  );
};

export default Index;
