let btn = document.getElementById('myBtn');

btn.addEventListener('click', function(){
    alert('버튼이 클릭되었습니다.')
})

let parent = document.getElementById('parent')
let child = document.getElementById('child')

parent.addEventListener('click', function(){
    this.alert('부모요소 클릭');
})

child.addEventListener('click', function(){
    this.alert('자식요소 클릭');
})

window.addEventListener('click', function(event){
    console.log('마우스를 클릭했습니다.' + event.clientX + ', ' + event.clientY)
})

