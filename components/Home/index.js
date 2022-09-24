import {Box} from '@react-native-material/core';
import {Text, StyleSheet, View} from 'react-native';
import WithHeader from '../WithHeader';
import GradeTile from './GradeTile';

const Home = () => {
  return (
    <View>
      <WithHeader>
        <Box h={32} m={4} pt={2} style={styles.boxSem}>
        <GradeTile data={{subject_name:'General Mathematics' , final_grade:89}} />
        </Box>
      </WithHeader>
    </View>
  );
};

const styles = StyleSheet.create({
  boxSem: {
    backgroundColor: '#2AA876',
  },
});
export default Home;
