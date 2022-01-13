var PersonalInfo = {
    "name":"Xie Qifei",
    "location":"Hainbuchenstr.1, Aachen,",
    "nationAndZip":"Germany, 52074",
    "phone":"+44 7422510915",
    "email":"im@xieqifei.com",
    "blog":"www.sci.ci",//if dont have, let it empty
}

var aboutMe="A"

var Education = {
    "institution":["RWTH Aachen University","China University of Petroleum (East China)"],
    "location":["Aachen, Germany","Qingdao, China"],
    "period":["04/2020 - Present","09/2015 - 07/2019"],
    "major":["Master in Sustainable Energy Supply","Bachelor in Mechanical Engineering"],
    "highlight":["","grade rank in 8%"]
}

var WorkExperience = {
    "institution":["Jindian Automobile Repair Service Company","Jindian Automobile Repair Service Company"],
    "location":["Chengdu, China","Chengdu, China"],
    "period":["01/2016-02/2016 & 08/2016-09/2016","01/2017-02/2017 & 07/2017-08/2017"],
    "position":["Car Repair Assistant","Safety Inspection Assistant"],
    "highlight":["",""],
}
var GithubWork = {
    "name":["OneindexN","getLernraumPlatz","SpiderPlayer","SmartMailbox"],
    "abstract":["A alternative web page for Microsoft onedrive used to show personal cloud disk content.","A Program used to rush the reservation in RWTH booking site of study room in a short time","A web music player. Music sources are obtained from Youtube, Bilibili and QQ Music through web crawler","A gadget made with arduino, accelerometer, wifi module, with which a message will be sent to phone when there's a new letter into mailbox."],
    "star":['64',"6","4","0"],
    "lang":["PHP","Python","Python","C"]
}

var Skills = {
    "skill":["Python","Java","C/C++","JS","HTML","CSS","PHP"],
    "proficiency":["90","85","80","70","60","60","60"]
}

var Languege={
    "lang":["English","German"],
    "proficiency":["70","60"]
}
var Hobby=["Ski","Badminton","Game","Programming"]

vm1 = new Vue({
    el: "#resume_left",
    data: {
      PersonalInfo: PersonalInfo,
      Skills: Skills,
      Languege:Languege
    },
  });

  vm2 = new Vue({
    el: "#resume_right",
    data: {
        WorkExperience: WorkExperience,
        Education: Education,
        GithubWork:GithubWork,
        Hobby:Hobby
    },
  });