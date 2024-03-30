import { Filters } from './Filters'
export const Footer = ({ activeCount = 0, completedCount = 0, handleFilterChange, filterSelected, onClearCompleted }) => {
  return (
    <footer className="footer">
        <span className="todo-count">
            <strong>{activeCount}</strong> pendiente/s
        </span>
        <Filters
            filterSelected={filterSelected}
            onFilterChange={handleFilterChange}/>
        {
            completedCount > 0 && (
                <button
                className='clear-completed'
                onClick={onClearCompleted}>
                Borrar Completados
                </button>
            )
        }
    </footer>
  )
}
