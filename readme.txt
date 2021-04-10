mkdir movieql
cd movieql
yarn init
git init .
github.com
git remote add origin https://github.com/~
git pull origin main
yarn add graphql-yoga
yarn global add nodemon (파일수정시 서버 재시작해줌)
(or npm install -g nodemon)
sudo npm install -g babel-cli babel-preset-env babel-preset-stage-3 --dev
(require 안쓰고, import from 형태로 사용하기 위해서 추가했음)
.babelrc 생성하고, presets항목 등록
{
  "presets": ["env", "preset-3"]
}

package.json에 "scripts" 추가
  "scripts":{
    "start": "nodemon --exec babel-node index.js"
  }
npm start 확인



