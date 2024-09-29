"use strict";

const newtab = function (href) {
	let a = document.createElement("a");
	a.href = href;
	a.setAttribute("target", "_blank");
	a.click();
	a.remove();
};

const meetupTitle = document.querySelector(".next-meetup__title");
const meetupTime = document.querySelector(".next-meetup__time");
const meetupDate = document.querySelector(".next-meetup__date");
const meetupPlace = document.querySelector(".next-meetup__place");
const meetupLink = document.getElementById("join-meetup");

const fetchMeetupInfo = () =>
	fetch("./upcoming.json")
		.then((response) => response.json())
		.then((meetup) => {
			if (meetup.planned) {
				meetupTitle.textContent = meetup.title;
				meetupTime.textContent = meetup.time;
				meetupDate.textContent = meetup.date;
				meetupPlace.textContent = meetup.place;
				let linkNotReady =
					meetup.link.length <= 0 || meetup.link.includes("meetup.parchlinux");
				meetupLink.textContent = linkNotReady
					? "بزودی لینک قرار خواهد گرفت 🕒"
					: "لینک ورود به جلسه";
				meetupLink.addEventListener("click", () => {
					!linkNotReady
						? (window.location.href = meetup.link)
						: alert("هنوز لینکی برای جلسه آماده نشده. لطفا بعدا بررسی کنید.");
				});
			} else {
				meetupTitle.textContent = "فعلا مشخص نشده";
				meetupTime.textContent = "فعلا مشخص نشده";
				meetupDate.textContent = "فعلا مشخص نشده";
				meetupPlace.textContent = "فعلا مشخص نشده";
				meetupLink.textContent = "بزودی مشخص خواهد شد";
				meetupLink.setAttribute("disabled", "true");
				meetupLink.addEventListener("click", () =>
					alert("هنوز جلسه بعدی مشخص نشده. ⚠️")
				);
				document.querySelector(".next-meetup__details").style.display = "none";
			}
		})
		.catch((err) => {
			console.error(err);
			alert("Error while fetching meetup information. Check the console.");
		});
