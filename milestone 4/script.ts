// get references to the form and display area 
const form = document.getElementById("resume-form")as HTMLFormElement; 
const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement

//handle form submission
form.addEventListener("submit",(event: Event) => {
    event.preventDefault(); //prevent page reload

    //collect the input value
    const Name = (document.getElementById("Name") as HTMLInputElement).value
    const Email = (document.getElementById("Email") as HTMLInputElement).value
    const PhoneNumber = (document.getElementById("Phone Number") as HTMLInputElement).value
    const Education = (document.getElementById("Education") as HTMLInputElement).value
    const Experience = (document.getElementById("Experience") as HTMLInputElement).value
    const Skills = (document.getElementById("Skills") as HTMLInputElement).value

    //generte the resume contant dynamically
    const resumehtml = '
    <h2><b>editable resume</b></h2>
    <h3>Personalinformation</h3>
    <p><b>Name:</b><span contenteditable ="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable ="true">${Email}</span></p>
    <p><b>Phone:</b><span contenteditable ="true">${Phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${Education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${Experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${Skills}</p>";

    //display the generate resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }else{
        console.error("The resume element is missing")
    }
})
