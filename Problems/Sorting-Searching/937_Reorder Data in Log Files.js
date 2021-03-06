var reorderLogFiles = function(logs) {
  const letterLogs = [];
  const digitLogs = [];
  logs.forEach(log => {
    if (/ \d/.test(log)) {
      digitLogs.push(log);
    } else {
      letterLogs.push(log);
    }
  });
  letterLogs.sort((a, b) => {
    const aBody = a.slice(a.indexOf(' ') + 1);
    const bBody = b.slice(b.indexOf(' ') + 1);
    const c = aBody.localeCompare(bBody);
    if (c) return c;
    return a.localeCompare(b);
  });
  return [...letterLogs, ...digitLogs];
};