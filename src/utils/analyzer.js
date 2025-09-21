function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function analyze({source, filePresent, chartUrl}) {
  const ts = new Date().toISOString();
  const signals = [
    {name: 'uptrend', confidence: Math.round(Math.random()*40 + 60)},
    {name: 'head_and_shoulders', confidence: Math.round(Math.random()*50 + 30)},
    {name: 'double_bottom', confidence: Math.round(Math.random()*30 + 20)}
  ];

  return {
    analyzed_at: ts,
    source,
    chart_url: chartUrl || null,
    summary: `Analysis generated at ${ts}`,
    signals: signals.slice(0, 2),
    recommendations: {
      action: randomChoice(['buy', 'hold', 'sell']),
      size_suggestion_pct: Math.round(Math.random()*50 + 5)
    },
    meta: { version: '1.0.0' }
  };
}

module.exports = { analyze };