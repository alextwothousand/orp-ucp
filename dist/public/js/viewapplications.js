const modals = [];
let currentlyOpen = null;

console.log("THIS SHOULD BE WORKING")

$(document).ready(() => {
	console.log("DOCUMENT IS REDY");
	$("div.js-modal").each(function (i) {
		console.log("ForEach JS-modal");

		let modal = {
			id: parseInt(/[0-9]+/.exec($(this).attr("id"))),
			applicant: parseInt(/[0-9]+/g.match($(this).attr("id"))[1])
		}

		modals.push(modal);

		console.log("id and applicant parsed: " + modal.id + ", " + modal.applicant);
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

		$(`div#modal-${currentlyOpen.id}-${currentlyOpen.applicant} div.modal`).removeClass("is-active");
		currentlyOpen = null;

		console.log("Modal should now be closed.");
		return true;
	});

	$("button.is-info.is-fullwidth.button").on('click', function (e) {
		e.preventDefault();
		console.log("Delete button clicked");

		if (modals.length === 0) {
			console.log("Modals are empty!");
			return false;
		}

		let parsed = /[0-9]+/g.match($(this).attr("id"));

		let modal = {
			id: parsed[0],
			applicant: parsed[1]
		}

		if (!modals.includes(modal)) {
			console.log("modals does not include this object sir, " + JSON.stringify(modal));
			return false;
		}

		$(`div#modal-${modal.id}-${modal.applicant} div.modal`).addClass("is-active");
		currentlyOpen = modal;

		console.log("Modal should be showing! Current ID: " + id);
		return true;
	});
});