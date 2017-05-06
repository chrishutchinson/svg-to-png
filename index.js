const fs = require('fs');
const { renderSvg } = require('./lib/svg-to-png');

const svg = fs.readFileSync('./file.svg').toString();
const size = {
  scale: 2,
  width: 1000,
  height: 450,
};
renderSvg(svg, size).then(buffer => {
  fs.writeFileSync('image.png', buffer);
});
