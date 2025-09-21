const analyzer = require('../utils/analyzer');

module.exports = (req, res) => {
  const apiKey = req.headers['x-api-key'] || req.query.api_key || req.body.api_key;
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({error: 'Invalid or missing API key'});
  }

  const hasFile = !!req.file;
  const chartUrl = req.body.chartUrl || req.body.chart_url || null;

  if (!hasFile && !chartUrl) {
    return res.status(400).json({error: 'Provide image file or chartUrl'});
  }

  const result = analyzer.analyze({
    source: hasFile ? 'upload' : 'url',
    filePresent: hasFile,
    chartUrl
  });

  return res.json(result);
};