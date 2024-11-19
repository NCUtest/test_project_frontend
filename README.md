##############################
先初始化, 指令如下, 他會幫你建立package.json
    npm init -y

##############################
單個package安裝, 使用以下指令, 他會幫你把package安裝並在package.json中加入
    npm install <package-name>
若是測試環境用請用以下指令
    npm install <package-name> --save-dev
若想查看某個包的最新可用版本
    npm show <pacakge-name> version

##############################
npm正式環境安裝包指令
    npm install --production
測試環境直接用
    npm install即可

##############################

專案架構:
frontend/
  ├── public/
  │   ├── index.html
  │   ├── manifest.json
  │   └── ...
  ├── app/
  │   ├── assets/
  │   │   ├── images/
  │   │   └── styles/
  │   ├── components/
  │   │   ├── Navbar.js
  │   │   ├── Footer.js
  │   │   └── ...
  │   ├── pages/
  │   │   ├── Home.js
  │   │   ├── Login.js
  │   │   ├── Register.js
  │   │   ├── UserProfile.js
  │   │   ├── Characters.js
  │   │   ├── Quests.js
  │   │   ├── Leaderboard.js
  │   │   ├── Chat.js
  │   │   ├── Weather.js
  │   │   ├── Maps.js
  │   │   └── ...
  │   ├── services/
  │   │   ├── api.js
  │   │   └── auth.js
  │   ├── App.js
  │   ├── index.js
  │   ├── index.css
  │   └── ...
  ├── package.json
  ├── Dockerfile
  └── docker-compose.yml

