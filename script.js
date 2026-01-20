/* Global Styles & Variables */
:root {
    --bg-color: #0a0a0a;
    --bg-alt: #111111;
    --text-main: #e0e0e0;
    --text-muted: #a0a0a0;
    --accent-primary: #00f3ff;
    /* Neon Cyan */
    --accent-secondary: #bc13fe;
    /* Neon Purple */
    --font-main: 'Inter', sans-serif;
    --font-mono: 'Roboto Mono', monospace;
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-main);
    background-color: var(--bg-color);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

ul {
    list-style: none;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.section {
    padding: 80px 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.section.visible {
    opacity: 1;
    transform: translateY(0);
}

.section-title {
    font-family: var(--font-mono);
    font-size: 2rem;
    color: var(--accent-primary);
    margin-bottom: 40px;
    text-align: center;
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translateX(-50%);
}

.section-title::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: var(--accent-secondary);
    margin: 10px auto 0;
}

.bg-alt {
    background-color: var(--bg-alt);
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;
    font-family: var(--font-mono);
}

.btn-primary {
    background: linear-gradient(45deg, var(--accent-primary), var(--accent-secondary));
    color: #000;
    border: none;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 243, 255, 0.3);
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--accent-primary);
    color: var(--accent-primary);
    margin-left: 15px;
}

.btn-outline:hover {
    background: rgba(0, 243, 255, 0.1);
    transform: translateY(-2px);
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(10, 10, 10, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-family: var(--font-mono);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent-primary);
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-links a {
    font-size: 0.95rem;
    font-weight: 500;
    position: relative;
}

.nav-links a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--accent-secondary);
    transition: var(--transition);
}

.nav-links a:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--text-main);
    transition: var(--transition);
}

/* Hero Section */
.hero {
    height: 100vh;
    display: flex;
    align-items: center;
    position: relative;
    background: radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%);
}

.hero-content {
    z-index: 2;
    text-align: center;
    width: 100%;
}

.hero h1 {
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 10px;
    letter-spacing: -1px;
}

.glitch {
    position: relative;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch::before {
    left: 2px;
    text-shadow: -1px 0 var(--accent-secondary);
    clip: rect(24px, 550px, 90px, 0);
    animation: glitch-anim-2 3s infinite linear alternate-reverse;
}

.glitch::after {
    left: -2px;
    text-shadow: -1px 0 var(--accent-primary);
    clip: rect(85px, 550px, 140px, 0);
    animation: glitch-anim 2.5s infinite linear alternate-reverse;
}

@keyframes glitch-anim {
    0% {
        clip: rect(10px, 9999px, 30px, 0);
    }

    20% {
        clip: rect(80px, 9999px, 100px, 0);
    }

    40% {
        clip: rect(10px, 9999px, 50px, 0);
    }

    60% {
        clip: rect(90px, 9999px, 120px, 0);
    }

    80% {
        clip: rect(20px, 9999px, 60px, 0);
    }

    100% {
        clip: rect(60px, 9999px, 90px, 0);
    }
}

@keyframes glitch-anim-2 {
    0% {
        clip: rect(60px, 9999px, 90px, 0);
    }

    20% {
        clip: rect(10px, 9999px, 40px, 0);
    }

    40% {
        clip: rect(80px, 9999px, 110px, 0);
    }

    60% {
        clip: rect(20px, 9999px, 50px, 0);
    }

    80% {
        clip: rect(90px, 9999px, 120px, 0);
    }

    100% {
        clip: rect(10px, 9999px, 30px, 0);
    }
}

.subtitle {
    font-size: 1.5rem;
    color: var(--text-muted);
    margin-bottom: 20px;
    font-family: var(--font-mono);
}

.typing-text::after {
    content: '|';
    animation: blink 1s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}

.hero-summary {
    max-width: 600px;
    margin: 0 auto 40px;
    font-size: 1.1rem;
    color: var(--text-muted);
}

/* About Section */
.about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 1.1rem;
}

/* Skills Section */
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.skill-category {
    background: rgba(255, 255, 255, 0.03);
    padding: 30px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.skill-category::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(0, 243, 255, 0.05), transparent);
    transform: translateX(-100%);
    transition: 0.5s;
}

.skill-category:hover::before {
    transform: translateX(100%);
}

.skill-category:hover {
    transform: translateY(-5px);
    border-color: var(--accent-primary);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.skill-category h3 {
    margin-bottom: 20px;
    font-family: var(--font-mono);
    color: var(--text-main);
    display: flex;
    align-items: center;
    gap: 10px;
}

.skill-category h3 i {
    color: var(--accent-secondary);
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.skill-tag {
    background: rgba(0, 243, 255, 0.1);
    color: var(--accent-primary);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    border: 1px solid transparent;
    transition: var(--transition);
}

.skill-tag:hover {
    background: rgba(0, 243, 255, 0.2);
    border-color: var(--accent-primary);
    transform: scale(1.05);
}

/* Projects Section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background: var(--bg-alt);
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: var(--transition);
    position: relative;
}

.project-card:hover {
    transform: translateY(-10px);
    border-color: var(--accent-secondary);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
}

.project-content {
    padding: 30px;
}

.project-content h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--text-main);
}

.project-desc {
    color: var(--text-muted);
    margin-bottom: 20px;
    font-size: 0.95rem;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.project-tech span {
    font-size: 0.8rem;
    font-family: var(--font-mono);
    color: var(--accent-secondary);
    background: rgba(188, 19, 254, 0.1);
    padding: 3px 8px;
    border-radius: 4px;
}

.project-links {
    display: flex;
    gap: 15px;
}

.project-links a {
    font-size: 0.9rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
}

.project-links a:hover {
    color: var(--accent-primary);
}

/* Education & Certifications */
.edu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
}

.edu-column h3 {
    margin-bottom: 30px;
    font-family: var(--font-mono);
    color: var(--accent-primary);
    display: flex;
    align-items: center;
    gap: 10px;
}

.timeline-item {
    border-left: 2px solid var(--accent-secondary);
    padding-left: 20px;
    margin-bottom: 30px;
    position: relative;
}

.timeline-item::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 10px;
    height: 10px;
    background: var(--accent-secondary);
    border-radius: 50%;
    transition: var(--transition);
}

.timeline-item:hover::before {
    transform: scale(1.5);
    box-shadow: 0 0 10px var(--accent-secondary);
}

.timeline-item h4 {
    font-size: 1.2rem;
    margin-bottom: 5px;
}

.timeline-item .institution {
    color: var(--text-muted);
    margin-bottom: 5px;
}

.timeline-item .year {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    color: var(--accent-primary);
}

.cert-list li {
    margin-bottom: 15px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 5px;
    transition: var(--transition);
    border-left: 3px solid transparent;
}

.cert-list li:hover {
    background: rgba(255, 255, 255, 0.05);
    transform: translateX(5px);
    border-left-color: var(--accent-primary);
}

.cert-name {
    font-weight: 600;
    color: var(--text-main);
    display: block;
}

.cert-issuer {
    color: var(--text-muted);
    font-size: 0.9rem;
}

.cert-desc {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-top: 5px;
    font-style: italic;
}

/* Contact Section */
.contact-wrapper {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.contact-text {
    margin-bottom: 40px;
    font-size: 1.1rem;
    color: var(--text-muted);
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
}

.contact-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    transition: var(--transition);
    font-family: var(--font-mono);
    font-size: 1rem;
    position: relative;
    overflow: hidden;
}

.contact-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: 0.5s;
}

.contact-btn:hover::before {
    left: 100%;
}

.contact-btn:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    border-color: transparent;
}

/* Brand Colors on Hover */
.contact-btn.email:hover {
    background: #EA4335;
    color: white;
    box-shadow: 0 5px 15px rgba(234, 67, 53, 0.4);
}

.contact-btn.linkedin:hover {
    background: #0077b5;
    color: white;
    box-shadow: 0 5px 15px rgba(0, 119, 181, 0.4);
}

.contact-btn.github:hover {
    background: #333;
    color: white;
    box-shadow: 0 5px 15px rgba(51, 51, 51, 0.4);
}

.contact-btn.tryhackme:hover {
    background: #88cc14;
    color: #0a0a0a;
    box-shadow: 0 5px 15px rgba(136, 204, 20, 0.4);
}

/* Footer */
footer {
    padding: 30px 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 0.9rem;
    color: var(--text-muted);
}

/* Responsive Design */
@media (max-width: 768px) {
    .hero h1 {
        font-size: 2.5rem;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: var(--bg-alt);
        flex-direction: column;
        padding: 20px;
        text-align: center;
    }

    .nav-links.active {
        display: flex;
    }

    .hamburger {
        display: block;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
}
