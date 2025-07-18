
function getURL(dataSet) {

  return (dataSet.match(/https?:\/\/[^\s]+/g) || []);
}

function greedyQuery(dataSet) {
  return getURL(dataSet).filter(url => {
    const [base, query] = url.split('?');
    if (!query) return false;
    const params = query.split('&').filter(pair => pair.includes('='));
    return params.length >= 3;
  });
}


function notSoGreedy(dataSet) {
  return getURL(dataSet).filter(url => {
    const [base, query] = url.split('?');
    if (!query) return false;

    const params = query.split('&').filter(pair => pair.includes('='));
    return params.length === 2 || params.length === 3;
  });
}