import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    backgroundColor: '#094A73',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  Button: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: '#404040',
    borderRadius: 10,
    paddingTop: 15,
    width: 150,
    height: 140,
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
