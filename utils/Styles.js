import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    padding: 10
  },
  todoContainer: {
    padding: 10,
    borderColor: '#787878',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row'
  },
  leftContainer: {
    flex: 3,
    marginRight: 10
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  todoTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  todoDescription: {
    fontSize: 14
  },
  formContainer: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5
  },
  inputTitle: {
    padding: 10
  },
  inputDescription: {
    padding: 10
  },
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: '#a066ca',
    borderRadius: 5,
    marginBottom: 10
  },
  textAdd: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10
  },
  buttonGet: {
    alignItems: 'center',
    backgroundColor: '#a066ca',
    borderRadius: 5,
    marginBottom: 10
  },
  textGet: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10
  },
  buttonRemove: {
    alignItems: 'center',
    backgroundColor: '#a066ca',
    borderRadius: 5,
    marginBottom: 10
  },
  textRemove: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10
  },
  loginContainer: {
    display: 'flex',
    padding: 10
  },
  registerContainer: {
    display: 'flex',
    padding: 10
  },
  inputEmail: {
    padding: 10
  },
  inputPassword: {
    padding: 10
  },
  buttonLogin: {
    alignItems: 'center',
    backgroundColor: '#a066ca',
    borderRadius: 5,
    marginBottom: 10
  },
  textLogin: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10
  },
  buttonRegister: {
    alignItems: 'center',
    backgroundColor: '#a066ca',
    borderRadius: 5,
    marginBottom: 10
  },
  textRegister: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    padding: 10
  },
  errorMessage: {
    padding: 10,
    color: 'red'
  }
})

export default styles
