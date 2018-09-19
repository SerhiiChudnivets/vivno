
$(document).ready(function(){
	
	 $("#slider").slider({
		 min: 1,
		 max: 24,
		 values: [6,8],
		 range: true
	 });
	 
	 $("#slider").slider({
		min: 1,
		max: 24,
		values: [6,8],
		range: true,
		stop: function(event, ui) {
			$("input#minCost2").val($("#slider").slider("values",0));
			$("input#maxCost2").val($("#slider").slider("values",1));
			$("input#minCost").val($("#slider").slider("values",0));
			$("input#maxCost").val($("#slider").slider("values",1));
			$("#range-min").val($("#slider").slider("values",0));
			$("#range-max").val($("#slider").slider("values",1));


		},
		slide: function(event, ui){
			$("input#minCost2").val($("#slider").slider("values",0));
			$("input#maxCost2").val($("#slider").slider("values",1));
			$("input#minCost").val($("#slider").slider("values",0));
			$("input#maxCost").val($("#slider").slider("values",1));
			$("#range-min").val($("#slider").slider("values",0));
			$("#range-max").val($("#slider").slider("values",1));
		}

	 });
	
	 $("input#minCost2").change(function(){
		var value1=$("input#minCost2").val();
		var value2=$("input#maxCost2").val();

		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#minCost2").val(value1);
			$("input#minCost").val(value1);
			$("#range-min").val(value1);


		}
		$("#slider").slider("values",0,value1);	
	 });

		
	 $("input#maxCost2").change(function(){
		var value1=$("input#minCost2").val();
		var value2=$("input#maxCost2").val();
		
		if (value2 > 24) { value2 = 24; $("input#maxCost2").val(24); $("input#maxCost").val(24)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#maxCost2").val(value2);
			$("input#maxCost").val(value2);
			$("#range-max").val(value2);


		}
		$("#slider").slider("values",1,value2);
	 });

	

	 
	 
});