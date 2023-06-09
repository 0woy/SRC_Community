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
    padding: 13,
    alignItems: 'center',
    //marginTop: 5,
    marginBottom: 20,
  },
  SelectView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'center',
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

  text: {
    //paddingTop: 10,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
  },
});

export default styles;
