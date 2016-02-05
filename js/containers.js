import * as display from './display.js';
import { connect }  from 'react-redux';

// ===================================================
//
//                    CONTAINERS
//
// ===================================================

const mapStateToProps = ({messages}) => {
    return { messages };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onTodoClick: (id) => {
//             dispatch(toggleTodo(id));
//         }
//     };
// };

export const messageListContainer = connect(
    mapStateToProps,
    null
)(display.messageList);
