function loadEmail(emailId) {
    const emailContent = {
      email1: "<h2>Project Update</h2><p>This is the content of the project update email...</p>",
      email2: "<h2>Newsletter Design1</h2><p>This is the content of the newsletter design email...</p>",
      email3: "<h2>Newsletterrrr Design2</h2><p>This is the content of the newsletter design email...</p>",

      // Add more email content as needed
    };
    
    document.getElementById("email-content").innerHTML = emailContent[emailId] || "Email not found.";
  }
  