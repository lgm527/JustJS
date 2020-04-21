function duplicateSpreadsheet(original) {
  if (original.hasPendingChanges) {
    throw new Error('You need to save the file before you can duplicate it.');
  }
  let copy = {
    created: Date.now(),
    author: original.author,
    cells: original.cells,
    metadata: original.metadata,
  };
  copy.metadata.title = 'Copy of ' + original.metadata.title;
  return copy;
}

// What you might not have noticed (great job if you did though!) is that this function also accidentally changes the title of the original spreadsheet.
// Fix:

function duplicateSpreadsheetCorrected(original) {
  
  if (original.hasPendingChanges) {
    throw new Error('You need to save the file before you can duplicate it.');
  }
  let copy = {
    created: Date.now(),
    author: original.author,
    cells: original.cells,
    metadata: {...original.metadata},
  };
  copy.metadata.title = 'Copy of ' + original.metadata.title;
  return copy;
}