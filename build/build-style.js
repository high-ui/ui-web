const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const runSequence = require('gulp-run-sequence');  

// 编译less
gulp.task('less', function () {
    return gulp.src('../src/styles/index.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(rename('iui-view.css'))
        .pipe(gulp.dest('../dist'));
});

// 处理css，加入第三方css
gulp.task('css', function () {
    gulp.src(['../src/styles/css/default.css', '../dist/iui-view.css'])
        .pipe(concat('iui-view.css'))
        // .pipe(cleanCSS())
        .pipe(gulp.dest('../dist'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
    gulp.src('../src/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/fonts'));
});


gulp.task('default', function(cb){
    runSequence('less', ['css', 'fonts'], cb);
});
