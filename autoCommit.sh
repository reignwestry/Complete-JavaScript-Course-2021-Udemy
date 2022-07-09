#!/bin/sh
cd D:/.PROJECTS/.Udemy-Courses/.Udemy-JS-COURSE-2021/commit.sh
git add --all
timestamp() {
  date +"at %H:%M:%S on %d/%m/%Y"
}
git commit -am "Regular auto-commit $(timestamp)"
git push origin master