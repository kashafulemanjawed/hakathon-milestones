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
    var Resumehtml = " 
        < h2 > Resume </b></h2 >
        Personal, Information;
    </h3>
        < p > Name;
    </b>${Name}</p>
        Email;
    /b>${Email}</p>
        Phone;
    Number: /b>${Phone Number}</p>
        Education </h3>
        <p> $;
    {
        Education;
    }
    </p>
        < h3 > Experience </h3>
        < p > $;
    {
        Experience;
    }
    </p>
        < h3 > Skills </h3>
        < p > $;
    {
        Skills;
    }
    </p>";
    //display the generate resume 
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = Resumehtml;
    }
    else {
        console.error("The resume element is missing");
    }
});
