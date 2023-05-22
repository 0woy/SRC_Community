import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#094A73',
    padding: 20,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
  },
  postContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    width: '100%',
    borderBottomColor: '#a0a0a0',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  postTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  postTime: {
    color: 'black',
    fontSize: 12,
    color: '#a0a0a0',
  },
  postContent: {
    color: 'black',
    fontSize: 14,
    lineHeight: 20,
  },
  writeButton: {
    backgroundColor: 'rgba(242, 65, 65,0.75)',
    padding: 8,
    borderRadius: 5,
  },
  writeContainer: {
    alignItems: 'center',
    paddingBottom: 15,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

export default styles;
