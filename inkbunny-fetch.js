var URL = window.location.href;
end = /page=\d+/;

$j.ajaxSetup({
	async : false
});

hi = [];

var pages = $j("span").filter((i,j)=>j.innerText.match(/page \d+ of \d+/)).text().match(/\d+/g).last();

for (i = 1; i < parseInt(pages) + 1; i++) {
	$j.get(URL.replace(end, "page=" + i), function (result) {
		var $result = $j(result);
		$result.find(".widget_thumbnailHugeCompleteFromSubmission  a[href*=submissionview]").map(function (i, j) {
			console.log(hi.length);
			return hi.push(j.href);
		});
	})
};
hello = hi.reverse().join("%0A");
date = new Date();
date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
time = date.toJSON().replace(/T|\..*/g, " ").replace(/:/g, "-").trim();
var link = document.createElement('a');
link.download = "Inkbunny " + time + ".txt";
link.href = 'data:,' + hello;
link.click();
alert(hi.length);