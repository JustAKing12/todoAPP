import { Todo } from './Todo'
export const Todos = ({ todos, onRemoveTodo, onToggleCompleted }) => {
  return (
        <ul className='todo-list'>
            <h1>Todo App 📝</h1>
            {todos.map(todo => (
                <li
                    key={todo.id}
                    className={`${todo.completed ? 'completed' : ''}`}>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onRemoveTodo={() => { onRemoveTodo(todo.id) }}
                        onToggleCompleted={onToggleCompleted}
                    />
                </li>
            ))}
        </ul>
  )
}
