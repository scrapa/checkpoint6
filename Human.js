import React ,{Component} from "react"
class Human extends component{

    name;job;age;skills;


    getJob (){

    this.job= "aaatar"

}
leaveJob (){
    this.job= "jobless"
}
learnNewSkills (){
    this.skills=["zazzar" , "hammas"]
}
forgetSkills (){
    this.skills=[""]
}
}
export default Human
