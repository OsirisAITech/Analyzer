const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');

async function run() {
  const form = new FormData();
  if (fs.existsSync('./sample-chart.png')) {
    form.append('image', fs.createReadStream('./sample-chart.png'));
  } else {
    form.append('chartUrl', 'https://example.com/sample-chart.png');
  }

  const res = await fetch('http://localhost:3000/api/v1/analyze', {
    method: 'POST',
    headers: { 'x-api-key': process.env.API_KEY || 'changeme' },
    body: form
  });

  const data = await res.json();
  console.log('Result:', JSON.stringify(data, null, 2));
}

run().catch(console.error);