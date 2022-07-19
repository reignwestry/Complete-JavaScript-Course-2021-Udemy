#!/bin/sh
cd D:/.PROJECTS/.Udemy-Courses/.Udemy-JS-COURSE-2021/commit.sh
git add --all
timestamp() {
  date +"at %HH:%MM:%SS on %d/%m/%Y"
}
git commit -am "Regular auto-commit $(timestamp)"
ping www.github.com && git push origin --all || echo "not connected"
git push origin master