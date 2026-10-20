import React from 'react';
import {
    TrendingUp,
    ShieldAlert,
    Target,
    Compass,
    CheckCircle2,
    Search,
    AlertTriangle,
    FileText,
    ArrowRight,
    Users,
    Download
} from 'lucide-react';
import './Presentation.css';

function Sprint3PresentationView() {
    const quickLinks = [
        { id: 'pres-competitive-landscape', label: 'Competitive Landscape' },
        { id: 'pres-change-note', label: 'Change Note' },
        { id: 'pres-candidate-risks', label: 'Candidate Risks' }
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

            {/* 1. Competitive Landscape */}
            <section id="pres-competitive-landscape" className="presentation-section-card">
                <div className="slide-header-block">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div className="slide-badge-pill">
                                <Compass size={14} />
                                <span>Market Strategy & Competitor Analysis</span>
                            </div>
                            <h2 className="slide-title">Competitive Landscape</h2>
                            <p className="slide-subtitle">
                                Mapping direct, indirect, and status-quo competitors to identify market gaps, SkillUp opportunities, and ranked switching triggers.
                            </p>
                        </div>
                        <a
                            href="/documents/sprint3/Competitive Landscape.pdf"
                            download="Competitive Landscape.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            Download PDF
                        </a>
                    </div>
                </div>

                {/* Competitor Classification Map Cards */}
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    Competitor Classification Map
                </h3>
                <div className="slide-columns-2" style={{ marginBottom: '2rem' }}>
                    <div className="slide-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                            <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--purple)', fontWeight: 700 }}>Strava</h4>
                            <span style={{
                                padding: '0.2rem 0.65rem',
                                borderRadius: '999px',
                                background: 'rgba(239, 68, 68, 0.1)',
                                color: '#ef4444',
                                fontSize: '0.78rem',
                                fontWeight: 800,
                                textTransform: 'uppercase'
                            }}>
                                Direct Competitor
                            </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Records physical activities, tracks progress, and supports personal goals for fitness.
                        </p>
                    </div>

                    <div className="slide-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                            <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--purple)', fontWeight: 700 }}>Skillshare</h4>
                            <span style={{
                                padding: '0.2rem 0.65rem',
                                borderRadius: '999px',
                                background: 'rgba(124, 58, 237, 0.1)',
                                color: 'var(--purple)',
                                fontSize: '0.78rem',
                                fontWeight: 800,
                                textTransform: 'uppercase'
                            }}>
                                Indirect Competitor
                            </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Helps users learn new skills through course instead of tracking their activities.
                        </p>
                    </div>

                    <div className="slide-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                            <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--purple)', fontWeight: 700 }}>Everyday.app</h4>
                            <span style={{
                                padding: '0.2rem 0.65rem',
                                borderRadius: '999px',
                                background: 'rgba(124, 58, 237, 0.1)',
                                color: 'var(--purple)',
                                fontSize: '0.78rem',
                                fontWeight: 800,
                                textTransform: 'uppercase'
                            }}>
                                Indirect Competitor
                            </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Focuses on maintaining habits and consistency rather than measuring recreational skill progress.
                        </p>
                    </div>

                    <div className="slide-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                            <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--purple)', fontWeight: 700 }}>Manual Tracking</h4>
                            <span style={{
                                padding: '0.2rem 0.65rem',
                                borderRadius: '999px',
                                background: 'rgba(245, 158, 11, 0.12)',
                                color: '#d97706',
                                fontSize: '0.78rem',
                                fontWeight: 800,
                                textTransform: 'uppercase'
                            }}>
                                Status Quo
                            </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Users depend on memory, videos, notes, or personal feedback
                        </p>
                    </div>
                </div>

                {/* Comparison Matrix Table */}
                <div style={{ marginBottom: '2.5rem' }}>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                        Competitor Feature & Capability Matrix
                    </h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: '16%' }}>Category</th>
                                    <th style={{ width: '21%' }}>Strava</th>
                                    <th style={{ width: '21%' }}>Skillshare</th>
                                    <th style={{ width: '16%' }}>Everyday.app</th>
                                    <th style={{ width: '26%' }}>Status Quo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Main Purpose</strong></td>
                                    <td>Fitness activity tracking.</td>
                                    <td>Online courses for learning skills.</td>
                                    <td>Habit tracking and consistency building</td>
                                    <td>Informal progress tracking through their own habits and notes.</td>
                                </tr>
                                <tr>
                                    <td><strong>Strengths</strong></td>
                                    <td>Easy recording, statistics, community.</td>
                                    <td>Course access is simple. Instructions are clear. Certificate. 1-1 Sessions. Public discussion feed.</td>
                                    <td>Simple interface, daily habit streaks, color-coded grid visualization, highly flexible for any custom habit (tracking only).</td>
                                    <td>No need for app, its more familiar to use.</td>
                                </tr>
                                <tr>
                                    <td><strong>Limitations</strong></td>
                                    <td>Only sports and fitness activities, payment for goal tracking.</td>
                                    <td>Paid subscription to access the courses. No progress tracking thrughout the course.</td>
                                    <td>Focuses only on daily completion/streaks rather than measuring skill growth or technique improvement. Limited details per activity log. Heavily limited features in free version.</td>
                                    <td>Progress can be difficult to organize, compare and review over time.</td>
                                </tr>
                                <tr>
                                    <td><strong>Progress Tracking</strong></td>
                                    <td>Statistics, streaks, graphs.</td>
                                    <td>Minimal, the only progress tracking was project submission at the end of the course.</td>
                                    <td>Streaks, daily board check-ins, consistency percentages, and color intensity gradients.</td>
                                    <td>Track by memory, recordings, photos in gallery, feedback by sharing by messages or in person</td>
                                </tr>
                                <tr>
                                    <td><strong>Accomplishments</strong></td>
                                    <td>Badges by how many activities you have completed. Challenges and leaderboards</td>
                                    <td>Certificates of completion are earned at the end of the course and achievements with badges.</td>
                                    <td>Streak milestones, streak recovery features, and daily consistency streaks</td>
                                    <td>Personal milestones, completed activities, and them analyzing their own session.</td>
                                </tr>
                                <tr>
                                    <td><strong>SkillUp Opportunity</strong></td>
                                    <td style={{ color: 'var(--purple)', fontWeight: 600 }}>Track qualitative progress and larger range of activities</td>
                                    <td style={{ color: 'var(--purple)', fontWeight: 600 }}>Offer online courses as well, to encourage users to track their progress with SkillUp.</td>
                                    <td style={{ color: 'var(--purple)', fontWeight: 600 }}>Visuals can be a good inspiration for some of our tracking systems.</td>
                                    <td style={{ color: 'var(--purple)', fontWeight: 600 }}>Organize progress, activities, and accomplishments in a centralized platform</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Deep Dive Profiles & Ranked Switching Triggers */}
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                    In-Depth Teardowns & Ranked Switching Triggers
                </h3>
                <div className="slide-columns-2">
                    {/* Strava Detailed Profile */}
                    <div className="slide-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <span style={{
                                padding: '0.2rem 0.65rem',
                                borderRadius: '6px',
                                background: '#ef4444',
                                color: '#ffffff',
                                fontSize: '0.78rem',
                                fontWeight: 800,
                                textTransform: 'uppercase'
                            }}>
                                Direct • Fitness Activity & Performance Tracking
                            </span>
                            <h4 style={{ margin: '0.65rem 0 0.25rem', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                                Strava Competitive Teardown
                            </h4>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <p style={{ margin: 0 }}><strong>Strengths:</strong> Easy recording, detailed activity history, measurable statistics, community.</p>
                            <p style={{ margin: 0 }}><strong>Limitations:</strong> Strava focuses on measurable fitness statistics, such as time and distance. These measurements help track physical activities but does not directly track improvements in technique or skill. Also they have goal tracking within a paid subscription.</p>
                            <p style={{ margin: 0 }}><strong>Progress Tracking:</strong> Weekly statistics, streaks, historical performance, and graphs for activities.</p>
                            <p style={{ margin: 0 }}><strong>Accomplishments:</strong> Milestones badges for number of activities completed. There are also challenges you can complete. For different segments or routes there are leaderboards.</p>
                        </div>

                        <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            background: 'rgba(124, 58, 237, 0.08)',
                            borderLeft: '3px solid var(--purple)'
                        }}>
                            <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--purple)', marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                                SkillUp Opportunity
                            </strong>
                            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                                Allows users to track their skill development through personal goals, past accomplishments, recordings, and feedback in addition to numerical statisitcs. SkillUp can also expand the range of recreational activities where Strava is limited.
                            </p>
                        </div>

                        <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            background: 'var(--surface)',
                            border: '1px solid rgba(124, 58, 237, 0.16)'
                        }}>
                            <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                Ranked Switching Triggers
                            </strong>
                            <ol style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                                <li>Users may need to see improvements through completed accomplishments, comparison with past activities, recordings, and feedback instead of only using numerical statistics.</li>
                                <li>Users may want to track progress across different hobbies and recreational activities that are not part of Strava’s current options.</li>
                                <li>Users may need a free alternative to track their goals.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Skillshare Detailed Profile */}
                    <div className="slide-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <span style={{
                                padding: '0.2rem 0.65rem',
                                borderRadius: '6px',
                                background: 'var(--purple)',
                                color: '#ffffff',
                                fontSize: '0.78rem',
                                fontWeight: 800,
                                textTransform: 'uppercase'
                            }}>
                                Indirect • Online Courses for Learning Skills
                            </span>
                            <h4 style={{ margin: '0.65rem 0 0.25rem', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                                Skillshare Competitive Teardown
                            </h4>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <p style={{ margin: 0 }}><strong>Strengths:</strong> Course access simple and navigation. The instructions are clear. Certificates can be earned after course completion. 1-1 sessions can be purchased for personalized experience. Dicussion tab in course and in general for community discussions. Learning path for deepening skillsets with a set of courses together.</p>
                            <p style={{ margin: 0 }}><strong>Limitations:</strong> Paid subscription to access the courses and partake in discussions. The website does not allow any courses being taken while in the free tier and doesn’t allow posting and viewing other posts.</p>
                            <p style={{ margin: 0 }}><strong>Progress Tracking:</strong> No progress tracking for each individual course relies on the user to track their own progress. Closest it gets is submitting a project near the end of the course.</p>
                            <p style={{ margin: 0 }}><strong>Accomplishments:</strong> Badges earned for completing milestones such as taking a number of courses, submitting a number of projects, or starting a discussion. General accomplishments, nothing course specific.</p>
                        </div>

                        <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            background: 'rgba(124, 58, 237, 0.08)',
                            borderLeft: '3px solid var(--purple)'
                        }}>
                            <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--purple)', marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                                SkillUp Opportunity
                            </strong>
                            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                                Allows users to track their skill development through personal goals, past accomplishments, recordings, and feedback in addition to numerical statistics. SkillUp can also allow use of the app in a free account and with more deatiled analysis/features with a paid subscription, where SkillShare requires a subscription before anything. In addition, gives potential users of SkillShare a way to track their progress while taking courses.
                            </p>
                        </div>

                        <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            background: 'var(--surface)',
                            border: '1px solid rgba(124, 58, 237, 0.16)'
                        }}>
                            <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                Ranked Switching Triggers
                            </strong>
                            <ol style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                                <li><strong>Paywall frustration:</strong> SkillShare users who hit a paywall will or on a free tier will not be able to do anything. While SkillUp does allow usage of the app in the free tier.</li>
                                <li><strong>No Progress Tracking or growth:</strong> During or Finishing a course doesn’t show whether the learner’s skill has improved. Skill Up's recordings, feedback and past accomplishments let users compare their work over their journey.</li>
                                <li><strong>Using it alongside Skillshare:</strong> SkillUp doesn’t have to replace Skillshare. Users can track their progress in SkillUp while taking Skillshare courses, which makes it an easy first step that can lead to using SkillUp more over time.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Everyday Detailed Profile */}
                    <div className="slide-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <span style={{
                                padding: '0.2rem 0.65rem',
                                borderRadius: '6px',
                                background: 'var(--purple)',
                                color: '#ffffff',
                                fontSize: '0.78rem',
                                fontWeight: 800,
                                textTransform: 'uppercase'
                            }}>
                                Indirect • Daily Habit Tracking & Consistency
                            </span>
                            <h4 style={{ margin: '0.65rem 0 0.25rem', fontSize: '1.25rem', color: 'var(--text-primary)' }}>
                                Everyday Competitive Teardown
                            </h4>
                        </div>

                        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <p style={{ margin: 0 }}><strong>Strengths:</strong> Clean and simple interface, daily streak counters, visual color-coded boards, and easy habit logging across devices.</p>
                            <p style={{ margin: 0 }}><strong>Limitations:</strong> Everyday.app focuses purely on binary habit completion (did you do it or not?) and streak maintenance. It does not allow users to track actual skill development, upload media/recordings to analyze technique, or receive feedback on performance.</p>
                            <p style={{ margin: 0 }}><strong>Progress Tracking:</strong> Daily streak counters, visual calendar heatmaps, habit completion percentages, and historical consistency grids.</p>
                            <p style={{ margin: 0 }}><strong>Accomplishments:</strong> Milestone badges for maintaining daily streaks (e.g., 7-day, 30-day, 100-day streaks).</p>
                        </div>

                        <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            background: 'rgba(124, 58, 237, 0.08)',
                            borderLeft: '3px solid var(--purple)'
                        }}>
                            <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--purple)', marginBottom: '0.3rem', textTransform: 'uppercase' }}>
                                SkillUp Opportunity
                            </strong>
                            <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                                Allows users to track qualitative skill development, upload performance recordings, and analyze technique over time rather than just counting daily habit streaks. SkillUp fills the gap for users who want to know how much better they are getting at a recreational activity, not just how often they do it.
                            </p>
                        </div>

                        <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            background: 'var(--surface)',
                            border: '1px solid rgba(124, 58, 237, 0.16)'
                        }}>
                            <strong style={{ display: 'block', fontSize: '0.88rem', color: 'var(--text-primary)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                Ranked Switching Triggers
                            </strong>
                            <ol style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.87rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                                <li><strong>Focus on Skill Growth vs. Streaks:</strong> Users realize that maintaining a daily streak does not mean their skills or techniques are actually improving. SkillUp allows them to track real progress through media uploads, journal entries, and side-by-side performance comparisons.</li>
                                <li><strong>Lack of Detailed Activity Logs:</strong> Everyday.app only offers basic daily check-ins. Users looking to store media, detailed session notes, or qualitative feedback will switch to SkillUp for a centralized tracking hub.</li>
                                <li><strong>Non-Daily Recreational Hobbies:</strong> Many recreational skills (like golf, boxing, or jewelry making) are practiced weekly or periodically rather than daily, making streak-based habit trackers frustrating or unmotivated when a streak breaks. SkillUp caters to flexible, non-linear hobby progression.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Change Note */}
            <section id="pres-change-note" className="presentation-section-card">
                <div className="slide-header-block">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div className="slide-badge-pill">
                                <TrendingUp size={14} />
                                <span>Sprint 3 Success Criteria Evolution</span>
                            </div>
                            <h2 className="slide-title">Change Note</h2>
                            <p className="slide-subtitle">
                                Expanding our primary engagement definition from active recording to retrospective review and progress reflection.
                            </p>
                        </div>
                        <a
                            href="/documents/sprint3/Change Note and Candidate Risks.pdf"
                            download="Change Note and Candidate Risks.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            Download PDF
                        </a>
                    </div>
                </div>

                {/* Comparative Before & After Cards */}
                <div className="slide-columns-2" style={{ marginBottom: '1.5rem' }}>
                    <div className="slide-card">
                        <div className="slide-card-header">
                            <div className="slide-card-icon" style={{ background: 'rgba(124, 58, 237, 0.1)', color: 'var(--purple)' }}>
                                <FileText size={20} />
                            </div>
                            <h3 className="slide-card-title">Original Success Criterion</h3>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            Our original success criterion was based on that high retention rates, where users consistently log
                            activities and provide feedback for future improvements.
                        </p>
                    </div>

                    <div className="slide-card" style={{ borderColor: 'var(--purple)' }}>
                        <div className="slide-card-header">
                            <div className="slide-card-icon" style={{ background: 'rgba(124, 58, 237, 0.2)', color: 'var(--purple)' }}>
                                <Target size={20} />
                            </div>
                            <h3 className="slide-card-title">Expanded Success Criterion</h3>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.96rem', color: 'var(--text-primary)', lineHeight: 1.7, fontWeight: 500 }}>
                            But after doing research we have expanded to having users returning to review their previous activities,
                            instead of only recording activities.
                        </p>
                    </div>
                </div>

                {/* Research Findings & Strategic Rationale Card */}
                <div className="slide-card" style={{ marginTop: '1rem' }}>
                    <div className="slide-card-header" style={{ marginBottom: '1.25rem' }}>
                        <div className="slide-card-icon" style={{ background: 'rgba(124, 58, 237, 0.12)', color: 'var(--purple)' }}>
                            <Compass size={20} />
                        </div>
                        <div>
                            <h3 className="slide-card-title">Research Findings & Strategic Rationale</h3>
                            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                                Insights derived from user interviews and progress recognition behaviors
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                        <div style={{
                            padding: '1.25rem',
                            borderRadius: '10px',
                            background: 'var(--surface)',
                            border: '1px solid rgba(124, 58, 237, 0.15)'
                        }}>
                            <h4 style={{ margin: '0 0 0.5rem', color: 'var(--purple)', fontSize: '0.98rem' }}>
                                Natural Progress Recognition
                            </h4>
                            <p style={{ margin: 0, fontSize: '0.91rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                This changed since through our interviews we found that users could already see progress through
                                personal experience and coaching without needing logging. They were also able to see accomplishments
                                through their own works and recordings.
                            </p>
                        </div>

                        <div style={{
                            padding: '1.25rem',
                            borderRadius: '10px',
                            background: 'var(--surface)',
                            border: '1px solid rgba(124, 58, 237, 0.15)'
                        }}>
                            <h4 style={{ margin: '0 0 0.5rem', color: 'var(--purple)', fontSize: '0.98rem' }}>
                                Tracking vs. Reviewing
                            </h4>
                            <p style={{ margin: 0, fontSize: '0.91rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                We also found that there is a distinction between tracking statistics to see improvement and reviewing
                                to see where we can improve, that work together to have a better overview of an individual's skill journey.
                            </p>
                        </div>
                    </div>

                    <div style={{
                        marginTop: '1.25rem',
                        padding: '1.1rem 1.4rem',
                        borderRadius: '10px',
                        background: 'rgba(124, 58, 237, 0.08)',
                        borderLeft: '4px solid var(--purple)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.85rem'
                    }}>
                        <CheckCircle2 size={20} color="var(--purple)" style={{ flexShrink: 0 }} />
                        <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-primary)', fontWeight: 600, lineHeight: 1.6 }}>
                            If users return to review their previous accomplishments without adding anything new, that should still count as meaningful engagement with SkillUp.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Candidate Risks */}
            <section id="pres-candidate-risks" className="presentation-section-card">
                <div className="slide-header-block">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div className="slide-badge-pill" style={{ color: '#ef4444', borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.08)' }}>
                                <ShieldAlert size={14} />
                                <span>Sprint 3 Risk Governance</span>
                            </div>
                            <h2 className="slide-title">Candidate Risks</h2>
                            <p className="slide-subtitle">
                                Proactively identifying adoption obstacles, triggers from field interviews, risk ownership, and targeted mitigations.
                            </p>
                        </div>
                        <a
                            href="/documents/sprint3/Change Note and Candidate Risks.pdf"
                            download="Change Note and Candidate Risks.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            Download PDF
                        </a>
                    </div>
                </div>

                {/* Candidate Risk Card R1 */}
                <div className="slide-card" style={{ borderLeft: '4px solid #ef4444' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                            <span style={{
                                background: '#ef4444',
                                color: '#ffffff',
                                padding: '0.25rem 0.7rem',
                                borderRadius: '6px',
                                fontSize: '0.82rem',
                                fontWeight: 800,
                                letterSpacing: '0.04em'
                            }}>
                                CANDIDATE RISK – R1
                            </span>
                            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                                Informal Tracking & Value Proposition Risk
                            </span>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                            <span style={{
                                fontSize: '0.82rem',
                                padding: '0.25rem 0.65rem',
                                borderRadius: '999px',
                                background: 'rgba(124, 58, 237, 0.12)',
                                color: 'var(--purple)',
                                fontWeight: 600
                            }}>
                                Owner: Market Researcher
                            </span>
                        </div>
                    </div>

                    {/* Detailed Fields Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                        <div style={{
                            padding: '1.2rem',
                            borderRadius: '10px',
                            background: 'var(--surface)',
                            border: '1px solid rgba(124, 58, 237, 0.15)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <AlertTriangle size={17} color="#ef4444" />
                                <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                    Risk
                                </strong>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Potential users might prefer their current applications or informal tracking methods if SkillUp does not offer enough value to make it worth switching to.
                            </p>
                        </div>

                        <div style={{
                            padding: '1.2rem',
                            borderRadius: '10px',
                            background: 'var(--surface)',
                            border: '1px solid rgba(124, 58, 237, 0.15)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <Search size={17} color="var(--purple)" />
                                <strong style={{ fontSize: '0.92rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                    Trigger
                                </strong>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                During interviews, some participants showed little interest in recording their activities in a formal way because they could already recognize their progress through personal experience, while others did use existing applications
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                        <div style={{
                            padding: '1.2rem',
                            borderRadius: '10px',
                            background: 'rgba(16, 185, 129, 0.06)',
                            border: '1px solid rgba(16, 185, 129, 0.25)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <CheckCircle2 size={17} color="#10b981" />
                                <strong style={{ fontSize: '0.92rem', color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                                    Mitigation
                                </strong>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                Compare SkillUp to more existing solutions and test what motivates them to actual use it.
                            </p>
                        </div>

                        <div style={{
                            padding: '1.2rem',
                            borderRadius: '10px',
                            background: 'var(--surface)',
                            border: '1px solid rgba(124, 58, 237, 0.15)'
                        }}>
                            <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                                Evidence
                            </strong>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <span style={{
                                    padding: '0.3rem 0.75rem',
                                    borderRadius: '6px',
                                    background: 'rgba(124, 58, 237, 0.12)',
                                    color: 'var(--purple)',
                                    fontSize: '0.85rem',
                                    fontWeight: 700
                                }}>
                                    STR-01
                                </span>
                                <span style={{
                                    padding: '0.3rem 0.75rem',
                                    borderRadius: '6px',
                                    background: 'rgba(124, 58, 237, 0.12)',
                                    color: 'var(--purple)',
                                    fontSize: '0.85rem',
                                    fontWeight: 700
                                }}>
                                    INT-01
                                </span>
                                <span style={{
                                    padding: '0.3rem 0.75rem',
                                    borderRadius: '6px',
                                    background: 'rgba(124, 58, 237, 0.12)',
                                    color: 'var(--purple)',
                                    fontSize: '0.85rem',
                                    fontWeight: 700
                                }}>
                                    INT-03
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Structured Specification Table (Faithful Document Replica) */}
                <div style={{ marginTop: '2rem' }}>
                    <h3 style={{ fontSize: '1.15rem', color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                        Candidate Risk Register Table
                    </h3>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: '22%' }}>Field</th>
                                <th style={{ width: '78%' }}>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Risk</strong></td>
                                <td>Potential users might prefer their current applications or informal tracking methods if SkillUp does not offer enough value to make it worth switching to.</td>
                            </tr>
                            <tr>
                                <td><strong>Trigger</strong></td>
                                <td>During interviews, some participants showed little interest in recording their activities in a formal way because they could already recognize their progress through personal experience, while others did use existing applications</td>
                            </tr>
                            <tr>
                                <td><strong>Owner</strong></td>
                                <td>Market Researcher</td>
                            </tr>
                            <tr>
                                <td><strong>Mitigation</strong></td>
                                <td>Compare SkillUp to more existing solutions and test what motivates them to actual use it.</td>
                            </tr>
                            <tr>
                                <td><strong>Evidence</strong></td>
                                <td>STR-01, INT-01, INT-03</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}

export default Sprint3PresentationView;
