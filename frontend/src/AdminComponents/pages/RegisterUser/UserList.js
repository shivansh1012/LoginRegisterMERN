import React from 'react'

export default function UserList({users}) {
    function renderUsers() {
        console.log(users)
        return users.map((user, i) => {
          return <li className="list-group-item" key={i}>{user}</li>;
        });
    }
    return (
        <div className=" container text-center w-50">
            <h3 className="py-3">Added User List</h3>
            <ul className="list-group">{renderUsers()}</ul>
        </div>
    )
}
