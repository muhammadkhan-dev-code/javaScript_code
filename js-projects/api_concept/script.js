const request_url = "https://api.github.com/users/muhammadkhan"

const avatarEl = document.getElementById("profile-avatar");
const nameEl = document.getElementById("profile-name");
const usernameEl = document.getElementById("profile-username");
const followersEl = document.getElementById("profile-followers");
const followingEl = document.getElementById("profile-following");
const reposEl = document.getElementById("profile-repos");
const bioEl = document.getElementById("profile-bio");
const locationEl = document.getElementById("profile-location");
const companyEl = document.getElementById("profile-company");

const formatValue = (value, fallback = "Not available") => {
	if (value === null || value === undefined || value === "") {
		return fallback;
	}
	return value;
};

const renderProfile = (profile) => {
	avatarEl.src = profile.avatar_url;
	avatarEl.alt = profile.name ? `${profile.name} avatar` : "Profile avatar";
	nameEl.textContent = formatValue(profile.name, profile.login);
	usernameEl.textContent = `@${profile.login}`;
	followersEl.textContent = profile.followers ?? 0;
	followingEl.textContent = profile.following ?? 0;
	reposEl.textContent = profile.public_repos ?? 0;
	bioEl.textContent = formatValue(profile.bio);
	locationEl.textContent = formatValue(profile.location);
	companyEl.textContent = formatValue(profile.company);
};

const loadProfile = async () => {
	try {
		const response = await fetch(request_url);
		if (!response.ok) {
			throw new Error(`Request failed: ${response.status}`);
		}
		const profile = await response.json();
		renderProfile(profile);
	} catch (error) {
		console.error("Failed to load profile:", error);
		nameEl.textContent = "Unable to load profile";
		usernameEl.textContent = "";
		bioEl.textContent = "Please check the network or API limit.";
		locationEl.textContent = "Not available";
		companyEl.textContent = "Not available";
	}
};

loadProfile();

// const request_url="https://api.github.com/users/muhammadkhan"
// const xhr= new XMLHttpRequest()
// xhr.open('GET',request_url)
// xhr.onreadystatechange=function(){
//     console.log(xhr.readyState);
//     if(xhr.readyState===4){
//         const data=JSON.parse(this.responseText)

//     console.log(data.followers);   
// }
// }
// xhr.send()