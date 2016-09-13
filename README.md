# weex-cnode

### 使用weex-toolkit创建的项目，还在开发中

***

#### 目前已完成
- topic列表页(list.we)
- 侧导航逻辑(tool-nav.we)

#### 正在开发
- topic详情页(detail.we)

#### 其他待开发
- 消息
- 用户登录逻辑
- 点赞，回帖
- ...

#### 暂未解决问题(入坑需谨慎)
- 详情页内容的html结构无法解析...

***

## How to start

### Install

```bash
npm install
```

### Development

* `npm run build`: build `src/main.we` into `dist/main.js`
* `npm run dev`: watch file changes of `src/main.we` and automatically build into `dist/main.js`
* `npm run serve`: preview in html5 renderer through `http://localhost:8080/`

*note: the entry file can be configured in `webpack.config.js`, learn more from [weex-loader](https://www.npmjs.com/package/weex-loader)*

Finally the generated code will be found in `dist` folder.
