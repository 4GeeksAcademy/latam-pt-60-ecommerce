export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: "green",
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      },
      {
        id: 3,
        title: "Walk the dog",
        background: null,
      }
    ],
    products: [],
    shoppingCart: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'fetch_products':
      return {
        ...store,
        products: action.payload
      };

    case 'add_task':
      const { id,  color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    default:
      throw Error('Unknown action.');
  }    
}
