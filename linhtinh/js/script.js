$(document).ready(function(){
	function sumFix() {
		var expenses = $('.fix');
		var expenseTotal = $('#fix_sum');
		var sum = 0;
		$.each(expenses, function (index, object) {
			sum = sum + parseInt($(object).html().replace(/,/g, ''));
		})
		expenseTotal.html("Cố định: " +sum);
	}
	function fillNo () {
		var table = document.getElementById('table');
		for (var i = 4, row; row = table.rows[i]; i++) {
			$(row.cells[0]).html(i-3);
		}

	}
	function Sum_daily () {
		var table = document.getElementById('table');
		var preRow = 4;
		var sum = 0;
		var total = 0;
		var days = 0;
		for (var i = 4, row; row = table.rows[i]; i++) {
			total = total + parseInt($(row.cells[3]).html().replace(/,/g, ''));
			if (row.cells[1].innerHTML != '-') {
				preRow = i;
				sum = parseInt($(row.cells[3]).html().replace(/,/g, ''));
				days++;
			} else {
				sum = sum + parseInt($(row.cells[3]).html().replace(/,/g, ''));
			}
			$(table.rows[preRow].cells[4]).html(sum);
		}
		$(table.rows[0].cells[1]).html("Days: " + days);
		$(table.rows[0].cells[2]).html("Average: " + (total/days).toFixed(2));
		$(table.rows[0].cells[3]).html("Sum: " + total);
	}
	function sumFloat() {
		var total = $('#total');
		var fixSum = $('#fix_sum');
		var floatSum = $('#float_sum');
		var value = parseInt(total.html().replace("Sum: ", ''))
		- parseInt(fixSum.html().replace("Cố định: ", ''));
		floatSum.html("Di động: " + value);
		var avr_dyn = (value/parseInt($('#days').html().replace("Days: ", ''))).toFixed(2);
		$('#avr_dyn').html("TB di động: "+ avr_dyn);
		$('#duTru30').html("Dự trù (30ngày):" + (avr_dyn * 30 + parseInt(fixSum.html().replace("Cố định: ", ''))).toFixed(2));
		$('#duTru31').html("Dự trù (31ngày):" + (avr_dyn * 31 + parseInt(fixSum.html().replace("Cố định: ", ''))).toFixed(2));

	}
	fillNo ();
	sumFix();
	Sum_daily ();
	sumFloat();
});
