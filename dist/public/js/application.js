$(document).ready(() => {
	if ($("#save, #submit") !== undefined) {
		$("#save, #submit").on("click", function (e) {
			e.preventDefault();
			console.log("save clicked");

			if ($("textarea.textarea").length !== 6 && $("textarea.textarea").length !== 1) return console.log("textarea length is not 6 or 1, its " + $("textarea.textarea").length);

			const answers = [];

			$("textarea.textarea").each(function (i) {
				answers.push($(this).val());
			});

			let action = 0;

			if ($(this).attr("id") === "submit") {
				action = 1;
			} else if ($(this).attr("id") === "save") {
				action = 2;
			}

			$.post(window.location.pathname, { charname: $("input.input").val(), answers: answers, action: action },
				function (data, textStatus, jqXHR) {
					if (action === false) alert("Your answers have been saved successfully!");
					return jqXHR.status;
				}
			);

			return;
		});
	}
});