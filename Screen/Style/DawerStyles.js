import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    borderRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: 'white',
    flex: 1,
  },
  touched: {
    backgroundColor: '#fb8c00',
    borderRadius: 10,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingTop: 27,
    paddingLeft: 37,
    paddingBottom: 20,
  },
  text: {
    marginLeft: 12,
    color: '#272727',
    fontSize: 16,
    lineHeight: 19,
  },
  lastText: {
    marginLeft: 12,
    color: '#272727',
    fontSize: 14,
    lineHeight: 19,
  },
});

export default styles;
