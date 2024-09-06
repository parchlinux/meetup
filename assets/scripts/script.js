"use strict";

const meetupTitle = document.querySelector(".next-meetup__title");
const meetupTime = document.querySelector(".next-meetup__time");
const meetupDate = document.querySelector(".next-meetup__date");
const meetupPlace = document.querySelector(".next-meetup__place");
const meetupLink = document.getElementById("join-meetup");

fetch("./status.json")
	.then((response) => response.json())
	.then((meetup) => {
		if (meetup.planned) {
			meetupTitle.textContent = meetup.title;
			meetupTime.textContent = meetup.time;
			meetupDate.textContent = meetup.date;
			meetupPlace.textContent = meetup.place;
			meetupLink.textContent = "لینک ورود به جلسه";
			meetupLink.addEventListener("click", () => location.replace(meetup.link));
		} else {
			meetupTitle.textContent = "فعلا مشخص نشده";
			meetupTime.textContent = "فعلا مشخص نشده";
			meetupDate.textContent = "فعلا مشخص نشده";
			meetupPlace.textContent = "فعلا مشخص نشده";
			meetupLink.textContent = "بزودی مشخص خواهد شد";
			meetupLink.addEventListener("click", () =>
				alert("هنوز جلسه بعدی مشخص نشده. ⚠️")
			);
			document.querySelector(".next-meetup__details").style.display = "none";
		}
	})
	.catch((err) => console.error(err));

const newtab = function (href) {
	let a = document.createElement("a");
	a.href = href;
	a.setAttribute("target", "_blank");
	a.click();
	a.remove();
};
