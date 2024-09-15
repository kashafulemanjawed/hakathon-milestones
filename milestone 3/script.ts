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
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name: </b>${name}</p>
    <p><b>Email: </b>${Email}</p>
    <p><b>Phone: </b>${Phone}</p>

    <h3>Education</h3>
    <p>${Education}</p>

    <h3>Experience</h3>
    <p>${Experience}</p>

    <h3>Skills</h3>
    <p>${Skills}</p>";

    //display the generate resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }else{
        console.error("The resume element is missing")
    }
})
