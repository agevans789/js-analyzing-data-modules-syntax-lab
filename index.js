require("datejs");

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
  const merge_date = "merge_date";
  combinedObject[merge_date] = 9/20/2025; 
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};