# Reactで作成したページをGitHub Pagesで更新するには

## お世話になったサイト
* https://dev-yakuza.posstree.com/react/github-pages/


### （更新）手順
1. `npm run build` でビルドする
2. mainブランチにプッシュする
3. `git subtree push --prefix build/ origin gh-pages` でサブブランチのgh-pagesにbuildファイルをpushする