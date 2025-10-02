// Main JavaScript file for RozgaarDwaar
// Handles navigation, general functionality, and page interactions

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeLanguageToggle();
    initializeQuickActions();
    initializeAnimations();
    initializeResumeUpload();
    initializeJobSearch();
    initializeFindJobsSection();
    initializeSkillAssessment();
    initializeInterviewPrep();
    
    // Load mock data
    loadMockData();
    // Ensure initial jobs render even if no data yet
    try { if (document.getElementById('find-jobs')) renderFindJobs('all'); } catch(e) {}
});

// Extra safety: on window load, render jobs again after all scripts are ready
window.addEventListener('load', function(){
    try { if (document.getElementById('find-jobs')) renderFindJobs('all'); } catch(e) { console.warn('Render jobs on load failed', e); }
});

// Navigation functionality
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    // Login button navigation
    const loginBtn = document.querySelector('.btn-login');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            window.location.href = 'login.html';
        });
    }

    // Stamp a stable page key on each nav item based on the English keys we mark in autoMarkTranslatables
    navItems.forEach(item => {
        const span = item.querySelector('span');
        const key = span?.getAttribute('data-translate');
        if (key) item.dataset.pageKey = key; // e.g., 'home', 'guidance'
    });
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Handle navigation language-agnostically via data key
            const key = this.dataset.pageKey || this.querySelector('span')?.getAttribute('data-translate') || this.querySelector('span')?.textContent.toLowerCase();
            navigateToPage(key);
        });
    });
    
    // Set active page
    setActivePage(currentPage);
}

function navigateToPage(page) {
    const pageMap = {
        'home': 'index.html',
        'guidance': 'guidance.html',
        'interview prep': 'interview.html',
        'analytics': 'analytics.html',
        'schemes': 'schemes.html',
        'support': '#',
        'profile': 'profile.html'
    };
    
    const targetPage = pageMap[page];
    if (targetPage && targetPage !== '#') {
        window.location.href = targetPage;
    }
}

function setActivePage(currentPage) {
    const pageMap = {
        'index.html': 'home',
        'guidance.html': 'guidance',
        'interview.html': 'interview prep',
        'analytics.html': 'analytics',
        'schemes.html': 'schemes',
        'profile.html': 'profile'
    };
    
    const activePage = pageMap[currentPage];
    if (activePage) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            if (item.querySelector('span').textContent.toLowerCase() === activePage) {
                item.classList.add('active');
            }
        });
    }
}

// Language toggle functionality
function initializeLanguageToggle() {
    const langSelect = document.querySelector('.lang-select');
    if (langSelect) {
        // Apply stored language on load
        const stored = localStorage.getItem('selectedLanguage') || 'en';
        langSelect.value = stored;
        applyTranslations(stored);
        langSelect.addEventListener('change', function() {
            const selectedLang = this.value;
            applyTranslations(selectedLang);
        });
    }
}

function applyTranslations(lang) {
    const translations = {
        en: {
            'home': 'HOME','guidance': 'GUIDANCE','interview prep': 'INTERVIEW PREP','analytics': 'ANALYTICS','schemes': 'SCHEMES','support': 'SUPPORT','profile': 'PROFILE',
            'youth registration': 'Youth Registration','login': 'Login','dashboard overview': 'Dashboard Overview','job opportunities': 'Job Opportunities','sectors': 'Sectors','states/uts': 'States/UTs','districts': 'Districts','qualifications': 'Qualifications',
            'find jobs': 'Find Jobs','quick actions': 'Quick Actions','recent activity': 'Recent Activity'
        },
        hi: {
            'home': 'होम','guidance': 'मार्गदर्शन','interview prep': 'इंटरव्यू तैयारी','analytics': 'विश्लेषण','schemes': 'योजनाएं','support': 'सहायता','profile': 'प्रोफ़ाइल',
            'youth registration': 'युवा पंजीकरण','login': 'लॉगिन','dashboard overview': 'डैशबोर्ड अवलोकन','job opportunities': 'नौकरी के अवसर','sectors': 'क्षेत्र','states/uts': 'राज्य/केंद्र शासित प्रदेश','districts': 'जिले','qualifications': 'योग्यताएं',
            'find jobs': 'नौकरियां खोजें','quick actions': 'त्वरित कार्य','recent activity': 'हाल की गतिविधि'
        },
        bn: {
            'home': 'হোম','guidance': 'পরামর্শ','interview prep': 'ইন্টারভিউ প্রস্তুতি','analytics': 'বিশ্লেষণ','schemes': 'যোজনা','support': 'সহায়তা','profile': 'প্রোফাইল',
            'youth registration': 'যুব নিবন্ধন','login': 'লগইন','dashboard overview': 'ড্যাশবোর্ড সংক্ষিপ্ত','job opportunities': 'চাকরির সুযোগ','sectors': 'ক্ষেত্র','states/uts': 'রাজ্য/কেন্দ্রশাসিত অঞ্চল','districts': 'জেলা','qualifications': 'যোগ্যতা',
            'find jobs': 'চাকরি খুঁজুন','quick actions': 'দ্রুত পদক্ষেপ','recent activity': 'সাম্প্রতিক কার্যকলাপ'
        },
        mr: {
            'home': 'होम','guidance': 'मार्गदर्शन','interview prep': 'इंटरव्ह्यू तयारी','analytics': 'विश्लेषण','schemes': 'योजना','support': 'मदत','profile': 'प्रोफाइल',
            'youth registration': 'युवा नोंदणी','login': 'लॉगिन','dashboard overview': 'डॅशबोर्ड आढावा','job opportunities': 'नोकरी संधी','sectors': 'क्षेत्रे','states/uts': 'राज्य/केंद्रशासित प्रदेश','districts': 'जिल्हे','qualifications': 'अर्हता',
            'find jobs': 'नोकऱ्या शोधा','quick actions': 'त्वरित क्रिया','recent activity': 'अलीकडील क्रियाकलाप'
        },
        te: {
            'home': 'హోమ్','guidance': 'మార్గదర్శకం','interview prep': 'ఇంటర్వ్యూ సిద్ధత','analytics': 'విశ్లేషణ','schemes': 'యోజనలు','support': 'సహాయం','profile': 'ప్రొఫైల్',
            'youth registration': 'యువ నమోదు','login': 'లాగిన్','dashboard overview': 'డ్యాష్‌బోర్డ్ అవలోకనం','job opportunities': 'ఉద్యోగావకాశాలు','sectors': 'రంగాలు','states/uts': 'రాజ్యాలు/కేంద్ర పాలిత ప్రాంతాలు','districts': 'జిల్లాలు','qualifications': 'అర్హతలు',
            'find jobs': 'ఉద్యోగాలు వెతకండి','quick actions': 'త్వరిత చర్యలు','recent activity': 'ఇటీవలి కార్యకలాపం'
        },
        ta: {
            'home': 'முகப்பு','guidance': 'வழிகாட்டல்','interview prep': 'நேர்காணல் தயாரிப்பு','analytics': 'பகுப்பாய்வு','schemes': 'திட்டங்கள்','support': 'உதவி','profile': 'சுயவிவரம்',
            'youth registration': 'இளைஞர் பதிவு','login': 'உள்நுழை','dashboard overview': 'டாஷ்போர்ட் கண்ணோட்டம்','job opportunities': 'வேலை வாய்ப்புகள்','sectors': 'துறைகள்','states/uts': 'மாநிலங்கள்/மத்திய பிரதேசங்கள்','districts': 'மாவட்டங்கள்','qualifications': 'தகுதிகள்',
            'find jobs': 'வேலை தேடுக','quick actions': 'விரைவு நடவடிக்கைகள்','recent activity': 'சமீபத்திய செயல்'
        }
    };
    // Mark common headings if not already marked
    autoMarkTranslatables();
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const t = translations[lang] && translations[lang][key];
        if (t) element.textContent = t;
    });
    localStorage.setItem('selectedLanguage', lang);
}

function autoMarkTranslatables() {
    const navMap = {
        'HOME': 'home','GUIDANCE': 'guidance','INTERVIEW PREP': 'interview prep','ANALYTICS': 'analytics','SCHEMES': 'schemes','SUPPORT': 'support','PROFILE': 'profile'
    };
    document.querySelectorAll('.nav-item span').forEach(span => {
        const txt = span.textContent.trim().toUpperCase();
        if (navMap[txt]) span.setAttribute('data-translate', navMap[txt]);
    });
    const pairs = [
        ['.btn-register','youth registration'],
        ['.btn-login','login'],
        ['.dashboard-stats .section-title','dashboard overview'],
        ['.find-jobs .section-title','find jobs'],
        ['.quick-actions .section-title','quick actions'],
        ['.recent-activity .section-title','recent activity']
    ];
    pairs.forEach(([selector,key]) => {
        const el = document.querySelector(selector);
        if (el) el.setAttribute('data-translate', key);
    });
}

// Quick Actions functionality
function initializeQuickActions() {
    // Resume Upload
    const uploadBtn = Array.from(document.querySelectorAll('.action-card .btn-action')).find(btn => btn.textContent.includes('Upload'));
    if (uploadBtn) uploadBtn.addEventListener('click', showResumeUploadModal);
    
    // Job Search
    const searchBtn = document.getElementById('quickSearchJobsBtn');
    if (searchBtn) searchBtn.addEventListener('click', () => document.getElementById('find-jobs')?.scrollIntoView({ behavior: 'smooth' }));
    
    // Skill Assessment
    const assessBtn = Array.from(document.querySelectorAll('.action-card .btn-action')).find(btn => btn.textContent.includes('Assess'));
    if (assessBtn) assessBtn.addEventListener('click', showSkillAssessmentModal);
    
    // Interview Prep
    const interviewBtn = Array.from(document.querySelectorAll('.action-card .btn-action')).find(btn => btn.textContent.includes('Practice'));
    if (interviewBtn) interviewBtn.addEventListener('click', function() { window.location.href = 'interview.html'; });
    
    // Explore Jobs scroll
    const exploreBtn = document.getElementById('exploreJobsBtn');
    if (exploreBtn) exploreBtn.addEventListener('click', () => document.getElementById('find-jobs')?.scrollIntoView({ behavior: 'smooth' }));
}

// Resume Upload functionality
function initializeResumeUpload() {
    // This will be handled by the ATS module
    console.log('Resume upload initialized');
}

function showResumeUploadModal() {
    // Create modal for resume upload
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Upload Resume</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="upload-area">
                    <i class="fas fa-cloud-upload-alt"></i>
                    <p>Drag and drop your resume here or click to browse</p>
                    <input type="file" id="resumeFile" accept=".pdf,.doc,.docx" style="display: none;">
                    <button class="btn-browse">Browse Files</button>
                </div>
                <div class="upload-info">
                    <p><strong>Supported formats:</strong> PDF, DOC, DOCX</p>
                    <p><strong>Max file size:</strong> 5MB</p>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary modal-close">Cancel</button>
                <button class="btn-primary" id="uploadResume">Upload & Analyze</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.btn-browse').addEventListener('click', () => {
        modal.querySelector('#resumeFile').click();
    });
    
    modal.querySelector('#uploadResume').addEventListener('click', () => {
        const file = modal.querySelector('#resumeFile').files[0];
        if (file) {
            processResumeUpload(file);
            document.body.removeChild(modal);
        } else {
            alert('Please select a file first!');
        }
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function processResumeUpload(file) {
    // Show loading state
    showNotification('Uploading and analyzing resume...', 'info');
    
    // Simulate file processing
    setTimeout(() => {
        // Mock ATS score calculation
        const atsScore = Math.floor(Math.random() * 30) + 70; // 70-100
        
        showNotification(`Resume uploaded successfully! ATS Score: ${atsScore}%`, 'success');
        
        // Update user data
        if (window.mockData && window.mockData.users) {
            const currentUser = window.mockData.users[0]; // Assuming first user is current
            currentUser.resumeUploaded = true;
            currentUser.atsScore = atsScore;
        }
        
        // Show detailed analysis
        showATSResults(atsScore);
    }, 2000);
}

function showATSResults(score) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>ATS Score Analysis</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="ats-score-display">
                    <div class="score-circle">
                        <div class="score-number">${score}%</div>
                        <div class="score-label">ATS Score</div>
                    </div>
                </div>
                <div class="ats-recommendations">
                    <h4>Recommendations to improve your score:</h4>
                    <ul>
                        <li>Add more relevant keywords from job descriptions</li>
                        <li>Include quantifiable achievements</li>
                        <li>Optimize formatting for ATS systems</li>
                        <li>Add skills section with industry-standard terms</li>
                    </ul>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-primary modal-close">Got it!</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Job Search functionality
function showJobSearchModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Search Jobs</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="search-filters">
                    <div class="filter-group">
                        <label>Job Title</label>
                        <input type="text" id="jobTitle" placeholder="e.g., Software Developer">
                    </div>
                    <div class="filter-group">
                        <label>Location</label>
                        <select id="location">
                            <option value="">All Locations</option>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="remote">Remote</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Experience</label>
                        <select id="experience">
                            <option value="">All Levels</option>
                            <option value="fresher">Fresher</option>
                            <option value="1-3">1-3 years</option>
                            <option value="3-5">3-5 years</option>
                            <option value="5+">5+ years</option>
                        </select>
                    </div>
                    <div class="filter-group">
                        <label>Job Type</label>
                        <select id="jobType">
                            <option value="">All Types</option>
                            <option value="full-time">Full-time</option>
                            <option value="part-time">Part-time</option>
                            <option value="contract">Contract</option>
                            <option value="internship">Internship</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary modal-close">Cancel</button>
                <button class="btn-primary" id="searchJobs">Search Jobs</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('#searchJobs').addEventListener('click', () => {
        const filters = {
            title: modal.querySelector('#jobTitle').value,
            location: modal.querySelector('#location').value,
            experience: modal.querySelector('#experience').value,
            type: modal.querySelector('#jobType').value
        };
        
        searchJobs(filters);
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function searchJobs(filters) {
    showNotification('Searching for jobs...', 'info');
    
    setTimeout(() => {
        const results = mockData.jobs.filter(job => {
            let matches = true;
            
            if (filters.title && !job.title.toLowerCase().includes(filters.title.toLowerCase())) {
                matches = false;
            }
            
            if (filters.location && job.location.toLowerCase() !== filters.location) {
                matches = false;
            }
            
            if (filters.type && job.type.toLowerCase() !== filters.type) {
                matches = false;
            }
            
            return matches;
        });
        
        showNotification(`Found ${results.length} matching jobs!`, 'success');
        
        // Store search results for display
        localStorage.setItem('jobSearchResults', JSON.stringify(results));
        
        // Redirect to jobs page or show results
        if (results.length > 0) {
            showJobResults(results);
        }
    }, 1500);
}

function showJobResults(jobs) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content large">
            <div class="modal-header">
                <h3>Job Search Results (${jobs.length})</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="job-results">
                    ${jobs.map(job => `
                        <div class="job-card">
                            <div class="job-header">
                                <h4>${job.title}</h4>
                                <span class="job-company">${job.company}</span>
                            </div>
                            <div class="job-details">
                                <span class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                                <span class="job-salary"><i class="fas fa-rupee-sign"></i> ${job.salary}</span>
                                <span class="job-type">${job.type}</span>
                            </div>
                            <div class="job-description">
                                ${job.description.substring(0, 150)}...
                            </div>
                            <div class="job-actions">
                                <button class="btn-primary" onclick="applyForJob(${job.id})">Apply Now</button>
                                <button class="btn-secondary" onclick="viewJobDetails(${job.id})">View Details</button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Skill Assessment functionality
function showSkillAssessmentModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Skill Assessment</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="skill-assessment">
                    <p>Based on your profile and aspiration, here are recommended skills to focus on:</p>
                    <div id="recommendedSkillsList" class="skills-list"></div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary modal-close">Cancel</button>
                <button class="btn-primary" id="assessSkills">Save to Profile</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    // Build recommendations
    const profile = getStoredProfile();
    const recs = buildSkillRecommendations(profile);
    const list = modal.querySelector('#recommendedSkillsList');
    list.innerHTML = recs.map(s => `<span class="skill-tag">${s}</span>`).join('');
    // Also recommend mock courses
    const courseWrap = document.createElement('div');
    courseWrap.className = 'course-list';
    const courses = buildCourseRecommendations(recs);
    courseWrap.innerHTML = `
        <h4 style="margin-top:16px;">Recommended Courses</h4>
        ${courses.map(c=>`
            <div class="course-item">
                <h5>${c.title}</h5>
                <p>${c.provider} • ${c.level}</p>
                <a href="${c.link}" target="_blank" rel="noopener" class="btn-action">Go to Course</a>
            </div>
        `).join('')}
    `;
    modal.querySelector('.modal-body').appendChild(courseWrap);

    modal.querySelector('#assessSkills').addEventListener('click', () => {
        if (profile) {
            const updated = { ...profile };
            const merged = Array.from(new Set([...(updated.skills || []), ...recs]));
            updated.skills = merged;
            localStorage.setItem('rd_user_profile', JSON.stringify(updated));
            window.dispatchEvent(new CustomEvent('profileUpdated', { detail: updated }));
        }
        showNotification('Recommendations saved to your profile.', 'success');
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

function showSkillAssessmentResults() {
    // Deprecated detailed results placeholder
    showNotification('Analyzing your skills...', 'info');
    
    setTimeout(() => {
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Skill Assessment Results</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="skill-ratings">
                        <h4>Your Current Ratings:</h4>
                        <ul>
                            ${Array.from(document.querySelectorAll('.skill-category label'))
                                .map((label, index) => 
                                    `<li>${label.textContent}: ${skillValues[index]} stars</li>`)
                                .join('')}
                        </ul>
                    </div>
                    <div class="skill-gaps">
                        <h4>Recommended Skills to Develop:</h4>
                        <ul>
                    <div class="recommended-courses">
                        <h4>Recommended Courses:</h4>
                        <div class="course-list">
                            <div class="course-item">
                                <h5>AWS Fundamentals</h5>
                                <p>Learn cloud computing basics</p>
                                <span class="course-duration">4 weeks</span>
                            </div>
                            <div class="course-item">
                                <h5>Python for Data Science</h5>
                                <p>Master data analysis with Python</p>
                                <span class="course-duration">6 weeks</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary" onclick="window.location.href='guidance.html'">View All Courses</button>
                    <button class="btn-secondary modal-close">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.modal-close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }, 2000);
}

// Animation initialization
function initializeAnimations() {
    // Add fade-in animation to elements as they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
}

// Load mock data
function loadMockData() {
    // If data already present (included in HTML), don't load again
    if (window.mockData && window.mockData.users) {
        updateDashboardStats();
        if (typeof renderFindJobs === 'function') {
            renderFindJobs('all');
        }
        return;
    }
    // Otherwise load mock data from external file once
    const existing = Array.from(document.getElementsByTagName('script')).some(s => s.src && s.src.endsWith('data/mockData.js'));
    if (existing) {
        updateDashboardStats();
        if (typeof renderFindJobs === 'function') renderFindJobs('all');
        return;
    }
    const script = document.createElement('script');
    script.src = 'data/mockData.js';
    script.onload = function() {
        console.log('Mock data loaded successfully');
        updateDashboardStats();
        if (typeof renderFindJobs === 'function') renderFindJobs('all');
    };
    document.head.appendChild(script);
}

// Update dashboard statistics
function updateDashboardStats() {
    if (window.mockData && window.mockData.analytics) {
        const stats = window.mockData.analytics.userStats;
        
        // Update stat numbers with animation
        animateNumber('.stat-card.primary .stat-number', stats.totalUsers);
        animateNumber('.stat-card.secondary .stat-number', 25); // Sectors
        animateNumber('.stat-card.tertiary .stat-number', 36); // States/UTs
        animateNumber('.stat-card.quaternary .stat-number', 734); // Districts
        animateNumber('.stat-card.quinary .stat-number', 5); // Qualifications
    }
}

function animateNumber(selector, targetNumber) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    const startNumber = 0;
    const duration = 2000;
    const increment = targetNumber / (duration / 16);
    let currentNumber = startNumber;
    
    const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            clearInterval(timer);
        }
        
        if (targetNumber >= 1000) {
            element.textContent = Math.floor(currentNumber / 1000) + 'K+';
        } else {
            element.textContent = Math.floor(currentNumber);
        }
    }, 16);
}

// Find Jobs (inline dashboard section)
function initializeFindJobsSection() {
    // Tab clicks
    const tabs = document.querySelectorAll('.job-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const type = tab.getAttribute('data-type');
            window.__rd_jobs_page = 1;
            renderFindJobs(type);
        });
    });
    // If no tab has active, set All active by default
    if (!document.querySelector('.job-tab.active')) {
        const all = document.querySelector('.job-tab[data-type="all"]');
        if (all) all.classList.add('active');
    }
    // Inline search
    const searchBtn = document.getElementById('inlineSearchBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const activeType = document.querySelector('.job-tab.active')?.getAttribute('data-type') || 'all';
            window.__rd_jobs_page = 1;
            renderFindJobs(activeType);
        });
    }
    // Dynamic typing filter
    const q = document.getElementById('inlineJobSearch');
    if (q) {
        q.addEventListener('input', () => {
            const activeType = document.querySelector('.job-tab.active')?.getAttribute('data-type') || 'all';
            window.__rd_jobs_page = 1;
            renderFindJobs(activeType);
        });
    }
    // Dropdown filters change
    const locSel = document.getElementById('inlineLocationFilter');
    const typeSel = document.getElementById('inlineTypeFilter');
    [locSel, typeSel].forEach(sel => sel && sel.addEventListener('change', () => {
        const activeType = document.querySelector('.job-tab.active')?.getAttribute('data-type') || 'all';
        window.__rd_jobs_page = 1;
        renderFindJobs(activeType);
    }));

    // Load more button
    const loadBtn = document.getElementById('loadMoreJobsBtn');
    if (loadBtn) {
        loadBtn.addEventListener('click', () => {
            window.__rd_jobs_page = (window.__rd_jobs_page || 1) + 1;
            const activeType = document.querySelector('.job-tab.active')?.getAttribute('data-type') || 'all';
            renderFindJobs(activeType);
        });
    }
    // Render immediately with fallback data
    window.__rd_jobs_page = 1;
    renderFindJobs(document.querySelector('.job-tab.active')?.getAttribute('data-type') || 'all');
}

function getFilteredJobsByType(type) {
    const fallback = [
        { id: 1001, title: 'Assistant Engineer', company: 'State Electricity Board', location: 'Mumbai', type: 'Full-time', skills: ['Electrical','Maintenance','Safety'], salary: '₹4-7 LPA', description: 'Government opening for Assistant Engineer in maintenance and operations...', isGovernment: true },
        { id: 1002, title: 'Station Controller', company: 'Metro Rail Corporation', location: 'Delhi', type: 'Full-time', skills: ['Operations','Communication','Scheduling'], salary: '₹5-8 LPA', description: 'Semi-Government role for station controller ensuring smooth operations...', isGovernment: false, isSemiGovernment: true },
        { id: 1003, title: 'Frontend Developer', company: 'TechCorp India', location: 'Bangalore', type: 'Full-time', skills: ['HTML','CSS','JavaScript','React'], salary: '₹6-10 LPA', description: 'Private opening for frontend developer to build responsive UIs...', isGovernment: false }
    ];
    let jobs = (window.mockData && Array.isArray(window.mockData.jobs) && window.mockData.jobs.length) ? window.mockData.jobs : fallback;
    if (!jobs || !Array.isArray(jobs) || jobs.length === 0) jobs = fallback;
    return jobs.filter(job => {
        if (type === 'government') return job.isGovernment === true;
        if (type === 'private') return job.isGovernment === false && job.isSemiGovernment !== true && job.isInternational !== true;
        if (type === 'semi') return job.isSemiGovernment === true;
        if (type === 'international') return job.isInternational === true;
        return true;
    });
}

function renderFindJobs(type = 'all') {
    const grid = document.getElementById('findJobsGrid');
    if (!grid) return;
    const query = (document.getElementById('inlineJobSearch')?.value || '').toLowerCase();
    let location = document.getElementById('inlineLocationFilter')?.value || '';
    let jobType = document.getElementById('inlineTypeFilter')?.value || '';
    // Normalize default "All" options to no filter
    if (location.toLowerCase().includes('all')) location = '';
    if (jobType.toLowerCase().includes('all')) jobType = '';
    
    let jobs = getFilteredJobsByType(type);
    let filtered = jobs.filter(job => {
        let ok = true;
        if (query && !(job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query))) ok = false;
        if (location && job.location && job.location.toLowerCase() !== location.toLowerCase()) ok = false;
        if (jobType && job.type && job.type.toLowerCase() !== jobType.toLowerCase()) ok = false;
        return ok;
    });
    // If no results due to restrictive filters, relax filters progressively
    if (filtered.length === 0 && (location || jobType)) {
        filtered = jobs.filter(job => {
            let ok = true;
            if (query && !(job.title.toLowerCase().includes(query) || job.company.toLowerCase().includes(query))) ok = false;
            return ok;
        });
    }
    if (filtered.length === 0) {
        filtered = jobs; // show something at least
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="text-center" style="padding:20px;color:#666;">No jobs found for selected filters.</div>';
        return;
    }
    
    // Pagination: show 3 per page
    const page = window.__rd_jobs_page || 1;
    const pageSize = 3;
    const prevCount = window.__rd_prev_shown_count || 0;
    const shown = filtered.slice(0, page * pageSize);
    const loadBtn = document.getElementById('loadMoreJobsBtn');
    if (loadBtn) {
        loadBtn.style.display = filtered.length > shown.length ? 'inline-block' : 'none';
    }

    grid.innerHTML = shown.map((job, idx) => `
        <div class="job-card${idx >= prevCount ? ' fade-in-up' : ''}">
            <div class="job-header">
                <h4>${job.title}</h4>
                <span class="job-company">${job.company}</span>
            </div>
            <div class="job-details">
                <span class="job-location"><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                <span class="job-salary"><i class="fas fa-rupee-sign"></i> ${job.salary}</span>
                <span class="job-type">${job.type}</span>
            </div>
            <div class="skills-list" style="margin:10px 0 0 0;display:flex;flex-wrap:wrap;gap:8px;">
                ${(job.skills || []).slice(0,6).map(s=>`<span class='skill-tag'>${s}</span>`).join('')}
            </div>
            <div class="job-description">${job.description.substring(0, 140)}...</div>
            <div class="job-actions">
                <button class="btn-primary" onclick="applyForJob(${job.id})">Apply Now</button>
                <button class="btn-secondary" onclick="viewJobDetails(${job.id})">View Details</button>
                <a class="btn-action" href="${job.applicationUrl || ('https://example.com/apply/'+job.id)}" target="_blank" rel="noopener">Application Link</a>
            </div>
        </div>
    `).join('');

    // Smoothly scroll to first newly loaded card
    if (page > 1 && shown.length > prevCount) {
        const cards = grid.querySelectorAll('.job-card');
        const firstNew = cards[prevCount];
        if (firstNew && firstNew.scrollIntoView) {
            setTimeout(() => firstNew.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
        }
    }
    window.__rd_prev_shown_count = shown.length;
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Job application functions
function applyForJob(jobId) {
    const job = mockData.jobs.find(j => j.id === jobId);
    if (job) {
        showNotification(`Applied for ${job.title} at ${job.company}!`, 'success');
        
        // Add to user's applied jobs
        if (window.mockData && window.mockData.users) {
            const currentUser = window.mockData.users[0];
            if (!currentUser.appliedJobs) {
                currentUser.appliedJobs = [];
            }
            currentUser.appliedJobs.push({
                jobId: jobId,
                appliedDate: new Date().toISOString(),
                status: 'pending'
            });
        }
    }
}

function viewJobDetails(jobId) {
    const job = mockData.jobs.find(j => j.id === jobId);
    if (job) {
        // Create detailed job view modal
        const modal = document.createElement('div');
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content large">
                <div class="modal-header">
                    <h3>${job.title}</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="job-detail-header">
                        <h4>${job.company}</h4>
                        <div class="job-meta">
                            <span><i class="fas fa-map-marker-alt"></i> ${job.location}</span>
                            <span><i class="fas fa-rupee-sign"></i> ${job.salary}</span>
                            <span><i class="fas fa-clock"></i> ${job.type}</span>
                        </div>
                    </div>
                    <div class="job-description-full">
                        <h5>Job Description</h5>
                        <p>${job.description}</p>
                    </div>
                    <div class="job-requirements">
                        <h5>Requirements</h5>
                        <ul>
                            <li>Experience: ${job.experience}</li>
                            <li>Skills: ${job.skills.join(', ')}</li>
                        </ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary" onclick="applyForJob(${job.id})">Apply Now</button>
                    <button class="btn-secondary modal-close">Close</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Add event listeners
        modal.querySelector('.modal-close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });
    }
}

// Initialize interview prep
function initializeInterviewPrep() {
    // This will be handled by the interview page
    console.log('Interview prep initialized');
}

// Utility functions
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function getStoredProfile() {
    try {
        const raw = localStorage.getItem('rd_user_profile');
        return raw ? JSON.parse(raw) : null;
    } catch(e) { return null; }
}

function buildSkillRecommendations(profile) {
    const aspiration = (profile && profile.aspiration ? profile.aspiration.toLowerCase() : '').trim();
    const existing = new Set((profile && Array.isArray(profile.skills)) ? profile.skills.map(s => s.toLowerCase()) : []);
    const catalogs = [
        { key: 'data scientist', skills: ['Python','SQL','Machine Learning','Deep Learning','Statistics','Pandas','NumPy','Scikit-learn','TensorFlow','PyTorch'] },
        { key: 'software engineer', skills: ['Data Structures','Algorithms','System Design','Java','Python','Git','Docker','Kubernetes','CI/CD','Unit Testing'] },
        { key: 'data analyst', skills: ['SQL','Excel','Power BI','Tableau','Python','Pandas','Statistics','Dashboards'] },
        { key: 'frontend', skills: ['HTML','CSS','JavaScript','React','TypeScript','Accessibility','Webpack','Testing Library'] },
        { key: 'backend', skills: ['Node.js','Express','Databases','REST','GraphQL','Caching','Authentication','Docker'] },
        { key: 'devops', skills: ['Linux','Shell Scripting','Git','CI/CD','Docker','Kubernetes','AWS','Terraform','Monitoring'] }
    ];
    let target = [];
    for (const cat of catalogs) {
        if (aspiration.includes(cat.key)) { target = cat.skills; break; }
    }
    if (target.length === 0) {
        // generic upskilling
        target = ['Communication','Problem Solving','Git','SQL','Python'];
    }
    const recommendations = target.filter(s => !existing.has(s.toLowerCase()));
    return recommendations.slice(0, 12);
}

function buildCourseRecommendations(skills) {
    const catalog = [
        { match: 'Python', title: 'Python for Data Science', provider: 'Coursera', level: 'Beginner', link: 'https://example.com/course/python-ds' },
        { match: 'Machine Learning', title: 'Intro to ML', provider: 'edX', level: 'Intermediate', link: 'https://example.com/course/ml' },
        { match: 'Deep Learning', title: 'Deep Learning Specialization', provider: 'Coursera', level: 'Advanced', link: 'https://example.com/course/dl' },
        { match: 'Data Structures', title: 'Data Structures & Algorithms', provider: 'Udacity', level: 'Intermediate', link: 'https://example.com/course/dsa' },
        { match: 'React', title: 'Modern React with Hooks', provider: 'Udemy', level: 'Intermediate', link: 'https://example.com/course/react' },
        { match: 'Docker', title: 'Docker Essentials', provider: 'Pluralsight', level: 'Beginner', link: 'https://example.com/course/docker' },
        { match: 'SQL', title: 'SQL Bootcamp', provider: 'Udemy', level: 'Beginner', link: 'https://example.com/course/sql' }
    ];
    const sset = new Set(skills.map(s=>s.toLowerCase()));
    const out = [];
    for (const c of catalog) {
        if (sset.has(c.match.toLowerCase())) out.push(c);
        if (out.length >= 6) break;
    }
    // If few matched, add some general courses
    while (out.length < 4) {
        out.push({ title: 'Career Essentials', provider: 'LinkedIn Learning', level: 'Beginner', link: 'https://example.com/course/career' });
    }
    return out;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Export functions for use in other files
window.RozgaarDwaar = {
    showNotification,
    applyForJob,
    viewJobDetails,
    formatNumber,
    formatDate
};
