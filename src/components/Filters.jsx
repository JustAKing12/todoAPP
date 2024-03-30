import { FOOTER_FILTERS_BUTTONS } from '../consts'

export const Filters = ({ filterSelected, onFilterChange }) => {
  return (
    <ul className="filters">
        {
            Object.entries(FOOTER_FILTERS_BUTTONS).map(([key, { href, literal }]) => {
              const isSelected = key === filterSelected
              const className = isSelected ? 'selected' : ''
              return (
                    <li key={key}>
                        <a
                        href={href}
                        className={className}
                        onClick={(event) => {
                          event.preventDefault()
                          onFilterChange(key)
                        }}
                        >
                        {literal}
                        </a>
                    </li>
              )
            })
        }
    </ul>
  )
}
