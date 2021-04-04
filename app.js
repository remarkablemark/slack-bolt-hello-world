const { App } = require('@slack/bolt');

require('dotenv').config();

module.exports = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_USER_OAUTH_TOKEN,
});
