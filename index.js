// code your solution here

// function superbowlWin(record) {
//     const win = record.find(entry => entry.result === "w")
//     return win ? win.year : undefined;
// }
 
function superbowlWin(record) {
    const win = record.find(entry => entry.result === "W");
    return win ? win.year : undefined;
  }