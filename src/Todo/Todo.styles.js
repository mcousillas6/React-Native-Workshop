import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    paddingTop: 20,
  },
  titleContainer: {
    height: '10%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 12,
  },
  contentContainer: {
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  descriptionText: {
    textAlign: 'center',
  },
  descriptionContainer: {
    marginBottom: 20,
  },
  separator: {
    borderWidth: 0.5,
    width: '90%',
    borderColor: 'gray',
  },
});

export default styles;
