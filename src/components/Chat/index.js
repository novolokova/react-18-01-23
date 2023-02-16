import React, { useReducer, useEffect } from "react";

// const store = ;

const reduser = (state, action) => {
   const{type, data:{messages, users}} = action;
   switch (type) {
    case 'DATA_RESPONSE_SUCCESS':{
        const usersMap = new Map();
        users.forEach((user) => usersMap.set(user.id, user));
        // console.log(usersMap)
            const messageWithAutor = messages.map((msg)=>{
                const msgWithAutor = {
                    ...msg,
                    author: usersMap.get(msg.authorId)
                }
                return msgWithAutor
            })
        
        const newState={
            ...state,
            users,
            messages: messageWithAutor
        };
        return newState;
    }
    default:
        return state;
   }

};

const loadChat = () =>
  fetch("/data/chat.json").then((response) => response.json());

const Chat = () => {
  const [state, dispatch] = useReducer(reduser, { messages: [], users: [] });
  useEffect(() => {
    loadChat().then((data) => {
      const action = { data, type: "DATA_RESPONSE_SUCCESS" };
      return dispatch(action);
    });
    // return () => {
    //     cleanup
    // };
  }, []);

  return (
    <section>
      <h2>Chat</h2>
      {state.messages.map((msg) => (
        <article key={msg.id}>
          <h3>{msg.body}</h3>
          <p>{msg.author.name}</p>
        </article>
      ))}
    </section>
  );
};

export default Chat;
