import {StyleSheet} from 'react-native';

const Fstyles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  subContainer: {flexDirection: 'row', marginVertical: 10},
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
    width: 350,
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
  text: {fontSize: 20, fontWeight: 'bold', color: '#F24141'},
});

export default Fstyles;
