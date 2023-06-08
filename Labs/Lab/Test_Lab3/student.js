document.addEventListener('DOMContentLoaded', function () {
    var studentList = []; // Array to store student data

    function addStudent(event) {
        event.preventDefault(); // Prevent form submission

        // Get the input values
        var studentId = document.getElementById("studentId").value;
        var studentName = document.getElementById("studentName").value;
        var studentAge = document.getElementById("studentAge").value;
        var studentGender = document.querySelector('input[name="gender"]:checked').value;

        // Create a new student object
        var student = {
            id: studentId,
            name: studentName,
            age: studentAge,
            gender: studentGender
        };

        // Add the student to the list
        studentList.push(student);

        // Update the table
        updateTable();

        // Clear the form inputs
        document.getElementById("addStudentForm").reset();
    }

    // Function to update the table
    function updateTable() {
        // Get the table body
        var tableBody = document.getElementById("studentTableBody");

        // Clear the table body
        tableBody.innerHTML = '';

        // Loop through the student list and add rows to the table
        studentList.forEach(function (student) {
            // Create a new row for the student
            var newRow = document.createElement("tr");

            // Create the cells for ID, Name, Age, and Gender
            var idCell = document.createElement("td");
            idCell.textContent = student.id;

            var nameCell = document.createElement("td");
            nameCell.textContent = student.name;

            var ageCell = document.createElement("td");
            ageCell.textContent = student.age;

            var genderCell = document.createElement("td");
            genderCell.textContent = student.gender;

            var deleteCell = document.createElement('td');
            var deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('btn', 'btn-danger');
            deleteButton.addEventListener('click', function () {
                // Remove the corresponding student from the list
                var index = studentList.indexOf(student);
                if (index !== -1) {
                    studentList.splice(index, 1);
                    updateTable(); // Update the table after removing the student
                }
            });
            deleteCell.appendChild(deleteButton);

            // Append the cells to the new row
            newRow.appendChild(idCell);
            newRow.appendChild(nameCell);
            newRow.appendChild(ageCell);
            newRow.appendChild(genderCell);
            newRow.appendChild(deleteCell);

            // Append the new row to the table body
            tableBody.appendChild(newRow);
        });
    }

    // Function to update a student
    function updateStudent() {
        // Get the updated values
        var updatedId = document.getElementById("studentId").value;
        var updatedName = document.getElementById("studentName").value;
        var updatedAge = document.getElementById("studentAge").value;
        var updatedGender = document.querySelector('input[name="gender"]:checked').value;

        // Find the student that needs to be updated
        var studentToUpdate = studentList.find(function (student) {
            return student.id === updatedId;
        });

        if (studentToUpdate) {
            // Update the student's data
            studentToUpdate.name = updatedName;
            studentToUpdate.age = updatedAge;
            studentToUpdate.gender = updatedGender;

            // Update the table
            updateTable();

            // Clear the form inputs
            document.getElementById("addStudentForm").reset();
        }
    }

    // Event listener for the add student form submission
    var addStudentForm = document.getElementById("addStudentForm");
    addStudentForm.addEventListener("submit", addStudent);

    // Event listener for the update button
    var updateButton = document.querySelector("button[style='background-color: grey']");
    updateButton.addEventListener("click", updateStudent);

    // Sort button click event
    var sortButton = document.querySelector('button[style="background-color: red"]');
    sortButton.addEventListener('click', function () {
        studentList.sort(function (a, b) {
            // Sort the student list by name in ascending order
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        updateTable(); // Update the table after sorting
    });

    // Search button click event
    var searchButton = document.querySelector('button[style="background-color: yellow"]');
    searchButton.addEventListener('click', function () {
        var searchName = document.getElementById('studentName').value;
        var searchResults = studentList.filter(function (student) {
            // Filter the student list based on the entered name
            return student.name.toLowerCase() === searchName.toLowerCase();
        });
        if (searchResults.length > 0) {
            // Clear the table body
            studentTableBody.innerHTML = '';

            // Display the search results
            searchResults.forEach(function (student) {
                // Create a new table row
                var newRow = document.createElement('tr');

                // Create table cells for the student data
                var idCell = document.createElement('td');
                idCell.textContent = student.id;
                newRow.appendChild(idCell);

                var nameCell = document.createElement('td');
                nameCell.textContent = student.name;
                newRow.appendChild(nameCell);

                var ageCell = document.createElement('td');
                ageCell.textContent = student.age;
                newRow.appendChild(ageCell);

                var genderCell = document.createElement('td');
                genderCell.textContent = student.gender;
                newRow.appendChild(genderCell);

                var deleteCell = document.createElement('td');
                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('btn', 'btn-danger');
                deleteButton.addEventListener('click', function () {
                    // Remove the corresponding student from the list
                    var index = studentList.indexOf(student);
                    if (index !== -1) {
                        studentList.splice(index, 1);
                        updateTable(); // Update the table after removing the student
                    }
                });
                deleteCell.appendChild(deleteButton);
                newRow.appendChild(deleteCell);

                // Add the new row to the table body
                studentTableBody.appendChild(newRow);
            });
        } else {
            alert('No student found with the entered name.');
        }
    });
});