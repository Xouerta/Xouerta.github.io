call npm run docs:build --force

cd docs/.vitepress/dist

git init

git add -A

git commit -m 'deploy'

git push -f https://github.com/Xouerta/Xouerta.github.io.git master:gh-pages
