import React, { useState } from 'react';
import {
    Sparkles,
    Target,
    Compass,
    CheckCircle2,
    XCircle,
    Clock,
    Users,
    Layers,
    TrendingUp,
    ShieldAlert,
    Award,
    Check,
    ChevronDown,
    ChevronUp
} from 'lucide-react';
import './Presentation.css';

const individualContributions = [
    {
        name: "Isaac Padilla",
        role: "Project Manager",
        date: "09/21/26",
        avatar: "IP",
        categories: [
            {
                title: "Business Strategy",
                items: [
                    "Wrote the Strategy-to-Project Chain section.",
                    {
                        text: "Collaborated with team to brainstorm Project Charter’s Business Objective section.",
                        subItems: [
                            "Gathered and organized the team’s ideas into a structured Business Objective section for the Project Charter.",
                        ],
                    },
                ],
            },
            {
                title: "Front-End Development",
                items: [
                    "Developed the Home Page for the SkillUp Living Project Portal based on my initial design ideas.",
                    {
                        text: "Added my assigned sections to their corresponding website pages.",
                        subItems: [
                            "Added Strategy-to-Project Chain and Market Research content to site.",
                        ],
                    },
                    "Added my information on the About Us page.",
                    "Added individual contributions section.",
                ],
            },
            {
                title: "Market Research",
                items: [
                    "Collaborated with the team to develop interview questions for the Recreational Activity Tracker project.",
                    "Five interviews with potential users about recreational activities, motivation, progress tracking, and personal development.",
                    "Five interviews for the Picture Exploration project.",
                    "Wrote the “What Didn’t Work / What You Pivoted From” section, documenting abandoned ideas, findings and changes to original SkillUp project.",
                ],
            },
            {
                title: "Additional Contributions",
                items: [
                    "Assigned tasks and responsibilities to team members.",
                    "Reviewed the Sprint 1 requirements to find necessary deliverables and website content.",
                ],
            },
        ],
    },
    {
        name: "Karina Rivera",
        role: "Software Engineer",
        date: "09/21/26",
        avatar: "KR",
        categories: [
            {
                title: "Front-End Development",
                items: [
                    "Initialized the file structure and established the overall structure of the website.",
                    "Created the navigation bar and the pages accessible through it.",
                    "Structured the Sprint 1 page to include all the necessary sections and files.",
                ],
            },
            {
                title: "User Experience Design",
                items: [
                    "Created a website with a clean and modern interface that allows users to switch between light and dark modes based on their preferences.",
                    "Contributed to the initial layout of the About Us page to display information about all team members.",
                    "Organized all sprint pages into a dropdown menu within the navigation bar to prevent the navigation bar from becoming too crowded.",
                    "For the Sprint 1 page, added a secondary navigation bar to make it easier for users to navigate between the different sections.",
                ],
            },
            {
                title: "Additional Contributions",
                items: [
                    "During the market research phase, contributed to developing interview questions for the Budget Simulator.",
                    "Conducted 10 different interviews and analyzed the responses to help the team make a final project selection.",
                ],
            },
        ],
    },
    {
        name: "Juan Reyna",
        role: "Market Researcher",
        date: "09/21/26",
        avatar: "JR",
        categories: [
            {
                title: "Market Research",
                items: [
                    "Collaborated with the team to design questions for phase 1 and phase 2.",
                    "Conducted 5 interviews regarding the planner with photos as proof.",
                    "Conducted another set of 5 interviews regarding recreational activities.",
                    "Wrote the Top Pick Deep Dive, documenting why we chose SkillUp along with interview evidence.",
                ],
            },
            {
                title: "Project Requirements and Scope",
                items: [
                    "Worked on the scope boundary and requirements, including the In's, Out's, and Deferred's.",
                    "Included necessary features that support the core vision of SkillUp.",
                    "Left out unnecessary features that do not support the core goal.",
                    "Established Deferred list for secondary features.",
                ],
            },
            {
                title: "Additional Contributions",
                items: [
                    "Helped fill in missing content from the website.",
                    "Reviewed sprint 1 requirements for missing tasks.",
                ],
            },
        ],
    },
    {
        name: "Jonathan Hernandez",
        role: "Market Researcher",
        date: "09/21/26",
        avatar: "JH",
        categories: [
            {
                title: "Market Research",
                items: [
                    "Worked with the team to develop and refine interview questions for Phase 1 and Phase 2.",
                    "Conducted 5 interviews during Phase 1 on recreational activities, motivations, and difficulties.",
                    "Conducted another 5 interviews during Phase 2 to gather feedback and validate the vision.",
                ],
            },
            {
                title: "Charter Success Criteria",
                items: [
                    "Wrote the Success Criteria section within the Project Charter.",
                    "Defined what would need to be achieved for SkillUp to successfully meet research and planning goals.",
                ],
            },
            {
                title: "Additional Contributions",
                items: [
                    "Wrote the Aggregate Findings section, synthesizing research from different ideas, interviews, and product comparisons.",
                ],
            },
        ],
    },
    {
        name: "Ricardo Morales Perez",
        role: "Tester & Checker",
        date: "09/20/26",
        avatar: "RM",
        categories: [
            {
                title: "Website Testing",
                items: [
                    "Tested website by visiting every page and section to ensure no errors occur.",
                ],
            },
            {
                title: "Issue Identification and Reporting",
                items: [
                    "Detected and reported errors to the team to ensure rapid resolution.",
                ],
            },
            {
                title: "Additional Contributions",
                items: [
                    "Oversaw doing the constraints part of Sprint 1 and adding constraints about our website.",
                ],
            },
        ],
        reviewResponsibilities: [
            "Reviewed that all the constraints were there and made sure there weren't any errors in the work.",
        ],
        aiDisclosure: {
            toolUsed: "ChatGPT",
            stage: "Constraints",
            purpose: "Just to get more ideas to add for the constraints part of the assignment but the work is my own.",
            changesOrRejected: "I improved my Constraints part because I felt it was short. So, I just used ChatGPT in order just to get more ideas and then I come up with my own ideas with example ChatGPT gave me.",
        },
    },
];

function Sprint1PresentationView() {
    const [expandedMember, setExpandedMember] = useState(null);

    const quickLinks = [
        { id: 'pres-overview', label: 'Overview' },
        { id: 'pres-roadblocks', label: 'User Roadblocks' },
        { id: 'pres-pivots', label: 'Concept Pivots' },
        { id: 'pres-strategy', label: 'Strategy Chain' },
        { id: 'pres-scope', label: 'Scope Boundary' },
        { id: 'pres-governance', label: 'Governance' },
        { id: 'pres-team', label: 'Team Contributions' },
    ];

    return (
        <div className="presentation-page-container">
            {/* Visual Section Navigation Bar */}
            <nav className="presentation-subnav" aria-label="Presentation Section Navigation">
                {quickLinks.map(link => (
                    <a key={link.id} href={`#${link.id}`} className="presentation-subnav-link">
                        {link.label}
                    </a>
                ))}
            </nav>

            {/* 1. Executive Summary & Foundations */}
            <section id="pres-overview" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Sparkles size={14} />
                        <span>Executive Summary • Project SkillUp</span>
                    </div>
                    <h2 className="slide-title">Sprint 1: Project Foundation & Strategic Charter</h2>
                    <p className="slide-subtitle">
                        Establishing the core problem space, evaluating five candidate concepts, defining the strategy-to-project chain, and anchoring scope boundaries for the SkillUp platform.
                    </p>
                </div>

                <div className="stat-metric-grid">
                    <div className="stat-metric-card">
                        <span className="metric-value">5</span>
                        <span className="metric-label">Concepts Evaluated</span>
                        <span className="metric-desc">Pivoted from 4 alternate concepts to focus on SkillUp</span>
                    </div>
                    <div className="stat-metric-card">
                        <span className="metric-value">20</span>
                        <span className="metric-label">User Interviews</span>
                        <span className="metric-desc">10 interviews in Phase 1 and 10 interviews in Phase 2</span>
                    </div>
                    <div className="stat-metric-card">
                        <span className="metric-value">11</span>
                        <span className="metric-label">In-Scope Capabilities</span>
                        <span className="metric-desc">7 out-of-scope and 8 deferred features established</span>
                    </div>
                    <div className="stat-metric-card">
                        <span className="metric-value">5</span>
                        <span className="metric-label">Team Members</span>
                        <span className="metric-desc">Project Manager, Software Engineer, Researchers & QA Checker</span>
                    </div>
                </div>

                <div className="slide-card" style={{ marginTop: '1.5rem', background: 'rgba(124, 58, 237, 0.06)' }}>
                    <div className="slide-card-header">
                        <div className="slide-card-icon">
                            <Target size={20} />
                        </div>
                        <div>
                            <h3 className="slide-card-title">Core Strategic Mission</h3>
                            <span style={{ fontSize: '0.85rem', color: 'var(--purple)', fontWeight: 600 }}>SkillUp Vision Statement</span>
                        </div>
                    </div>
                    <div className="slide-card-body" style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                        "SkillUp is a personalized skill-development platform designed to make learning more accessible, organized, engaging, and rewarding. It provides users with a centralized environment where learning is treated as a continuous process rather than a series of completed courses, serving as both a tool for developing skills and a lasting record of growth."
                    </div>
                </div>
            </section>

            {/* 2. Market Research: The 4 Core Roadblocks */}
            <section id="pres-roadblocks" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Users size={14} />
                        <span>Qualitative Findings • 20 Interviews</span>
                    </div>
                    <h2 className="slide-title">Market Research: Four Core Roadblocks Uncovered</h2>
                    <p className="slide-subtitle">
                        Across both phases of user interviews focused on recreational activities and skill development, four recurring struggles surfaced:
                    </p>
                </div>

                <div className="roadblock-grid">
                    <div className="roadblock-card">
                        <div className="roadblock-header">
                            <span className="roadblock-num">01</span>
                            <h4 className="roadblock-title">Getting Started Friction</h4>
                        </div>
                        <p className="roadblock-quote">
                            "Hard to siphon through the right information... too many setup steps before reaching the fun stuff... needing to buy supplies like canvas and paint... feeling embarrassed to be a beginner."
                        </p>
                        <p className="roadblock-takeaway">
                            Starting itself is the biggest barrier. People need a lower friction on-ramp into a new activity.
                        </p>
                    </div>

                    <div className="roadblock-card">
                        <div className="roadblock-header">
                            <span className="roadblock-num">02</span>
                            <h4 className="roadblock-title">Lagging Indicator Progress</h4>
                        </div>
                        <p className="roadblock-quote">
                            "Progress is a lagging indicator... noticing changes in strength or fit weeks later... sometimes you don't see it until you are done with it."
                        </p>
                        <p className="roadblock-takeaway">
                            Participants have informal ways of noticing progress, but methods are inconsistent and easy to lose track of.
                        </p>
                    </div>

                    <div className="roadblock-card">
                        <div className="roadblock-header">
                            <span className="roadblock-num">03</span>
                            <h4 className="roadblock-title">Social Motivation Gap</h4>
                        </div>
                        <p className="roadblock-quote">
                            "Workout partner maintains consistency... co-workers who got them into golf... friends' encouragement... but losing motivation when a community fell apart or competition made it stop feeling fun."
                        </p>
                        <p className="roadblock-takeaway">
                            Motivation is social. Points toward an accountability or community layer, not just a personal log.
                        </p>
                    </div>

                    <div className="roadblock-card">
                        <div className="roadblock-header">
                            <span className="roadblock-num">04</span>
                            <h4 className="roadblock-title">Fragmented Informal Records</h4>
                        </div>
                        <p className="roadblock-quote">
                            "Writing achievements in a notebook, keeping a running playlist of songs learned on guitar, or pointing to a finished painting or 6-month cosplay as the record."
                        </p>
                        <p className="roadblock-takeaway">
                            People keep informal records, but lack anything that keeps records accessible or connects across activities.
                        </p>
                    </div>
                </div>

                <div className="slide-columns-2" style={{ marginTop: '1.5rem' }}>
                    <div className="slide-card" style={{ borderLeft: '4px solid var(--purple)' }}>
                        <h4 style={{ margin: '0 0 0.5rem', color: 'var(--purple)' }}>Pillar 1: Personalized Learning Journey</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            Meets people where they are when starting something new, rather than assuming a single onboarding path works for every activity.
                        </p>
                    </div>
                    <div className="slide-card" style={{ borderLeft: '4px solid var(--purple-light)' }}>
                        <h4 style={{ margin: '0 0 0.5rem', color: 'var(--purple-light)' }}>Pillar 2: Achievement Portfolio</h4>
                        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                            Gives structure to achievements, milestones, and informal records participants already keep in notebooks, playlists, and phone galleries.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Concept Selection & Pivot Matrix */}
            <section id="pres-pivots" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Compass size={14} />
                        <span>Idea Validation & Evolution</span>
                    </div>
                    <h2 className="slide-title">Five Concepts Evaluated: What Worked & What We Pivoted From</h2>
                    <p className="slide-subtitle">
                        Through interviews and team discussions, we evaluated five candidate ideas and documented our pivot rationale.
                    </p>
                </div>

                <div className="slide-columns-2">
                    <div className="slide-card" style={{ border: '2px solid #10b981', gridColumn: '1 / -1' }}>
                        <div className="slide-card-header">
                            <span style={{ background: '#10b981', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 800 }}>
                                SELECTED TOP PICK
                            </span>
                            <h3 className="slide-card-title">SkillUp (Recreational Activity Tracker)</h3>
                        </div>
                        <div className="slide-card-body">
                            <p><strong>Original Concept:</strong> Simply recording recreational activities and personal accomplishments (books read, recipes cooked).</p>
                            <p><strong>Pivots & Expansion:</strong> Expanded to include learning resources, instructor feedback, skill recognition, and sharing with friends. Replaced initial competitive pressure with personalized progress tracking, individual achievements, and community support.</p>
                            <p style={{ color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem', marginTop: '0.5rem' }}>
                                <CheckCircle2 size={16} /> Chosen as final project.
                            </p>
                        </div>
                    </div>

                    <div className="slide-card" style={{ opacity: 0.95 }}>
                        <div className="slide-card-header">
                            <span style={{ background: '#f59e0b', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 800 }}>
                                PIVOTED FROM
                            </span>
                            <h3 className="slide-card-title">Budget Simulation (Team's 2nd Choice)</h3>
                        </div>
                        <div className="slide-card-body">
                            <p><strong>Concept:</strong> Helping individuals evaluate purchases and predict purchase effects to make better financial decisions.</p>
                            <p><strong>Why Abandoned:</strong> Interviews showed budgeting challenges exist, but responses did not provide a clear direction on how to create a solution distinct from existing tools. Missing actionable mechanics.</p>
                        </div>
                    </div>

                    <div className="slide-card" style={{ opacity: 0.9 }}>
                        <div className="slide-card-header">
                            <span style={{ background: '#ef4444', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 800 }}>
                                ABANDONED
                            </span>
                            <h3 className="slide-card-title">Picture Exploration</h3>
                        </div>
                        <div className="slide-card-body">
                            <p><strong>Concept:</strong> Helping users update and view recent images for locations they might want to explore.</p>
                            <p><strong>Why Abandoned:</strong> Interviews showed participants already find recent information through Google and existing platforms. No significant problem requiring a new platform.</p>
                        </div>
                    </div>

                    <div className="slide-card" style={{ opacity: 0.9 }}>
                        <div className="slide-card-header">
                            <span style={{ background: '#ef4444', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 800 }}>
                                ABANDONED
                            </span>
                            <h3 className="slide-card-title">Item Holder</h3>
                        </div>
                        <div className="slide-card-body">
                            <p><strong>Concept:</strong> Providing a service allowing individuals to reserve items they were interested in purchasing but could not immediately afford and obtain.</p>
                            <p><strong>Why Abandoned:</strong> Evaluated concept revealed significant financial and operational risks, including potential fraudulent transactions, scams, and financial losses associated with holding and reserving items.</p>
                        </div>
                    </div>

                    <div className="slide-card" style={{ opacity: 0.9 }}>
                        <div className="slide-card-header">
                            <span style={{ background: '#ef4444', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 800 }}>
                                ABANDONED
                            </span>
                            <h3 className="slide-card-title">Planning and Scheduling with Forceful Pictures</h3>
                        </div>
                        <div className="slide-card-body">
                            <p><strong>Concept:</strong> Helping individuals improve their time management and be accountable for completing scheduled activities by requiring photo proof.</p>
                            <p><strong>Why Abandoned:</strong> Evaluated feedback showed requiring users to provide photo evidence felt frustrating and inconvenient instead of encouraging. Interviews showed no user demand for this enforcement system and zero business potential.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Strategy-to-Project Chain */}
            <section id="pres-strategy" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <TrendingUp size={14} />
                        <span>Strategic Alignment</span>
                    </div>
                    <h2 className="slide-title">Business Strategy: The Strategy-to-Project Chain</h2>
                    <p className="slide-subtitle">
                        Every technical capability in SkillUp connects to a 4-step strategic chain establishing business value.
                    </p>
                </div>

                <div className="strategy-chain-flow">
                    <div className="strategy-step-card">
                        <div className="step-num-pill">1</div>
                        <h4 className="step-title">The Business Need</h4>
                        <p className="step-content">
                            Individuals encounter difficulties starting recreational activities, remaining persistent, finding resources, and tracking achievements. Many depend on memory tracking and lack a formal tracking method, constrained by limited time, finances, or experience.
                        </p>
                    </div>

                    <div className="strategy-step-card">
                        <div className="step-num-pill">2</div>
                        <h4 className="step-title">Existing Platforms</h4>
                        <p className="step-content">
                            Platforms like Skillshare organize learning around predefined courses and certificates. Unlike these, SkillUp treats learning as a continuous, personalized process where users document achievements through a lasting portfolio without being locked into rigid courses.
                        </p>
                    </div>

                    <div className="strategy-step-card">
                        <div className="step-num-pill">3</div>
                        <h4 className="step-title">Business Objective</h4>
                        <p className="step-content">
                            Develop a centralized platform making skill development accessible, organized, engaging, and rewarding. Enables users to establish personal goals, track development across activities, document accomplishments, connect with peers, and access instructors.
                        </p>
                    </div>

                    <div className="strategy-step-card">
                        <div className="step-num-pill">4</div>
                        <h4 className="step-title">Expected Business Value</h4>
                        <p className="step-content">
                            Multi-sided value: visibility and peer support for learners; paid instructional service opportunities for instructors; learning program and certification distribution for educational institutions and outside organizations.
                        </p>
                    </div>
                </div>

                <div className="slide-card" style={{ marginTop: '1.5rem', background: 'var(--background)' }}>
                    <div className="slide-card-header">
                        <Award size={18} color="var(--purple)" />
                        <h4 style={{ margin: 0 }}>Stakeholder Value Distribution</h4>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '0.75rem' }}>
                        <div style={{ fontSize: '0.85rem' }}>
                            <strong style={{ color: 'var(--purple)' }}>Users / Learners:</strong>
                            <p style={{ margin: '0.25rem 0 0', color: 'var(--text-secondary)' }}>Greater visibility into learning progress, easier access to resources, community peer support.</p>
                        </div>
                        <div style={{ fontSize: '0.85rem' }}>
                            <strong style={{ color: 'var(--purple)' }}>Instructors:</strong>
                            <p style={{ margin: '0.25rem 0 0', color: 'var(--text-secondary)' }}>Direct way to reach interested learners and offer paid instructional services.</p>
                        </div>
                        <div style={{ fontSize: '0.85rem' }}>
                            <strong style={{ color: 'var(--purple)' }}>Institutions:</strong>
                            <p style={{ margin: '0.25rem 0 0', color: 'var(--text-secondary)' }}>Provide learning programs, certifications, and educational resources to active users.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Scope Boundary Board */}
            <section id="pres-scope" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Layers size={14} />
                        <span>Scope Governance</span>
                    </div>
                    <h2 className="slide-title">Project Charter: Scope Boundary Board</h2>
                    <p className="slide-subtitle">
                        Explicitly defining In-Scope, Out-of-Scope, and Deferred boundaries for the SkillUp platform.
                    </p>
                </div>

                <div className="scope-pres-grid">
                    {/* IN */}
                    <div className="scope-pres-col scope-col-in">
                        <div className="scope-col-header">
                            <h3 className="scope-col-title">
                                <CheckCircle2 size={18} />
                                <span>In (Release 1)</span>
                            </h3>
                            <span className="scope-count-badge">11 Items</span>
                        </div>
                        <ul className="scope-items-list">
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Friend/Follower System</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Accountability Partner</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Q/A Threads</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Progress Tracking</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Learning Resources</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Activity Event Posting (Local/Non-local)</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Log Activities</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Goal settings</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Instructor search directory</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Instructor profiles</li>
                            <li className="scope-item-pill"><Check size={14} color="#10b981" /> Instructor booking/request</li>
                        </ul>
                    </div>

                    {/* OUT */}
                    <div className="scope-pres-col scope-col-out">
                        <div className="scope-col-header">
                            <h3 className="scope-col-title">
                                <XCircle size={18} />
                                <span>Out</span>
                            </h3>
                            <span className="scope-count-badge">7 Items</span>
                        </div>
                        <ul className="scope-items-list">
                            <li className="scope-item-pill"><XCircle size={14} color="#ef4444" /> Cost estimator for classes/gear</li>
                            <li className="scope-item-pill"><XCircle size={14} color="#ef4444" /> Expense log per activity</li>
                            <li className="scope-item-pill"><XCircle size={14} color="#ef4444" /> Spending analytics dashboard</li>
                            <li className="scope-item-pill"><XCircle size={14} color="#ef4444" /> Membership/subscription tracker</li>
                            <li className="scope-item-pill"><XCircle size={14} color="#ef4444" /> Monthly budget alerts</li>
                            <li className="scope-item-pill"><XCircle size={14} color="#ef4444" /> Price comparison for instructors/gear</li>
                            <li className="scope-item-pill"><XCircle size={14} color="#ef4444" /> Savings goal for upcoming events</li>
                        </ul>
                    </div>

                    {/* DEFERRED */}
                    <div className="scope-pres-col scope-col-deferred">
                        <div className="scope-col-header">
                            <h3 className="scope-col-title">
                                <Clock size={18} />
                                <span>Deferred</span>
                            </h3>
                            <span className="scope-count-badge">8 Items</span>
                        </div>
                        <ul className="scope-items-list">
                            <li className="scope-item-pill"><Clock size={14} color="#f59e0b" /> Sharable progression cards</li>
                            <li className="scope-item-pill"><Clock size={14} color="#f59e0b" /> Activity Feed</li>
                            <li className="scope-item-pill"><Clock size={14} color="#f59e0b" /> Integration with wearable fitness</li>
                            <li className="scope-item-pill"><Clock size={14} color="#f59e0b" /> Activity Leaderboards</li>
                            <li className="scope-item-pill"><Clock size={14} color="#f59e0b" /> Activity Quests</li>
                            <li className="scope-item-pill"><Clock size={14} color="#f59e0b" /> Social Media Posting</li>
                            <li className="scope-item-pill"><Clock size={14} color="#f59e0b" /> Local businesses tied to community hubs</li>
                            <li className="scope-item-pill"><Clock size={14} color="#f59e0b" /> Earn and Obtain Certificates</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. Governance: Constraints, Assumptions & Success Criteria */}
            <section id="pres-governance" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <ShieldAlert size={14} />
                        <span>Charter Governance</span>
                    </div>
                    <h2 className="slide-title">Constraints, Assumptions & Success Criteria</h2>
                    <p className="slide-subtitle">
                        Every constraint, working assumption, and measurable success criterion from the Project Charter.
                    </p>
                </div>

                <div className="slide-columns-2">
                    {/* Constraints */}
                    <div className="slide-card">
                        <h3 style={{ margin: '0 0 1rem', color: 'var(--purple)', fontSize: '1.15rem' }}>
                            Charter Constraints (8 Items)
                        </h3>
                        <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            <li><strong>Budget:</strong> Everything is free for now.</li>
                            <li><strong>Timeline/schedule:</strong> Delivered within project timeline set by due date, restricting time for implementing and testing all features.</li>
                            <li><strong>Resource/technology:</strong> Constraints relating to programming skills, time, hardware, software, and external resources of the dev team.</li>
                            <li><strong>Dev team availability:</strong> Development done based on availability of the development team.</li>
                            <li><strong>Feature constraints:</strong> Not all features available in v1; some deferred to future releases.</li>
                            <li><strong>Content/data constraints:</strong> Learning materials, certifications, instructors, and activity details limited to what is available to dev team.</li>
                            <li><strong>User privacy and security:</strong> The app must ensure that user accounts and progress data is secure.</li>
                            <li><strong>Third-party resources:</strong> Features relying on third-party platforms are subject to availability and service changes.</li>
                        </ul>
                    </div>

                    {/* Assumptions & Success Criteria */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                        <div className="slide-card">
                            <h3 style={{ margin: '0 0 0.75rem', color: 'var(--purple)', fontSize: '1.15rem' }}>
                                Charter Assumptions (5 Items)
                            </h3>
                            <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                <li>Users have different methods for measuring progress depending on activity type.</li>
                                <li>Users may participate in multiple recreational activities at once.</li>
                                <li>Users have varying experience levels across activities.</li>
                                <li>Users benefit from having activities, goals, and progress organized in a centralized system.</li>
                                <li>Social support, reminders, or accountability may help users remain engaged.</li>
                            </ul>
                        </div>

                        <div className="slide-card" style={{ background: 'rgba(124, 58, 237, 0.05)' }}>
                            <h3 style={{ margin: '0 0 0.75rem', color: 'var(--purple)', fontSize: '1.15rem' }}>
                                Charter Success Criteria (6 Items)
                            </h3>
                            <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                                <li><strong>Launch Traction:</strong> Influx of new users, active engagement, and expanding user base.</li>
                                <li><strong>Marketplace Execution:</strong> Active users booking paid sessions with sustainable revenue.</li>
                                <li><strong>Skill Progress:</strong> Measurable improvement, goal setting, progress tracking, and certificates.</li>
                                <li><strong>Schedule Adherence:</strong> Milestones completed on schedule; unexpected delays managed correctly.</li>
                                <li><strong>User Retention:</strong> Users consistently log activities and provide feedback for improvements.</li>
                                <li><strong>Partner Supply:</strong> Influx of instructors and organizations willing to provide certifications.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Team Contributions & AI Protocol */}
            <section id="pres-team" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Users size={14} />
                        <span>Team Roster & Contributions</span>
                    </div>
                    <h2 className="slide-title">Individual Contributions & AI Use Disclosures</h2>
                    <p className="slide-subtitle">
                        Complete breakdown of each member's deliverables, ownership areas, review responsibilities, and AI protocol disclosures.
                    </p>
                </div>

                <div className="team-pres-grid">
                    {individualContributions.map((member) => (
                        <div key={member.name} className="team-pres-card">
                            <div className="team-pres-header">
                                <div className="team-pres-avatar">{member.avatar}</div>
                                <div className="team-pres-meta">
                                    <h4 className="team-pres-name">{member.name}</h4>
                                    <p className="team-pres-role">{member.role} • {member.date}</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {member.categories.map((cat) => (
                                    <div key={cat.title}>
                                        <strong style={{ fontSize: '0.84rem', color: 'var(--purple)' }}>{cat.title}:</strong>
                                        <ul className="team-pres-highlights" style={{ marginTop: '0.25rem' }}>
                                            {cat.items.map((item, idx) => (
                                                <li key={idx}>
                                                    {typeof item === 'string' ? item : (
                                                        <>
                                                            {item.text}
                                                            {item.subItems && (
                                                                <ul style={{ paddingLeft: '1rem', marginTop: '0.2rem' }}>
                                                                    {item.subItems.map((sub, sIdx) => (
                                                                        <li key={sIdx} style={{ listStyleType: 'circle' }}>{sub}</li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}

                                {member.reviewResponsibilities && (
                                    <div style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px dashed rgba(124, 58, 237, 0.2)' }}>
                                        <strong style={{ fontSize: '0.82rem', color: 'var(--text-primary)' }}>Review Responsibilities:</strong>
                                        <ul className="team-pres-highlights" style={{ marginTop: '0.2rem' }}>
                                            {member.reviewResponsibilities.map((r, rIdx) => (
                                                <li key={rIdx}>{r}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {member.aiDisclosure && (
                                    <div className="team-ai-pill">
                                        <strong style={{ color: 'var(--purple)' }}>AI Protocol ({member.aiDisclosure.toolUsed}):</strong>
                                        <p style={{ margin: '0.2rem 0', fontSize: '0.78rem' }}><strong>Stage:</strong> {member.aiDisclosure.stage}</p>
                                        <p style={{ margin: '0.2rem 0', fontSize: '0.78rem' }}><strong>Purpose:</strong> {member.aiDisclosure.purpose}</p>
                                        <p style={{ margin: '0.2rem 0', fontSize: '0.78rem' }}><strong>Changes:</strong> {member.aiDisclosure.changesOrRejected}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Sprint1PresentationView;
