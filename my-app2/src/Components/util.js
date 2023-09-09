import { createContext } from "react";

export const initState = {
  todoTasks: [{ id: 1, taskName: "task1" }],
};

export function todoReducer(state, actions) {
  switch (actions.type) {
    case "added_todo":
      return {
        ...state,
        todoTasks: [
          ...state.todoTasks,
          { id: state.todoTasks.length + 1, taskName: actions.taskName },
        ],
      };
    default:
      throw Error("unkown action");
  }
}
export const TodoContext = createContext([]);
export const TodoDispatchContext = createContext([]);

function findPos(styleArr, index) {
  const arrEle = styleArr.find((arr) => arr[0] <= index && arr[1] >= index);
  return arrEle;
}

export function encodeStringToHtml(str, styleArr) {
  let result = "";
  for (let i = 0; i < str.length; ) {
    const posArr = findPos(styleArr, i);
    if (posArr) {
      const startIdx = posArr[0];
      const endIdx = posArr[1];
      const tag = posArr[2];
      let characters = str.slice(startIdx, endIdx + 1);
      result += `<${tag}>${characters.join("")}</${tag}>`;
      i = endIdx + 1;
    } else {
      result+=str[i];
      i=i+1;
    }
  }
  return result;
}

export const categories =  {
  'Bags' : 'Bags',
  'Watches': 'Watches',
   'Sports': 'Sports',
   'Sunglasses': 'Sunglasses'
}

export const items = [
  {
    name: 'Prada',
    category: 'Bags',
  },
  {
    name: 'Gucci',
    category: 'Bags',
  },
  {
    name: 'Guess',
    category: 'Bags',
  },
  {
    name: 'Rolex',
    category: 'Watches',
  },
  {
    name: 'Timex',
    category: 'Watches',
  },
  {
    name: 'Nike',
    category: 'Sports',
  },
  {
    name: 'Adidas',
    category: 'Sports',
  },
  {
    name: 'Fila',
    category: 'Sports',
  },
  {
    name: 'Ray Ban',
    category: 'Sunglasses',
  },
  {
    name: 'Aldo',
    category: 'Sunglasses',
  },
  {
    name: 'Polaroid',
    category: 'Sunglasses',
  },
];
