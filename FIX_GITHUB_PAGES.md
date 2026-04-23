## GitHub Pages Configuration - CRITICAL FIX

Your portfolio is deployed but GitHub is still trying to use Jekyll to build it, causing errors.

### REQUIRED: Change GitHub Pages Settings

1. Go to your repository: https://github.com/Manjushwarofficial/Portfolio-Website

2. Click on "Settings" tab

3. In the left sidebar, click "Pages"

4. You will see "Build and deployment" section

5. Look for the "Source" dropdown - it currently shows "Deploy from a branch"

6. Change it to "GitHub Actions" (this is the key fix!)

7. Click anywhere outside the dropdown to save

### What This Does

- Tells GitHub to STOP using Jekyll
- Uses your GitHub Actions workflow instead (.github/workflows/deploy.yml)
- Deploys the built React app from the dist/ folder
- Your portfolio will work correctly

### After Changing Settings

1. The workflow will automatically start
2. Go to Actions tab to watch the deployment
3. Once it shows a green checkmark, your site is live
4. Visit: https://Manjushwarofficial.github.io/Portfolio-Website

### Why This Happens

GitHub Pages defaults to building with Jekyll (a static site generator). Since you have a React/Vite project, Jekyll can't process it. By switching to "GitHub Actions", you use your custom build process instead.

### If You Still See Issues

1. Verify Settings > Pages shows "Source: GitHub Actions"
2. Make sure the workflow file exists: `.github/workflows/deploy.yml`
3. Go to Actions tab and check for any error messages
4. Hard refresh your browser: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)