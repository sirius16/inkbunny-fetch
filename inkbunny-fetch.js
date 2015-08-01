var URL = window.location.href;
end = /page=\d+/;


$.ajaxSetup({
	async : false
});


hi = [];


var pages = $("[title*='final page']")[0].href.match(/\d+/g).last();


for (i = 1; i < eval(pages) + 1; i++) {
	jQuery.ajax({
		url : URL.replace(end, "page=" + i),
		success : function (result) {
			var $result = eval($(result));
			$result.find("a[href*=submissionview]").map(function (i, j) {
				return hi.push(j.href);
			});
		},
		async : false,
		script : true
	});
}


var obj = $('<textarea />');
$("body").append(obj);
var hello = hi.join("\n");
console.clear();
console.log(hello);
obj.select().focus();
alert(hi.length);
