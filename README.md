## 安装

```js
pnpm install
```

## 启动

### 启动所有

```js
pnpm run dev
```

### 指定页面启动

```js
pnpm run dev --page=test  //test为src下面的mjml文件名称，无须后缀
```

## 构建

### 构建所有

```js
pnpm run build
```

### 指定页面构建

```js
pnpm run build --page=test  //test为src下面的mjml文件名称，无须后缀
```

## 邮件模板测试

```js
pnpm run send  //配置信息修改根目录下的send.js文件
```
