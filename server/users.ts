interface User {
  id: string;
  name: string;
  room: string;
}
let users: User[] = [];
const addUser = (user: { id: string; name: string; room: string }) => {
  let { id, name, room } = user;
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();
  const existingUser = users.find(
    (user) => user.name === name && user.room === room
  );
  if (existingUser) {
    return { error: "Username is taken" };
  }
  const userJoin = {
    id: id,
    name: name,
    room: room,
  };
  users.push(userJoin);
  return {
    userJoin,
  };
};
const removeUser = (id: string) => {
  let index = users.findIndex((user) => user.id === id);
  if (index != -1) {
    return users.splice(index, 1)[0];
  }
};
const getUser = (id: string) => {
  return users.find((user) => user.id === id);
};
const getUsersInRoom = (room: string) => {
  return users.filter((user) => user.room === room);
};
module.exports(addUser, removeUser, getUser, getUsersInRoom);
