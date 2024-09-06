"use strict";

const meetingLink = false;
// اگر لینک جلسه آماده بود، این متغیر باید برابر True شود
const meetingLinkAddress = "https://meetup.parchlinux.com";
// لینک جلسه اینجا وارد شود
const meetingTitle = "دورهمی روز آزادی نرم‌افزار";

const newtab = function (href) {
	let a = document.createElement("a");
	a.href = href;
	a.setAttribute("target", "_blank");
	a.click();
	a.remove();
};

if (meetingLink) {
	document.querySelectorAll(".next-meeting-link").forEach((link) => {
		link.addEventListener("click", () => location.replace(meetingLinkAddress));
	});
	document.querySelector(".next-meetup__title").textContent = meetingTitle;
} else {
	document.querySelectorAll(".next-meeting-link").forEach((link) => {
		link.textContent = "لینک جلسه جدید به زودی قرار می‌گیرد. 🕒";
		link.addEventListener("click", () =>
			alert("هنوز هیچ لینکی برای این جلسه آماده نشده. ⚠️")
		);
	});
}
