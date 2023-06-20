import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import MyButton from '../components/MyButton';
import MyCheckbox from '../components/MyCheckBox';
import {userContext} from '../context/UserContext';

interface Todo {
  id: string;
  text: string;
}

const Home: React.FC = () => {
  //global user
  const {user, setUSer}: any = useContext(userContext);

  //state
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState('');
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null);
  const [completedTodos, setCompletedTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (todoText.trim() !== '') {
      const newTodo: Todo = {
        id: Math.random().toString(),
        text: todoText.trim(),
      };

      setTodos(prevTodos => [...prevTodos, newTodo]);
      setTodoText('');
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const editTodo = (id: string) => {
    setEditingTodoId(id);
  };

  const completeTodo = (id: string) => {
    if (completedTodos.includes(id)) {
      setCompletedTodos(prevCompletedTodos =>
        prevCompletedTodos.filter(todoId => todoId !== id),
      );
    } else {
      setCompletedTodos(prevCompletedTodos => [...prevCompletedTodos, id]);
    }
  };

  const updateTodoText = (id: string, newText: string) => {
    setTodos(prevTodos =>
      prevTodos.map(todo => (todo.id === id ? {...todo, text: newText} : todo)),
    );
  };

  const renderItem = ({item}: {item: Todo}) => {
    const isEditing = item.id === editingTodoId;
    const isCompleted = completedTodos.includes(item.id);

    return (
      <View style={styles.todoItem}>
        {isEditing ? (
          <TextInput
            value={item.text}
            onChangeText={newText => updateTodoText(item.id, newText)}
            onBlur={() => setEditingTodoId(null)}
            autoFocus
            style={styles.editInput}
          />
        ) : (
          <Text
            style={[styles.todoText, isCompleted && styles.completedTodoText]}>
            {item.text}
          </Text>
        )}

        {!isEditing && (
          <View style={styles.actionsContainer}>
            <MyCheckbox
              isChecked={isCompleted}
              onClick={() => completeTodo(item.id)}
            />
            <MyButton
              width={50}
              onPress={() => editTodo(item.id)}
              title={'🖋️'}
            />
            <MyButton
              onPress={() => deleteTodo(item.id)}
              title={'🗑️'}
              width={50}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Todo"
          value={todoText}
          onChangeText={setTodoText}
        />
        <MyButton
          width={100}
          onPress={addTodo}
          title={'Add'}
          btnColor={'#f4511e'}
        />
      </View>
      <FlatList
        data={todos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Text>No todos yet.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    marginRight: 8,
    borderWidth: 1,
    padding: 8,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  editInput: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  completedTodoText: {
    textDecorationLine: 'line-through',
    color: '#f4511e',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
