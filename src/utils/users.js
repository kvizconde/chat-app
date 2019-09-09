/* eslint-disable no-param-reassign */
const users = [];

const addUser = ({ id, username, room }) => {
  // clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // validate the data
  if (!username || !room) {
    return {
      error: 'Username and Room are required!',
    };
  }

  // check for exisiting user
  const exisitingUser = users.find(user => user.room === room && user.username === username);

  //  validate username
  if (exisitingUser) {
    return {
      error: 'Username is Taken! Please choose another one.',
    };
  }

  // store user
  const user = { id, username, room };

  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => users.find(user => user.id === id);

const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  return users.filter(user => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
