import React from 'react';
import { View, TextInput, TouchableHighlight, FlatList, Text, Alert, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import Todo from '../components/Todo'
import styles from '../utils/Styles'
import * as firebase from 'firebase'
import messages from '../utils/Messages';

class HomeScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'RNTodo',
      headerRight: (
        <TouchableOpacity
          onPress={navigation.getParam('signOut')}>
          <Text style={{ padding: 10, color: '#fff' }}>
            SignOut
          </Text>
        </TouchableOpacity>
      )
    }
  }

  constructor() {
    super()

    this.state = {
      todos: [],
      title: '',
      description: '',
      user_id: '',
      fullname: '',
      key: '',
      isUpdate: false,
      user: {},
      errorMessage: ''
    }
  }

  componentDidMount = () => {
    firebase.database().ref('todos/').on('value', snapshot => {
      const todos = snapshot.val()
      this.setState({ todos: todos })
    })

    this.props.navigation.setParams({ signOut: this._signOut })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user: user })
      }
    })
  }

  _signOut = () => {
    firebase.auth().signOut()
      .then(() => {
        this.props.navigation.navigate('Login')
        Alert.alert('Success', messages.SIGN_OUT)
      })
      .catch(err => console.log(err))
  }

  _addTodo = () => {
    let { title, description, user } = this.state
    if (!title) {
      this.setState({
        errorMessage: messages.TITLE_BLANK
      })
    } else if (!description) {
      this.setState({
        errorMessage: messages.DESCRIPTION_BLANK
      })
    } else {
      const newTodoKey = firebase.database().ref().child('todos').push().key
      const todo = { title: title, description: description, user_id: user.uid, fullname: user.displayName }
      firebase.database().ref('todos/').update({
        [newTodoKey]: todo
      })
      this.setState({ title: '', description: '', errorMessage: '', isUpdate: false })
      Alert.alert('Success', messages.TODO_CREATE_SUCCESS)
    }
  }

  _getTodo = (key) => {
    firebase.database().ref('todos/' + key).on('value', snapshot => {
      const todo = Object.create(snapshot.val())
      this.setState({ title: todo.title, description: todo.description, user_id: todo.user_id, fullname: todo.fullname, key: key, isUpdate: true })
    })
  }

  _updateTodo = (key) => {
    let { title, description, user_id, fullname } = this.state
    if (!title) {
      this.setState({
        errorMessage: messages.TITLE_BLANK
      })
    } else if (!description) {
      this.setState({
        errorMessage: messages.DESCRIPTION_BLANK
      })
    } else {
      firebase.database().ref('todos/' + key).set({
        title: title,
        description: description,
        user_id: user_id,
        fullname: fullname
      })

      this.setState({ title: '', description: '', key: '', isUpdate: false, errorMessage: '' })
      Alert.alert('Success', messages.TODO_UPDATE_SUCCESS)
    }
  }

  _removeTodo = (key) => {
    firebase.database().ref('todos/' + key).remove()
    this.setState({ isUpdate: false })
    Alert.alert('Success', messages.TODO_DELETE_SUCCESS)
  }

  render() {
    let user = this.state.user ? Object.create(this.state.user) : {}
    const todos = this.state.todos ? Object.keys(this.state.todos).map(key => {
      return {
        key: key,
        todo: this.state.todos[key]
      }
    }) : []

    return (
      <View style={styles.appContainer}>
        <Text style={styles.welcomeUser}>Welcome, {user.displayName}</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder={messages.TITLE_FILL}
            onChangeText={(text) => this.setState({ title: text })}
            value={this.state.title}
            style={styles.inputTitle}
          />
          <TextInput
            placeholder={messages.DESCRIPTION_FILL}
            multiline={true}
            onChangeText={(text) => this.setState({ description: text })}
            value={this.state.description}
            style={styles.inputDescription}
          />
          {
            this.state.errorMessage ? <Text style={styles.errorMessage}>{this.state.errorMessage}</Text> : ''
          }
        </View>
        <TouchableHighlight
          onPress={() => this.state.isUpdate ? this._updateTodo(this.state.key) : this._addTodo()}
          style={styles.buttonAdd}>
          <Text style={styles.textAdd}>{this.state.isUpdate ? 'Update' : 'Add'}</Text>
        </TouchableHighlight>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : null}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
          <FlatList
            inverted
            data={todos}
            renderItem={({ item }) => <View style={styles.todoContainer}>
              <Todo todo={item} />
              <View style={styles.rightContainer}>
                <TouchableHighlight
                  onPress={() => this._getTodo(item.key)}
                  style={styles.buttonGet}>
                  <Text style={styles.textGet}>Edit</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this._removeTodo(item.key)}
                  style={styles.buttonRemove}>
                  <Text style={styles.textRemove}>Remove</Text>
                </TouchableHighlight>
              </View>
            </View>}
            keyExtractor={item => item.key}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default HomeScreen
