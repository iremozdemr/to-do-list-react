import PropTypes from "prop-types";
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos } = props
    //props'un içindeki todos adlı değeri çıkarır
    //böylece todos doğrudan kullanılabilir

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                //her bir todo için TodoCard oluşturulur
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.string), 
    //todos: string türünde elementler içeren bir dizi
    handleDeleteTodo: PropTypes.func, 
    handleEditTodo: PropTypes.func, 
};