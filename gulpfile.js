const gulp = require('gulp');
const connect = require('gulp-connect'); // 起server服务
const mjml = require('gulp-mjml');
const shell = require('shelljs');
const argv = require('yargs-parser')(process.argv.slice(2));
console.log('argv=>', argv.page);
// mjml
const srcFiles = argv?.page ? argv?.page + '.mjml' : '*';
const src = `./src/${srcFiles}`;

// 清空dist目录
gulp.task('clean:dist', async () => {
  await shell.rm('-rf', './dist');
});

// 清空static目录
gulp.task('clean:static', async () => {
  await shell.rm('-rf', './static');
});
gulp.task('html:dev', () => {
  return gulp.src(src).pipe(mjml()).pipe(gulp.dest('./static'));
});

// html:build task，用于生产环境
gulp.task('html:build', async () => {
  return gulp.src(src).pipe(mjml()).pipe(gulp.dest('./dist'));
});

// server任务，目录为dist，入口文件为dist/index.html，port 8080
gulp.task('server', () => {
  connect.server({
    root: './static',
    port: 8080,
    livereload: true,
    open: true,
  });
});

// watch任务，监听源文件变化，执行对应开发任务
gulp.task('watch', () => {
  // gulp.watch("./src", gulp.series("html:dev"))
  gulp.watch('./src', gulp.series('html:dev'));
});

// dev任务，启动开发环境
gulp.task('dev', gulp.series('clean:static', gulp.parallel('watch', 'server', 'html:dev')));
gulp.task('build', gulp.series('clean:dist', 'html:build'));
