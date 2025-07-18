/**
 * Basic throttle function that executes immediately and then waits for the specified delay
 * @param {Function} func - The function to throttle
 * @param {number} wait - The wait time in milliseconds
 * @returns {Function} - The throttled function
 */
export function throttle(func, wait) {
  let lastExecTime = 0;
  
  return function(...args) {
    const now = Date.now();
    
    if (now - lastExecTime > wait) {
      lastExecTime = now;
      return func.apply(this, args);
    }
  };
}

/**
 * Advanced throttle function with leading and trailing options
 * @param {Function} func - The function to throttle
 * @param {number} wait - The wait time in milliseconds
 * @param {Object} options - Options object
 * @param {boolean} options.leading - Execute on the leading edge
 * @param {boolean} options.trailing - Execute on the trailing edge
 * @returns {Function} - The throttled function
 */
export function opThrottle(func, wait, options = {}) {
  const { leading = false, trailing = false } = options;
  
  let lastExecTime = 0;
  let timeoutId = null;
  let lastArgs = null;
  let lastThis = null;
  let isFirstCall = true;
  
  const execute = () => {
    lastExecTime = Date.now();
    timeoutId = null;
    if (lastArgs) {
      func.apply(lastThis, lastArgs);
      lastArgs = null;
      lastThis = null;
    }
  };
  
  return function(...args) {
    const now = Date.now();
    const timeSinceLastExec = now - lastExecTime;
    
    lastArgs = args;
    lastThis = this;
    
    // If this is the first call or enough time has passed since last execution
    if (isFirstCall || timeSinceLastExec > wait) {
      // Clear any pending trailing execution
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      
      if (leading && isFirstCall) {
        // Execute immediately on leading edge for first call
        execute();
        isFirstCall = false;
      } else if (leading && timeSinceLastExec > wait) {
        // Execute immediately on leading edge after wait period
        execute();
      } else if (trailing) {
        // Schedule trailing execution
        timeoutId = setTimeout(execute, wait);
        if (isFirstCall) {
          lastExecTime = now; // Set lastExecTime for first call even if not executing
          isFirstCall = false;
        }
      } else if (isFirstCall) {
        // If neither leading nor trailing, just mark as not first call
        isFirstCall = false;
      }
    } else if (trailing && !timeoutId) {
      // Schedule trailing execution if not already scheduled
      const remainingTime = wait - timeSinceLastExec;
      timeoutId = setTimeout(execute, remainingTime);
    }
  };
}