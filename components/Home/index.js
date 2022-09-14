import {Box, View} from '@react-native-material/core';
import WithHeader from '../WithHeader';

const Home = () => {
  return (
    <View>
      <WithHeader>
        <Box h={32} m={4} pt={2} style={styles.boxSem}>
          <Text style={styles.sem}>1st Semester</Text>
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
