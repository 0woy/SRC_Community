import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    color: 'black',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    flex: 1,
    fontSize: 16,
  },
  postContainer: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingBottom: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  headerText: {
    padding: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },

  postContentContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'lightgray',
    borderBottomWidth: 2,
    borderBottomColor: '#999',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
  postTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  postTime: {
    fontSize: 12,
    color: '#999',
    textAlign: 'right',
  },
  postContent: {
    margin: 10,
    marginTop: 10,
    color: 'black',
    fontSize: 14,
    textAlign: 'left',
  },
  postCommentContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: 'skyblue',
  },
  commentContainer: {
    marginBottom: 20,
  },
  commentInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: '#ccc',
  },
  optionText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
