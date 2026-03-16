function generateIDs(count) {
  const ids = [];
  for (let i = 0; i < count; i++) {
    if (i === 5) continue; // Skips 5
    ids.push(ID-${i});
  }
  return ids;
}