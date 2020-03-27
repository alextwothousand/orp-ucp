const modals = [];
let currentlyOpen = null;

console.log("THIS SHOULD BE WORKING")

$(document).ready(() => {
	console.log("DOCUMENT IS REDY");
	$("div.js-modal").each(function (i) {
		console.log("ForEach JS-modal");

		modals.push(parseInt(/[0-9]+/.exec($(this).attr("id"))));

		console.log("id p'arsed': " + parseInt(/[0-9]+/.exec($(this).attr("id"))));
		console.log("raw id: " + $(this).attr("id"));

		$(this).removeAttr("class");
	});

	$("button.delete, button.is-primary#cancel").on('click', function (e) {
		e.preventDefault();

		if (modals.length === 0) {
			console.log("Modals are empty!");
			return false;
		}

		if (currentlyOpen === null) {
			return false;
		}

		$(`div#modal-${currentlyOpen} div.modal`).removeClass("is-active");
		currentlyOpen = null;

		console.log("Modal should now be closed.");
		return true;
	});

	$("button.is-danger.is-fullwidth.button").on('click', function (e) {
		e.preventDefault();
		console.log("Delete button clicked");

		if (modals.length === 0) {
			console.log("Modals are empty!");
			return false;
		}

		let id = parseInt(atob($(this).attr("id")));

		if (!modals.includes(id)) {
			console.log("modals does not include this id sir, " + id);
			return false;
		}

		$(`div#modal-${id} div.modal`).addClass("is-active");
		currentlyOpen = id;

		console.log("Modal should be showing! Current ID: " + id);
		return true;
	});
});