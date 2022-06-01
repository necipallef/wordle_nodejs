#!/bin/bash

git pull &&
yarn build &&
rm -r dist/assets
cp -r assets/ dist/
