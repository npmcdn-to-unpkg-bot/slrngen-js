if [ ! -d "./node_modules/jasmine-node" ]; then
  npm install --save-dev jasmine-node@1
fi
if [ ! -d "./node_modules/phantomjs" ]; then
  npm install --save-dev phantomjs-prebuilt@2.1.12
fi

./node_modules/.bin/jasmine-node ./test
./node_modules/.bin/phantomjs test/run-jasmine.js test/jasmine.html
