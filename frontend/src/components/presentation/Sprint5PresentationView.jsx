import React from 'react';
import {
    Layout,
    Smartphone,
    MessageSquare,
    CheckCircle2,
    Layers,
    Download,
    Sparkles
} from 'lucide-react';
import './Presentation.css';

const wireframes = [
    {
        file: 'Add_Activity.png',
        title: 'Add Activity',
        path: '/documents/sprint5/Wireframe/Add_Activity.png',
        description: 'Form flow for logging a new activity with reading progress, photos, notes, activity category/type, date, and time.'
    },
    {
        file: 'Analysis.png',
        title: 'Activity Analysis',
        path: '/documents/sprint5/Wireframe/Analysis.png',
        description: 'Progress tracking view featuring media uploads, metric trend charts (Dribbles, Shots, Distance, Speed), and coach/teammate feedback.'
    },
    {
        file: 'Community.png',
        title: 'Community Feed',
        path: '/documents/sprint5/Wireframe/Community.png',
        description: 'Social feed displaying peer milestones and project updates with Cheer, Comment, and Save actions plus bottom navigation.'
    },
    {
        file: 'Course_Details.png',
        title: 'Course Details',
        path: '/documents/sprint5/Wireframe/Course_Details.png',
        description: 'Structured course overview showing course banner, instructor/institution, schedule date, description, content details, and enrollment CTA.'
    },
    {
        file: 'Portfolio_Up.png',
        title: 'Portfolio Post',
        path: '/documents/sprint5/Wireframe/Portfolio_Up.png',
        description: 'Focused milestone card for sharing a newly published project or portfolio version and requesting community feedback.'
    }
];

const mockups = [
    {
        file: 'Portfolio.png',
        title: 'User Portfolio Mockup',
        path: '/documents/sprint5/Mockups/Portfolio.png',
        description: 'High-fidelity mobile view showcasing user profile stats (Activities, Skills, Followers, Following), skill highlight rings (Basketball, Flowers, Certs, Projects, Training), and a clean 3-column visual activity grid.'
    },
    {
        file: 'MyFeed.png',
        title: 'Skill & Activity Feed Mockup',
        path: '/documents/sprint5/Mockups/MyFeed.png',
        description: 'High-fidelity skill detail and feed view featuring Level & XP progress bar, summary stat pills (Activities, Hours, Flower Types, Orders, Week Streak), and detailed activity cards with metrics.'
    },
    {
        file: 'Add_Activity.png',
        title: 'Add Activity Mockup',
        path: '/documents/sprint5/Mockups/Add_Activity.png',
        description: 'Redesigned form flow responding to peer critique: generous notes input, stacked Activity and Type fields, structured Date picker, Start/End time cards, and bottom navigation.'
    },
    {
        file: 'Analysis.png',
        title: 'Skill Analysis & Tracking Mockup',
        path: '/documents/sprint5/Mockups/Analysis.png',
        description: 'Physical sport and skill tracking view with media carousel, explicit dropdown menus for Statistic and Yearly timeframes, ratio trend graph with numeric scales, and dated feedback entries.'
    },
    {
        file: 'Portfolio_Management.png',
        title: 'Portfolio Project Management Mockup',
        path: '/documents/sprint5/Mockups/Portfolio_Management.png',
        description: 'Portfolio project showcase with category pill filters (Projects, Skills, Certificates), tagged project cards (Woodcutting, Geometry), contextual menus, and a prominent "+ Add Project" action.'
    }
];

const feedbackHighlights = [
    {
        area: 'General Navigation',
        teams: 'Team 1',
        summary: 'Back navigation arrow was too large relative to the header bar and needed proportional scaling.'
    },
    {
        area: 'Analysis Screen',
        teams: 'Team 1, Team 6, Team 8',
        summary: 'Add clearer axis values/numbers to the graph, style metric labels as clickable options, make "Yearly" an explicit dropdown, declutter text/props with collapsible sections, and separate feedback sender avatars with an anonymous comment option. Team 8 praised the media + feedback combination for physical sports.'
    },
    {
        area: 'Course Information',
        teams: 'Team 4, Team 8',
        summary: 'Praised as simple, effective, and easy to navigate. Suggested maintaining a consistent bottom navigation bar, adding a collapsible dropdown for detailed course schedules, and allowing users to create and share their own courses.'
    },
    {
        area: 'Add Activity',
        teams: 'Team 1, Team 6',
        summary: 'Reduce icon/logo and text sizes relative to the mobile viewport, expand the description and notes input boxes, and stack Activity, Type, Date, and Time vertically rather than in a cramped 2x2 grid.'
    },
    {
        area: 'Discussion / Community Feed',
        teams: 'Team 1, Team 6',
        summary: 'Make action buttons collapsible to save vertical space and reduce visual clutter by increasing spacing between text and icons and focusing on primary titles.'
    }
];

function Sprint5PresentationView() {
    const quickLinks = [
        { id: 'pres-wireframes', label: 'Wireframes' },
        { id: 'pres-wireframe-feedback', label: 'Wireframe Feedback' },
        { id: 'pres-mockups', label: 'High-Fidelity Mockups' }
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

            {/* 1. Wireframes Section */}
            <section id="pres-wireframes" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Layout size={14} />
                        <span>Low-Fidelity Design Exploration</span>
                    </div>
                    <h2 className="slide-title">Sprint 5 Wireframes</h2>
                    <p className="slide-subtitle">
                        Five core mobile wireframes translating our Sprint 4 sketches into structured screen layouts for activity logging, skill analysis, community sharing, course discovery, and portfolio updates.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
                    {wireframes.map(({ file, title, path, description }) => (
                        <div className="slide-card" key={file} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div className="slide-card-header" style={{ marginBottom: '0.75rem' }}>
                                    <div className="slide-card-icon">
                                        <Layers size={18} />
                                    </div>
                                    <h4 className="slide-card-title">{title}</h4>
                                </div>
                                <a href={path} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} wireframe in new tab`}>
                                    <img
                                        src={path}
                                        alt={`${title} Wireframe`}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '380px',
                                            objectFit: 'contain',
                                            borderRadius: '10px',
                                            background: 'rgba(0, 0, 0, 0.2)',
                                            padding: '0.5rem',
                                            marginBottom: '0.85rem'
                                        }}
                                    />
                                </a>
                                <p className="slide-card-body" style={{ marginBottom: '1rem' }}>
                                    {description}
                                </p>
                            </div>
                            <a
                                href={path}
                                download={file}
                                className="pdf-button"
                                style={{ alignSelf: 'flex-start', gap: '0.4rem' }}
                            >
                                <Download size={15} />
                                <span>Download PNG</span>
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Peer Wireframe Feedback Section */}
            <section id="pres-wireframe-feedback" className="presentation-section-card">
                <div className="slide-header-block">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div className="slide-badge-pill">
                                <MessageSquare size={14} />
                                <span>Cross-Team Critique & Synthesis</span>
                            </div>
                            <h2 className="slide-title">Wireframe Feedback</h2>
                            <p className="slide-subtitle">
                                Constructive critique gathered from Teams 1, 4, 6, and 8 across our wireframe screens, guiding our transition from dark low-fidelity wireframes to clean, scannable high-fidelity mockups.
                            </p>
                        </div>
                        <a
                            href="/documents/sprint5/Wireframe_Feedback.pdf"
                            download="Wireframe_Feedback.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            Download PDF
                        </a>
                    </div>
                </div>

                <div className="slide-columns-2">
                    {feedbackHighlights.map(({ area, teams, summary }) => (
                        <div className="slide-card" key={area}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--purple)', fontWeight: 700 }}>
                                    {area}
                                </h4>
                                <span style={{
                                    padding: '0.2rem 0.65rem',
                                    borderRadius: '999px',
                                    background: 'rgba(124, 58, 237, 0.1)',
                                    color: 'var(--purple)',
                                    fontSize: '0.75rem',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap'
                                }}>
                                    {teams}
                                </span>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {summary}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. High-Fidelity Mockups Section */}
            <section id="pres-mockups" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Sparkles size={14} />
                        <span>High-Fidelity UI Design</span>
                    </div>
                    <h2 className="slide-title">Sprint 5 Mockups</h2>
                    <p className="slide-subtitle">
                        Polished mobile mockups incorporating peer feedback: unified bottom navigation bar, decluttered card hierarchy, clear typography scales, and scannable progress metrics.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '1.75rem' }}>
                    {mockups.map(({ file, title, path, description }) => (
                        <div className="slide-card" key={file} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <div>
                                <div className="slide-card-header" style={{ marginBottom: '0.75rem' }}>
                                    <div className="slide-card-icon">
                                        <Smartphone size={18} />
                                    </div>
                                    <h4 className="slide-card-title">{title}</h4>
                                </div>
                                <a href={path} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} in new tab`}>
                                    <img
                                        src={path}
                                        alt={title}
                                        loading="lazy"
                                        style={{
                                            width: '100%',
                                            height: '520px',
                                            objectFit: 'contain',
                                            borderRadius: '12px',
                                            background: 'rgba(124, 58, 237, 0.04)',
                                            padding: '0.75rem',
                                            marginBottom: '1rem'
                                        }}
                                    />
                                </a>
                                <p className="slide-card-body" style={{ marginBottom: '1rem' }}>
                                    {description}
                                </p>
                            </div>
                            <a
                                href={path}
                                download={file}
                                className="pdf-button"
                                style={{ alignSelf: 'flex-start', gap: '0.4rem' }}
                            >
                                <Download size={15} />
                                <span>Download PNG</span>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Sprint5PresentationView;

