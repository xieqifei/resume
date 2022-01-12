var PersonalInfo = {
    "name":"Xie Qifei",
    "location":"Hainbuchenstr.1, Aachen,",
    "nationAndZip":"Germany, 52074",
    "phone":"+44 7422510915",
    "email":"im@xieqifei.com",
    "blog":"www.sci.ci",//if dont have, let it empty
}

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
var Program = {
    "name":[]
}

var Skills = {
    "skill":["Python","Java","C/C++","JS","HTML","CSS"],
    "proficiency":["90","85","80","70","60","60"]
}

var Languege={
    "lang":["English","German"],
    "proficiency":["70","60"]
}

vm1 = new Vue({
    el: "#resume_left",
    data: {
      PersonalInfo: PersonalInfo,
      Skills: Skills,
    },
  });

  vm2 = new Vue({
    el: "#resume_right",
    data: {
        WorkExperience: WorkExperience,
        Education: Education,
    },
  });