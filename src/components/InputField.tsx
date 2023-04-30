import React from 'react'
import "./styles.css"

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: () => void;
}
 
const InputField = ({todo, setTodo} : Props) => {
  return (
	<form className='input'>
		<input type="input" 
		value={todo}
		onChange={
			(e) => setTodo(e.target.value)
		}
		placeholder='Enter Task' className='input__box' />
		<button className='input__submit' type='submit'>
			Go 
		</button>
	</form>
  )
}
export default InputField