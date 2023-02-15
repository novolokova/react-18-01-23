import Error from "../Error";
import Spinner from "../Spinner";
import { loadUsers } from "../../api";
import {useLoadData} from '../../hooks'

// візуалізація роботи
const ListUsers = () => {
  // забрали з нашого НООК
  const{
    data: users, 
    error,
    isPending
} = useLoadData(loadUsers)

  const mapUsers = (user) => 
    <li key={user.id}>{user.name}</li>;
  ;
 

  if (isPending) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }
  return <ol>{users.map(mapUsers)}</ol>;
};

export default ListUsers;
