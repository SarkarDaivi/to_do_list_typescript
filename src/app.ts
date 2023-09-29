
const arr: number[] & string[] & never[] = [];
const text = document.getElementById("write") as HTMLInputElement;
const btn = document.getElementById("btn")as HTMLButtonElement;
const ul = document.getElementById("opt") as HTMLUListElement;





function add_rem():void{
   
    const list : number|string|boolean = text.value;
   (list === "")?alert("oops, It is blank"):createList(list);
        text.value="";
        text.placeholder = "type here";
    }

    


function createList(list_item){
    const check = document.createElement('input');
    check.setAttribute('name', 'checked') ;
    check.setAttribute("type","checkbox");
    check.setAttribute("class","list");

    
    
    const ulist = document.createElement('li');
    ulist.setAttribute("class","list_item");
    ulist.textContent = list_item;
    
    document.getElementById("opt")?.appendChild(check);
    document.getElementById("opt")?.appendChild(ulist);

   
   
    check.addEventListener("change",remove);
    arr.push(list_item);
 }
 
 const check_box = document.getElementsByTagName("input");
 const list_items = document.getElementsByTagName("li");
  
function remove():void{

    
    
    for(let i=0 ;i<(check_box.length) ;i++) {
        if((check_box[i]).checked == true ){

            

           
            console.log(list_items[i-1].textContent);
            list_items[i-1].remove();
            // remove the corresponding input element
            check_box[i].remove(); 
        
            
        }
    }
    
}




btn.addEventListener("click",add_rem);





