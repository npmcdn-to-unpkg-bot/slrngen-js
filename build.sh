if [ ! -d "./node_modules/uglify-js" ]; then
  npm install uglify-js@2
fi
#if [ ! -d "./node_modules/docco" ]; then
#  npm install docco@0
#fi
if [ ! -d "./node_modules/jshint" ]; then
  npm install jshint@2
fi

./node_modules/.bin/jshint sgen.js
./node_modules/.bin/uglifyjs sgen.js -c "evaluate=false" --comments "/ Copyright .*/" -m --source-map dist/sgen-min.map -o dist/sgen-min.js
#./node_modules/.bin/docco sgen.js -o doc
#cp -r doc/* ../gh-pages/sgen/doc
