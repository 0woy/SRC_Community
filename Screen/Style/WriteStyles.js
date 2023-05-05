import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    //alignItems: 'baseline',
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor: '#094A73',
    padding: 15,
    marginBottom: 50,
  },
  Button: {
    alignItems: 'center',
    backgroundColor: '#094A73',
    borderRadius: 10,
    width: 80,
    justifyContent: 'center',
    height: 40,
  },
  BackButton: {
    alignItems: 'center',
    width: 15,
    justifyContent: 'center',
    height: 40,
  },

  BackText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 25,
  },

  submitText: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 18,
  },

  Title: {
    color: 'black',
    //borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontWeight: 'bold',
    fontSize: 20,
    marginHorizontal: 15,
  },
  Content: {
    margin: 10,
    color: 'black',

    fontWeight: 'normal',
    fontSize: 16,
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
    color: 'black',
    fontSize: 20,
  },
});

export default styles;
