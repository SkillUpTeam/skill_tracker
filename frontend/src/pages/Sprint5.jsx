import React, { useState, useEffect } from "react";
import SubNav from "../components/SubNav";
import SprintModeToggle from "../components/SprintModeToggle";
import Sprint5PresentationView from "../components/presentation/Sprint5PresentationView";
import { Eye, EyeOff } from "lucide-react";

const wireframes = [
    {
        file: 'Add_Activity.png',
        title: 'Add Activity Wireframe',
        path: '/documents/sprint5/Wireframe/Add_Activity.png',
        description: 'Form layout for logging an activity with title, short summary, photo attachments, session notes, activity category, type, date, and time.'
    },
    {
        file: 'Analysis.png',
        title: 'Analysis Wireframe',
        path: '/documents/sprint5/Wireframe/Analysis.png',
        description: 'Skill analysis screen featuring a media carousel for photos/videos, an interactive metric trend chart (Dribbles, Shots, Distance, Speed), and coach/teammate feedback cards.'
    },
    {
        file: 'Community.png',
        title: 'Community Wireframe',
        path: '/documents/sprint5/Wireframe/Community.png',
        description: 'Community discussion feed displaying user milestones and project posts with Cheer, Comment, and Save buttons alongside persistent bottom navigation.'
    },
    {
        file: 'Course_Details.png',
        title: 'Course Details Wireframe',
        path: '/documents/sprint5/Wireframe/Course_Details.png',
        description: 'Course overview screen presenting course cover media, instructor/institution details, date, description, content details, and an Enroll Now button.'
    },
    {
        file: 'Portfolio_Up.png',
        title: 'Portfolio Up Wireframe',
        path: '/documents/sprint5/Wireframe/Portfolio_Up.png',
        description: 'Dedicated project/portfolio post view allowing users to share a new portfolio milestone and request targeted feedback from peers.'
    }
];

const mockups = [
    {
        file: 'Portfolio.png',
        title: 'Portfolio Mockup',
        path: '/documents/sprint5/Mockups/Portfolio.png',
        description: 'High-fidelity user portfolio featuring profile metrics (42 Activities, 8 Skills, 183 Followers, 96 Following), skill category rings (Basketball, Flowers, Certs, Projects, Training), tabbed navigation (Activities, Media, Achievements), and a visual activity grid.'
    },
    {
        file: 'MyFeed.png',
        title: 'My Feed & Skill Progress Mockup',
        path: '/documents/sprint5/Mockups/MyFeed.png',
        description: 'High-fidelity skill feed showcasing Level 32 XP progress bar (1,420 / 2,000 XP), summary metric cards (24 Activities, 356 Hours, 21 Flower Types, 36 Orders, 14 Week Streak), and detailed activity cards with session stats.'
    },
    {
        file: 'Add_Activity.png',
        title: 'Add Activity Mockup',
        path: '/documents/sprint5/Mockups/Add_Activity.png',
        description: 'Refined mobile form for logging an activity incorporating peer feedback: spacious notes section, streamlined Activity and Type inputs, structured Date picker, Start/End time selectors, and primary Submit button.'
    },
    {
        file: 'Analysis.png',
        title: 'Skill Analysis & Tracking Mockup',
        path: '/documents/sprint5/Mockups/Analysis.png',
        description: 'Sport and activity progress view featuring photo/video carousel, interactive Statistic and Yearly dropdown filters, line chart with numeric Y-axis values showing Dribbles/Losses ratio over time, and dated coach feedback cards.'
    },
    {
        file: 'Portfolio_Management.png',
        title: 'Portfolio Project Management Mockup',
        path: '/documents/sprint5/Mockups/Portfolio_Management.png',
        description: 'Project management screen under user portfolio with filter tabs for Projects (4), Skills (8), and Certificates (4), project list with category badges (Woodcutting, Geometry), and prominent + Add Project button.'
    },
    {
        file: 'Course Details.png',
        title: 'Course Details Mockup',
        path: '/documents/sprint5/Mockups/Course Details.png',
        description: 'Course details screen for reviewing course information.'
    },
    {
        file: 'Discover.png',
        title: 'Discover Mockup',
        path: '/documents/sprint5/Mockups/Discover.png',
        description: 'Screen for exploring learning opportunities.'
    },
    {
        file: 'Filters.png',
        title: 'Filters Mockup',
        path: '/documents/sprint5/Mockups/Filters.png',
        description: 'Filter screen for refining discovery results.'
    },
    {
        file: 'Search.png',
        title: 'Search Mockup',
        path: '/documents/sprint5/Mockups/Search.png',
        description: 'Search screen for finding learning opportunities.'
    }
];

function Sprint5() {
    const [viewMode, setViewMode] = useState(() => {
        return localStorage.getItem('sprint_view_mode') || 'presentation';
    });

    useEffect(() => {
        localStorage.setItem('sprint_view_mode', viewMode);
    }, [viewMode]);

    const [isWireframesOpen, setIsWireframesOpen] = useState(true);
    const [isFeedbackOpen, setIsFeedbackOpen] = useState(true);
    const [isMockupsOpen, setIsMockupsOpen] = useState(true);

    const subNavLinks = [
        { id: 'wireframes', label: 'Wireframes' },
        { id: 'wireframe-feedback', label: 'Wireframe Feedback' },
        { id: 'mockups', label: 'Mockups' }
    ];

    return (
        <main className="sprint-page">
            {/* Sprint 5 Sub-Navigation (shown in Document Mode) */}
            {viewMode === 'document' && <SubNav links={subNavLinks} />}

            <div className="sprint-header" style={{ paddingBottom: '1rem' }}>
                <h1>Sprint 5</h1>
                <p>
                    Explore our Sprint 5 mobile wireframes, peer wireframe feedback synthesis from cross-team reviews, and high-fidelity UI mockups.
                </p>
            </div>

            {/* View Mode Switcher */}
            <SprintModeToggle
                mode={viewMode}
                setMode={setViewMode}
            />

            {viewMode === 'presentation' ? (
                <Sprint5PresentationView />
            ) : (
                <>
                    {/* Section 1: Wireframes */}
                    <div className="sprint-content">
                        <section id="wireframes" className="sprint-section">
                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Sprint 5 Wireframes</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsWireframesOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isWireframesOpen}
                                        aria-controls="wireframes-content"
                                    >
                                        {isWireframesOpen ? (
                                            <>
                                                <EyeOff size={16} />
                                                <span>Collapse Section</span>
                                            </>
                                        ) : (
                                            <>
                                                <Eye size={16} />
                                                <span>Expand Section</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {!isWireframesOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsWireframesOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsWireframesOpen(true); }}
                                    aria-label="Expand Wireframes section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Wireframes Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view all five Sprint 5 wireframes (Add Activity, Analysis, Community, Course Details, and Portfolio Up).
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Wireframes</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="wireframes-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '100%' }}>
                                    <p>
                                        View the five low-fidelity wireframes below or click any image to inspect full resolution in a new tab.
                                    </p>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', marginTop: '1.5rem' }}>
                                        {wireframes.map(({ file, title, path, description }) => (
                                            <article key={file} style={{ minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <h3>{title}</h3>
                                                    <a href={path} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
                                                        <img
                                                            src={path}
                                                            alt={title}
                                                            loading="lazy"
                                                            style={{
                                                                width: '100%',
                                                                height: '460px',
                                                                objectFit: 'contain',
                                                                borderRadius: '8px',
                                                                border: '1px solid rgba(124, 58, 237, 0.2)',
                                                                background: 'rgba(0, 0, 0, 0.04)',
                                                                padding: '0.5rem'
                                                            }}
                                                        />
                                                    </a>
                                                    <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                                        {description}
                                                    </p>
                                                </div>
                                                <a href={path} download={file} className="pdf-button" style={{ marginTop: '0.75rem', alignSelf: 'flex-start' }}>
                                                    Download PNG
                                                </a>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Section 2: Wireframe Feedback */}
                    <div className="sprint-content">
                        <section id="wireframe-feedback" className="sprint-section">
                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Wireframe Feedback</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsFeedbackOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isFeedbackOpen}
                                        aria-controls="wireframe-feedback-content"
                                    >
                                        {isFeedbackOpen ? (
                                            <>
                                                <EyeOff size={16} />
                                                <span>Collapse Section</span>
                                            </>
                                        ) : (
                                            <>
                                                <Eye size={16} />
                                                <span>Expand Section</span>
                                            </>
                                        )}
                                    </button>

                                    <a
                                        href="/documents/sprint5/Wireframe_Feedback.pdf"
                                        download="Wireframe_Feedback.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {!isFeedbackOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsFeedbackOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsFeedbackOpen(true); }}
                                    aria-label="Expand Wireframe Feedback section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Wireframe Feedback Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view peer review notes from Teams 1, 4, 6, and 8 along with the downloadable PDF document.
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Feedback</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="wireframe-feedback-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '100%' }}>
                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3>1. General</h3>
                                        <ul>
                                            <li><strong>Team 1:</strong> Mentioned that the navigation back arrow was too large.</li>
                                        </ul>
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3>2. Analysis</h3>
                                        <ul>
                                            <li>
                                                <strong>Team 1:</strong> Mentioned that the graph was unclear on how it worked. Suggested adding more values and numbers to explain what it represents, making it clearer that the analysis labels (Dribbles, Shots, Distance, Speed) are clickable options, and styling "Yearly" like a dropdown instead of just a title.
                                            </li>
                                            <li>
                                                <strong>Team 1 &amp; Team 6:</strong> Both commented that the screen was too cluttered from the amount of text and props. Suggested making buttons collapsible for less clutter, spacing the bottom bar icons out more evenly, changing the subject text box so it does not look like a button (e.g., using an icon), and balancing the top bar by removing the app logo so the icon and title are even.
                                            </li>
                                            <li>
                                                <strong>Team 6:</strong> Mentioned that the feedback section leaves too much empty room; suggested separating the sender into their own circle outside the comment and adding an option to leave an anonymous comment.
                                            </li>
                                            <li>
                                                <strong>Team 8:</strong> Had questions about the graph and how it worked, and liked both the feedback section and the photos/videos section—agreeing it is a very useful feature for physical activities and sports where measuring progress or form is difficult.
                                            </li>
                                        </ul>
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3>3. Course Information</h3>
                                        <ul>
                                            <li><strong>Team 4:</strong> Found the wireframe simple, effective, straight to the point, and easy to navigate.</li>
                                            <li><strong>Team 4:</strong> Recommended keeping a consistent navigation bar across screens.</li>
                                            <li><strong>Team 8:</strong> Suggested adding a dropdown to the content details so users can see the basic course schedule first and click to expand a more detailed course plan.</li>
                                            <li><strong>Team 8:</strong> Suggested allowing users to potentially create courses themselves to share with others and allow other users to participate.</li>
                                        </ul>
                                    </div>

                                    <div style={{ marginBottom: '2rem' }}>
                                        <h3>4. Add Activity</h3>
                                        <ul>
                                            <li>
                                                <strong>Team 1:</strong> Mentioned that logos/icons are too large and some may not be necessary (such as the one next to the title), and that the text is too large relative to the screen size. Suggested making the description notes and description box larger.
                                            </li>
                                            <li>
                                                <strong>Team 6:</strong> Mentioned that Activity, Type, Date, and Time are also too large and could be displayed vertically instead of in a 2x2 grid.
                                            </li>
                                        </ul>
                                    </div>

                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>5. Discussion Feed</h3>
                                        <ul>
                                            <li>
                                                <strong>Team 1 &amp; Team 6:</strong> Both teams noted that the action buttons could be collapsible to save space and let users access those functions only when needed.
                                            </li>
                                            <li>
                                                <strong>Team 1:</strong> Commented that the screen felt cluttered because the text and icons were too close with too much information at once; suggested removing small details and keeping the main titles only.
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h3>Original Feedback Document (PDF Preview)</h3>
                                        <iframe
                                            src="/documents/sprint5/Wireframe_Feedback.pdf"
                                            title="Sprint 5 Wireframe Feedback PDF"
                                            loading="lazy"
                                            style={{
                                                width: '100%',
                                                height: '560px',
                                                border: '1px solid var(--text-secondary)',
                                                borderRadius: '8px',
                                                marginTop: '0.75rem'
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Section 3: High-Fidelity Mockups */}
                    <div className="sprint-content">
                        <section id="mockups" className="sprint-section">
                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Sprint 5 High-Fidelity Mockups</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsMockupsOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isMockupsOpen}
                                        aria-controls="mockups-content"
                                    >
                                        {isMockupsOpen ? (
                                            <>
                                                <EyeOff size={16} />
                                                <span>Collapse Section</span>
                                            </>
                                        ) : (
                                            <>
                                                <Eye size={16} />
                                                <span>Expand Section</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {!isMockupsOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsMockupsOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsMockupsOpen(true); }}
                                    aria-label="Expand Mockups section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Mockups Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view our {mockups.length} high-fidelity mobile mockups (Portfolio, My Feed, Add Activity, Skill Analysis, Portfolio Management, Course Details, Discover, Filters, and Search).
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Mockups</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="mockups-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '100%' }}>
                                    <p>
                                        Our high-fidelity mockups incorporate peer feedback by introducing a consistent bottom navigation bar (Explore, Community, Add Activity, Portfolio), balanced typography, clean white/purple surface hierarchy, and scannable progress indicators.
                                    </p>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2.5rem', marginTop: '1.5rem' }}>
                                        {mockups.map(({ file, title, path, description }) => (
                                            <article key={file} style={{ minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                                <div>
                                                    <h3>{title}</h3>
                                                    <a href={path} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
                                                        <img
                                                            src={path}
                                                            alt={title}
                                                            loading="lazy"
                                                            style={{
                                                                width: '100%',
                                                                height: '560px',
                                                                objectFit: 'contain',
                                                                borderRadius: '12px',
                                                                border: '1px solid rgba(124, 58, 237, 0.2)',
                                                                background: 'rgba(124, 58, 237, 0.03)',
                                                                padding: '0.75rem'
                                                            }}
                                                        />
                                                    </a>
                                                    <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                                        {description}
                                                    </p>
                                                </div>
                                                <a href={path} download={file} className="pdf-button" style={{ marginTop: '0.75rem', alignSelf: 'flex-start' }}>
                                                    Download PNG
                                                </a>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>
                </>
            )}
        </main>
    );
}

export default Sprint5;

