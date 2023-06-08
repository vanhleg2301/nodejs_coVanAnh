document.addEventListener('DOMContentLoaded', function () {
    function addStudent(event) {
        event.preventDefault(); // Prevent form submission

        // Get the input values
        var studentId = document.getElementById("studentId").value;
        var studentName = document.getElementById("studentName").value;
        var studentAge = document.getElementById("studentAge").value;
        var studentGender = document.querySelector('input[name="gender"]:checked').value;

        // Create a new row for the student
        var newRow = document.createElement("tr");

        // Create the cells for ID, Name, Age, and Gender
        var idCell = document.createElement("td");
        idCell.textContent = studentId;

        var nameCell = document.createElement("td");
        nameCell.textContent = studentName;

        var ageCell = document.createElement("td");
        ageCell.textContent = studentAge;

        var genderCell = document.createElement("td");
        genderCell.textContent = studentGender;

        // Append the cells to the new row
        newRow.appendChild(idCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(ageCell);
        newRow.appendChild(genderCell);

        // Append the new row to the table body
        var tableBody = document.getElementById("studentTableBody");
        tableBody.appendChild(newRow);

        // Clear the form inputs
        document.getElementById("addStudentForm").reset();
    }

    // Function to update a student
    function updateStudent() {
        // Get the updated values
        var updatedId = document.getElementById("studentId").value;
        var updatedName = document.getElementById("studentName").value;
        var updatedAge = document.getElementById("studentAge").value;
        var updatedGender = document.querySelector('input[name="gender"]:checked').value;

        // Find the row that needs to be updated
        var tableBody = document.getElementById("studentTableBody");
        var rows = tableBody.getElementsByTagName("tr");

        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var idCell = row.cells[0];

            if (idCell.textContent === updatedId) {
                // Update the corresponding cells with new values
                row.cells[1].textContent = updatedName;
                row.cells[2].textContent = updatedAge;
                row.cells[3].textContent = updatedGender;

                // Clear the form inputs
                document.getElementById("addStudentForm").reset();

                // Exit the loop once the update is done
                break;
            }
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
                    // Remove the corresponding row when the delete button is clicked
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
