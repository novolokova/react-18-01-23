import React, { Component } from "react";
import { loadPhones, loadUsers } from "../api";
import DataLoader from '../components/DataLoader';


class LoaderPage extends Component {
  render() {
    return (
      <>
        {/* <DataLoader
          loadData={loadPhones}
          render={(state) => (  // 1 варіант передають через render.props
            <ul>
              {state.data.map((phone) => (
                <li key={phone.id}>
                  {phone.brand}, price:{phone.price}
                </li>
              ))}
            </ul>
          )}
        /> */}
        <DataLoader loadData={loadPhones}>
          {(state) => (// 2 варіант передають через children.props
            <ul>
              {state.data.map((phone) => (
                <li key={phone.id}>
                  {phone.brand}, price:{phone.price}
                </li>
              ))}
            </ul>
          )}
        </DataLoader>
        <DataLoader loadData={loadUsers}>
          {(state) => (
            <ol>
              {state.data.map((user) => (
                <li key={user.id}> {user.name}</li>
              ))}
            </ol>
          )}
        </DataLoader>
      </>
    );
  }
}

export default LoaderPage;
