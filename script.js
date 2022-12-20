// Add your answer here
var showdesc =  $(".lesson-icon")

$('.text-contents').hide()

showdesc.mouseenter(function(){
    var apear = $(this).next().show('.text-contents')
    showdesc.not(apear).removeclass('.text-contents')

})
showdesc.mouseleave(function(){
    var disapear = $(this).next().hide('.text-contents')
    showdesc.not(disapear).removeclass('.text-contents')
})

