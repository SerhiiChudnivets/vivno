var hideNights = true;
const mouselog = (event)=>{
if (event.type=="mouseover"){
    $('.nights').css('display','block');
    $('#from-fade').slideUp('fast');
    $('#to-fade').slideUp('fast');
    $('.bird-range').css('transform','rotate(180deg)');
    hideNights = false;
}
if (event.type=="mouseout"){
    $('.bird-range').css('transform','rotate(360deg)');
    hideNights = true;
    window.setTimeout(function() {
        if (hideNights) {
            $('.nights').css('display','none');
        }
    }, 1000);
}
}
const mouseclick = ()=>{
    $('#from-fade').slideUp('fast');
    $('#to-fade').slideToggle('slow');
}
$('.body-option').click(function(){
    $('#to').text(this.firstElementChild.textContent);
    $('#inp-to').val(this.firstElementChild.textContent);
})
const mouseclickfrom = ()=>{
    $('.bird').toggleClass('transform-bird');
    $('#to-fade').slideUp('fast');
    $('#from-fade').slideToggle('slow');
}
$('.body-town').click(function(){
   $('#from').text(this.textContent);
   $('#inp-from').val(this.textContent);
})