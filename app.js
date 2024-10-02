// document.body;
// const mybody = document.body
// console.log(mybody);

// mybody.style.backgroundColor = "red" ;
// console.log(mybody)

// const box2 = document.getElementById('box-2')
// console.log(box2);

// const divs = document.getElementsByTagName('div');
// console.log(divs); 

// const boxes = document.getElementsByClassName('box random')
// console.log(boxes);
// const random = document.querySelectorAll('.container .random');
// console.log(random);


// //////////////////////////////modifying////////////////////////////////////////////////////////
// const myimg = document.getElementById('myimg-src');
// myimg.src = "images/g12.jpeg";

// const box1 =document.getElementById('box-1');
// box1.classList.add('round-border')

// const boxes = document.getElementsByClassName('box');

// for (let i=0; i<boxes.length; i++){
//     boxes[i].classList.add("round-border")
// // }
// const box1 = document.getElementById('box-2');
// box1.classList.remove('box');

// const newpara = document.createElement('p')
// newpara.innerText = "this in me"


// const container = document.getElementById("container2")
// container.appendChild(newpara)



// document.body;
//  const  myBody = document.body
//  console.log(myBody);


// const box2 = document.getElementById('box-2')
// console.log(box2);


// const divs = document.getElementsByTagName('div')
// console.log(divs);


// const boxes = document.getElementsByClassName('box')
// console.log(boxes);


// const random = document.querySelector(".container .random")
// console.log(random);



// const box1 = document.getElementById('box-1')
// box1.style.backgroundColor = "red"



// const myimg = document.getElementById('myimg-src');

// myimg.src = "images/girl12.jpeg"


////////////////////////////////modify class////////////////////////////////

// const box1 = document.getElementById('box-1')

// box1.classList.add('round-border')


 //const boxes = document.getElementsByClassName('box')

// for(let i=0; i<boxes.length; i++){
//     boxes[i].classList.add('round-border')
// }

//////////////////////////////////remove class//////////////////////////////////////////

// const box1 = document.getElementById('box-1')


// box1.classList.remove('box')



///////////////////////////////////// createing element///////////////////////////////////



// const newpara = document.createElement('p')

// newpara.innerText = "this is new paragarph"
// newpara.classList.add("box")


// const container2 = document.getElementById('container2')

// container2.appendChild(newpara)

// Array to store students
// let students = [];

// // Function to add a new student
// function addStudent(name, age) {
//     const student = {
//         id: Date.now(),
//         name: name,
//         age: age
//     };
//     students.push(student);
//     renderStudents();
//    }

// //Function to delete a student
// function deleteStudent(id) {
//     students = students.filter(student => student.id !== id);
//     renderStudents();
// }

// // Function to render students in the DOM
// function renderStudents() {
//     const studentList = document.getElementById('student-list');
//     studentList.innerHTML = ''; // Clear the list before rendering

//     students.forEach(student => {
//         const studentDiv = document.createElement('div');
//         studentDiv.classList.add('student');
//         studentDiv.innerHTML = `
//             <span>${student.name}, Age: ${student.age}</span>
//             <button onclick="deleteStudent(${student.id})">Delete</button>
//         `;
//         studentList.appendChild(studentDiv);
//     });
// }

// // Handle form submission
// document.getElementById('student-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from reloading the page
//     const name = document.getElementById('name').value;
//     const age = document.getElementById('age').value;

//     if (name && age) {
//         addStudent(name, parseInt(age));
//         document.getElementById('name').value = '';
//         document.getElementById('age').value = '';
//     }
// });

///////////////////////////////////////////////////////////////////////////////////////////////////////


// let students = [];

// //function to add a new students

// function addStudent(name,age){
//     const student = {
//         id: Date.now(),
//         name:name,
//         age:age

//     };
//     students.push(student);
//     renderStudents()
    
// }

// // // function to delete student

// function deleteStudent(id){
//    students = students.filter(student => student.id !== id);
//    renderStudents()
// }


// //function to renderstudents students in dom

// function renderStudents(){
//   const  studentList = document.getElementById('student-list');
//   studentList.innerHTML = ' ';


//   students.forEach(student =>{
//     const studentDiv = document.createElement('div');
//     studentDiv.classList.add('student');
//     studentDiv.innerHTML =  `
//     <span> name:${student.name}, Age: ${student.age}
//     </span> 
//     <button onclick="deleteStudent(${student.id})">delet</button> `;

//     studentList.appendChild(studentDiv)
    
//   });
// }

// //handle form submission


// document.getElementById('student-form').addEventListener('submit', function(event){
//     event.preventDefault();
//     const name = document.getElementById("name").value ;
//     const age = document.getElementById("age").value ;

//     if(name&& age){
//         addStudent (name,parseInt(age));
//         document.getElementById('name').value = '' ;
//         document.getElementById('age').value = '' ;
//     }
// })

//////////////////////////////////////////////////////////////////////////////////////////////

// //array to store data
// let students = [];

// //function to add a new student
// function addStudent(name,age){
//     const student = {
//         id : Date.now() ,//766327479389040809329808
//         name: name,
//         age:age
//     };
//     students.push(student)      
//     renderStudents()
// }
// //function to delet student
//  function deleteStudent(id){
//     students = students.filter(student=> student.id !== id)
//     renderStudents()

//  }
 
//  //funtion to render students

//  function renderStudents(){
//     const studentList = document.getElementById('student-list');
//     studentList.innerHTML = "" ;


// students.forEach(student=>{
//     const studentDiv = document.createElement('div')
//     studentDiv.classList.add("student");
//     studentDiv.innerHTML = `
//     <span>name:${student.name}, age: ${student.age}</span>
//     <button onclick="deleteStudent(${student.id})">delete</button>`;
     
//     studentList.appendChild(studentDiv)
    
// })

//  }
// //handle form///

// document.getElementById('student-form').addEventListener('submit',function(event){
//     event.preventDefault();

//     const name = document.getElementById('name').value;

//     const age = document.getElementById('age').value;
//     if(name && age){
//         addStudent(name,parseInt(age));
//         document.getElementById('name').value = '';
//         document.getElementById('age').value = '';
//     }

// })

//.length//////////

let string = "javascript is a programming language"
// let a = string.length
// document.write(a)

///// to lower case//////////


// let a = string.toUpperCase()
// document.write(a)

//includes/////


// let a = string.includes("javascript")
// document.write(a)


//////start with end with///////////////


// let a =string.endsWith("age")
// document.write(a)


///////replace/////////////

// let a = string.replace("programming","static")
// document.write(a)


////////chartAT/////////////


// let a = string.charAt(4)
// document.write(a)

///////////concat//////////////////

// let str = "javascript"
// let str2 = "hello"

// let a = str.concat(str2)
// document.write(a)


////split//////////

// let str = "javascript"
// let a = str.split("")
// document.write(a)

////// tostring/////////

// let str = "uzma"

// document.write(typeof str)

// let a = 0;
// let id = setInterval(anim, 1000);
// function anim(){
//   a += 10;
//   if(a ==200){
//     clearInterval(id)

//   }
//   else{
//   let target = document.getElementById("test");
//   target.style.marginLeft = a + "px";

// }
// }
// function greet2(num1,num2){
//   document.write(num1+num2)
// }


// function greet(callback){
//   document.write("hello")
//   callback()
// }
// greet(greet)


// const calculate = (num1,num2,callback)=>{
//   document.write("hello world")
//   document.write(num1+num2)
// callback(2,2)
// }
// calculate(2,3,greet2)






// const mypromise = new Promise((resolved,reject)=>{
// const a= 4 , b = 6;
// const c = a+b
// if (c === 11){
//   resolved("yes!!!!!! 6 and 4 is 11");

// }else{
//   reject("no!!! its not 11")
// }
// });

// mypromise.then((value)=>{
//   document.write(value);
  
// }).catch((err)=>{
//   document.write(err)
// })

// function washing(callback){
//   console.log("washing started");

//   setTimeout(()=>{
//   console.log("washing done");
//     callback()
//   },5000)
// };
// function soaking(callback){
//   console.log("soaking started");
  
//   setTimeout(()=>{
//     console.log("soaking done");
  
//     callback()
//   },3000)
// };
// function drying(){
//   console.log("drying started");
//   setTimeout(()=>{
//     console.log("drying done");
//   },2000)
// };
// washing(()=>{
//   soaking(()=>{
//     drying()
//   })
// })

///////////////////////////////call back function//////////////////////////////
// function child_function(){
//  console.log("this is child function")
// }

// function mainfunc(xyz){
//   console.log("this is my main function");
//   xyz()
// }
// mainfunc(function(){
//   console.log("this is child function")
// })

//////////////////////////////////////////////////////////////////////////////////

// function task1(callback){
//   console.log("task1 started");
//   setTimeout(()=>{
//     console.log("tast1 ended")
// callback();
//   },5000)

// };

// function task2(callback){
//   console.log("task2 started");
//   setTimeout(()=>{
//     console.log("task2 ended")
//     callback()
//   },3000)

// }
// function task3(){
//   console.log("task3 started")
//   setTimeout(()=>{
//     console.log("task3 ended")
//   },2000)
// }

// task1(()=>{
//   task2(()=>{
//     task3()
//     })
//   })

// async function callApi(){
//     let result = await fetch("https://jsonplaceholder.typicode.com/users");
//     result = await result.json()
//     console.log(result);


//      document.getElementById("usersData").innerHTML = result
//        .map((user)=>
//         `<tr>
//          <td>${user.name}</td>
//          <td>${user.email}</td>
//          <td>${user.username}</td>
//          <td>${user.website}</td>
//          <td>${user.phone}</td>
//          </tr>`

//      ).join("");
    
//  }
//  callApi();








// const mypromise = new Promise((resolv,reject)=>{
//     const a = 2 ,b=2
//     const c = a+b;
//     if (c == 4){
//         resolv(`yes!, ${a} + ${b} = 4`);
//     }else {
//         reject(`no! ${a} + ${b} != 4`)
//     }

// });
// mypromise.then((value)=>{
//     console.log(value);
    
// }).catch((error)=>{
//     console.log(error)
// })


// async function callApi(){
//     let result = await fetch("https://jsonplaceholder.typicode.com/users");
    
//     console.log(result);
    

// }

























































// function greet(){} //named function
//function (){} // annonymous function
//()=>{}


























































































































