document.addEventListener('DOMContentLoaded', function() {
    const homeworkForm = document.getElementById('homeworkForm');
    const homeworkList = document.getElementById('homeworkList');

    // Event listener for the form submission
    homeworkForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get input values
        const className = document.getElementById('className').value;
        const assignmentName = document.getElementById('assignmentName').value;
        const assignmentType = document.getElementById('assignmentType').value;
        const dueDate = document.getElementById('dueDate').value;

        // Create a new list item for the homework
        const listItem = document.createElement('li');
        listItem.innerHTML = `<div>
                                <strong>Class:</strong> ${className} <br>
                                <strong>Assignment Name:</strong> ${assignmentName} <br>
                                <strong>Assignment Type:</strong> ${assignmentType} <br>
                                <strong>Due Date:</strong> ${dueDate}
                              </div>`;

        // Create the "Done" button to remove the homework
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('done-btn');
        
        // When the done button is clicked, remove the homework from the list
        doneButton.addEventListener('click', function() {
            homeworkList.removeChild(listItem);
        });

        // Append the button to the list item and then add the list item to the homework list
        listItem.appendChild(doneButton);
        homeworkList.appendChild(listItem);

        // Clear the form inputs
        homeworkForm.reset();
    });
});
