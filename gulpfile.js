const gulp = require("gulp")
const connect = require("gulp-connect") // 起server服务
const mjml = require("gulp-mjml")
// const del = require("del") // 清空目录

// // 清空dist目录
// gulp.task("clean", async () => {
//   await del(["./dist"])
// })

// mjml
gulp.task("html:mjml", () => {
  console.log("222=>", 222)
  return gulp.src("./src/test.mjml").pipe(mjml()).pipe(gulp.dest("./dist"))
})

// html:dev task，用于开发环境下，浏览器自动刷新
gulp.task("html:dev", async () => {
  await htmlMin().pipe(connect.reload())
})
// html:build task，用于生产环境
gulp.task("html:build", async () => {
  await htmlMin()
})

// server任务，目录为dist，入口文件为dist/index.html，port 8080
gulp.task("server", () => {
  connect.server({
    root: "./dist",
    port: 8080,
    livereload: true,
    open: true,
  })
})

// watch任务，监听源文件变化，执行对应开发任务
gulp.task("watch", () => {
  // gulp.watch("./src", gulp.series("html:dev"))
  gulp.watch("./src", gulp.series("html:mjml"))
})

// dev任务，启动开发环境
gulp.task("dev", gulp.series(gulp.parallel("watch", "server", "html:mjml")))
