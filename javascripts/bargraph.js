var activeTabName;

$(document).ready(function(){
	drawBarGraph(3000);
	
	$(window).on('resize', function(){
		drawBarGraph(100);
	})
	
	$('.nav-tabs a').on('shown.bs.tab', function(event){
		activeTabName = $(event.target).text();
		drawBarGraph(3000);
	})
});

function drawBarGraph(pTime){
	if (activeTabName == "Ante-diluvianos")
	{
		$('.ant').each(function(){
			var prop = 1000 / $(this).width();
			prop = prop < 1 ? 1 : prop;
                        var nSize = $(this).attr('data-percent') / prop;
			$(this).find('.skillbar-bar').animate({
				width: nSize
			}, pTime);
		});
	} 
	else 
	{
		if (activeTabName == "Pós-diluvianos")
		{
			$('.pos').each(function(){
				var prop = 1000 / $(this).width();
                                prop = prop < 1 ? 1 : prop;
				var nSize = $(this).attr('data-percent') / prop;
				$(this).find('.skillbar-bar').animate({
					width: nSize
				}, pTime);
			});
		}
		else
		{
			$('.skillbar').each(function(){
				var prop = 1000 / $(this).width();
                                prop = prop < 1 ? 1 : prop;
				var nSize = $(this).attr('data-percent') / prop;
				$(this).find('.skillbar-bar').animate({
					width: nSize
				}, pTime);
			});
		}
	}
}