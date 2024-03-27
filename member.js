function skillsMember()
{
    var skills = document.getElementById("skills").value;
    var skillsError = document.getElementById("skillsError");
    var skillsPattern = /^[a-zA-Z0-9, ]+$/;
    if(skills == "")
    {
        skillsError.innerHTML = "Please enter your skills";
        return false;
    }
    else if(!skills.match(skillsPattern))
    {
        skillsError.innerHTML = "Please enter a valid skills";
        return false;
    }
    else
    {
        skillsError.innerHTML = "";
        return true;
    }
}
