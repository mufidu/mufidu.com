#!/bin/sh

cp -r _site/img/remote/* img/remote/
cp -r _site/img/* img/
git status
git add img/
