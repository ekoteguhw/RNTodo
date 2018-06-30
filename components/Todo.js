import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../utils/Styles'

const Todo = (props) => {
  const { todo } = props.todo
  return (
    <View style={styles.leftContainer}>
      <Text style={styles.todoTitle}>{todo.title}</Text>
      <Text style={styles.todoDescription}>{todo.description}</Text>
      <Text style={styles.todoFullname}>{todo.fullname}</Text>
    </View>
  )
}

export default Todo
