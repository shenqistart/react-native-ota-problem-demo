const express = require("express");
const app = express();
const path = require("path");
// const jsonData = require("./update.json");

// 模拟热更新接口
// app.get("/updateInfo", (req, res) => {
//   // const { projectName, platform, version } = req.query;
//   // 这里需要根据实际情况判断是否有更新
//   // const hasUpdate = true;
//   // const updateInfo = {
//   //   hasUpdate,
//   //   version: '1.0.1',
//   //   downloadUrl: 'http://your-server-url.com/updateBundle.js',
//   // };
//   // res.end('hello world');
//   res.json({ code: 200, data: { ...jsonData } });
//   // res.json(updateInfo);
// });
// 添加CORS中间件
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
// 提供更新包下载
app.get("/updateBundle/index.android.bundle.zip", (req, res) => {
  res.sendFile(path.join(__dirname, 'index.android.bundle.zip'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
