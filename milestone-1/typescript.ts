// Define interfaces for user input
interface ResumeData {
    name: string;
    profession: string;
    about: string;
    contact: string;
    email: string;
    education: string;
    skills: string[];
    interests: string[];
  }
  
  // Function to collect data from the form
  function collectFormData(): ResumeData {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const profession = (document.getElementById("profession") as HTMLInputElement).value;
    const about = (document.getElementById("about") as HTMLTextAreaElement).value;
    const contact = (document.getElementById("contact") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value.split(",").map(s => s.trim());
    const interests = (document.getElementById("interests") as HTMLInputElement).value.split(",").map(i => i.trim());
  
    return { name, profession, about, contact, email, education, skills, interests };
  }
  
  // Function to update resume display
  function updateResume(data: ResumeData): void {
    document.getElementById("displayName")!.textContent = data.name || "Your Name";
    document.getElementById("displayProfession")!.textContent = data.profession || "Your Profession";
    document.getElementById("displayAbout")!.textContent = data.about || "Your description here...";
    document.getElementById("displayContact")!.textContent = data.contact || "Your Contact";
    document.getElementById("displayEmail")!.textContent = data.email || "Your Email";
    document.getElementById("displayEducation")!.textContent = data.education || "Your Education Information";
    
    updateList("displaySkills", data.skills);
    updateList("displayInterests", data.interests);
  }
  
  // Function to update the lists (skills, interests)
  function updateList(elementId: string, items: string[]): void {
    const element = document.getElementById(elementId)!;
    element.innerHTML = "";  // Clear previous list items
  
    items.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      element.appendChild(li);
    });
  }
  
  // Function to handle form submission and update resume
  function updateResumeFromForm(): void {
    const formData = collectFormData();
    updateResume(formData);
  }
  
  // Attach event listener to the "Generate Resume" button
  const generateResumeButton = document.querySelector("button[type='button']")!;
  generateResumeButton.addEventListener("click", updateResumeFromForm);
  