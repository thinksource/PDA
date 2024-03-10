# React + TypeScript + Vite




## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list




## install dependencies
```
npm install
```

## how to run
```
npm run dev
```

## issues 

- [x] News Feed: Allow users to filter news by category

this require API support for newsAPI, the current newsAPI reply like:
```
articles": [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Matt Burgess",
            "title": "Apple iOS 17.4: iMessage Gets Post-Quantum Encryption in New Update",
            "description": "Useful quantum computers aren’t a reality—yet. But in one of the biggest deployments of post-quantum encryption so far, Apple is bringing the technology to iMessage.",
            "url": "https://www.wired.com/story/apple-pq3-post-quantum-encryption/",
            "urlToImage": "https://media.wired.com/photos/65d5fe7bf13615261bdf325c/191:100/w_1280,c_limit/1978192381",
            "publishedAt": "2024-02-21T14:00:00Z",
            "content": "Apple is launching its first post-quantum protections, one of the biggest deployments of the future-resistant encryption technology to date.\r\nBillions of medical records, financial transactions, and … [+3273 chars]"
        }
    ...
    ]
```
It do not contain any category or tags field, I need addtional tags field to finish this function.

the code should like: 


```
let data =[{
    "tag": ["test", "running"]
},
    {"tag": ["test", "Technology"]}
]
const keyword = "test";
// filter the data by tag
const filteredData = data.filter(item => item.tag.includes(keyword));
```