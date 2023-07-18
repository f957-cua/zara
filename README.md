# zara
app for listening podcasts

Current application use webpack to compile entire project in a single package.
By default webpack used developing mode for properly minimize our file bundle.
But due to the faster way by hot reloading it makes sense to use development mode.

For creating production build run script:
- npm run build

For developing build run:
- npm run dev

In case you want to start current app in your local machine:
1. Ensure what node.js have been installed on your local environment
2. Clone current git repo in empty folder "git clone https://github.com/f957-cua/zara.git ."
3. Install all dependencies from package.json with corresponding versions "npm ci"
4. Run app "npm start"
