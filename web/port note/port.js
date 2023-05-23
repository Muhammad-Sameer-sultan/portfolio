console.log("PAGE chECK");
show();

let addTitle= document.getElementById('addTitle');
let addBtn= document.getElementById('addBtn');
// add button
addBtn.addEventListener("click",function(e){
  let notes= localStorage.getItem("notes");
  if(notes==null){
    notesObj=[];
  }
  else{
    notesObj= JSON.parse(notes);
  }
  let obj={
    title:addTitle.value,
    text:addTxt.value
  }
  console.log(obj);
  notesObj.push(obj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
  show();
})

                        // show function
function show(){
  let notes= localStorage.getItem("notes");
  if(notes==null){
    notesObj=[];
  }
  else{
      notesObj=JSON.parse(notes);
    }
    let html="";
    // Array.from(titleObj);
    Array.from(notesObj).forEach(function(element,index)
    {
      // console.log(titleObj[index]);
      html+=` 
      <div  class="card mx-2 my-2" style="width:18rem;">
        <div class="card-body">
          <h5>${element.title}</h5>
          <p>${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)">Delet Note</button> 
        </div>
      </div> `;
    }
    
    )
    let notesCard= document.getElementById('notes');
    if(notesObj.length!=0){
      // console.log(notes);
      notesCard.innerHTML = html;
    }
    else{
      notesCard.innerHTML = "Nothing in notes. Add a Note";

    }
    
}

                  // Delete button
function deleteNote(index){
  let notes=localStorage.getItem("notes");
  if(notes==null){
    notesObj=[];
  }
  else{
      notesObj=JSON.parse(notes);
    }
    // console.log(typeof(notesObj));
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    // console.log(notesObj);
    show();
}












