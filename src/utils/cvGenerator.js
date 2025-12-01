// ATS-Friendly CV Generator
export const generateATSFriendlyCV = () => {
  const cvData = {
    name: "Ridu Krishna",
    title: "Frontend Developer",
    contact: {
      email: "ridu3668@gmail.com",
      phone: "+91 8139008554",
      location: "Kozhikode, Kerala, India",
      linkedin: "linkedin.com/in/ridukrishna",
      github: "github.com/ridukrishna"
    },
    summary: "Frontend Developer with 2+ years of experience specializing in React.js and React Native Expo. Proven track record in building cross-platform mobile applications serving 500+ users. Expert in state management, RESTful API integration, and creating seamless user experiences.",
    
    experience: [
      {
        title: "Frontend Developer",
        company: "Current Company",
        period: "2022 - Present",
        achievements: [
          "Developed HR Connect mobile application serving 500+ employees with real-time task management",
          "Implemented push notifications and interactive engagement features",
          "Built 50+ RESTful API endpoints for seamless data integration",
          "Created 15+ custom reusable components improving development efficiency"
        ]
      }
    ],
    
    skills: {
      frontend: ["React.js", "React Native", "Expo", "JavaScript", "HTML5", "CSS3"],
      mobile: ["React Native Expo", "Mobile App Development", "Cross-platform Development"],
      backend: ["RESTful APIs", "Firebase", "Node.js"],
      tools: ["Git", "VS Code", "npm", "Postman"],
      other: ["State Management", "Push Notifications", "Responsive Design", "Agile Methodology"]
    },
    
    projects: [
      {
        name: "HR Connect Mobile App",
        description: "Enterprise mobile application for employee management",
        technologies: ["React Native", "Expo", "Firebase"],
        highlights: [
          "500+ active users",
          "Real-time task management",
          "Push notification system"
        ]
      }
    ],
    
    education: [
      {
        degree: "Bachelor's Degree",
        field: "Computer Science / Related Field",
        year: "Year"
      }
    ]
  };

  return cvData;
};

// Generate plain text ATS-friendly CV
export const generatePlainTextCV = () => {
  const cv = generateATSFriendlyCV();
  
  let plainText = `${cv.name.toUpperCase()}\n`;
  plainText += `${cv.title}\n`;
  plainText += `${'='.repeat(60)}\n\n`;
  
  plainText += `CONTACT INFORMATION\n`;
  plainText += `Email: ${cv.contact.email}\n`;
  plainText += `Phone: ${cv.contact.phone}\n`;
  plainText += `Location: ${cv.contact.location}\n`;
  plainText += `LinkedIn: ${cv.contact.linkedin}\n`;
  plainText += `GitHub: ${cv.contact.github}\n\n`;
  
  plainText += `PROFESSIONAL SUMMARY\n`;
  plainText += `${cv.summary}\n\n`;
  
  plainText += `PROFESSIONAL EXPERIENCE\n`;
  cv.experience.forEach(exp => {
    plainText += `\n${exp.title} | ${exp.company}\n`;
    plainText += `${exp.period}\n`;
    exp.achievements.forEach(achievement => {
      plainText += `- ${achievement}\n`;
    });
  });
  
  plainText += `\nTECHNICAL SKILLS\n`;
  plainText += `Frontend: ${cv.skills.frontend.join(', ')}\n`;
  plainText += `Mobile Development: ${cv.skills.mobile.join(', ')}\n`;
  plainText += `Backend & APIs: ${cv.skills.backend.join(', ')}\n`;
  plainText += `Tools: ${cv.skills.tools.join(', ')}\n`;
  plainText += `Other: ${cv.skills.other.join(', ')}\n`;
  
  plainText += `\nKEY PROJECTS\n`;
  cv.projects.forEach(project => {
    plainText += `\n${project.name}\n`;
    plainText += `${project.description}\n`;
    plainText += `Technologies: ${project.technologies.join(', ')}\n`;
    project.highlights.forEach(highlight => {
      plainText += `- ${highlight}\n`;
    });
  });
  
  plainText += `\nEDUCATION\n`;
  cv.education.forEach(edu => {
    plainText += `${edu.degree} - ${edu.field}\n`;
    plainText += `${edu.year}\n`;
  });
  
  return plainText;
};

// Download CV as text file (ATS-friendly)
export const downloadCV = () => {
  const cvText = generatePlainTextCV();
  const blob = new Blob([cvText], { type: 'text/plain' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Ridu_Krishna_CV_ATS.txt';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};

// Alternative: Download as PDF-like HTML (still ATS-friendly)
export const downloadCVAsHTML = () => {
  const cv = generateATSFriendlyCV();
  
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${cv.name} - CV</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1 { font-size: 28px; margin-bottom: 5px; }
        h2 { font-size: 20px; border-bottom: 2px solid #333; padding-bottom: 5px; margin-top: 20px; }
        h3 { font-size: 16px; margin-bottom: 5px; }
        .contact { margin-bottom: 20px; }
        .contact p { margin: 3px 0; }
        ul { margin: 10px 0; padding-left: 20px; }
        li { margin: 5px 0; }
        .skills-list { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-category { margin: 10px 0; }
    </style>
</head>
<body>
    <h1>${cv.name}</h1>
    <p><strong>${cv.title}</strong></p>
    
    <div class="contact">
        <p>Email: ${cv.contact.email}</p>
        <p>Phone: ${cv.contact.phone}</p>
        <p>Location: ${cv.contact.location}</p>
        <p>LinkedIn: ${cv.contact.linkedin}</p>
        <p>GitHub: ${cv.contact.github}</p>
    </div>
    
    <h2>Professional Summary</h2>
    <p>${cv.summary}</p>
    
    <h2>Professional Experience</h2>
    ${cv.experience.map(exp => `
        <h3>${exp.title} | ${exp.company}</h3>
        <p><em>${exp.period}</em></p>
        <ul>
            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
    `).join('')}
    
    <h2>Technical Skills</h2>
    <div class="skill-category"><strong>Frontend:</strong> ${cv.skills.frontend.join(', ')}</div>
    <div class="skill-category"><strong>Mobile Development:</strong> ${cv.skills.mobile.join(', ')}</div>
    <div class="skill-category"><strong>Backend & APIs:</strong> ${cv.skills.backend.join(', ')}</div>
    <div class="skill-category"><strong>Tools:</strong> ${cv.skills.tools.join(', ')}</div>
    <div class="skill-category"><strong>Other:</strong> ${cv.skills.other.join(', ')}</div>
    
    <h2>Key Projects</h2>
    ${cv.projects.map(project => `
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
        <ul>
            ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
    `).join('')}
    
    <h2>Education</h2>
    ${cv.education.map(edu => `
        <p><strong>${edu.degree}</strong> - ${edu.field}</p>
        <p>${edu.year}</p>
    `).join('')}
</body>
</html>
  `;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Ridu_Krishna_CV.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
