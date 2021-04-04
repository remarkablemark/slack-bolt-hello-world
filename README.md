# Slack Bolt - Hello World

[![Run on Repl.it](https://repl.it/badge/github/remarkablemark/slack-bolt-hello-world)](https://repl.it/github/remarkablemark/slack-bolt-hello-world)
![GitHub last commit](https://img.shields.io/github/last-commit/remarkablemark/slack-bolt-hello-world)

The app, which is built with [Slack's Bolt Framework](https://slack.dev/bolt/tutorial/getting-started) for Node.js, displays a welcome message when a user opens the "app home".

This is inspired by the ["Hello World, Bolt ⚡️ - Building your very first app with Bolt"](https://api.slack.com/tutorials/hello-world-bolt) tutorial. The app is built with:

- [@slack/bolt](https://www.npmjs.com/package/@slack/bolt)
- [dotenv](https://www.npmjs.com/package/dotenv)

See [Repl.it](https://repl.it/@remarkablemark/slack-bolt-hello-world) example.

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Slack workspace](https://slack.com/help/articles/206845317-Create-a-Slack-workspace)
- [Slack app](https://api.slack.com/apps/new)

## Requirements

- A Bot User must be added to your app
  - **Features** > **OAuth & Permissions** > **Scopes** > **Bot Token Scopes** > **Add an OAuth Scope**: `chat:write`
- Your app must be subscribed to [Events API](https://api.slack.com/events-api)
  - **Features** > **Event Subscriptions** > **Enable Events**:
    - Turn `On`
    - Change `Request URL` to: `https://<my-domain.com>/slack/events`
    - **Subscribe to events on behalf of users** > **Add Workspace Event**: `app_home_opened`
- Your app needs to be subscribed to the events mentioned in the _Events_ section
  - **Features** > **Event Subscriptions** > **Subscribe to events on behalf of users** > **Add Workspace Event**: `app_home_opened`
- Install app to workspace
  - **Settings** > **Install App** > **Install to Workspace**

## Environment Variables

Create `.env` from `.env.sample`:

```sh
cp .env.sample .env
```

Copy the **Signing Secret**:

- **Settings** > **Basic Information** > **App Credentials** > **Signing Secret**

Copy the **Bot User OAuth Token**:

- **Settings** > **Install App** > **OAuth Tokens for Your Team** > **Bot User OAuth Token**

Set the environment variables:

```sh
SLACK_SIGNING_SECRET=abc123
SLACK_BOT_USER_OAUTH_TOKEN=xoxb-123-456-abc
```

## Run

Run your app:

```sh
npm start
```

Your Bolt app will be listening at: http://localhost:3000/slack/events

Press Ctrl + C to stop the app.

To expose your local server to the public internet, use [ngrok](https://ngrok.com/):

```sh
ngrok http 3000
```

Update the **Request URL** in [Requirements](#requirements) to your ngrok URL: https://123abc.ngrok.io

## Features

- The [`app_home_opened`](https://api.slack.com/events/app_home_opened) event gets triggered when a user opens the bot's "app home" for the first time
- The app uses the Bolt's `say` method to send a welcome message to the user

### Scopes

- [`chat:write`](https://api.slack.com/scopes/chat:write)

### Events

#### Workspace events

- [`app_home_opened`](https://api.slack.com/events/app_home_opened)

## License

[MIT](LICENSE)
