const mentors=[
    {
        name:"David",
        age:23,
        skills:[
            {
                javascript:10,
                css:8.5,
                jquery:9,
                node:9
            }
        ]
    },{
        name:"Charles",
        age:24,
        skills:[
            {
                javascript:10,
                css:8,
                jquery:9,
                node:10
            }
        ]
    },{
        name:"Michael",
        age:22,
        skills:[
            {
                javascript:10,
                css:8.5,
                jquery:10,
                node:8.5
            }
        ]
    },{
        name:"Israel",
        age:30,
        skills:[
            {
                javascript:9.5,
                css:10,
                jquery:9,
                node:8
            }
        ]
    }
]
function Mentor(name,age,skills){
    this.name=name;
    this.age=age;
    this.skills=skills
    this.averageSkills= function(){
        const mentorSkills = this.skills[0];
        const {javascript,css,jquery,node}= mentorSkills;
        const average= (javascript+css+jquery+node) /4 ;
        return average;
        
    }
}
const createMentor= (actualMentor, index) =>{
    const {name,age,skills}= actualMentor
    const mentor= new Mentor (name, age, skills);
    return mentor
}
const newMentors= mentors.map(createMentor);
console.log (newMentors) 
