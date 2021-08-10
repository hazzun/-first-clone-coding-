const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");//id가 todo-form인 form 안에서 input을 찾음
const toDoList = document.getElementById("todo-list");

let toDos = [];//let은 업데이트가 가능한 성질

function deleteToDo(event){
    // console.log(event.target.parentElement); //어떤것을 클릭했는지 확인 가능
    const target = event.target.parentElement;
    target.remove();
    toDos = toDos.filter((todo) => todo.id !== parseInt(target.id));
    saveToDos();                   //console.log(typeOf li.id)를 해보면 string
}            

function saveToDos(){ //localstorage에 저장하기
    localStorage.setItem("toDos", JSON.stringify(toDos));//todos의 배열을 문자화
}                       //JSON.stringify는 json을 String객체로 변환

function paintToDo(newToDo){
    //list item 만들기
    const li = document.createElement("li"); //html에 li생성
    li.id = newToDo.id;//document에 id저장
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "🍙🙅🏻❌"; 
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li는 span이라는 자식을 얻게됨
    li.appendChild(button);
    // console.log(li); //html상에서 어떻게 들어가는지 확인
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;//input의 현재value를 새로운 변수에 복사
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem("toDos");
//저장된 toDos를 가져와서
// console.log(savedToDos); //확인
if(savedToDos !== null){ //JSON.parse는 String객체를 json객체로 변환
    const parseToDos = JSON.parse(savedToDos);//배열의 내부만 문자화시키기
    // console.log(parseToDos); //확인
    toDos = parseToDos;
    parseToDos.forEach(paintToDo);  //foreach는 array의 각 item에 대해 function을 실행해줌
}