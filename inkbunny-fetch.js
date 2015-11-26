var URL = window.location.href;
end = /page=\d+/;

$j.ajaxSetup({
	async : false
});

hi = [];

var pages = $j("[title*='final page']")[0].href.match(/\d+/g).last();

for (i = 1; i < eval(pages) + 1; i++) {
	$j.ajax({
		url : URL.replace(end, "page=" + i),
		success : function (result) {
			var $result = eval($j(result));
			$result.find("a[href*=submissionview]").map(function (i, j) {
				console.log(hi.length);
				return hi.push(j.href);
			});
		},
		async : false,
		script : true
	});
}
hello = hi.reverse().join("%0A");
date = new Date();
date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
time = date.toJSON().replace(/T|\..*/g, " ").replace(/:/g, "-").trim();
var link = document.createElement('a');
link.download = "Inkbunny " + time + ".txt";
link.href = 'data:,' + hello;
link.click()
alert(hi.length);
