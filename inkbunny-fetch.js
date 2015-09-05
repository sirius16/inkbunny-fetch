var URL = window.location.href;
end = /page=\d+/;

$j.ajaxSetup({
	async : false
});

hi = [];

var pages = $j("[title*='final page']")[0].href.match(/\d+/g).last();

for (i = 1; i < eval(pages) + 1; i++) {
	jQuery.ajax({
		url : URL.replace(end, "page=" + i),
		success : function (result) {
			var $result = eval($j(result));
			$result.find("a[href*=submissionview]").map(function (i, j) {
				return hi.push(j.href);
			});
		},
		async : false,
		script : true
	});
}

hello = hi.reverse().join("\n");
var obj = $j("<textarea />").text(hello);
$j("body").append(obj);
obj.select().focus();
alert(hi.length);
