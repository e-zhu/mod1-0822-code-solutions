/* exported getStudentNames */
function getStudentNames(students) {
  var studentNamesArray = [];
  for (var i = 0; i < students.length; i++) {
    var studentName = students[i].name;
    studentNamesArray.push(studentName);
  }
  return studentNamesArray;
}
