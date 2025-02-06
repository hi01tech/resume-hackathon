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
    var resumeHTML = "\n    <h3>".concat(name, "</h3>\n    <p><b>Email</b>: <u>").concat(email, "</u></p>\n    <p><b>Phone</b>: ").concat(phone, "</p>\n    <h4>Education</h4>\n    <p>").concat(degree, " from  ").concat(school, " ( ").concat(gradYear, " year)</p>\n    <h4>Work Experience</h4>\n    <p>").concat(jobTitle, " at ").concat(company, " (").concat(years, " years)</p>\n    <h4>Skills</h4>\n    <ul>\n      ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n    </ul>\n    ");
    //Display the generated resume
    if (resumeContent) {
        resumeContent.innerHTML = resumeHTML;
    }
    else {
        console.error("The Resume display element is missing.");
    }
});
