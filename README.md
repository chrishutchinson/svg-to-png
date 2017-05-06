# SVG to PNG (via Headless Chrome)

>Convert an SVG string into a PNG using Headless Chrome (v60+)

## Requirements + usage

You'll need to be running Chrome v60+. You can do this via [this](https://hub.docker.com/r/yukinying/chrome-headless-browser) Docker image if you don't have it installed yourself.

Once Chrome is running, you can run the `index.js` script:

```bash
$ node index.js
```

This should generate an image at `./image.png`.