function skillsMember()
{
    var member = new Object();
    member.name = "member";
    member.skills = ["html", "css", "js", "nodejs"];
    member.showSkills = function(){
        console.log(this.skills);
    }
    return member;
}