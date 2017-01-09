/*$(function(){
 $('#search').on('keyup', function(e){
   if(e.keyCode === 13) {
     var parameters = { search: $(this).val() };
       $.get( '/searching',parameters, function(data) {
       $('#results').html(data);
     });
    };
 });
});*/
$(function(){
	$('#search').on('keyup', function(e){
		if(e.keyCode === 13) {
		$.ajax({
		  'url': 'http://apis.is/car',
		  'type': 'GET',
		  'dataType': 'json',
		  'data': {'number': $(this).val() },
		  'success': function(data) {
		    console.log(data.results[0]);
		    $('#results').html("Númer: "+data.results[0].number);
		    $('#type').html("Tegund: "+data.results[0].type);
		    $('#weight').html("Þyngd: "+data.results[0].weight);
		    $('#pollution').html("Mengun: "+data.results[0].pollution);

		    //$('#results').html(JSON.stringify(data));
			/*var table = $("<table/>").attr("id","carTable");
		    $('#result').append(table);
		    for(var i=0;i<data.results[0].length;i++)
		    {
				var tr="<tr>";
				var td1="<td>"+data[i]["number"]+"</td>";
				var td2="<td>"+data[i]["type"]+"</td>";
				var td3="<td>"+data[i]["weight"]+"</td></tr>";

				$("#carTable").append(tr+td1+td2+td3);
		    }*/

		  },
		  'error': $('#results').html('Þetta númer er ekki á skrá!')

		});
		};
	});
});
