var URL = window.location.href;
end = /page=\d+/;
$.ajaxSetup({
	async: false
});

var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(script);
var pages = $("[title*='final page']")[0].href.match(/\d+/g).last();
for (i = 1; i < eval(pages) + 1; i++) {
	jQuery.ajax({
		url: URL.replace(end, "page=" + i),
		success: function (result) {
			var $result = eval($(result));
			$result.find("a[href*=submissionview]").map(function (i, j) {
				return hi.push(j.href);
			});
		},
		async: false,
		script: true
	});
}
for (i of hi) {
	hello += i + "\n"
}
console.clear();
console.log(hello);
