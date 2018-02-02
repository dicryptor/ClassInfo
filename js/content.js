
function getSavedOptions(options, remove){

	let courseCode = options.courseCode;
	let classCode = options.classCode;
	console.log("Saved courseCode is " + courseCode);
	console.log("Saved classCode is " + classCode);

	delete options.courseCode;
	delete options.classCode;

	highlightRows(courseCode, classCode);
}

function highlightRows(course, classCode){
	// Get classroom information table
	var rows = document.getElementsByTagName("table")[7].rows;
	console.log("Number of rows found " + rows.length);
	
	for (var i=0; i<rows.length; i++){
		var row = rows[i];
		var desc = row.cells[1].innerHTML;
		if (desc.indexOf(course) >= 0 && desc.indexOf(classCode) >= 0){
			console.log("This row contains this many cells " + row.cells.length);
			for (var j = 0; j<row.cells.length; j++){
				row.cells[j].style.backgroundColor = "yellow";
				row.cells[j].style.color = "red";
			}
		}
	}
}

// var last = rows[rows.length - 1];
// console.log("Last is " + last);
// var cell = last.cells[1];
// console.log("Cell is " + cell);
// var value = cell.innerHTML;
// console.log("Value is " + value);

browser.runtime.onMessage.addListener(function(request) {
  if ('returnOptions' === request.message) {
    if ('undefined' != typeof request.courseCode && request.courseCode && typeof request.classCode && request.classCode) {
      getSavedOptions({
        'courseCode': request.courseCode, //'keywords': request.keywords
        'classCode': request.classCode
      },
      request.remove
      );
    }
  }
});

browser.runtime.sendMessage({
  'message': 'getOptions',
  'remove': false
});