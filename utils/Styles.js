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
    marginRight: 10,
    display: 'flex',
    flexDirection: 'column'
  },
  rightContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  todoTitle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 5
  },
  todoDescription: {
    fontSize: 14,
    flex: 3,
    marginBottom: 5
  },
  todoFullname: {
    fontSize: 12,
    color: '#a066ca',
    flex: 1
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
  inputFullname: {
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
  },
  welcomeUser: {
    color: '#000',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center'
  }
})

export default styles
