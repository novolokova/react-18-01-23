import { Component } from "react";
import CiaoList from "../CiaoList";


class CiaoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 3,
          firstName: "Brad",
          lastName: "Pitt",
        },
        {
          id: 2,
          firstName: "Ilon",
          lastName: "Mask",
        },
        {
          id: 1,
          firstName: "Tom",
          lastName: "Rott",
        },
        {
          id: 6,
          firstName: "Lia",
          lastName: "Staff",
        },
        {
          id: 5,
          firstName: "Bob",
          lastName: "Smit",
        },
        {
          id: 4,
          firstName: "Noa",
          lastName: "Benet",
        },
      ],
      isDirectionById: true,
      isDirectionByName: true,
      // isDirectionByLastName: true,
    };
  }
  //додати новий стан для напрямку сортування по імені
  //додати функцію сортування по імені
  sortByName = () => {
    const { users, isDirectionByName } = this.state;
    const usersCopyName = [...users];
    usersCopyName.sort((current, next) => {
      if (current.firstName < next.firstName) {
        return isDirectionByName ? -1 : 1;
      }
      if (current.firstName > next.firstName) {
        return isDirectionByName ? 1 : -1;
      }
      return 0;
    });
    this.setState({
      users: usersCopyName,
      isDirectionByName: !isDirectionByName,
    });
  };
  //додати кнопку, яка буде викликати сортування
  sortUsersById = () => {
    //отримати масив юзерів
    const { users, isDirectionById } = this.state;
    //робимо копію, бо стан не можна змінювати!!!
    const usersCopy = [...users];
    //відсортувати масив
    usersCopy.sort((current, next) => {
      return isDirectionById ? current.id - next.id : next.id - current.id;
    });
    //записати відсортований масив у стан
    // this.setState({users:users})
    this.setState({ users: usersCopy, isDirectionById: !isDirectionById });
  };
  
  render() {
    const { users, isDirectionById, isDirectionByName } = this.state;
    return (
      <>
        <p>
          <button onClick={this.sortUsersById}>
            sort by id {isDirectionById ? "right" : "revert"}
          </button>
          <button onClick={this.sortByName}>
            sort by name {isDirectionByName ? "right" : "revert"}
          </button>
        </p>
      <CiaoList users={users} />
      </>
    );
  }
}

export default CiaoSection;
