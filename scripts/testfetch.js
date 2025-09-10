function testBackendSave(mapName) {
  fetch('http://localhost:3000/save', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ lastMap: mapName })
  })
    .then(res => res.text())
    .then(data => console.log('🧠 Response from backend:', data))
    .catch(err => console.error('❌ Fetch error:', err));
}