import { useState, useEffect } from "react"
import TodoInput from "../components/TodoInput"
import TodoList from "../components/TodoList"

function App() {
  const [todos, setTodos] = useState([])
  //todos adında bir state tanımlanır
  //todos değişkeninin ilk değeri = []
  //setTodos fonksiyonu todos değişkenini günceller
  const [todoValue, setTodoValue] = useState("")
  //todoValue adında bir state tanımlanır
  //todoValue değişkeninin ilk değeri = ""
  //setTodoValue fonksiyonu todoValue değişkenini günceller

  //todos: yapılacaklar listesi
  //todoValue: yeni eklenen todo

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }
  //yapılan işleri tarayıcının yerel hafızasına kaydeder
  //sayfa yenilendiğinde
  //sayfa kapatılıp açıldığında bu bilgiler korunur

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  //yeni bir todo(newTodo) ekler

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  //todo siler

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }
  //todo'yu editler

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }

    console.log(localTodos)
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App