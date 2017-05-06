const chrome = require('chrome-remote-interface');

module.exports.renderSvg = (
  svg,
  { scale = 2, width = 1000, height = 1000 } = {}
) =>
  new Promise((resolve, reject) => {
    chrome(client => {
      const { Emulation, Page } = client;

      const deviceMetrics = {
        width: width * scale,
        height: height * scale,
        deviceScaleFactor: 0,
        mobile: false,
        fitWindow: true,
      };

      Emulation.setDeviceMetricsOverride(deviceMetrics)
        .then(() =>
          Emulation.setVisibleSize({
            width: width * scale,
            height: height * scale,
          })
        )
        .then(() => Page.navigate({ url: 'about:blank' }))
        .then(({ frameId }) =>
          Page.setDocumentContent({
            frameId,
            html: `<style>body { margin: 0; }</style>${svg}`,
          })
        )
        .then(() => Page.captureScreenshot())
        .then(({ data }) => Buffer.from(data, 'base64'))
        .then(buffer => {
          client.close();
          resolve(buffer);
        })
        .catch(e => {
          client.close();
          reject(e);
        });
    });
  });
