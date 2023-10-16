const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const splittedData = data.split('\n');

    const students = {
      CS: [],
      SWE: [],
    };

    splittedData.forEach((row) => {
      const [firstname, lastname, age, field] = row.split(',');
      if (field === 'CS') {
        students.CS.push(firstname);
      }
      if (field === 'SWE') {
        students.SWE.push(firstname);
      }
    });

    console.log(`Number of students: ${students.CS.length + students.SWE.length}`);
    console.log(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}`);
    console.log(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
