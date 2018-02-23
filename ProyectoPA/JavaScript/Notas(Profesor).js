
var div = document.getElementsByClassName('dropdown-menu');

  for(var  i =0;i<div.length;i++){

  for(var  j =0;j<div[i].children.length;j++){

   div[i].children[j].addEventListener('click',function(){

     this.parentNode.previousElementSibling.innerHTML = this.innerHTML;
   })
  }
  }
