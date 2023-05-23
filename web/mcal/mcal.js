console.log("check if connection is workings");
// let result= document.querySelector('#result');
function pressNum(e){
    let val= document.getElementById('val');
    
    if(val.innerHTML!=="0"){
        // val.innerHTML +=e.innerHTML;
              
        check(e.innerHTML);
    }

    else{
        
        val.innerHTML =e.innerHTML;
     
    }

}

function check(e){
    let check=e;
    // let val= document.getElementById('val').innerHTML;
    let last= document.getElementById('val').innerHTML.slice(-1);
    if(last==='+' || last==='-' || last==='x' || last==='÷' || last==='.'){
    if(check==='+' || check==='-' || check==='x' || check==='÷' || check==='.'){
        // console.log(val.innerHTML);
            val.innerHTML= val.innerHTML.slice(0,-1)+check;
            // val.innerHTML=val.innerHTML.slice(0-1)
        }
        else{
            val.innerHTML+=check;
        }
    }
    else{
        val.innerHTML+=check;
    }
    result();

}
function result(){

    let val=document.getElementById('val').innerHTML;
    let last= document.getElementById('val').innerHTML.slice(-1);
    if(last==='+' || last==='-' || last==='x' || last==='÷' || last==='.'){
        // console.log(last);
        val=val.slice(0,-1);
    }
    val= val.replaceAll('x','*').replaceAll('÷','/');
    let result=eval(val);
    document.getElementById('result').innerHTML=result;

}
function bs(){
    let val=document.getElementById('val');
    let result=document.getElementById('result');
    val.innerHTML=val.innerHTML.slice(0,-1);
    result.innerHTML=val.innerHTML;

    // equal();
    // console.log(val.slice(0,-1));
}


function reset(){
    document.getElementById('val').innerHTML="0";
    document.getElementById('result').innerHTML="0";
}


function equal(){
    let result=document.getElementById('result');
    // result.style.transform="translateY(-50px)";
    let val=document.getElementById('val');
    val.innerHTML=result.innerHTML;
    // result.style.transform="clear";
    result.style.transition="none";
    result.innerHTML="0";
}

window.addEventListener('keydown',(key)=>{
    let value= parseInt(key.key)
    if(typeof value  !=Number)
    {
        console.log(typeof value);
    }
    
})
