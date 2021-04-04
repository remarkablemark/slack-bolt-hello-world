const app = require('./app');
const events = require('./events');

Object.entries(events).forEach(([event, callback]) => {
  app.event(event, callback);
});

const port = process.env.PORT || 3000;

app.start(port).then(() => {
  console.log(
    `⚡️ Bolt app is listening at: http://localhost:${port}/slack/events`
  );
});
