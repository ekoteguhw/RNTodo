import React from 'react'
import { View, TextInput, TouchableHighlight, Text, Alert } from 'react-native'
import styles from '../utils/Styles';
import messages from '../utils/Messages'
import * as firebase from 'firebase'

class RegisterScreen extends React.Component {

  static navigationOptions = {
    title: 'Register'
  }

  constructor() {
    super()
    this.state = {
      fullname: '',
      email: '',
      password: '',
      errorMessage: ''
    }
  }

  _register = () => {
    let { fullname, email, password } = this.state
    if (!fullname) {
      this.setState({
        errorMessage: messages.FULLNAME_BLANK
      })
    } else if (!email) {
      this.setState({
        errorMessage: messages.EMAIL_BLANK
      })
    } else if (!password) {
      this.setState({
        errorMessage: messages.PASSWORD_BLANK
      })
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          let user = firebase.auth().currentUser
          user.updateProfile({
            displayName: fullname
          }).then(() => {
            this.setState({ errorMessage: '' })
            this.props.navigation.navigate('Home')
            Alert.alert('Success', messages.ACCOUNT_CREATE_SUCCESS)
          }).catch(err => { this.setState({ errorMessage: err.message }) })
        })
        .catch(err => {
          this.setState({ errorMessage: err.message })
        })
    }
  }

  render() {
    return (
      <View style={styles.registerContainer}>
        <View style={styles.formContainer}>
          <TextInput
            placeholder={messages.FULLNAME_FILL}
            onChangeText={(text) => this.setState({ fullname: text })}
            keyboardType="default"
            autoCapitalize="none"
            style={styles.inputFullname}
          />
          <TextInput
            placeholder={messages.EMAIL_FILL}
            onChangeText={(text) => this.setState({ email: text })}
            keyboardType="email-address"
            textContentType="emailAddress"
            autoCapitalize="none"
            style={styles.inputEmail}
          />
          <TextInput
            placeholder={messages.PASSWORD_FILL}
            onChangeText={(text) => this.setState({ password: text })}
            secureTextEntry={true}
            style={styles.inputPassword}
          />
          {
            this.state.errorMessage ? <Text style={styles.errorMessage}>{this.state.errorMessage}</Text> : ''
          }
        </View>
        <TouchableHighlight
          onPress={() => this._register()}
          style={styles.buttonRegister}>
          <Text style={styles.textRegister}>Register</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

export default RegisterScreen
