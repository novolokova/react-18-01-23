import TYPE_ACTIONS from './constants';

// обійшли квадратичну складність
const reducer = (state, action) => {
  switch (action.type) {
    case TYPE_ACTIONS.DATA_RESPONSE_SUCCESS: {
      const {
        data: { messages, users },
      } = action;
      const usersMap = new Map();
      users.forEach((user) => usersMap.set(user.id, user));
      // console.log(usersMap)
      const messageWithAutor = messages.map((msg) => ({
        // ()- повертаємо бeз return
        ...msg,
        author: usersMap.get(msg.authorId), // копия адреси юзера
      }));
      const newState = {
        ...state, // ОБОВ'ЯЗКОВО РОЗБИРАТИ ПОПЕРЕДНІЙ СТАН!!! інакше перезатремо данні
        users,
        messages: messageWithAutor,
      };
      return newState;
    }
    case TYPE_ACTIONS.DATA_RESPONSE_ERROR: {
      const { error } = action;
      const newState = {
        ...state, // ОБОВ'ЯЗКОВО РОЗБИРАТИ ПОПЕРЕДНІЙ СТАН!!! інакше перезатремо данні
        error,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
