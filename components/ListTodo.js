import React from 'react'
import { View, FlatList } from 'react-native'
import Todo from './Todo'
import styles from '../utils/Styles'

const ListTodo = (props) => {
  const { todos } = props.todos
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo todo={item} />}
      />
    </View>
  )
}

export default ListTodo
