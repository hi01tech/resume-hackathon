var form = document.getElementById('resume-form');
var resumeContent = document.getElementById('resume-content');
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reloding
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var gradYear = parseInt(document.getElementById('gradYear').value);
    var jobTitle = document.getElementById('jobTitle').value;
    var company = document.getElementById('company').value;
    var years = parseInt(document.getElementById('years').value);
    var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
    // Generate resume content dynamically
    var resumeHTML = "\n    <h3>".concat(name, "</h3>\n    <p><b>Email</b>:<span contenteditable= \"true\"> <u>").concat(email, "</u> </span></p>\n    <p><b>Phone</b>:<span contenteditable= \"true\">  ").concat(phone, "</span></p>\n    <h4>Education</h4>\n    <p><span contenteditable= \"true\"> ").concat(degree, " from  ").concat(school, " ( ").concat(gradYear, "</span> year)</p>\n    <h4>Work Experience</h4>\n    <p><span contenteditable= \"true\"> ").concat(jobTitle, " at ").concat(company, " (").concat(years, "</span> years)</p>\n    <h4>Skills</h4>\n    <ul>\n      <span contenteditable= \"true\"> ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "</span>\n    </ul>\n    ");
    //Display the generated resume
    if (resumeContent) {
        resumeContent.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume display element is missing.");
    }
});
