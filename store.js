const users = {
  /* user: string */
  /* channel: string */
};

exports.addUser = user => (users[user.user] = user);

exports.getUser = id => users[id];
