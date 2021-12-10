#!/bin/sh

cp -r _site/img/remote/* src/assets/img/remote/
cp -r _site/img/* src/assets/img/
git add img/
git status
