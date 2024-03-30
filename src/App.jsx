import { useState } from 'react'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './consts'
import { Footer } from './components/Footer'

const listita = [
  {
    id: 1,
    title: 'Aprendiendo con Tutoriales.',
    completed: false

  },
  {
    id: 2,
    title: 'Practicando con Ellos.',
    completed: false
  },
  {
    id: 3,
    title: 'Implementando el conocimiento adquirido.',
    completed: false
  }
]

const App = () => {
  const [todos, setTodos] = useState(listita)
  const [filterSelected, setFilterSelected] = useState(TODO_FILTERS.ALL)

  const handleRemove = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleFilterChange = (filter) => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = () => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleCompleted = (id, completed) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) {
      return !todo.completed
    }
    if (filterSelected === TODO_FILTERS.COMPLETED) {
      return todo.completed
    }
    return todo
  })

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  return (
    <div className='todoapp'>
      <Todos
        onRemoveTodo={handleRemove}
        onToggleCompleted={handleCompleted}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
