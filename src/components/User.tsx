import { useReducer } from "react";

interface IUser {
  id: number;
  username: string;
  password: string;
  role: string;
}
const initUser: IUser[] = [
  {
    id: 1,
    username: "coolio",
    password: "secret",
    role: "user",
  },
  {
    id: 2,
    username: "drdre",
    password: "secret123",
    role: "user",
  },
];

function reducerFunc(users: IUser[], action: any) {
  switch (action.type) {
    case "ADD": {
      return [...users, action.newUser];
    }
    case "UPDATE": {
      return users.map((user) => {
        if (user.id === action.updatedUser.id) {
          return user;
        }
      });
    }
    case "DELETE": {
      return users.map((user) => user.id !== action.id);
    }
    default: {
      return users;
    }
  }
}

export default function User() {
  const [users, dispatch] = useReducer(reducerFunc, initUser);

  return (
    <ul>
      <li>User1</li>
      <li>User2</li>
      <li>...</li>
    </ul>
  );
}
