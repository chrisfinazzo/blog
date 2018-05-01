const gulp = require("gulp");
const shell = require("gulp-shell");

gulp.task("build", shell.task("bundle exec jekyll doctor && time bundle exec jekyll build --incremental"));

gulp.task("serve", shell.task("bundle exec jekyll doctor && time bundle exec jekyll serve --incremental"));

gulp.task("deploy", shell.task("git push origin master && rsync -crz --exclude-from='rsync-exclude.txt' --delete _site/ cfinazzo1@micro.chrisfinazzo.com:/home/cfinazzo1/micro.chrisfinazzo.com"));
