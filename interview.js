window.onload = function(){ 
var row = prompt("prompt", "");
var col = prompt("prompt", "");

createSquare(row,col);

}

function createSquare(row,col){
for(var i =0;i<row;i++){
	for(var j=0;j<col;j++){
		var square = document.createElement('div');
		square.className = 'square';
		$("#board").append(square);
	}
	$("#board").append("<br>");
}
}

$(document).ready(function(){
$('div').on('click', '.square', function(e) {

	if(this.count === undefined)
		this.count=0;

		if(e.pageY > $(this).offset().top + $(this).outerHeight() - 10){
			$(this).css("border-bottom","10px solid red");
			this.count++;
		}

		if(e.pageY < $(this).offset().top + 10 && e.pageY>$(this).offset().top){
			$(this).css("border-top","10px solid green");
			this.count++;
		} 
		if(e.pageX < $(this).offset().left + 10 && e.pageX>$(this).offset().left){
			$(this).css("border-left","10px solid yellow");
			this.count++;
		}
		
		if(e.pageX > $(this).offset().left + $(this).outerHeight() - 10){
		$(this).css("border-right","10px solid blue");
		this.count++;
		}
		if(this.count >= 4){
			$(this).css("background","black");
		};
});	
	
});
    



