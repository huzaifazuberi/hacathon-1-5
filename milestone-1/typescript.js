// Function to collect data from the form
function collectFormData() {
    var name = document.getElementById("name").value;
    var profession = document.getElementById("profession").value;
    var about = document.getElementById("about").value;
    var contact = document.getElementById("contact").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value.split(",").map(function (s) { return s.trim(); });
    var interests = document.getElementById("interests").value.split(",").map(function (i) { return i.trim(); });
    return { name: name, profession: profession, about: about, contact: contact, email: email, education: education, skills: skills, interests: interests };
}
// Function to update resume display
function updateResume(data) {
    document.getElementById("displayName").textContent = data.name || "Your Name";
    document.getElementById("displayProfession").textContent = data.profession || "Your Profession";
    document.getElementById("displayAbout").textContent = data.about || "Your description here...";
    document.getElementById("displayContact").textContent = data.contact || "Your Contact";
    document.getElementById("displayEmail").textContent = data.email || "Your Email";
    document.getElementById("displayEducation").textContent = data.education || "Your Education Information";
    updateList("displaySkills", data.skills);
    updateList("displayInterests", data.interests);
}
// Function to update the lists (skills, interests)
function updateList(elementId, items) {
    var element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear previous list items
    items.forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item;
        element.appendChild(li);
    });
}
// Function to handle form submission and update resume
function updateResumeFromForm() {
    var formData = collectFormData();
    updateResume(formData);
}
// Attach event listener to the "Generate Resume" button
var generateResumeButton = document.querySelector("button[type='button']");
generateResumeButton.addEventListener("click", updateResumeFromForm);
