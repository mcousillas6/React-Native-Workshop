import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  scrollView: {
    marginTop: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 24,
    backgroundColor: '#EEEEEE',
    alignSelf: 'stretch',
    padding: 10,
  },
  label: {
    fontSize: 16,
    alignSelf: 'stretch',
    padding: 10,
  },
  box: {
    backgroundColor: '#F44336',
    height: 100,
    width: 100,
  },
  rectangle: {
    backgroundColor: '#FFC107',
    alignSelf: 'stretch',
    height: 100,
  },
  spaceBetween: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 100,
    height: 100,
  },
  stretched: {
    alignSelf: 'stretch',
    alignItems: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
  priorities: {
    alignSelf: 'stretch',
    height: 300,
  },
});

export default styles;
