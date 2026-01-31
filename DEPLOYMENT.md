# Deployment Guide to Render

This application is configured for easy deployment on [Render](https://render.com).

## Prerequisites

1.  A [Render](https://render.com) account.
2.  This code pushed to a Git repository (GitHub, GitLab, or Bitbucket) that Render can access.

## One-Click Deployment (Recommended)

Since this project enables `render.yaml` (Infrastructure as Code):

1.  Go to the [Render Dashboard](https://dashboard.render.com/).
2.  Click **New +** and select **Blueprint**.
3.  Connect your Git repository.
4.  Render will automatically detect the `render.yaml` configuration.
5.  Click **Apply**.

Render will start building and deploying your application automatically.

## Manual Deployment

If you prefer to configure it manually:

1.  Create a new **Web Service** on Render.
2.  Connect your repository.
3.  Use the following settings:
    *   **Runtime**: Node
    *   **Build Command**: `npm install && npm run build`
    *   **Start Command**: `npm start`
4.  Add Environment Variables:
    *   `NODE_ENV`: `production`

## Troubleshooting

-   **Logs**: Check the "Logs" tab in the Render dashboard if the build fails.
-   **Dependencies**: Ensure all new packages are added to `package.json` (running `npm install <package>` does this automatically).
