import React from 'react';
import { View, TextInput, TouchableHighlight, FlatList, Text, Alert } from 'react-native';
import Todo from '../components/Todo'
import styles from '../utils/Styles'
import * as firebase from 'firebase'

const config = {
  databaseURL: "https://rntodo-2972a.firebaseio.com"
}

firebase.initializeApp(config)

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'RNTodo',
    headerStyle: {
      backgroundColor: '#a066ca',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  constructor() {
    super()

    this.state = {
      todos: [],
      title: '',
      description: '',
      key: '',
      isUpdate: false
    }
  }

  componentDidMount = () => {
    firebase.database().ref('todos/').on('value', snapshot => {
      const todos = snapshot.val()
      this.setState({ todos: todos })
    })
  }

  _addTodo = () => {
    if (!this.state.title) {
      Alert.alert('Fail', 'Title is still blank!')
    } else if (!this.state.description) {
      Alert.alert('Fail', 'Description is still blank!')
    } else {
      const newTodoKey = firebase.database().ref().child('todos').push().key
      const todo = { title: this.state.title, description: this.state.description }
      firebase.database().ref('todos/').update({
        [newTodoKey]: todo
      })
      Alert.alert('Success', 'New todo has been added!')
      this.setState({ title: '', description: '' })
    }
  }

  _getTodo = (key) => {
    firebase.database().ref('todos/' + key).on('value', snapshot => {
      const todo = snapshot.val()
      this.setState({ title: todo.title, description: todo.description, key: key, isUpdate: true })
    })
  }

  _updateTodo = (key) => {
    if (!this.state.title) {
      Alert.alert('Fail', 'Title is still blank!')
    } else if (!this.state.description) {
      Alert.alert('Fail', 'Description is still blank!')
    } else {
      firebase.database().ref('todos/' + key).set({
        title: this.state.title,
        description: this.state.description
      })

      Alert.alert('Success', 'New todo has been updated!')
      this.setState({ title: '', description: '', key: '', isUpdate: false })
    }
  }

  _removeTodo = (key) => {
    firebase.database().ref('todos/' + key).remove()
  }

  render() {
    const todos = this.state.todos ? Object.keys(this.state.todos).map(key => {
      return {
        key: key,
        todo: this.state.todos[key]
      }
    }) : []

    return (
      <View style={styles.appContainer}>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="New Title"
            onChangeText={(text) => this.setState({ title: text })}
            value={this.state.title}
            style={styles.inputTitle}
          />
          <TextInput
            placeholder="New Description"
            onChangeText={(text) => this.setState({ description: text })}
            value={this.state.description}
            style={styles.inputDescription}
          />
        </View>
        <TouchableHighlight
          onPress={() => this.state.isUpdate ? this._updateTodo(this.state.key) : this._addTodo()}
          style={styles.buttonAdd}>
          <Text style={styles.textAdd}>{this.state.isUpdate ? 'Update' : 'Add'}</Text>
        </TouchableHighlight>
        <FlatList
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
        />
      </View>
    );
  }
}

export default HomeScreen
