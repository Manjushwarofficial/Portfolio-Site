# GitHub Pages Configuration Fix

## Manual Steps to Fix Deployment

### Step 1: Update GitHub Repository Settings

1. Go to: https://github.com/Manjushwarofficial/Portfolio-Website/settings/pages

2. Under "Build and deployment" section:
   - Change "Source" to "GitHub Actions"
   - NOT "Deploy from a branch"

3. Click "Save"

### Step 2: Commit and Push Changes

```bash
git add .
git commit -m "Fix GitHub Pages deployment configuration"
git push origin main
```

### Step 3: Trigger Deployment

Go to the Actions tab: https://github.com/Manjushwarofficial/Portfolio-Website/actions

You should see the "Deploy to GitHub Pages" workflow running. Once it completes with a green checkmark, your portfolio will be live at:

https://Manjushwarofficial.github.io/Portfolio-Website

## What Was Fixed

1. **_config.yml** - Tells GitHub Pages to skip Jekyll processing
2. **.nojekyll** - Additional signal to disable Jekyll
3. **.github/workflows/deploy.yml** - Proper GitHub Actions workflow using deploy-pages action
4. **package.json** - Already configured with build and deploy scripts

## If It Still Fails

1. Check your GitHub Pages settings at: https://github.com/Manjushwarofficial/Portfolio-Website/settings/pages
2. Ensure Source is set to "GitHub Actions"
3. Go to Actions tab and check the workflow logs for errors
4. Verify the workflow file is in: `.github/workflows/deploy.yml`
5. Wait 2-3 minutes and refresh the page

## Force Rebuild

If needed, you can manually trigger a new build:

1. Go to Actions tab
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select "main" branch
5. Click "Run workflow"