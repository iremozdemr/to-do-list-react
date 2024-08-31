import PropTypes from "prop-types";

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo } = props
    return (
        <li className='todoItem' >
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}

TodoCard.propTypes = {
    children: PropTypes.node,
    handleDeleteTodo: PropTypes.func,
    index: PropTypes.number,
    handleEditTodo: PropTypes.func,
};