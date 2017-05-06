const fs = require('fs');
const { svgToPng } = require('./lib/svg-to-png');

const svg = fs.readFileSync('./file.svg').toString();
const size = {
  scale: 2,
  width: 1000,
  height: 450,
};
svgToPng(svg, size).then(buffer => {
  fs.writeFileSync('image.png', buffer);
});
