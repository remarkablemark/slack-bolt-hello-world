# Slack Bolt - Hello World

[![Run on Repl.it](https://repl.it/badge/github/remarkablemark/slack-bolt-hello-world)](https://repl.it/github/remarkablemark/slack-bolt-hello-world)
![GitHub last commit](https://img.shields.io/github/last-commit/remarkablemark/slack-bolt-hello-world)

The Slack app displays a welcome message when a user opens "app home". It's inspired by the ["Hello World, Bolt ⚡️ - Building your very first app with Bolt"](https://api.slack.com/tutorials/hello-world-bolt) tutorial.

The app is built with:

- [@slack/bolt](https://www.npmjs.com/package/@slack/bolt)
- [dotenv](https://www.npmjs.com/package/dotenv)

Watch the [YouTube video](https://youtu.be/QBRHcGGTRCY) or check out [Repl.it](https://repl.it/@remarkablemark/slack-bolt-hello-world).

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Slack workspace](https://slack.com/help/articles/206845317-Create-a-Slack-workspace)

## Requirements

[Create a Slack app](https://api.slack.com/apps/new)

Go to  **Features** > **OAuth & Permissions**:

1. **Scopes** > **Bot Token Scopes** > **Add an OAuth Scope**: `chat:write`
2. **OAuth Tokens for Your Workspace** > **Install to Workspace**

Go to **Features** > **Event Subscriptions**:

1. **Enable Events**: `On`
2. **Request URL**: `https://my.app.com/slack/events`
3. **Subscribe to bot events** > **Add Workspace Event**: `app_home_opened`
4. **Save Changes**

## Environment Variables

Create `.env` from `.env.example`:

```sh
cp .env.example .env
```

Copy the **Signing Secret**:

- **Settings** > **Basic Information** > **App Credentials** > **Signing Secret**

Copy the **Bot User OAuth Token**:

- **Settings** > **Install App** > **OAuth Tokens for Your Workspace** > **Bot User OAuth Token**

Set the environment variables:

```
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

Update the **Request URL** in [Requirements](#requirements) to your ngrok URL:

```
https://123abc.ngrok.io
```

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
