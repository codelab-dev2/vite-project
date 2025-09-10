import './Todo.css'
import { useState } from 'react'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import { TodoDate } from './TodoDate'
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage'

export const Todo = () => {
  const [ task, setTask ] = useState(() => getLocalStorageTodoData())

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue
    if (!content) return

    // if (task.includes(inputValue)) return;
    const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
    if (ifTodoContentMatched) return

    setTask((prevTask) => [ ...prevTask, { id, content, checked } ])
  }
  //localstorage todo
  setLocalStorageTodoData(task)
  //delete todo
  const handleDeleteTodo = (value) => {
    // console.log(task)
    // console.log(value)
    const updateTask = task.filter((curTask) => curTask.content !== value)
    setTask(updateTask)
  }

  //clear all todo
  const handleClearTodoData = () => {
    setTask([])
  }

  //check todo
  const handleCheckTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked }
      } else {
        return curTask
      }

    })
    setTask(updatedTask)
  }

  return (
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <TodoDate/>
        </header>

        <TodoForm onAddTodo={handleFormSubmit}/>

        <section className="myUnOrdList">
          <ul>
            {
              task.map((curTask) => {
                return (
                    <TodoList
                        key={curTask.id}
                        data={curTask.content}
                        checked={curTask.checked}
                        onHandleDeleteTodo={handleDeleteTodo}
                        onHandleCheckTodo={handleCheckTodo}
                    />
                )
              })
            }
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
        </section>
      </section>
  )
}