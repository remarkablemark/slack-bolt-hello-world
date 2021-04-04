const store = require('../store');

module.exports = async ({ event, say }) => {
  let user = store.getUser(event.user);

  if (user && user.channel === event.channel) {
    await say('Hi again!');
    return;
  }

  user = {
    user: event.user,
    channel: event.channel,
  };
  store.addUser(user);

  await say(`Hello world, and welcome <@${event.user}>!`);
};
