// Mock Data for RozgaarDwaar Prototype
// This file contains all the sample data used throughout the application

const mockData = {
    // User Data
    users: [
        {
            id: 1,
            name: "Rajesh Kumar",
            email: "rajesh.kumar@email.com",
            phone: "+91 98765 43210",
            location: "Delhi",
            age: 24,
            education: "B.Tech Computer Science",
            experience: "1 year",
            skills: ["JavaScript", "React", "Node.js", "Python"],
            profileImage: "https://via.placeholder.com/150/FF6B35/FFFFFF?text=RK",
            joinedDate: "2024-01-15",
            level: 3,
            points: 1250,
            badges: ["skill_enhancer", "job_hunter", "course_completer"],
            resumeUploaded: true,
            atsScore: 85
        },
        {
            id: 2,
            name: "Priya Sharma",
            email: "priya.sharma@email.com",
            phone: "+91 98765 43211",
            location: "Mumbai",
            age: 23,
            education: "B.Com",
            experience: "Fresher",
            skills: ["Excel", "Tally", "Communication", "Marketing"],
            profileImage: "https://via.placeholder.com/150/667eea/FFFFFF?text=PS",
            joinedDate: "2024-02-20",
            level: 2,
            points: 850,
            badges: ["course_completer", "skill_enhancer"],
            resumeUploaded: false,
            atsScore: 0
        },
        {
            id: 3,
            name: "Amit Singh",
            email: "amit.singh@email.com",
            phone: "+91 98765 43212",
            location: "Bangalore",
            age: 25,
            education: "MCA",
            experience: "2 years",
            skills: ["Java", "Spring Boot", "MySQL", "AWS"],
            profileImage: "https://via.placeholder.com/150/43e97b/FFFFFF?text=AS",
            joinedDate: "2024-01-10",
            level: 4,
            points: 2100,
            badges: ["skill_enhancer", "job_hunter", "course_completer", "interview_expert"],
            resumeUploaded: true,
            atsScore: 92
        }
    ],
    jobs: [
        // Private Jobs
        { id: 101, title: 'Frontend Developer (React)', company: 'CodeCrafters Technologies', location: 'Bangalore', salary: '₹6-9 LPA', type: 'Full-time', description: 'We are looking for a skilled Frontend Developer with strong experience in React.js and modern JavaScript. You will build user-facing applications and ensure a seamless user experience.', experience: '2-4 years', isGovernment: false, isSemiGovernment: false, isInternational: false, skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Git', 'API Integration'], applicationUrl: 'https://example.com/apply/101' },
        { id: 102, title: 'Data Analyst', company: 'DataGenius Solutions', location: 'Mumbai', salary: '₹5-7 LPA', type: 'Full-time', description: 'Interpret data, analyze results using statistical techniques, and provide insights to management. Proficiency in SQL and BI tools is a must.', experience: '1-3 years', isGovernment: false, isSemiGovernment: false, isInternational: false, skills: ['SQL', 'Excel', 'Power BI', 'Python', 'Statistics', 'Data Visualization'], applicationUrl: 'https://example.com/apply/102' },
        { id: 103, title: 'Junior Software Engineer', company: 'Innovate Hub', location: 'Remote', salary: '₹4-6 LPA', type: 'Full-time', description: 'Exciting opportunity for fresh graduates to assist in developing scalable applications across the SDLC.', experience: 'Fresher', isGovernment: false, isSemiGovernment: false, isInternational: false, skills: ['Java', 'Python', 'Algorithms', 'Problem Solving', 'Git', 'Data Structures'], applicationUrl: 'https://example.com/apply/103' },
        { id: 104, title: 'HR Generalist', company: 'BrightWorks Pvt Ltd', location: 'Pune', salary: '₹3-5 LPA', type: 'Full-time', description: 'Manage recruitment, onboarding, and employee engagement initiatives. Coordinate with departments for HR operations.', experience: '1-2 years', isGovernment: false, isSemiGovernment: false, isInternational: false, skills: ['Recruitment', 'Onboarding', 'Communication', 'MS Office'], applicationUrl: 'https://example.com/apply/104' },

        // Government Jobs
        { id: 201, title: 'Assistant Engineer (Electrical)', company: 'State Electricity Board', location: 'Delhi', salary: '₹4-7 LPA', type: 'Full-time', description: 'Government opening for Assistant Engineer in maintenance and operations of substations.', experience: '2-4 years', isGovernment: true, isSemiGovernment: false, isInternational: false, skills: ['Electrical', 'Maintenance', 'Safety', 'Reporting'], applicationUrl: 'https://example.gov.in/apply/201' },
        { id: 202, title: 'Accountant Grade-I', company: 'Ministry of Finance', location: 'Mumbai', salary: '₹5-8 LPA', type: 'Full-time', description: 'Maintain government accounts, prepare financial statements, and ensure compliance with rules.', experience: '3-5 years', isGovernment: true, isSemiGovernment: false, isInternational: false, skills: ['Tally', 'Accounting', 'GST', 'Compliance'], applicationUrl: 'https://example.gov.in/apply/202' },

        // Semi-Government Jobs
        { id: 301, title: 'Station Controller', company: 'Metro Rail Corporation', location: 'Delhi', salary: '₹5-8 LPA', type: 'Full-time', description: 'Ensure smooth metro station operations including scheduling, crowd management, and safety.', experience: '2-4 years', isGovernment: false, isSemiGovernment: true, isInternational: false, skills: ['Operations', 'Communication', 'Scheduling', 'Safety'], applicationUrl: 'https://example.com/apply/301' },
        { id: 302, title: 'Junior Assistant (Admin)', company: 'Port Trust Authority', location: 'Chennai', salary: '₹3-5 LPA', type: 'Full-time', description: 'Assist in administrative tasks, documentation, and coordination across departments.', experience: '1-3 years', isGovernment: false, isSemiGovernment: true, isInternational: false, skills: ['Administration', 'MS Office', 'Documentation', 'Communication'], applicationUrl: 'https://example.com/apply/302' },

        // International Jobs
        { id: 401, title: 'Software Engineer', company: 'NordicTech AB', location: 'Stockholm, Sweden', salary: 'SEK 420k-600k', type: 'Full-time', description: 'Build backend services and APIs. Work with cross-functional teams in an agile environment.', experience: '3-5 years', isGovernment: false, isSemiGovernment: false, isInternational: true, skills: ['Node.js', 'Microservices', 'AWS', 'PostgreSQL'], applicationUrl: 'https://example.com/apply/401' },
        { id: 402, title: 'Data Engineer', company: 'Maple Data Inc.', location: 'Toronto, Canada', salary: 'CAD 70k-95k', type: 'Full-time', description: 'Design and maintain data pipelines and warehouses. Optimize ETL processes.', experience: '2-4 years', isGovernment: false, isSemiGovernment: false, isInternational: true, skills: ['Python', 'Airflow', 'ETL', 'Snowflake', 'SQL'], applicationUrl: 'https://example.com/apply/402' },
        { id: 403, title: 'Frontend Developer', company: 'Berlin Labs GmbH', location: 'Berlin, Germany', salary: '€55k-75k', type: 'Full-time', description: 'Develop responsive web applications with a focus on performance and accessibility.', experience: '2-4 years', isGovernment: false, isSemiGovernment: false, isInternational: true, skills: ['React', 'TypeScript', 'Accessibility', 'Webpack'], applicationUrl: 'https://example.com/apply/403' },
        { id: 404, title: 'Supply Chain Analyst', company: 'Pacific Logistics Ltd', location: 'Singapore', salary: 'SGD 60k-85k', type: 'Full-time', description: 'Analyze supply chain metrics, optimize inventory, and coordinate with vendors.', experience: '1-3 years', isGovernment: false, isSemiGovernment: false, isInternational: true, skills: ['Excel', 'SQL', 'Forecasting', 'Communication'], applicationUrl: 'https://example.com/apply/404' }
    ],

    

    // Course Data
    courses: [
        {
            id: 1,
            title: "JavaScript Fundamentals",
            provider: "Coursera",
            duration: "4 weeks",
            level: "Beginner",
            category: "Programming",
            rating: 4.5,
            students: 12500,
            price: "Free",
            description: "Learn the fundamentals of JavaScript programming...",
            skills: ["JavaScript", "DOM", "ES6"],
            completionRate: 78,
            certificate: true
        },
        {
            id: 2,
            title: "Digital Marketing Masterclass",
            provider: "Google Digital Garage",
            duration: "6 weeks",
            level: "Intermediate",
            category: "Marketing",
            rating: 4.7,
            students: 8900,
            price: "Free",
            description: "Master digital marketing strategies and tools...",
            skills: ["SEO", "SEM", "Social Media Marketing", "Analytics"],
            completionRate: 82,
            certificate: true
        },
        {
            id: 3,
            title: "Data Analysis with Python",
            provider: "edX",
            duration: "8 weeks",
            level: "Intermediate",
            category: "Data Science",
            rating: 4.6,
            students: 15200,
            price: "₹2,999",
            description: "Learn data analysis using Python and pandas...",
            skills: ["Python", "Pandas", "NumPy", "Matplotlib"],
            completionRate: 75,
            certificate: true
        },
        {
            id: 4,
            title: "Communication Skills for Professionals",
            provider: "LinkedIn Learning",
            duration: "3 weeks",
            level: "Beginner",
            category: "Soft Skills",
            rating: 4.4,
            students: 6800,
            price: "Free",
            description: "Improve your professional communication skills...",
            skills: ["Public Speaking", "Email Writing", "Presentation"],
            completionRate: 88,
            certificate: true
        }
    ],

    // Badge Data
    badges: [
        {
            id: "skill_enhancer",
            name: "Skill Enhancer",
            description: "Completed 5 skill development courses",
            icon: "fas fa-graduation-cap",
            color: "#FF6B35",
            rarity: "common",
            points: 100
        },
        {
            id: "job_hunter",
            name: "Job Hunter",
            description: "Applied to 10+ job opportunities",
            icon: "fas fa-briefcase",
            color: "#667eea",
            rarity: "common",
            points: 150
        },
        {
            id: "course_completer",
            name: "Course Completer",
            description: "Completed your first course",
            icon: "fas fa-certificate",
            color: "#43e97b",
            rarity: "common",
            points: 50
        },
        {
            id: "interview_expert",
            name: "Interview Expert",
            description: "Completed 20+ mock interviews",
            icon: "fas fa-comments",
            color: "#fa709a",
            rarity: "rare",
            points: 200
        },
        {
            id: "resume_master",
            name: "Resume Master",
            description: "Achieved 90+ ATS score",
            icon: "fas fa-file-alt",
            color: "#a8edea",
            rarity: "rare",
            points: 250
        },
        {
            id: "mentor",
            name: "Mentor",
            description: "Helped 5+ peers with career guidance",
            icon: "fas fa-hands-helping",
            color: "#764ba2",
            rarity: "epic",
            points: 500
        }
    ],

    // Salary Data
    salaryData: {
        technology: {
            "Software Developer": { min: 400000, max: 1200000, avg: 800000 },
            "Data Analyst": { min: 350000, max: 900000, avg: 625000 },
            "Web Developer": { min: 300000, max: 800000, avg: 550000 },
            "Mobile Developer": { min: 400000, max: 1000000, avg: 700000 }
        },
        marketing: {
            "Digital Marketing": { min: 250000, max: 600000, avg: 425000 },
            "Content Writer": { min: 200000, max: 500000, avg: 350000 },
            "Social Media Manager": { min: 300000, max: 700000, avg: 500000 }
        },
        finance: {
            "Banking Officer": { min: 300000, max: 600000, avg: 450000 },
            "Financial Analyst": { min: 400000, max: 800000, avg: 600000 },
            "Accountant": { min: 250000, max: 500000, avg: 375000 }
        },
        healthcare: {
            "Nurse": { min: 200000, max: 400000, avg: 300000 },
            "Pharmacist": { min: 300000, max: 600000, avg: 450000 },
            "Lab Technician": { min: 250000, max: 450000, avg: 350000 }
        }
    },

    // Interview Questions
    interviewQuestions: {
        technical: [
            {
                question: "Explain the difference between let, const, and var in JavaScript.",
                answer: "var is function-scoped and can be redeclared and updated. let is block-scoped, can be updated but not redeclared. const is block-scoped and cannot be updated or redeclared.",
                category: "JavaScript",
                difficulty: "Easy"
            },
            {
                question: "What is the difference between SQL and NoSQL databases?",
                answer: "SQL databases are relational with structured schemas, while NoSQL databases are non-relational with flexible schemas. SQL is better for complex queries, NoSQL for scalability.",
                category: "Database",
                difficulty: "Medium"
            },
            {
                question: "Explain the concept of RESTful APIs.",
                answer: "RESTful APIs follow REST principles: stateless, client-server architecture, uniform interface, and resource-based URLs. They use HTTP methods (GET, POST, PUT, DELETE) for operations.",
                category: "Web Development",
                difficulty: "Medium"
            }
        ],
        hr: [
            {
                question: "Tell me about yourself.",
                answer: "Start with your current role, highlight relevant experience, mention key achievements, and connect your background to the role you're applying for.",
                category: "General",
                difficulty: "Easy"
            },
            {
                question: "Why do you want to work for our company?",
                answer: "Research the company's values, mission, and recent achievements. Connect your career goals with the company's direction and show genuine interest.",
                category: "Company Knowledge",
                difficulty: "Easy"
            },
            {
                question: "How do you handle stress and pressure?",
                answer: "Provide specific examples of stressful situations you've handled. Mention techniques like prioritization, time management, and seeking help when needed.",
                category: "Behavioral",
                difficulty: "Medium"
            }
        ]
    },

    // Government Schemes
    schemes: [
        {
            id: 1,
            name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
            description: "Skill development scheme to provide industry-relevant skill training to youth",
            benefits: ["Free training", "Certification", "Placement assistance", "Stipend during training"],
            eligibility: ["Age: 15-45 years", "Indian citizen", "No formal education required"],
            applicationProcess: ["Online registration", "Document verification", "Training allocation", "Assessment and certification"],
            website: "https://pmkvyofficial.org",
            helpline: "1800-123-4567"
        },
        {
            id: 2,
            name: "Startup India",
            description: "Government initiative to promote startup culture and entrepreneurship",
            benefits: ["Tax benefits", "Funding support", "Mentorship", "Networking opportunities"],
            eligibility: ["New business entity", "Innovative business model", "Annual turnover < ₹100 crores"],
            applicationProcess: ["Business registration", "Innovation certification", "Tax exemption application"],
            website: "https://startupindia.gov.in",
            helpline: "1800-210-5525"
        },
        {
            id: 3,
            name: "Mudra Loan Scheme",
            description: "Micro finance scheme for small businesses and entrepreneurs",
            benefits: ["Low interest rates", "No collateral required", "Quick approval", "Flexible repayment"],
            eligibility: ["Indian citizen", "Age: 18-65 years", "Business plan required"],
            applicationProcess: ["Application submission", "Document verification", "Credit assessment", "Loan disbursement"],
            website: "https://mudra.org.in",
            helpline: "1800-180-1111"
        }
    ],

    // Analytics Data
    analytics: {
        userStats: {
            totalUsers: 125000,
            activeUsers: 89000,
            newRegistrations: 2500,
            jobApplications: 45000
        },
        jobStats: {
            totalJobs: 50000,
            newJobs: 1200,
            applicationsPerJob: 8.5,
            successRate: 23.5
        },
        skillStats: {
            mostPopularSkills: ["JavaScript", "Python", "Digital Marketing", "Data Analysis", "Communication"],
            skillGaps: ["Cloud Computing", "AI/ML", "Cybersecurity", "Blockchain", "DevOps"],
            completionRates: {
                "JavaScript": 78,
                "Python": 82,
                "Digital Marketing": 85,
                "Data Analysis": 75,
                "Communication": 88
            }
        }
    },

    // Chatbot Responses
    chatbotResponses: [
        {
            keywords: ["job", "employment", "career"],
            responses: [
                "I can help you find job opportunities! Check out our job search feature or browse by categories.",
                "Looking for a career change? I can guide you through our skill assessment and job matching tools.",
                "Our platform has 50K+ job opportunities across 25+ sectors. What type of role are you interested in?"
            ]
        },
        {
            keywords: ["skill", "course", "training", "learn"],
            responses: [
                "Great! I can help you identify skill gaps and recommend relevant courses. Try our skill assessment tool.",
                "We offer free and paid courses across various domains. What skills would you like to develop?",
                "Our courses come with certificates and placement assistance. Check out the guidance section!"
            ]
        },
        {
            keywords: ["resume", "cv", "ats"],
            responses: [
                "Upload your resume to get an ATS score and job matching recommendations!",
                "Our ATS score predictor helps optimize your resume for better job applications.",
                "Need help with resume formatting? Check our resume builder tool in the profile section."
            ]
        },
        {
            keywords: ["interview", "preparation", "mock"],
            responses: [
                "Practice with our mock interview feature! We have technical and HR questions.",
                "Our interview prep section includes common questions and expert tips.",
                "Want to practice? Try our interactive interview simulator!"
            ]
        },
        {
            keywords: ["scheme", "government", "benefit"],
            responses: [
                "Explore government schemes in our schemes section! We have PMKVY, Startup India, and more.",
                "Government schemes offer training, funding, and support. Check eligibility and apply online.",
                "Need help with scheme applications? I can guide you through the process."
            ]
        },
        {
            keywords: ["help", "support", "assistance"],
            responses: [
                "I'm here to help! You can ask me about jobs, skills, courses, or any other career-related queries.",
                "Need more help? Contact our support team at 1800-11-6090 or email rozgaardwaar@msde.gov.in",
                "Check our FAQ section or raise a support ticket for detailed assistance."
            ]
        }
    ],

    // Peer Insights
    peerInsights: [
        {
            id: 1,
            name: "Sneha Patel",
            role: "Software Developer at Infosys",
            experience: "2 years",
            location: "Pune",
            story: "Started as a fresher with basic programming knowledge. Through RozgaarDwaar's courses and guidance, I landed my dream job at Infosys. The skill assessment helped me identify gaps and the mock interviews boosted my confidence.",
            skills: ["Java", "Spring Boot", "Microservices"],
            achievement: "Got 3 job offers within 2 months",
            image: "https://via.placeholder.com/150/FF6B35/FFFFFF?text=SP"
        },
        {
            id: 2,
            name: "Vikram Singh",
            role: "Digital Marketing Manager at Flipkart",
            experience: "1.5 years",
            location: "Bangalore",
            story: "Transitioned from traditional marketing to digital marketing through RozgaarDwaar's courses. The government schemes helped me get certified and the peer network provided valuable insights.",
            skills: ["SEO", "SEM", "Social Media Marketing", "Analytics"],
            achievement: "Increased company's online presence by 150%",
            image: "https://via.placeholder.com/150/667eea/FFFFFF?text=VS"
        },
        {
            id: 3,
            name: "Anita Reddy",
            role: "Data Analyst at TCS",
            experience: "1 year",
            location: "Hyderabad",
            story: "Coming from a non-technical background, I was skeptical about data analysis. But RozgaarDwaar's structured learning path and mentorship program helped me succeed. The ATS score predictor also helped optimize my resume.",
            skills: ["Python", "SQL", "Tableau", "Statistics"],
            achievement: "Completed 5 certifications in 6 months",
            image: "https://via.placeholder.com/150/43e97b/FFFFFF?text=AR"
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = mockData;
} else {
    window.mockData = mockData;
}
