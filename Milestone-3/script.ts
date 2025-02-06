const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeContent = document.getElementById('resume-content') as HTMLDivElement;

form.addEventListener('submit', (event:Event)  =>  {
    event.preventDefault(); //prevent page reloding
  
    // Collect input values
    const name= (document.getElementById('name') as HTMLInputElement).value
    const email= (document.getElementById('email') as HTMLInputElement).value
    const phone= (document.getElementById('phone') as HTMLInputElement).value
    const degree= (document.getElementById('degree') as HTMLInputElement).value
    const school= (document.getElementById('school') as HTMLInputElement).value
    const gradYear= parseInt((document.getElementById('gradYear') as HTMLInputElement).value)
    const jobTitle= (document.getElementById('jobTitle') as HTMLInputElement).value
    const company= (document.getElementById('company') as HTMLInputElement).value
    const years= parseInt((document.getElementById('years') as HTMLInputElement).value)
    const skills= (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim())
    
    // Generate resume content dynamically
    const resumeHTML =  `
    <h3>${name}</h3>

    <p><b>Email</b>: <u>${email}</u></p>
    <p><b>Phone</b>: ${phone}</p>

    <h4>Education</h4>
    <p>${degree} from  ${school} ( ${gradYear} year)</p>

    <h4>Work Experience</h4>
    <p>${jobTitle} at ${company} (${years} years)</p>
    
    <h4>Skills</h4>
    <ul>
      ${skills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
    `;

    //Display the generated resume
    if (resumeContent) {
        resumeContent.innerHTML = resumeHTML;
    }else{
        console.error("The Resume display element is missing.");
        
        
    }
});
