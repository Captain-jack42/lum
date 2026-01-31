# Deployment Guide to Render

This application is configured for easy deployment on [Render](https://render.com).

## Prerequisites

1.  A [Render](https://render.com) account.
2.  This code pushed to a Git repository (GitHub, GitLab, or Bitbucket) that Render can access.

## Free Tier Deployment (Recommended)

To ensure you use the **Free** tier and avoid entering card details:

1.  Go to the [Render Dashboard](https://dashboard.render.com/).
2.  Click **New +** and select **Web Service** (NOT Blueprint).
3.  Connect your repository: `Captain-jack42/lum`.
4.  Scroll down to the settings:
    *   **Name**: `nexerve-premium-site` (or any name)
    *   **Runtime**: `Node`
    *   **Build Command**: `npm install && npm run build`
    *   **Start Command**: `npm start`
5.  **Important**: Under **Instance Type**, select **Free**.
6.  Click **Create Web Service**.

## Blueprint Deployment (Automated)

If you use the Blueprint option (`render.yaml`), Render might ask for a card to verify identity or if the plan isn't detected correctly. I have updated the configuration to explicitly request `plan: free`.

1.  Click **New +** -> **Blueprint**.
2.  Select your repo.
3.  Click **Apply**.


## Troubleshooting

-   **Logs**: Check the "Logs" tab in the Render dashboard if the build fails.
-   **Dependencies**: Ensure all new packages are added to `package.json` (running `npm install <package>` does this automatically).
