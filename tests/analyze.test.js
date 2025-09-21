const fetch = require('node-fetch');
(async function(){
  console.log('Running test...');
  try {
    const res = await fetch('http://localhost:3000/health');
    const json = await res.json();
    console.log('Health:', json);
  } catch (err) {
    console.error('Failed to reach server. Make sure it is running on port 3000');
    process.exit(1);
  }
})();