import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    backgroundColor: '#094A73',
    padding: 25,
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
  subButton: {
    alignItems: 'center',
    //marginHorizontal: 20,
    //  marginVertical: 40,
    backgroundColor: '#F4F4CD',
    borderRadius: 10,
    paddingTop: 15,
    width: 50,
    height: 50,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
});

export default styles;
