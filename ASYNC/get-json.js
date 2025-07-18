export const getJSON = async (path, params = {}) => {
  // Construct URL with query parameters
  const url = new URL(path, 'http://localhost'); // Using localhost as base for relative paths
  
  // Add query parameters
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });
  
  // Get the full URL string (remove base for relative paths)
  const fullUrl = path.startsWith('/') ? url.pathname + url.search : url.href;
  
  // Make the fetch request
  const response = await fetch(fullUrl);
  
  // Check if response is not OK
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  
  // Parse JSON response
  const jsonData = await response.json();
  
  // Check if response contains error
  if (jsonData.error) {
    throw new Error(jsonData.error);
  }
  
  // Return the data
  return jsonData.data;
};