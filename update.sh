#!/bin/bash

git pull &&
yarn &&
yarn build &&
rm -r dist/assets &&
cp -r assets/ dist/ &&
pm2 restart all
