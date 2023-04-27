"use strict"

const form = document.getElementById("login-form");
		form.addEventListener("submit", function(event) {
			event.preventDefault();
			const login = document.getElementById("login-input").value;
			const user = getUserInfo(login);
			if (user) {
				document.getElementById("user-surname").innerText = user.surname;
				document.getElementById("user-name").innerText = user.name;
				document.getElementById("user-year").innerText = user.year;
				document.getElementById("user-group").innerText = user.group;
				document.getElementById("user-info").style.display = "block";
			} else {
				alert("Користувача з таким логіном не знайдено.");
			}
		});

		function getUserInfo(login) {
			// Отримати інформацію про користувача з бази даних або з іншого джерела даних
			// В цьому прикладі ми створимо об'єкт з інформацією про користувача на місці
			const users = [
				{login: "is-13fiot-21-190", surname: "Росновська", name: "Ольга", year: 2, group: "ІС-13"},
				{login: "ik-55fiot-5-171", surname: "Дащенко", name: "Анна", year: 2, group: "ІК-55"},
				{login: "keek-9fmm-28-190", surname: "Яхно", name: "Евгенія", year: 3, group: "КЕЕК-9"}
			];
			const user = users.find(u => u.login === login);
			return user;
		}