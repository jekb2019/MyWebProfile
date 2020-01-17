var Body = {
  dayNightMode:function(self){
    var bodyTag = document.querySelector('body');
    if(self.value === 'Night mode'){
      bodyTag.style.backgroundColor = 'black';
      bodyTag.style.color = 'white';
      self.value = 'Day mode';
      Link.setColor('powderblue');
    }else{
      bodyTag.style.backgroundColor = 'white';
      bodyTag.style.color = 'black';
      self.value = 'Night mode';
      Link.setColor('blue');
    }
  }
}

var Link = {
  setColor:function(color){
    var alist = document.querySelectorAll('a');
    var i=0;
    while(i < alist.length){
      alist[i].style.color = color;
      i++;
    }
  }
}
