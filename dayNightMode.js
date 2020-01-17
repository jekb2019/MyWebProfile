var Body = {
  setBackgroundColor:function(color){
    $('body').css('backgroundColor', color);
    // document.querySelector('body').style.backgroundColor = color;
  }

  setColor:function(color){
    $('body').css('color', color);
    // document.querySelector('body').style.color = color;
  }
}

var Link = {
  setColor:function(color){

    $('a').css('color',color);
    // var alist = document.querySelectorAll('a');
    // var i=0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i++;
    // }
  }
}

function dayNightMode(self){
  var bodyTag = document.querySelector('body');
  if(self.value === 'Night mode'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Link.setColor('powderblue');
    self.value = 'Day mode';
  }else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    Link.setColor('blue');
    self.value = 'Night mode';
}
