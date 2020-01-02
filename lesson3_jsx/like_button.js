//  https://www.youtube.com/watch?v=LBqMnrieHjk&list=PLevjgbzdU8UxfbRrLb_ILGXRAHbeJT7w2&index=3
// jsx - скорочена форма JS, щоб її перетворити в старий видгляд JS потрібно встановити компілятор babele
//babele - потребує node.js
// 1) install node.js
// 2) create package.json - конфігураційний файл який буде створювати своєрідну карту для нашої програми
// 3) install babel і додаткові пакети: npm i babel-cli@6.9.0 babel-preset-react@6.5.0 --save-dev
// 4) добавити розяснення в package.json, що треба jsx перетворити в js  
    /*
                  "babel":{
                    "presets": ["react"]
                  }, 
                  
    */
/* 5) вказати для babel які файли йому потрібно перетворювати 
      - create js folder and jsx 
      - create file scripts.js in directory js  AND scripts.jsx into jsx folder            
      - into cmdder write command:->   node_modules\.bin\babel jsx\scripts.jsx -o js\scripts.js -w
        вказуємо програму яка буде компілювати файл jsx, вказуємо шлях до файлу jsx,   -o - вказує на те, що буде відбуватись перетворення коду, знову вказуємо шлях до файлу куди буде зберігатися компільований код, -w - вказую на те, що треба стежит за зміною у файлі jsx

      */
/* 6) щоб не прописувати цю команду кожний раз в cmder добавимо її в package.json
    "scripts": {
      "build": "node_modules/.bin/babel jsx/scripts.jsx -o js/scripts.js -w"
    }
    тепер даний скріп можна запустити через команду: npm run build 

*/