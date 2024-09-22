// get references to the form and display area 
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
//handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect the input value
    var Name = document.getElementById("Name").value;
    var Email = document.getElementById("Email").value;
    var PhoneNumber = document.getElementById("Phone Number").value;
    var Education = document.getElementById("Education").value;
    var Experience = document.getElementById("Experience").value;
    var Skills = document.getElementById("Skills").value;
    //generte the resume contant dynamically
    var resumehtml = '
        < h2 > editable, resume;
    /b></h2 >
        Personalinformation < /h3>
        < p > Name;
    /b><span contenteditable ="true">${name}</span > /p>
        < p > Email;
    /b><span contenteditable ="true">${Email}</span > /p>
        < p > Phone;
    /b><span contenteditable ="true">${Phone}</span > /p>
        < h3 > Education < /h3>
        < p;
    contenteditable = "true" > $;
    {
        Education;
    }
    /p>
        < h3 > Experience < /h3>
        < p;
    contenteditable = "true" > $;
    {
        Experience;
    }
    /p>
        < h3 > Skills < /h3>
        < p;
    contenteditable = "true" > $;
    {
        Skills;
    }
    /p>";
    //display the generate resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error("The resume element is missing");
    }
});
