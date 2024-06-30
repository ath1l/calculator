function Buttonclick(val){
document.getElementById('screen').value+=val;
}
function allClear(){
    document.getElementById('screen').value='';
}
function equalsTo(){
    let text=document.getElementById('screen').value;
    let result=eval(text);
    document.getElementById('screen').value=result;
    console.log(result);
}
function del(){
    let text=document.getElementById('screen').value;
    result=text.slice(0,-1);
    document.getElementById('screen').value=result;
}
