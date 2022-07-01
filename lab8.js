// Q1

let student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade(newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade(){
        return (this.grades.reduce((acc, num)=> acc+num,0)) / this.grades.length;
    }
}

let studentsArr = [Object.create(student), Object.create(student), Object.create(student)];

studentsArr[0].firstName = "Yousef";
studentsArr[0].lastName = "Salem";
studentsArr[0].inputNewGrade(10);
studentsArr[0].inputNewGrade(9);
studentsArr[0].inputNewGrade(8);
studentsArr[1].firstName = "Ahmad";
studentsArr[1].lastName = "Salem";
studentsArr[1].inputNewGrade(7);
studentsArr[1].inputNewGrade(6);
studentsArr[1].inputNewGrade(5);
studentsArr[2].firstName = "Hanan";
studentsArr[2].lastName = "Salem";
studentsArr[2].inputNewGrade(4);
studentsArr[2].inputNewGrade(3);
studentsArr[2].inputNewGrade(2);

let gradesSum = studentsArr.reduce((sum, student)=>sum+student.computeAverageGrade(),0);
console.log(gradesSum);
console.log(gradesSum / studentsArr.length);

///////////////////
// Q2
function Student(fName, lName, grades = []){
    this.firstName = fName;
    this.lastName = lName;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function(newGrade){
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function(){
    return this.grades.reduce((acc, grade)=> acc+grade,0) / this.grades.length;
}

let student1 = new Student("Yousef", "Salem");
student1.inputNewGrade(10);
student1.inputNewGrade(9);
student1.inputNewGrade(8);
console.log(student1.computeAverageGrade());

let student2 = new Student("Ahmad", "Salem");
student2.inputNewGrade(7);
student2.inputNewGrade(6);
student2.inputNewGrade(5);
console.log(student1.computeAverageGrade());

let studentsList = [student1, student2];

let studentsAvg = studentsList.reduce((acc, student)=> acc+student.computeAverageGrade(),0) / studentsList.length;

console.log(studentsAvg)

/////////////////
//Q3
Array.prototype.mySort = function(){
    return this.sort();
}

console.log([7, 5, 2, 4, 3, 9].mySort());
console.log("***");

//////////////
//Q4
let myLinkedList = {
    arr : [],
    add(num){
        this.arr.push(num);
    },
    print(){
        console.log("LinkedList{"+this.arr +"}");
    },
    remove(num){
        this.arr = this.arr.filter(element=> element !== num);
    }
}

myLinkedList.add(1);
myLinkedList.add(2);
myLinkedList.add(3);
myLinkedList.print();
myLinkedList.remove(2);
myLinkedList.print();

console.log("***");

function MyLinkedList(arr = []){
    this.arr = arr;
};
MyLinkedList.prototype.add = function(num){
    this.arr.push(num);
};
MyLinkedList.prototype.print = function(){
    console.log("LinkedList{" + this.arr + "}");
};
MyLinkedList.prototype.remove = function(num){
    this.arr = this.arr.filter(element => element !== num);
};

let myLinkedList2 = new MyLinkedList();
myLinkedList2.add(1);
myLinkedList2.add(2);
myLinkedList2.add(3);
myLinkedList2.print();
myLinkedList2.remove(2);
myLinkedList2.print();