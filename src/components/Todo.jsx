import { motion } from 'framer-motion'
import { useState } from 'react'
export const Todo = ({ id, title, completed, onRemoveTodo, onToggleCompleted }) => {
  const [isRemoving, setIsRemoving] = useState(false)
  const handleChangeCheckbox = (event) => {
    onToggleCompleted(id, event.target.checked)
  }
  const handleRemoveTodo = () => {
    setIsRemoving(true)
    setTimeout(() => {
      onRemoveTodo()
    }, 150)
  }

  return (
    <motion.div
      className="view"
      initial="visible"
      animate={isRemoving ? 'hidden' : 'visible'}
      exit="hidden"
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.5 }
      }}
    >
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChangeCheckbox}
      />
      <label>{title}</label>
      <motion.button
        className="destroy"
        onClick={handleRemoveTodo}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      ></motion.button>
    </motion.div>
  )
}
