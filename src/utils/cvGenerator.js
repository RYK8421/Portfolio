import jsPDF from 'jspdf';

// ATS-Friendly CV Generator
export const generateATSFriendlyCV = () => {
  const cvData = {
    name: "Ridu Krishna C",
    title: "Frontend Developer (React.js | React Native | Electron)",
    openTo: "Open to Frontend Developer | React Developer | React Native roles",
    contact: {
      email: "ridu3668@gmail.com",
      phone: "+91 8139008554",
      location: "Kozhikode, Kerala 673012",
      linkedin: "https://www.linkedin.com/in/ridu-krishna-c-511079185/",
      github: "https://github.com/ridukrishna"
    },
    summary: "Frontend Developer with 1.5+ years of experience building scalable applications across web, mobile, and desktop using React.js, React Native, and Electron. I enjoy creating responsive, user-friendly interfaces and have hands-on experience working with REST APIs, real-time features, and performance optimization. I’m comfortable working with JavaScript and TypeScript, using modern React practices like Hooks and state management (Context API/Redux). I also have a basic understanding of backend technologies such as Node.js and Django, and I’m experienced with Git workflows, debugging, and collaborating in Agile teams.",
    
    experience: [
      {
        title: "React Native Developer (Expo)",
        company: "Impetors",
        period: "2024 - Present",
        environment: "Agile/Scrum methodology with Git-based version control",
        achievements: [
          "Architected and developed HR Connect mobile application using React Native and Expo (SPA architecture), serving 100+ active users with 99% uptime",
          "Built cross-platform mobile solutions using React Native and Expo, delivering comprehensive HR management functionalities",
          "Developed real-time chat system with typing indicators, read receipts, and online presence tracking",
          "Implemented multimedia sharing and social engagement features with emoji reactions and threaded comments",
          "Integrated push notification system via RESTful APIs, improving user engagement by 45%",
          "Integrated 50+ RESTful API endpoints with JWT authentication, error handling, and data validation",
          "Built reusable UI components library with 15+ custom React Native components, accelerating development by 40%",
          "Optimized application performance using React Native tools, reducing task completion time by 30%",
          "Implemented state management using Context API and Redux-ready architecture for scalable frontend applications"
        ]
      }
    ],
    
    skills: {
      frontend: ["React.js", "React Native", "Expo SDK", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Responsive Web Design", "Single Page Applications (SPA)"],
      stateManagement: ["Context API", "Redux", "Component-Based Architecture"],
      mobile: ["React Native Development", "Expo CLI", "React Navigation", "Async Storage", "Mobile UI/UX"],
      backend: ["RESTful APIs", "Firebase", "Firestore", "Node.js", "Python Django", "SQLite", "JWT Authentication"],
      tools: ["Git", "GitHub", "GitLab", "VS Code", "npm", "yarn", "Postman", "Vercel", "EAS Build", "Android Studio", "Xcode", "Jira"],
      concepts: ["Agile/Scrum", "Push Notifications", "Real-Time Systems", "Performance Optimization", "Lazy Loading", "Code Splitting", "Unit Testing (Jest)", "Web Performance", "Debugging", "Code Review", "CI/CD"]
    },
    
    projects: [ 
      {
        name: "Blaze HR Connect – Enterprise Mobile Application (React Native and Expo)",
        description: "HR management mobile application serving 100+ active employees with real-time communication, attendance tracking, and leave management.",
        technologies: ["React Native", "Expo SDK", "Firebase", "Firestore", "Context API", "RESTful APIs"],
        highlights: [
          "Built scalable mobile solution serving 100+ active employees with task management, attendance, and leave features",
          "Developed real-time chat system with one-on-one and group messaging, typing indicators, and read receipts",
          "Implemented social engagement platform with post creation, photo uploads, mentions, and emoji reactions",
          "Created employee engagement features including real-time polls and automated birthday notifications",
          "Integrated push notification system via RESTful APIs, improving user engagement by 45%",
          "Implemented efficient state management using Context API with optimized performance"
        ]
      },

      {
        name: "Blaze HR Desktop Application (React Electron)",
        description: "Cross-platform desktop chat application built with Electron for company internal communication with real-time messaging and QR code authentication.",
        technologies: ["Electron", "JavaScript (ES6+)", "Firebase", "Vite", "Axios", "REST APIs"],
        highlights: [
          "Developed cross-platform desktop chat application using Electron framework, supporting real-time communication for internal teams and improving collaboration efficiency by 25%",
          "Implemented real-time messaging system with Firebase and custom API integration",
          "Created hybrid storage architecture reducing Firebase costs through auto-sync to database",
          "Built QR code authentication system with Google OAuth integration",
          "Designed responsive UI with real-time updates, typing indicators, and unread badges",
          "Packaged and distributed application for Windows, macOS, and Linux platforms"
        ]
      },
      {
        name: "Personal Portfolio Website (React)",
        description: "Modern, responsive portfolio website showcasing projects and skills with interactive animations and ATS-friendly CV generator.",
        technologies: ["React.js", "Framer Motion", "EmailJS", "CSS3", "Vercel", "jsPDF"],
        highlights: [
          "Designed and developed fully responsive portfolio using React.js (SPA), improving user engagement and recruiter interaction",
          "Integrated EmailJS for functional contact form enabling direct client communication",
          "Implemented ATS-friendly CV generator with downloadable PDF and text formats",
          "Optimized for all devices with mobile-first responsive design approach",
          "Deployed on Vercel with automated CI/CD pipeline for seamless updates"
        ]
      },
      {
        name: "E-Commerce Platform (Academic Project)",
        description: "Full-stack e-commerce web application with complete shopping functionality demonstrating end-to-end development skills.",
        technologies: ["Python Django", "SQLite", "HTML5", "CSS3", "JavaScript", "Bootstrap"],
        highlights: [
          "Developed secure user authentication and authorization system with role-based access control",
          "Built dynamic product catalog with advanced search, filtering, and sorting capabilities",
          "Implemented shopping cart functionality with session management and checkout process",
          "Created admin panel for order management and inventory tracking",
          "Designed using Django MVC architecture following best practices and design patterns"
        ]
      }
    ],
    
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "Calicut University",
        school: "AWH Special College, Kallai",
        period: "2021 - 2024",
        location: "Kozhikode, Kerala"
      },
      {
        degree: "Vocational Higher Secondary Education",
        institution: "JDT Islam Vocational Higher Secondary School",
        period: "2019 - 2021",
        location: "Kozhikode, Kerala"
      }
    ],
    
    
    // hobbies: [
    //   "Football",
    //   "Chess",
    //   "Gaming",
    //   "Listening to music",
    //   "Providing assistance to children with autism spectrum disorder"
    // ],
    
    languages: ["English", "Hindi", "Malayalam"]
  };

  return cvData;
};

// Generate plain text ATS-friendly CV
export const generatePlainTextCV = () => {
  const cv = generateATSFriendlyCV();
  
  let plainText = `${cv.name.toUpperCase()}\n`;
  plainText += `${cv.title}\n`;
  if (cv.openTo) plainText += `${cv.openTo}\n`;
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
    if (exp.environment) plainText += `Environment: ${exp.environment}\n`;
    exp.achievements.forEach(achievement => {
      plainText += `- ${achievement}\n`;
    });
  });
  
  plainText += `\nTECHNICAL SKILLS\n`;
  plainText += `Frontend: ${cv.skills.frontend.join(', ')}\n`;
  plainText += `State Management: ${cv.skills.stateManagement.join(', ')}\n`;
  plainText += `Mobile Development: ${cv.skills.mobile.join(', ')}\n`;
  plainText += `Backend & APIs: ${cv.skills.backend.join(', ')}\n`;
  plainText += `Tools: ${cv.skills.tools.join(', ')}\n`;
  plainText += `Concepts: ${cv.skills.concepts.join(', ')}\n`;
  
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
    plainText += `\n${edu.degree}\n`;
    plainText += `${edu.institution}`;
    if (edu.school) plainText += ` - ${edu.school}`;
    plainText += `\n${edu.period}\n`;
    if (edu.location) plainText += `${edu.location}\n`;
  });
  
  if (cv.certifications && cv.certifications.length > 0) {
    plainText += `\nCERTIFICATIONS\n`;
    cv.certifications.forEach(cert => {
      plainText += `\n${cert.name}\n`;
      plainText += `${cert.issuer}\n`;
      if (cert.description) plainText += `${cert.description}\n`;
    });
  }
  
  if (cv.languages && cv.languages.length > 0) {
    plainText += `\nLANGUAGES\n`;
    plainText += `${cv.languages.join(', ')}\n`;
  }
  
  if (cv.hobbies && cv.hobbies.length > 0) {
    plainText += `\nHOBBIES & ACTIVITIES\n`;
    cv.hobbies.forEach(hobby => {
      plainText += `- ${hobby}\n`;
    });
  }
  
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

// Download CV as Professional A4 PDF
export const downloadCVAsPDF = () => {
  const cv = generateATSFriendlyCV();
  const doc = new jsPDF('p', 'mm', 'a4');
  
  const pageWidth = 210; // A4 width in mm
  const pageHeight = 297; // A4 height in mm
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  let yPos = margin;
  
  // Helper function to add new page if needed
  const checkPageBreak = (requiredSpace = 10) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      doc.addPage();
      yPos = margin;
      return true;
    }
    return false;
  };
  
  // Helper function to add text with word wrap
  const addText = (text, fontSize, isBold = false, color = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', isBold ? 'bold' : 'normal');
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, contentWidth);
    lines.forEach(line => {
      checkPageBreak();
      doc.text(line, margin, yPos);
      yPos += fontSize * 0.5;
    });
  };
  
  // Header - Name and Title
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text(cv.name.toUpperCase(), margin, yPos);
  yPos += 7;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  doc.text(cv.title, margin, yPos);
  yPos += 5;
  
  if (cv.openTo) {
    doc.setFontSize(10);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(0, 102, 51);
    doc.text(cv.openTo, margin, yPos);
    yPos += 5;
  }
  
  // Contact Information
  doc.setFontSize(9);
  doc.setTextColor(60, 60, 60);
  const contactInfo = `${cv.contact.email} | ${cv.contact.phone} | ${cv.contact.location}`;
  doc.text(contactInfo, margin, yPos);
  yPos += 5;
  doc.text(`LinkedIn: ${cv.contact.linkedin}`, margin, yPos);
  yPos += 5;
  // doc.text(`GitHub: ${cv.contact.github}`, margin, yPos);
  // yPos += 5;
  
  // Divider line
  doc.setDrawColor(0, 51, 102);
  doc.setLineWidth(0.5);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 7;
  
  // Professional Profile
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('PROFESSIONAL SUMMARY', margin, yPos);
  yPos += 6;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  const summaryLines = doc.splitTextToSize(cv.summary, contentWidth);
  summaryLines.forEach(line => {
    checkPageBreak();
    doc.text(line, margin, yPos);
    yPos += 4;
  });
  // yPos += 5;
  
  // Divider line
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 7;
  
  // Professional Experience
  checkPageBreak(20);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('PROFESSIONAL EXPERIENCE', margin, yPos);
  yPos += 6;
  
  cv.experience.forEach(exp => {
    checkPageBreak(15);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(`${exp.title} | ${exp.company}`, margin, yPos);
    yPos += 5;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text(exp.period, margin, yPos);
    yPos += 5;
    
    if (exp.environment) {
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      doc.text(`Environment: ${exp.environment}`, margin, yPos);
      yPos += 5;
    }
    
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    exp.achievements.forEach(achievement => {
      checkPageBreak(8);
      const bulletLines = doc.splitTextToSize(`• ${achievement}`, contentWidth - 5);
      bulletLines.forEach(line => {
        checkPageBreak();
        doc.text(line, margin + 2, yPos);
        yPos += 4.5;
      });
    });
    // yPos += 5;
  });
  
  // Divider line
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 7;
  
  // Technical Skills
  checkPageBreak(20);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('TECHNICAL SKILLS', margin, yPos);
  yPos += 6;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const skillCategories = [
    { label: 'Frontend', skills: cv.skills.frontend },
    { label: 'State Management', skills: cv.skills.stateManagement },
    { label: 'Mobile Development', skills: cv.skills.mobile },
    { label: 'Backend & APIs', skills: cv.skills.backend },
    { label: 'Tools', skills: cv.skills.tools },
    { label: 'Concepts', skills: cv.skills.concepts }
  ];
  
  skillCategories.forEach(category => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`${category.label}:`, margin, yPos);
    doc.setFont('helvetica', 'normal');
    
    // Display skills in row-wise format (comma-separated)
    const skillsText = category.skills.join(', ');
    const skillLines = doc.splitTextToSize(skillsText, contentWidth - 40);
    skillLines.forEach((line, index) => {
      checkPageBreak(5);
      doc.text(line, margin + 40, yPos + (index * 4));
    });
    yPos += skillLines.length * 4 + 2;
  });
  // yPos += 5;
  
  // Divider line
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 7;
  
  // Key Projects
  checkPageBreak(20);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('KEY PROJECTS', margin, yPos);
  yPos += 6;
  
  cv.projects.forEach(project => {
    checkPageBreak(15);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(project.name, margin, yPos);
    yPos += 5;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(60, 60, 60);
    const descLines = doc.splitTextToSize(project.description, contentWidth);
    descLines.forEach(line => {
      checkPageBreak();
      doc.text(line, margin, yPos);
      yPos += 4;
    });
    yPos += 2;
    
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Technologies:', margin, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(project.technologies.join(', '), margin + 25, yPos);
    yPos += 5;
    
    doc.setFont('helvetica', 'normal');
    project.highlights.forEach(highlight => {
      checkPageBreak(8);
      const highlightLines = doc.splitTextToSize(`• ${highlight}`, contentWidth - 5);
      highlightLines.forEach(line => {
        checkPageBreak();
        doc.text(line, margin + 2, yPos);
        yPos += 4;
      });
    });
    yPos += 3;
  });
  
  // Divider line
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 6;
  
  // Education
  checkPageBreak(20);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('EDUCATION', margin, yPos);
  yPos += 6;
  
  cv.education.forEach(edu => {
    checkPageBreak(12);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(`• ${edu.degree}`, margin + 2, yPos);
    yPos += 5;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(`${edu.institution}${edu.school ? ` - ${edu.school}` : ''}`, margin + 4, yPos);
    yPos += 4;
    
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text(`${edu.period}${edu.location ? ` | ${edu.location}` : ''}`, margin + 4, yPos);
    yPos += 7;
  });
  
  // Divider line
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 7;
  
  // Languages
  if (cv.languages && cv.languages.length > 0) {
    checkPageBreak(12);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 51, 102);
    doc.text('LANGUAGES', margin, yPos);
    yPos += 5.5;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    cv.languages.forEach(language => {
      checkPageBreak(5);
      doc.text(`• ${language}`, margin + 2, yPos);
      yPos += 4.5;
    });
    yPos += 4;
  }
  
  // Divider line
  if (cv.hobbies && cv.hobbies.length > 0) {
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.3);
    doc.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 7;
  }
  
  // Hobbies & Activities
  if (cv.hobbies && cv.hobbies.length > 0) {
    checkPageBreak(12);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 51, 102);
    doc.text('HOBBIES & ACTIVITIES', margin, yPos);
    yPos += 5.5;
    
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    cv.hobbies.forEach(hobby => {
      checkPageBreak();
      doc.text(`• ${hobby}`, margin + 2, yPos);
      yPos += 5;
    });
  }
  
  // Save the PDF
  doc.save('Ridu_Krishna_CV.pdf');
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
        h1 { font-size: 28px; margin-bottom: 3px; margin-top: 0; }
        h2 { font-size: 20px; border-bottom: 2px solid #333; padding-bottom: 5px; margin-top: 20px; }
        h3 { font-size: 16px; margin-bottom: 5px; }
        .contact
        .contact p { margin: 2px 0; line-height: 1.4; }
        .title { margin: 5px 0 8px 0; }
        ul { margin: 10px 0; padding-left: 20px; }
        li { margin: 5px 0; }
        .skills-list { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill-category { margin: 10px 0; }
    </style>
</head>
<body>
    <h1>${cv.name}</h1>
    <p class="title"><strong>${cv.title}</strong></p>
    ${cv.openTo ? `<p style="color: #006633; font-style: italic;"><strong>${cv.openTo}</strong></p>` : ''}
    <div class="contact">
        <p>Email: ${cv.contact.email}</p>
        <p>Phone: ${cv.contact.phone}</p>
        <p>Location: ${cv.contact.location}</p>
        <p>LinkedIn: ${cv.contact.linkedin}</p>
        <p>GitHub: ${cv.contact.github}</p>
    </div>
    
    <h2>PROFESSIONAL SUMMARY</h2>
    <p>${cv.summary}</p>
    
    <h2>Professional Experience</h2>
    ${cv.experience.map(exp => `
        <h3>${exp.title} | ${exp.company}</h3>
        <p><em>${exp.period}</em></p>
        ${exp.environment ? `<p><strong>Environment:</strong> ${exp.environment}</p>` : ''}
        <ul>
            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
        </ul>
    `).join('')}
    
    <h2>Technical Skills</h2>
    <div class="skill-category"><strong>Frontend:</strong> ${cv.skills.frontend.join(', ')}</div>
    <div class="skill-category"><strong>State Management:</strong> ${cv.skills.stateManagement.join(', ')}</div>
    <div class="skill-category"><strong>Mobile Development:</strong> ${cv.skills.mobile.join(', ')}</div>
    <div class="skill-category"><strong>Backend & APIs:</strong> ${cv.skills.backend.join(', ')}</div>
    <div class="skill-category"><strong>Tools:</strong> ${cv.skills.tools.join(', ')}</div>
    <div class="skill-category"><strong>Concepts:</strong> ${cv.skills.concepts.join(', ')}</div>
    
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
        <h3>${edu.degree}</h3>
        <p><strong>${edu.institution}</strong>${edu.school ? ` - ${edu.school}` : ''}</p>
        <p><em>${edu.period}</em></p>
        ${edu.location ? `<p>${edu.location}</p>` : ''}
    `).join('')}
    
    ${cv.certifications && cv.certifications.length > 0 ? `
    <h2>Certifications</h2>
    ${cv.certifications.map(cert => `
        <h3>${cert.name}</h3>
        <p><strong>${cert.issuer}</strong></p>
        ${cert.description ? `<p>${cert.description}</p>` : ''}
    `).join('')}
    ` : ''}
    
    ${cv.languages && cv.languages.length > 0 ? `
    <h2>Languages</h2>
    <p>${cv.languages.join(', ')}</p>
    ` : ''}
    
    ${cv.hobbies && cv.hobbies.length > 0 ? `
    <h2>Hobbies & Activities</h2>
    <ul>
        ${cv.hobbies.map(hobby => `<li>${hobby}</li>`).join('')}
    </ul>
    ` : ''}
</body>
</html>
  `;
  
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'Ridu_Krishna.html';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
