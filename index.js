function combineUsers(...args) {
  const combinedObject = {
    users: [],
  };
  // loop through args to isolate each array
  for (const arg of args) {
    if (Array.isArray(arg)) {
      // add the spread of args to the users array 
      combinedObject.users.push(...arg);
    }
  };
  // add attribute to combinedObject called merge_date
  
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};