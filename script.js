
var requests_no= document.querySelector(".req_no");
var connections_no= document.querySelector(".con_no");
var to_be_removed1= document.querySelector(".row2");
var to_be_removed2= document.querySelector(".row3");
var count_req=2;
var count_connections=418;
function Change_name(){
    var element = document.querySelector("#user_name");
    var img_element=  document.querySelector(".newpic");
    element.innerText="Ali Z"
    img_element.src="icons/pic.png"
    }
function acc_remove2(){
    to_be_removed2.remove();
    count_req--;
    count_connections++;
    requests_no.innerText=count_req;
    connections_no.innerText=count_connections;



}
function close_remove2(){
    to_be_removed2.remove();
    count_req--;
    count_connections++;
    requests_no.innerText=count_req;

}
function acc_remove1(){
    to_be_removed1.remove();
    count_req--;
    count_connections++;
    requests_no.innerText=count_req;
    connections_no.innerText=count_connections;

}
function close_remove1(){
    to_be_removed1.remove();
    count_req--;
    count_connections++;
    requests_no.innerText=count_req;

}