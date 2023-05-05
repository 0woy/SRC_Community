import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#094A73',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deepContainer: {
    alignItems: 'center',
  },
  subContainer: {
    marginTop: 50,
    backgroundColor: '#F2F2F2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  textInput: {
    backgroundColor: 'white',
    width: 350,
    marginBottom: 10,
    fontSize: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    color: 'black',
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    height: 30,
    width: 200,
    backgroundColor: '#F24141',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
