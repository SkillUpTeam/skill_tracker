import React, { useState, useEffect } from "react";
import SubNav from "../components/SubNav";
import SprintModeToggle from "../components/SprintModeToggle";
import Sprint3PresentationView from "../components/presentation/Sprint3PresentationView";
import { ChevronDown, ChevronUp, ChevronsUpDown, Eye, EyeOff } from "lucide-react";

function Sprint3() {
    const [viewMode, setViewMode] = useState(() => {
        return localStorage.getItem('sprint_view_mode') || 'presentation';
    });

    useEffect(() => {
        localStorage.setItem('sprint_view_mode', viewMode);
    }, [viewMode]);

    // Collapsible states for Interview Notes section in documents view
    const [isInterviewSectionOpen, setIsInterviewSectionOpen] = useState(true);
    const [openInterviews, setOpenInterviews] = useState({
        interview1: true,
        interview2: true,
        interview3: true
    });

    // Collapsible state for Contradiction Memo section in documents view
    const [isContradictionMemoOpen, setIsContradictionMemoOpen] = useState(true);

    // Collapsible state for AI Use Disclosure section in documents view
    const [isAiDisclosureOpen, setIsAiDisclosureOpen] = useState(true);

    // Collapsible state for Evidence Log section in documents view
    const [isEvidenceLogOpen, setIsEvidenceLogOpen] = useState(true);

    // Collapsible state for Competitive Landscape section in documents view
    const [isCompetitiveLandscapeOpen, setIsCompetitiveLandscapeOpen] = useState(true);

    const toggleInterview = (key) => {
        setOpenInterviews(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    const areAllInterviewsOpen = openInterviews.interview1 && openInterviews.interview2 && openInterviews.interview3;

    const toggleAllInterviews = () => {
        const nextState = !areAllInterviewsOpen;
        setOpenInterviews({
            interview1: nextState,
            interview2: nextState,
            interview3: nextState
        });
    };

    const subNavLinks = [
        { id: 'competitive-landscape', label: 'Competitive Landscape' },
        { id: 'change-note-and-candidate-risks', label: 'Change Note & Candidate Risks' },
        { id: 'evidence-log', label: 'Evidence Log' },
        { id: 'interview-notes', label: 'Interview Notes' },
        { id: 'contradiction-memo', label: 'Contradiction Memo' },
        { id: 'ai-use-disclosure', label: 'AI Use Disclosure' }
    ];

    return (
        <main className="sprint-page">
            {/* Sprint 3 Sub-Navigation (shown in Document Mode) */}
            {viewMode === 'document' && <SubNav links={subNavLinks} />}

            <div className="sprint-header" style={{ paddingBottom: '1rem' }}>
                <h1>Sprint 3</h1>
                <p>
                    Explore our competitive landscape, change note, candidate risks, evidence log, interview research, contradiction memo, and AI use disclosure for Sprint 3.
                </p>
            </div>

            {/* View Mode Switcher */}
            <SprintModeToggle 
                mode={viewMode}
                setMode={setViewMode}
            />

            {viewMode === 'presentation' ? (
                <Sprint3PresentationView />
            ) : (
                <>
                    {/* Section 1: Competitive Landscape */}
                    <div className="sprint-content">
                        <section id="competitive-landscape" className="sprint-section">
                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Competitive Landscape</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsCompetitiveLandscapeOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isCompetitiveLandscapeOpen}
                                        aria-controls="competitive-landscape-content"
                                    >
                                        {isCompetitiveLandscapeOpen ? (
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
                                        href="/documents/sprint3/Competitive Landscape.pdf"
                                        download="Competitive Landscape.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {!isCompetitiveLandscapeOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsCompetitiveLandscapeOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsCompetitiveLandscapeOpen(true); }}
                                    aria-label="Expand Competitive Landscape section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Competitive Landscape Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view the competitor map, comparison matrix, Strava teardown, and Skillshare teardown.
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Landscape</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="competitive-landscape-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '100%' }}>
                                    {/* Competitor Map */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Competitor Map</h3>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '22%' }}>Competitor</th>
                                                    <th style={{ width: '22%' }}>Classification</th>
                                                    <th style={{ width: '56%' }}>Reason</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Strava</strong></td>
                                                    <td>Direct</td>
                                                    <td>Records physical activities, tracks progress, and supports personal goals for fitness.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Everyday.app</strong></td>
                                                    <td>Indirect</td>
                                                    <td>Focuses on maintaining habits and consistency rather than measuring recreational skill progress.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Skillshare</strong></td>
                                                    <td>Indirect</td>
                                                    <td>Helps users learn new skills through course instead of tracking their activities.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Manual Tracking</strong></td>
                                                    <td>Status Quo</td>
                                                    <td>Users depend on memory, videos, notes, or personal feedback</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Comparison Table */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Comparison Table</h3>
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
                                                        <td></td>
                                                        <td>Informal progress tracking through their own habits and notes.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Strengths</strong></td>
                                                        <td>Easy recording, statistics, community.</td>
                                                        <td>Course access is simple. Instructions are clear. Certificate. 1-1 Sessions. Public discussion feed.</td>
                                                        <td></td>
                                                        <td>No need for app, its more familiar to use.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Limitations</strong></td>
                                                        <td>Only sports and fitness activities, payment for goal tracking.</td>
                                                        <td>Paid subscription to access the courses. No progress tracking thrughout the course.</td>
                                                        <td></td>
                                                        <td>Progress can be difficult to organize, compare and review over time.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Progress Tracking</strong></td>
                                                        <td>Statistics, streaks, graphs.</td>
                                                        <td>Minimal, the only progress tracking was project submission at the end of the course.</td>
                                                        <td></td>
                                                        <td>Track by memory, recordings, photos in gallery, feedback by sharing by messages or in person</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>Accomplishments</strong></td>
                                                        <td>Badges by how many activities you have completed. Challenges and leaderboards</td>
                                                        <td>Certificates of completion are earned at the end of the course and achievements with badges.</td>
                                                        <td></td>
                                                        <td>Personal milestones, completed activities, and them analyzing their own session.</td>
                                                    </tr>
                                                    <tr>
                                                        <td><strong>SkillUp Opportunity</strong></td>
                                                        <td>Track qualitative progress and larger range of activities</td>
                                                        <td>Offer online courses as well, to encourage users to track their progress with SkillUp.</td>
                                                        <td></td>
                                                        <td>Organize progress, activities, and accomplishments in a centralized platform</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Strava Competitive Landscape */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Strava Competitive Landscape</h3>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '24%' }}><strong>Competitor Type</strong></td>
                                                    <td>Direct</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Main Purpose</strong></td>
                                                    <td>Fitness activity and performance tracking</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Strengths</strong></td>
                                                    <td>Easy recording, detailed activity history, measurable statistics, community.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Limitations</strong></td>
                                                    <td>Strava focuses on measurable fitness statistics, such as time and distance. These measurements help track physical activities but does not directly track improvements in technique or skill. Also they have goal tracking within a paid subscription.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Progress Tracking</strong></td>
                                                    <td>Weekly statistics, streaks, historical performance, and graphs for activities.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Accomplishments</strong></td>
                                                    <td>Milestones badges for number of activities completed. There are also challenges you can complete. For different segments or routes there are leaderboards.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>SkillUp opportunity</strong></td>
                                                    <td>Allows users to track their skill development through personal goals, past accomplishments, recordings, and feedback in addition to numerical statisitcs. SkillUp can also expand the range of recreational activities where Strava is limited.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Ranked Switching Triggers</strong></td>
                                                    <td>
                                                        1. Users may need to see improvements through completed accomplishments, comparison with past activities, recordings, and feedback instead of only using numerical statistics.<br /><br />
                                                        2. Users may want to track progress across different hobbies and recreational activities that are not part of Strava’s current options.<br /><br />
                                                        3. Users may need a free alternative to track their goals.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* SkillShare Competitive Landscape */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>SkillShare Competitive Landscape</h3>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '24%' }}><strong>Competitor Type</strong></td>
                                                    <td>Indirect</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Main Purpose</strong></td>
                                                    <td>Online courses for learning skills.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Strengths</strong></td>
                                                    <td>Course access simple and navigation. The instructions are clear. Certificates can be earned after course completion. 1-1 sessions can be purchased for personalized experience. Dicussion tab in course and in general for community discussions. Learning path for deepening skillsets with a set of courses together.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Limitations</strong></td>
                                                    <td>Paid subscription to access the courses and partake in discussions. The website does not allow any courses being taken while in the free tier and doesn’t allow posting and viewing other posts.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Progress Tracking</strong></td>
                                                    <td>No progress tracking for each individual course relies on the user to track their own progress. Closest it gets is submitting a project near the end of the course.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Accomplishments</strong></td>
                                                    <td>Badges earned for completing milestones such as taking a number of courses, submitting a number of projects, or starting a discussion. General accomplishments, nothing course specific.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>SkillUp opportunity</strong></td>
                                                    <td>Allows users to track their skill development through personal goals, past accomplishments, recordings, and feedback in addition to numerical statistics. SkillUp can also allow use of the app in a free account and with more deatiled analysis/features with a paid subscription, where SkillShare requires a subscription before anything. In addition, gives potential users of SkillShare a way to track their progress while taking courses.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Ranked Switching Triggers</strong></td>
                                                    <td>
                                                        1. Paywall frustration: SkillShare users who hit a paywall will or on a free tier will not be able to do anything. While SkillUp does allow usage of the app in the free tier.<br /><br />
                                                        2. No Progress Tracking or growth: During or Finishing a course doesn’t show whether the learner’s skill has improved. Skill Up's recordings, feedback and past accomplishments let users compare their work over their journey.<br /><br />
                                                        3. Using it alongside Skillshare: SkillUp doesn’t have to replace Skillshare. Users can track their progress in SkillUp while taking Skillshare courses, which makes it an easy first step that can lead to using SkillUp more over time.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Section 2: Change Note and Candidate Risks */}
                    <div className="sprint-content">
                        <section id="change-note-and-candidate-risks" className="sprint-section">
                            <div className="section-heading">
                                <h2>Change Note and Candidate Risks</h2>
                                <a
                                    href="/documents/sprint3/Change Note and Candidate Risks.pdf"
                                    download="Change Note and Candidate Risks.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pdf-button"
                                >
                                    Download PDF
                                </a>
                            </div>

                            <div className="sprint-topic">
                                <h3>Change Note</h3>
                                <p>
                                    Our original success criterion was based on that high retention rates, where users consistently log
                                    activities and provide feedback for future improvements. But after doing research we have expanded to
                                    having users returning to review their previous activities, instead of only recording activities.
                                </p>
                                <p>
                                    This changed since through our interviews we found that users could already see progress through
                                    personal experience and coaching without needing logging. They were also able to see accomplishments
                                    through their own works and recordings. We also found that there is a distinction between tracking
                                    statistics to see improvement and reviewing to see where we can improve, that work together to have a
                                    better overview of an individual's skill journey. If users return to review their previous accomplishments
                                    without adding anything new, that should still count as meaningful engagement with SkillUp.
                                </p>
                            </div>

                            <div className="sprint-topic">
                                <h3>Candidate Risks</h3>
                                <h4>Candidate Risk – R1</h4>
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: '20%' }}>Field</th>
                                            <th style={{ width: '80%' }}>Details</th>
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

                    {/* Section 3: Evidence Log (Collapsible in Documents View) */}
                    <div className="sprint-content">
                        <section id="evidence-log" className="sprint-section">
                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Evidence Log</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsEvidenceLogOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isEvidenceLogOpen}
                                        aria-controls="evidence-log-content"
                                    >
                                        {isEvidenceLogOpen ? (
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
                                        href="/documents/sprint3/Evidence Log.pdf"
                                        download="Evidence Log.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {/* Collapsible Notice Box when section is collapsed */}
                            {!isEvidenceLogOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsEvidenceLogOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsEvidenceLogOpen(true); }}
                                    aria-label="Expand Evidence Log section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Evidence Log Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view 6 Tier 1 research evidence entries (STR-01 to STR-03, INT-01 to INT-03).
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Evidence Log</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="evidence-log-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '100%' }}>
                                    <p style={{ color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '1.5rem' }}>
                                        Team 3: Isaac Padilla, Juan Reyna
                                    </p>

                                    {/* Summary Table */}
                                    <table className="table table-bordered" style={{ marginBottom: '3rem' }}>
                                        <thead>
                                            <tr>
                                                <th style={{ width: '20%' }}>Evidence ID</th>
                                                <th style={{ width: '60%' }}>Research Activity</th>
                                                <th style={{ width: '20%' }}>Evidence Type</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><strong>STR-01</strong></td>
                                                <td>Strava mobile teardown</td>
                                                <td>Tier 1</td>
                                            </tr>
                                            <tr>
                                                <td><strong>INT-01</strong></td>
                                                <td>Boxing and recreational sports interview</td>
                                                <td>Tier 1</td>
                                            </tr>
                                            <tr>
                                                <td><strong>INT-02</strong></td>
                                                <td>Piano and jewelry interview</td>
                                                <td>Tier 1</td>
                                            </tr>
                                            <tr>
                                                <td><strong>INT-03</strong></td>
                                                <td>Golf Interview</td>
                                                <td>Tier 1</td>
                                            </tr>
                                            <tr>
                                                <td><strong>STR-02</strong></td>
                                                <td>Skill Share teardown</td>
                                                <td>Tier 1</td>
                                            </tr>
                                            <tr>
                                                <td><strong>STR-03</strong></td>
                                                <td>Strava Webpage Teardown</td>
                                                <td>Tier 1</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    {/* 1. Strava Mobile App Teardown */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Strava Mobile App Teardown</h3>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '22%' }}><strong>Evidence ID</strong></td>
                                                    <td>STR-01</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Evidence Type</strong></td>
                                                    <td>Tier 1 – Firsthand Observation</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Method</strong></td>
                                                    <td>Hands-on mobile application</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Date</strong></td>
                                                    <td>October 8, 2026</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Duration</strong></td>
                                                    <td>38 Minutes</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Account</strong></td>
                                                    <td>Free tier</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Core Activity</strong></td>
                                                    <td>Recording and reviewing physical activities</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Ease of use</strong></td>
                                                    <td>Simple registration process. The record tab takes you directly to GPS tracking, a timer, distance, and speed. You can also record past activities.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Key findings</strong></td>
                                                    <td>GPS tracking, manual activity recording, progress statistics, streaks, badges for number of activities completed, challenges for activities, posting and sharing activities.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Observed Friction</strong></td>
                                                    <td>Frequent subscription prompts and goals plus advanced statistics were part of paid subscription. Activity tracking mostly focused on the fitness measurements instead of development in technique or skill.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* 2. Boxing and Recreational Sports Interview */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Boxing and Recreational Sports Interview</h3>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '22%' }}><strong>Evidence ID</strong></td>
                                                    <td>INT-01</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Evidence Type</strong></td>
                                                    <td>Tier 1 – Firsthand Interview</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Method</strong></td>
                                                    <td>Interview</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Date</strong></td>
                                                    <td>October 13, 2026</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Duration</strong></td>
                                                    <td>13 Minutes</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Activities</strong></td>
                                                    <td>Boxing, soccer, and Tochito (flag football)</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Competing Solutions</strong></td>
                                                    <td>In-person boxing classes, coaching, and informal performance analysis</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Reported Behavior</strong></td>
                                                    <td>Participated in paid boxing classes where coaches set up different exercises and corrected techniques. Did not use formal method to record activity stats. Progress was measured through physical performance such as seeing ho much they were able to defend themselves, how much they could resist and hit.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Difficulties</strong></td>
                                                    <td>Hard to identify how a tracking app could help with physical improvement. Hands on activities such as boxing are better done through in person instructions although online could help some people.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Key findings</strong></td>
                                                    <td>Participant relied on practical performance and coach feedback instead of numerical stats to recognize improvement.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* 3. Piano and Jewely Interview */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Piano and Jewely Interview</h3>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '22%' }}><strong>Evidence ID</strong></td>
                                                    <td>INT-02</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Evidence Type</strong></td>
                                                    <td>Tier 1 – Firsthand Interview</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Method</strong></td>
                                                    <td>Interview</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Date</strong></td>
                                                    <td>October 13, 2026</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Duration</strong></td>
                                                    <td>12 Minutes</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Activities</strong></td>
                                                    <td>Piano and jewelry making</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Competing Solutions</strong></td>
                                                    <td>Phone galley, memory, and informal feedback</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Reported Behavior</strong></td>
                                                    <td>Participated in piano classes and performed at a concert. Improved by practicing unfinished piano pieces until completing it. Recorded a performance and stores the video on their phone but did not use it for reviewing. They also participated in jewelry making where their progress was measured by completed creations. They took no time in documenting or reviewing their progress.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Difficulties</strong></td>
                                                    <td>Found it difficult to determine if improvement was happening. Frequently forgot information and suggested that writing down could help. Preferred keeping accomplishments private because sharing created pressure to perform better.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Key findings</strong></td>
                                                    <td>Participant noticed improvement through the work they completed and personal evaluation instead of numerical stats. Their recordings and accomplishments could help them see their progress but they did not have a review process.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* 4. Golf Interview */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Golf Interview</h3>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '22%' }}><strong>Evidence ID</strong></td>
                                                    <td>INT-03</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Evidence Type</strong></td>
                                                    <td>Tier 1 – Firsthand Interview</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Method</strong></td>
                                                    <td>Interview</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Date</strong></td>
                                                    <td>October 13, 2026</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Duration</strong></td>
                                                    <td>13 Minutes</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Activities</strong></td>
                                                    <td>Golf and previous boxing participation</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Competing Solutions</strong></td>
                                                    <td>Golf tracking application, video recordings, memory, and past boxing instruction.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Reported Behavior</strong></td>
                                                    <td>Used a golf application during rounds to track strokes, distances, and scores. During practices, he recorded his golf swings and compared his angles themselves to check their technique. They used to do boxing but stopped due to work.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Difficulties</strong></td>
                                                    <td>Found it difficult to recognize small improvements and finding adjustments they needed to make. Considered taking golf classes but didn’t have the time.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Key findings</strong></td>
                                                    <td>Participant used statistics to evaluate their golf performance but for actual technique improvement he relied to his recordings. Different methods helped to track different aspects of progress.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* 5. Skill Share teardown */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Skill Share teardown</h3>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '22%' }}><strong>Evidence ID</strong></td>
                                                    <td>STR-02</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Evidence Type</strong></td>
                                                    <td>Tier 1 – Firsthand Observation</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Method</strong></td>
                                                    <td>Website hands on</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Date</strong></td>
                                                    <td>October 10, 2026</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Duration</strong></td>
                                                    <td>59 Minutes</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Account</strong></td>
                                                    <td>Paid Subscription (Free 30-day Trial)</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Core Activity</strong></td>
                                                    <td>Learning how to draw and practicing</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Ease of use</strong></td>
                                                    <td>Simple registration, courses are laid out for you. Click on one and start the video lecture to begin. Each course has tabs with more information about the course and project.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Key findings</strong></td>
                                                    <td>Online course taking, project-based submission. Achievements through badges based on course taking, not for each individual course. Project submissions are also posted for others to see. Discussion board for further discussion.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Observed Friction</strong></td>
                                                    <td>Cannot take a class without a paid subscription. No courses for free tier accounts. Progress tracking is project submission; no actual tracking is provided.</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* 6. Strava Webpage Teardown */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Strava Webpage Teardown</h3>
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td style={{ width: '22%' }}><strong>Evidence ID</strong></td>
                                                    <td>STR-03</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Evidence Type</strong></td>
                                                    <td>Tier 1 – Firsthand Observation</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Method</strong></td>
                                                    <td>Website hands on</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Date</strong></td>
                                                    <td>October 8, 2026</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Duration</strong></td>
                                                    <td>30 Minutes</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Account</strong></td>
                                                    <td>Free tier</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Core Activity</strong></td>
                                                    <td>Record a physical activity</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Ease of use</strong></td>
                                                    <td>Adding and recording activities are easy to use. However, navigating the website was somewhat confusing, as some processes felt repetitive while others lead to dead ends with no clear next steps. Also, the user interface feels outdated.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Key findings</strong></td>
                                                    <td>One of the main features is being able to discover nearby events and activities through the map. For tracking activities, users can revisit and edit previously recorded activities, adjust their visibility settings, and upload related photoes or other media.</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Observed Friction</strong></td>
                                                    <td>The free version offers limited functionality. Most additional features, such as interactive map and more customizable features such as goals, requires users to upgrade to a paid subscription. </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Section 4: Interview Notes (Collapsible in Documents View) */}
                    <div className="sprint-content">
                        <section id="interview-notes" className="sprint-section">
                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Interview Notes - Isaac</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsInterviewSectionOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isInterviewSectionOpen}
                                        aria-controls="interview-notes-content"
                                    >
                                        {isInterviewSectionOpen ? (
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

                                    {isInterviewSectionOpen && (
                                        <button
                                            type="button"
                                            onClick={toggleAllInterviews}
                                            className="collapsible-toggle-btn"
                                        >
                                            <ChevronsUpDown size={16} />
                                            <span>{areAllInterviewsOpen ? 'Collapse All' : 'Expand All'}</span>
                                        </button>
                                    )}

                                    <a
                                        href="/documents/sprint3/Interview Notes - Isaac Padilla.pdf"
                                        download="Interview Notes - Isaac Padilla.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {/* Collapsible Notice Box when section is collapsed */}
                            {!isInterviewSectionOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsInterviewSectionOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsInterviewSectionOpen(true); }}
                                    aria-label="Expand Interview Notes section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Interview Notes Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view 3 participant interviews (Boxing & Recreational Sports, Piano & Jewelry Making, Golf).
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Notes</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="interview-notes-content" style={{ marginTop: '1.5rem' }}>
                                    {/* Interview 1 */}
                                    <div className="interview-card-accordion">
                                        <button
                                            type="button"
                                            className="interview-card-header"
                                            onClick={() => toggleInterview('interview1')}
                                            aria-expanded={openInterviews.interview1}
                                        >
                                            <div className="interview-title-group">
                                                <h3 className="interview-card-title">Interview 1 - Boxing and Recreational Sports</h3>
                                                <span className="interview-pill-badge">12 Behaviors • 6 Opinions</span>
                                            </div>
                                            <span className="interview-chevron-icon">
                                                {openInterviews.interview1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </button>

                                        {openInterviews.interview1 && (
                                            <div className="interview-card-body">
                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Behaviors</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Participated in Tochito (flag football), soccer, and boxing.</li>
                                                        <li>Last participated about a month ago but has been busy with school.</li>
                                                        <li>Plays sports at recreational centers in Juárez, usually with friends.</li>
                                                        <li>Found a boxing class near where he lives.</li>
                                                        <li>Does not usually recommend these locations to new friends.</li>
                                                        <li>Boxing coaches organize participants into groups for different exercises, including physical conditioning, punching bags, and sparring.</li>
                                                        <li>Coaches correct participants' technique and posture.</li>
                                                        <li>Classes last approximately two hours, with participants rotating through activities.</li>
                                                        <li>Does not formally record performance statistics.</li>
                                                        <li>Pays for boxing classes.</li>
                                                        <li>Two people who attended casually but eventually stopped going.</li>
                                                        <li>Purchased boxing hand wraps and initially struggled to put them on correctly. His coach taught him how.</li>
                                                    </ul>
                                                </div>

                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Opinions</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Does not see much benefit in step tracking or similar statistics for evaluating physical improvement.</li>
                                                        <li>Recognized improvement in Tochito through better dodging and defensive performance.</li>
                                                        <li>Recognized improvement in boxing through increased resistance, punching, and physical performance.</li>
                                                        <li>Thinks actual physical performance is more meaningful for recognizing progress.</li>
                                                        <li>Beginning physical training can be difficult while building conditioning.</li>
                                                        <li>Believes online instruction could benefit some people but prefers in-person instruction for hands-on activities such as boxing.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Interview 2 */}
                                    <div className="interview-card-accordion">
                                        <button
                                            type="button"
                                            className="interview-card-header"
                                            onClick={() => toggleInterview('interview2')}
                                            aria-expanded={openInterviews.interview2}
                                        >
                                            <div className="interview-title-group">
                                                <h3 className="interview-card-title">Interview 2 - Piano and Jewelry Making</h3>
                                                <span className="interview-pill-badge">11 Behaviors • 8 Opinions</span>
                                            </div>
                                            <span className="interview-chevron-icon">
                                                {openInterviews.interview2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </button>

                                        {openInterviews.interview2 && (
                                            <div className="interview-card-body">
                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Behaviors</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Participated in piano classes, most recently about three months ago.</li>
                                                        <li>Performed at an end-of-year piano concert.</li>
                                                        <li>Initially struggled to finish learning a piano piece but returned to it and eventually completed it.</li>
                                                        <li>Recorded a video of herself and friends playing piano and saved the recording in her phone's photo gallery.</li>
                                                        <li>Sees jewelry-making progress through completed creations.</li>
                                                        <li>Spends no time formally documenting or reviewing progress.</li>
                                                        <li>Considered using a piano application but did not end up using it.</li>
                                                        <li>Has a friend who plays piano, records practice sessions, and shares notes.</li>
                                                        <li>Started playing piano after finding a spare keyboard at her grandmother's house.</li>
                                                        <li>Began making earrings for her mother, who purchased materials for her.</li>
                                                        <li>Learned jewelry making through experimentation rather than formal instruction.</li>
                                                    </ul>
                                                </div>

                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Opinions</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Finds it difficult to determine whether her skills are improving.</li>
                                                        <li>Considers how long her jewelry creations last and feedback from others to see progress.</li>
                                                        <li>Believes writing things down could help because she frequently forgets information.</li>
                                                        <li>Recognizes improvement in jewelry making through increased creativity.</li>
                                                        <li>Enjoys being able to wear the jewelry she creates.</li>
                                                        <li>Is interested in learning drawing and has considered online courses.</li>
                                                        <li>Usually keeps accomplishments private because sharing creates pressure to perform better.</li>
                                                        <li>May consider sharing her work with others in the future.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Interview 3 */}
                                    <div className="interview-card-accordion">
                                        <button
                                            type="button"
                                            className="interview-card-header"
                                            onClick={() => toggleInterview('interview3')}
                                            aria-expanded={openInterviews.interview3}
                                        >
                                            <div className="interview-title-group">
                                                <h3 className="interview-card-title">Interview 3 - Golf</h3>
                                                <span className="interview-pill-badge">16 Behaviors • 3 Opinions</span>
                                            </div>
                                            <span className="interview-chevron-icon">
                                                {openInterviews.interview3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </button>

                                        {openInterviews.interview3 && (
                                            <div className="interview-card-body">
                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Behaviors</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Participates in golf and enjoys leisure activities such as watching movies.</li>
                                                        <li>Selects a golf course and schedules a tee time by phone or online. He can choose between nine-hole and eighteen-hole rounds.</li>
                                                        <li>Practices golf at a driving range and on courses.</li>
                                                        <li>Depends on memory and comparing to past sessions to see improvement.</li>
                                                        <li>Sometimes records his golf swings to compare recordings and find changes in technique.</li>
                                                        <li>Uses a golf-tracking application while playing on the golf course.</li>
                                                        <li>The application records strokes per hole, distances, and scores.</li>
                                                        <li>Does not use the same application to evaluate swing technique during practice.</li>
                                                        <li>Knows other golfers who use paid applications or additional performance-tracking tools.</li>
                                                        <li>Not paying for a golf-tracking subscription himself.</li>
                                                        <li>Tries to practice at the driving range approximately once a week.</li>
                                                        <li>Got interested in golf as a spectator before participating.</li>
                                                        <li>Purchased golf clubs and began practicing at driving ranges before playing on courses.</li>
                                                        <li>Shares golfing experiences and performance with friends and family who also play.</li>
                                                        <li>Previously had a boxing membership but stopped attending because work interfered.</li>
                                                        <li>Uses YouTube and social media as learning resources.</li>
                                                    </ul>
                                                </div>

                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Opinions</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Finds it difficult to identify small improvements or necessary adjustments when comparing swing recordings.</li>
                                                        <li>Is interested in taking golf lessons to improve his skills.</li>
                                                        <li>Time availability has prevented him from starting golf lessons.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Interview Notes - Karina</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsInterviewSectionOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isInterviewSectionOpen}
                                        aria-controls="interview-notes-content"
                                    >
                                        {isInterviewSectionOpen ? (
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

                                    {isInterviewSectionOpen && (
                                        <button
                                            type="button"
                                            onClick={toggleAllInterviews}
                                            className="collapsible-toggle-btn"
                                        >
                                            <ChevronsUpDown size={16} />
                                            <span>{areAllInterviewsOpen ? 'Collapse All' : 'Expand All'}</span>
                                        </button>
                                    )}

                                    <a
                                        href="/documents/sprint3/Karina Rivera Interview Notes.pdf"
                                        download="Karina Rivera Interview Notes.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {/* Collapsible Notice Box when section is collapsed */}
                            {!isInterviewSectionOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsInterviewSectionOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsInterviewSectionOpen(true); }}
                                    aria-label="Expand Interview Notes section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Interview Notes Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view 3 participant interviews (Boxing & Recreational Sports, Piano & Jewelry Making, Golf).
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Notes</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="interview-notes-content" style={{ marginTop: '1.5rem' }}>
                                    {/* Interview 1 */}
                                    <div className="interview-card-accordion">
                                        <button
                                            type="button"
                                            className="interview-card-header"
                                            onClick={() => toggleInterview('interview1')}
                                            aria-expanded={openInterviews.interview1}
                                        >
                                            <div className="interview-title-group">
                                                <h3 className="interview-card-title">Interview 1 - Boxing and Recreational Sports</h3>
                                                <span className="interview-pill-badge">12 Behaviors • 4 Opinions</span>
                                            </div>
                                            <span className="interview-chevron-icon">
                                                {openInterviews.interview1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </button>

                                        {openInterviews.interview1 && (
                                            <div className="interview-card-body">
                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Behaviors</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Question 1: What hobbies or recreational activities have you participated in recently? “Tochito (flag football), soccer and a bit of boxing. I mostly do physical activities.” </li>
                                                        <li>Question 2: How recently have you participated in those activities? Are you currently doing them at the moment, or were they something you did before? “Last month, I haven’t done them since last month. I have been busy with school work.” </li>
                                                        <li>Question 3 (Follow-up to Q2): How was it the last time you participated? Where did you go to, what happened when you got there, how do you set up? “I usually do it in Juarez. They’re usually like small centers where you could play sports. If not I just go with my friends to play tochito.” “There’s boxing trainers next to where I live when I do boxing.”</li>
                                                        <li>Question 4 (Follow-up to Q3): How do you find out about those locations, do you see them on the street, or online? “In the street. The recreational places where I play tochito and soccer were recommended by a friend.” “The boxing is near where I live.”</li>
                                                        <li>Question 5 (Follow-up to Q4): Have you recommended those places to a friend? “Not really.”</li>
                                                        <li>Question 6 (Follow-up to Q5): Would you recommend those places to a friend? “I’m gatekeeping, and I have people. I don’t like waiting.” </li>
                                                        <li>Question 7: Has there been anything that let you know that you are actually getting better or improving? “In Toshito I’m able to dodge pretty well, and in soccer I’m defense, so I guess I was getting better at that. For box, I just have to be able to kind of move, but we mostly train resistance and HIITs.”</li>
                                                        <li>Question 8: You mentioned you have a trainer, so how does the trainer give you feedback on your performance? “They usually put us in groups and make us do different activities.” “When I’m on the bean bags they usually correct my posture when I’m punching.” “After an our we switch [activities].” “They make us do planks for the last 15 minutes.”</li>
                                                        <li>Question 9 (Follow-up to Q8): And for all those activities that you do for example planks, do you have a way to keep track of how much you did those activities? “Not really, we mostly do five rounds of each and if you are done before everyone else is done, you do it again.” </li>
                                                        <li>Question 10 (Follow-up to Q4): Are those classes free? “No, I usually pay for those.” </li>
                                                        <li>Question 13: For all these sports, did you ever get any achievement, recognitions or any trophies? “No, Tochito and soccer I usually do them because it’s fun.”</li>
                                                        <li>Question 15: What are some specific tools, or equipment that you needed to get yourself in order to participate in those recreational activities? “We have to buy [hand] wraps.” The rest of the equipment, like the gloves and weights were provided.</li>
                                                    </ul>
                                                </div>

                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Opinions</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Question 11: If there was a way to actually track, that you could actually see your improvement, for example, through statistics. How would that look like to you? “Like an app that can track steps. But I don’t really see how it could show how much I have improved. If I see it physically.“ If they see it physically they associate it with improvement. “But usually I don’t really keep track.”</li>
                                                        <li>Question 12: How many people have you seen that they went in but dropped out because they felt that they were not progressing? “Probably two, and I never saw them again.”</li>
                                                        <li>Question 14: Were there any difficulties in getting into those recreational activities? Were there any struggles when you try to get into them for the first time? “I wouldn’t say no. For someone that would start at the beginning, like when it comes to hard physical training it could be hard to get into the rhythm of the stuff.” </li>
                                                        <li>Question 16: Do you think it would make a difference if you were taking said classes with an instructor online? “I can definitely see it work for some people, but because it is more hands-on I prefer in person. But I can see it working for someone online as long as they have the materials to do it especially when it comes to physical activities like box because you need gloves, a punching bag and in some cases a training buddy.”</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Interview 2 */}
                                    <div className="interview-card-accordion">
                                        <button
                                            type="button"
                                            className="interview-card-header"
                                            onClick={() => toggleInterview('interview2')}
                                            aria-expanded={openInterviews.interview2}
                                        >
                                            <div className="interview-title-group">
                                                <h3 className="interview-card-title">Interview 2 - Piano and Jewelry Making</h3>
                                                <span className="interview-pill-badge">19 Behaviors • 2 Opinions</span>
                                            </div>
                                            <span className="interview-chevron-icon">
                                                {openInterviews.interview2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </button>

                                        {openInterviews.interview2 && (
                                            <div className="interview-card-body">
                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Behaviors</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Question 1: What hobbies or recreational activities have you participated in recently? “Lately I have been playing piano.” </li>
                                                        <li>Question 2: When was the last time you participated in those activities? “It was a pretty long time ago, actually. Like, three months ago.” </li>
                                                        <li>Question 3: The last time you participated in that activity, can you walk me through that? “I was part of the piano class, and we had a end of the year concert.”</li>
                                                        <li>Question 4: For that activity, how did you know you were improving, or making progress? “At first I learned the piece, but I didn’t learn it all. So, next year I spent like a month working on it and I was able to get it.” </li>
                                                        <li>Question 5: Did you record or document anything from that activity? “I think I did.” </li>
                                                        <li>Question 6 (Follow-up to Q5): What was it that you recorded? “Me playing and a couple of my other friends playing.” </li>
                                                        <li>Question 7 (Follow-up to Q6): And where did you keep that recording? “In photos [gallery].” </li>
                                                        <li>Question 8: What methods or tools have you used to keep track of your activities or achievements? “Mostly by the amount I do. I also do jewlery, so it’s mostly by the amount I make.” </li>
                                                        <li>Question 9 (Follow-up to Q8): And did you have any difficulties with that method of tracking? “Yeah it’s kind of hard to know if you are actually improving. I would rather see how long they last, or ask other people if I’m improving.”</li>
                                                        <li>Question 11: For those activities, how much time did you spent documenting or reviewing your progress? “Zero. It’s mostly all in my head.”</li>
                                                        <li>Question 12: Do you pay for any tools, subscriptions, or services to keep track of them? “No, but at one point I saw a piano app and I was considering it, but then I just didn’t do it.” </li>
                                                        <li>Question 13: Do you know anyone else that participated in some activities that you like to do, that they do like to keep track of their activities? And if so, what do they keep track of? “I have one friend that she also played the piano. To keep track of her progress she records all of her time she plays and actually understands when she’s improving or not.” </li>
                                                        <li>Question 15: What keeps you interested in participating in those activities? “To be able to wear it.”</li>
                                                        <li>Question 16: Where do you find the resources to actually start getting into those activities, or to learn new techniques? “For piano, I actually found a spare keyboard under my grandma’s bed, so I just started playing it and started practicing. For jewlery, I was supposed to make these earring for my mom, and then she liked them, and I liked them. So she just bought more things for me, and I started getting more into it.” </li>
                                                        <li>Question 17: Did anyone teach you jewlery or did you look it up online? “No, I kind of guessed.” </li>
                                                        <li>Question 18: Would you ever consider online courses to learn more or for any other activity? “Yes, I also want to try learning drawing and see a bunch of courses.”</li>
                                                        <li>Question 19: Have you ever wanted to share your progress to someone else? Or how do you usually share what you did with other people? “I really don’t share. I mostly keep it to myself because then I feel more pressured to do be better.” </li>
                                                        <li>Question 20 (Follow-up to Q19): Is that something you would like to overcome, eventually start sharing to people? “Yes.” </li>
                                                        <li>Question 21: With people that have shared with you, usually how do they share what they have accomplished with any recreational activity that they have participated in? “Friend shared videos and went to see her in person. She shared her notes [music sheet].”</li>
                                                    </ul>
                                                </div>

                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Opinions</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Question 10: For the current methods that you are using, what would stop you from using that methods? What do you think would help you track it better? “Probably writing it down. I don’t write down a lot of things, and I tend to forget like a lot.” </li>
                                                        <li>Question 14: For the jewlery activity, how do you know that you are getting better? “Because I get more creative.” </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Interview 3 */}
                                    <div className="interview-card-accordion">
                                        <button
                                            type="button"
                                            className="interview-card-header"
                                            onClick={() => toggleInterview('interview3')}
                                            aria-expanded={openInterviews.interview3}
                                        >
                                            <div className="interview-title-group">
                                                <h3 className="interview-card-title">Interview 3 - Golf</h3>
                                                <span className="interview-pill-badge">21 Behaviors • 1 Opinion</span>
                                            </div>
                                            <span className="interview-chevron-icon">
                                                {openInterviews.interview3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </button>

                                        {openInterviews.interview3 && (
                                            <div className="interview-card-body">
                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Behaviors</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Question 1: What hobbies or recreational activities have you participated in recently? “Recently, for recreational activities I've been golfing. Aside from that, just leisure time, so, like, whether it's, like, going to the movies or just, like, staying at home.” </li>
                                                        <li>Question 2: When was the last time you participated in one of those activities? “Like two months ago.”</li>
                                                        <li>Question 3: Can you walk me through the last time you participated in said activity? “I pick up, of course that I want to go to, and then I just schedule a teatime is what it's called. And then you just show up on time so you don't get a penalty fee. People usually have the option of playing nine holes or 18, and I played 18 that day.”</li>
                                                        <li>Question 4 (Follow-up to Q3): How do you schedule it? “You just call the golf course, or you could do it online, just depending on what services the golf course offers. Or also just showing up in person.”  </li>
                                                        <li>Question 5: How did you recognize or knew you were improving or actually making progress? “Just through practice. If I don't go play golf, I'll also go to a local driving range, just to go hit some balls, and just practicing on the swings.”</li>
                                                        <li>Question 6: Do you keep track of how much progress you've made? “Not really, just through memory and comparing previous times I’ve gone golfing, or going to the range. If anything, I'll record myself, so I can get to see what it look like when I’m swinging.” </li>
                                                        <li>Question 8: Do you use any methods or tools to help you for tracking apart from recording? “As far as practicing, no, but they do have like golf apps and like when you actually go to the gold courts, it will track like where your your ball goes and like how far you hit it. So I'll use statistics like that.”</li>
                                                        <li>Question 9: Think about the last time you changed how you tracked your progress. What led to that change? Have you ever done any other sort of tracking for another activity? “I can't really say that I have.” </li>
                                                        <li>Question 10: Have you ever thought of taking an online course or taking classes? “Yeah, I've definitely thought of doing golf lessons to improve my golf skills.” </li>
                                                        <li>Question 11: Have you actually started your lesson? And if not, what has kept you from going into those lessons? “I haven’t done a lesson yet. For one, it would just be time.”</li>
                                                        <li>Question 12: How much time do you spend comparing the recordings or seeing much process you have made through documented this? “It just depends on how often I go out to the driving range. So if anything, I would like to usually like to go like weekly at least, like at least once a week. So, if anything, I'll compare, like, from week to week.” </li>
                                                        <li>Question 13: Have you paid for any tools, subscriptions, or services related to how you track stuff, or to let you know when you do your activities? “No, not really.”</li>
                                                        <li>Question 14: Is there anything else about your experience we haven't discussed that you would like to share? “Not that I can think of right now.”</li>
                                                        <li>Question 15: How did you get into your hobby? “I've always been interested in golf like as a spectator point of view. I just got into it for one of my brother's friends and he plays golf a lot, too. I just got some clubs one day then slowly but little, just started like going to the golf range and then getting onto the golf course and there whenever I can.” </li>
                                                        <li>Question 16: Do you like sharing your accomplishments? “At least among people who do golf. I do have some family members who golf, I'll golf with them sometimes, and I have friends and we'll share how did we play that that day.</li>
                                                        <li>Question 17: Do you if think there was app that will help track your progress, do you think you would use it? “Yeah, well I do use this one app that tracks when you actually playing golf on the golf course. It tracks how many times you hit the ball per hole, or, like, how far you hit it, and it will pretty much it'll give you your score for that date for that round of golf.” </li>
                                                        <li>Question 18: Do you know anyone else who keeps track of their hobbies or recreational activities? “Yeah, as far as golf goes, yeah, for sure. Yeah, I know a few people, whether it's personally or non-personally.” </li>
                                                        <li>Question 19 (Follow-up to Q18): And how does the tracking kind of look for them? “They do have tape subscription, so it comes, like, with more tools. For example how hard you're hitting in the ball, so they use the physics that goes into it.</li>
                                                        <li>Question 20: Have you ever tried starting a new recreational activity, and you did want to but didn’t do it, what was the reason you didn’t start that activity or hobby? “I used to do boxing. I did get  a boxing membership after some time and then I just  stopped going, I didn't continue after.”</li>
                                                        <li>Question 21 (Follow-up to Q19): What was the reason that you stopped going? “Just work got in the way.”</li>
                                                        <li>Question 22: And do you ever look for any resources online that could help you? “Yeah, for sure like tutorial videos on YouTube or social media, like Instagram or wherever I can find it.”</li>
                                                    </ul>
                                                </div>

                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Opinions</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Question 7: What difficulties if any did you experience with this sort of tracking? “Looking at two different videos, I would say I’m I really progressing? Or being able to see any small details where I'm making an improvement or, trying to point out where, I need to adjust.”</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Interview Notes - Juan</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsInterviewSectionOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isInterviewSectionOpen}
                                        aria-controls="interview-notes-content"
                                    >
                                        {isInterviewSectionOpen ? (
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

                                    {isInterviewSectionOpen && (
                                        <button
                                            type="button"
                                            onClick={toggleAllInterviews}
                                            className="collapsible-toggle-btn"
                                        >
                                            <ChevronsUpDown size={16} />
                                            <span>{areAllInterviewsOpen ? 'Collapse All' : 'Expand All'}</span>
                                        </button>
                                    )}

                                    <a
                                        href="/documents/sprint3/InterviewNotes_Juan.pdf"
                                        download="InterviewNotes_Juan.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {/* Collapsible Notice Box when section is collapsed */}
                            {!isInterviewSectionOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsInterviewSectionOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsInterviewSectionOpen(true); }}
                                    aria-label="Expand Interview Notes section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Interview Notes Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view 3 participant interviews (Boxing & Recreational Sports, Piano & Jewelry Making, Golf).
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Notes</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="interview-notes-content" style={{ marginTop: '1.5rem' }}>
                                    {/* Interview 1 */}
                                    <div className="interview-card-accordion">
                                        <button
                                            type="button"
                                            className="interview-card-header"
                                            onClick={() => toggleInterview('interview1')}
                                            aria-expanded={openInterviews.interview1}
                                        >
                                            <div className="interview-title-group">
                                                <h3 className="interview-card-title">Interview 1 - Boxing and Recreational Sports</h3>
                                                <span className="interview-pill-badge">10 Behaviors • 6 Opinions</span>
                                            </div>
                                            <span className="interview-chevron-icon">
                                                {openInterviews.interview1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </button>

                                        {openInterviews.interview1 && (
                                            <div className="interview-card-body">
                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Behaviors</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Haven't done much since last month, school obstacle</li>
                                                        <li>Set up in Juarez, goes to places that host those sports, box gyms</li>
                                                        <li>Found out about those places by recommendation from friends</li>
                                                        <li>Gatekeeps locations, for fast access, no lines</li>
                                                        <li>Able to determine progress by performance in training/gameplay</li>
                                                        <li>Divides into groups, each group performs different training, rotates, 2 hours</li>
                                                        <li>Not really, repeatable until failure</li>
                                                        <li>Paid classes</li>
                                                        <li>Took a while to learn hand wrap, though it was mummy hand, taught by coach</li>
                                                        <li>In person and video sharing from friends' progress</li>
                                                    </ul>
                                                </div>

                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Opinions</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Kinda like football, rugby, soccer, and boxing. Mostly physical</li>
                                                        <li>Step tracker similar, doesn't see how it will improve, due to self-reflection</li>
                                                        <li>Performs activities for the fun/love/skill/protection. Not for fame/awards</li>
                                                        <li>Small setbacks don't demotivate them at all</li>
                                                        <li>Can see it for some, but depends on the person and if materials are there. Will of the person</li>
                                                        <li>Doesn't share with others, doesn't like the pressure, would like to overcome that</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Interview 2 */}
                                    <div className="interview-card-accordion">
                                        <button
                                            type="button"
                                            className="interview-card-header"
                                            onClick={() => toggleInterview('interview2')}
                                            aria-expanded={openInterviews.interview2}
                                        >
                                            <div className="interview-title-group">
                                                <h3 className="interview-card-title">Interview 2 - Piano and Jewelry Making</h3>
                                                <span className="interview-pill-badge">8 Behaviors • 4 Opinions</span>
                                            </div>
                                            <span className="interview-chevron-icon">
                                                {openInterviews.interview2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </button>

                                        {openInterviews.interview2 && (
                                            <div className="interview-card-body">
                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Behaviors</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Lately playing piano, last time ~3 months ago, piano class, end-of-year concert</li>
                                                        <li>Initially, learn and see progress by playing a whole piece</li>
                                                        <li>Friends? Records kept by video on phone</li>
                                                        <li>Quantity, have recording later</li>
                                                        <li>No time for reviewing/documenting</li>
                                                        <li>Nope, viewed a piano app, but considered</li>
                                                        <li>Has a friend that keeps track and documents daily</li>
                                                        <li>Found a spare keyboard, made jewelry from old jewelry scraps for mom, self-taught</li>
                                                    </ul>
                                                </div>

                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Opinions</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Difficult to know improvement, would like to view quantitative statistics or reinforcement from others</li>
                                                        <li>Writing it down, tends to forget without scribed records</li>
                                                        <li>Jewelry activity: feels improvement from more creativity</li>
                                                        <li>Being able to wear their products from their work</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Interview 3 */}
                                    <div className="interview-card-accordion">
                                        <button
                                            type="button"
                                            className="interview-card-header"
                                            onClick={() => toggleInterview('interview3')}
                                            aria-expanded={openInterviews.interview3}
                                        >
                                            <div className="interview-title-group">
                                                <h3 className="interview-card-title">Interview 3 - Golf</h3>
                                                <span className="interview-pill-badge">16 Behaviors • 2 Opinions</span>
                                            </div>
                                            <span className="interview-chevron-icon">
                                                {openInterviews.interview3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </span>
                                        </button>

                                        {openInterviews.interview3 && (
                                            <div className="interview-card-body">
                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Behaviors</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Done: golfing, leisure time, relaxing at home or movies</li>
                                                        <li>2 months ago, last time doing the activity</li>
                                                        <li>Picked a course, reserved a tee time (schedule play time)</li>
                                                        <li>Chooses mode, reserves by call or phone</li>
                                                        <li>Keeps practicing or swings anywhere</li>
                                                        <li>No written progress/tracking, but uses memory, sometimes records video. Compares swing form with past videos</li>
                                                        <li>Performs detailed analysis for videos</li>
                                                        <li>Golf apps track some stats, such as power, ball tracking, etc. Uses those for analysis sometimes</li>
                                                        <li>Cannot say, doesn't remember trying other activities</li>
                                                        <li>Depends, often usually goes on weekends, weekly basis</li>
                                                        <li>Got into golf from family and started going on their own</li>
                                                        <li>Has friends that share their golf days</li>
                                                        <li>Knows a few that track their golfing</li>
                                                        <li>Some have paid subscriptions for more tool analysis</li>
                                                        <li>Tried going back to boxing, but work got in the way</li>
                                                        <li>Does use online free resources to learn golfing</li>
                                                    </ul>
                                                </div>

                                                <div className="interview-subgroup">
                                                    <h4 className="interview-subgroup-title">Opinions</h4>
                                                    <ul className="interview-bullet-list">
                                                        <li>Considering taking golf lessons, one major consideration will be time</li>
                                                        <li>Does consider using an app that allows…</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Section 5: Contradiction Memo (Collapsible in Documents View) */}
                    <div className="sprint-content">
                        <section id="contradiction-memo" className="sprint-section">
                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Contradiction Memo - Isaac</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsContradictionMemoOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isContradictionMemoOpen}
                                        aria-controls="contradiction-memo-content"
                                    >
                                        {isContradictionMemoOpen ? (
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
                                        href="/documents/sprint3/Contradiction Memo - Isaac Padilla.pdf"
                                        download="Contradiction Memo - Isaac Padilla.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {/* Collapsible Notice Box when section is collapsed */}
                            {!isContradictionMemoOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsContradictionMemoOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsContradictionMemoOpen(true); }}
                                    aria-label="Expand Contradiction Memo section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Contradiction Memo Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view the Contradiction Memo by Isaac Padilla (October 18, 2026).
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Memo</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="contradiction-memo-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '900px' }}>
                                    <div style={{
                                        display: 'flex',
                                        gap: '1.5rem',
                                        flexWrap: 'wrap',
                                        marginBottom: '1.5rem',
                                        padding: '0.85rem 1.25rem',
                                        background: 'var(--surface)',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(124, 58, 237, 0.15)',
                                        fontSize: '0.92rem',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <span><strong>Document:</strong> Contradiction Memo</span>
                                        <span><strong>Date:</strong> October 18, 2026</span>
                                        <span><strong>Team:</strong> Team 3</span>
                                        <span><strong>Author:</strong> Isaac Padilla</span>
                                    </div>

                                    <p>
                                        Our original business case assumed that people can sometimes have difficulty staying motivated or
                                        consistently participating in their hobbies because they are unable to quantify or visualize their progress.
                                        We want SkillUp’s progress tracking to focus on seeing improvement in skill development rather than
                                        only measuring consistency or amount of effort. This matters because we want users to recognize that
                                        they are improving in a recreational activity rather than simply seeing that they are participating more
                                        often.
                                    </p>

                                    <p>
                                        During our research we found that statistics and formal tracking are not what every individual is seeking.
                                        As seen in INT-01, some individuals can already recognize their progress through memory and direct
                                        feedback from people around them without needing statistics. In INT-03, one participant used a golf app
                                        that helped to track statistics, but when it came to actual technique improvement, they relied on their
                                        recordings. We are now trying to determine what tools, and information could help individuals analyze
                                        their techniques and recognize actual improvement.
                                    </p>

                                    <p>
                                        INT-03 helped us understand the difference between tracking statistics and understanding technique.
                                        Statistics can show you the result of changes, but they may not explain the changes a person needs to
                                        make to improve. Understanding techniques can help individuals identify how to improve. This does not
                                        mean our original assumption is wrong but instead it shows us that our progress tracking needs to be more
                                        comprehensive. One SkillUp limitation is that we are focusing on keeping activity history and recording
                                        custom statistics to show progress instead of helping users understand what they need to improve.
                                    </p>

                                    <p>
                                        Initially we did not intend to include tools for analyzing techniques directly in the app, but we found that
                                        we should make it easier for users to record their activity sessions and compare them to past
                                        performances. Part of seeing your progress is reviewing your past and current performances. Instead of
                                        relying only on statistics, individuals should be able to analyze their own activity history and evaluate
                                        how their skills have improved.
                                    </p>
                                </div>
                            )}

                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Contradiction Memo - Karina</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsContradictionMemoOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isContradictionMemoOpen}
                                        aria-controls="contradiction-memo-content"
                                    >
                                        {isContradictionMemoOpen ? (
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
                                        href="/documents/sprint3/Contradiction Memo - Karina Rivera.pdf"
                                        download="Contradiction Memo - Karina Rivera.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {/* Collapsible Notice Box when section is collapsed */}
                            {!isContradictionMemoOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsContradictionMemoOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsContradictionMemoOpen(true); }}
                                    aria-label="Expand Contradiction Memo section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Contradiction Memo Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view the Contradiction Memo by Isaac Padilla (October 18, 2026).
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Memo</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="contradiction-memo-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '900px' }}>
                                    <div style={{
                                        display: 'flex',
                                        gap: '1.5rem',
                                        flexWrap: 'wrap',
                                        marginBottom: '1.5rem',
                                        padding: '0.85rem 1.25rem',
                                        background: 'var(--surface)',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(124, 58, 237, 0.15)',
                                        fontSize: '0.92rem',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <span><strong>Document:</strong> Contradiction Memo</span>
                                        <span><strong>Date:</strong> October 18, 2026</span>
                                        <span><strong>Team:</strong> Team 3</span>
                                        <span><strong>Author:</strong> Karina Rivera</span>
                                    </div>

                                    <ul>
                                        <li>Contradiction 1: Not everyone feels the need to track their progress.</li>
                                        <ul>
                                            <li>We originally assumed that people struggle to stay motivated because they don't have a way to track or visualize their progress. However, the interviews showed that some people are comfortable recognizing improvement without actively tracking anything. </li>
                                            <li>Evidence: Interviewee 1 mentioned that they recognize improvement through physical performance rather than statistics. Interviewee 2 said they spend no time documenting their progress and mostly keep everything in their head. Interviewee 3 also relies on memory and occasionally records videos to compare their golf swings. (INT-01, INT-02, INT-03)</li>
                                        </ul>
                                        <li>Contradiction 2: Lack of progress tracking isn’t always why people stop practicing their recreational activities.</li>
                                        <ul>
                                            <li>We assumed that not being able to see progress was one of the main reasons people lose motivation or stop participating in recreational activities. However, two interviewees mentioned that their schedules were what prevented them from continuing.</li>
                                            <li>Evidence: Interviewee 1 stopped participating in sports because of schoolwork. Interviewee 3 mentioned that work prevented them from continuing boxing and that time was also a reason they hadn't started golf lessons. (INT–01, INT-03)</li>
                                        </ul>
                                        <li>Contradiction 3: Some users already have tools that help them track their activities.</li>
                                        <ul>
                                            <li>We assumed that people needed a centralized platform because their current methods of tracking activities weren't enough. However, some interviewees already use tools that help them document their progress.</li>
                                            <li>Evidence: Interviewee 3 uses a golf application that tracks scores, distances, and other statistics. Interviewee 2 keeps recordings of piano performances in their phone's photo gallery. Both examples show that people already have ways to save information about their activities. (INT-03, INT-02)</li>
                                        </ul>
                                        <li>Contradiction 4: Progress means something different depending on the recreational activity .</li>
                                        <ul>
                                            <li>We assumed that progress could be tracked and displayed in a similar way across different recreational activities. However, each interviewee described improvement differently depending on what they were doing. </li>
                                            <li>Evidence:  Interviewee 1 recognizes improvement through physical performance in sports. Interviewee 2 measures progress in piano by learning difficult pieces and with jewelry by becoming more creative. Interviewee 3 uses golf scores, swing recordings, and practice sessions to evaluate improvement. (INT-01, INT-02, INT-03) </li>
                                        </ul>
                                    </ul>
                                </div>
                            )}

                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Contradiction Memo - Juan</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsContradictionMemoOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isContradictionMemoOpen}
                                        aria-controls="contradiction-memo-content"
                                    >
                                        {isContradictionMemoOpen ? (
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
                                        href="/documents/sprint3/Contradiction Memo Juan Reyna.pdf"
                                        download="Contradiction Memo Juan Reyna.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {/* Collapsible Notice Box when section is collapsed */}
                            {!isContradictionMemoOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsContradictionMemoOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsContradictionMemoOpen(true); }}
                                    aria-label="Expand Contradiction Memo section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Contradiction Memo Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view the Contradiction Memo by Juan Reyna (October 19, 2026).
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Memo</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="contradiction-memo-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '900px' }}>
                                    <div style={{
                                        display: 'flex',
                                        gap: '1.5rem',
                                        flexWrap: 'wrap',
                                        marginBottom: '1.5rem',
                                        padding: '0.85rem 1.25rem',
                                        background: 'var(--surface)',
                                        borderRadius: '10px',
                                        border: '1px solid rgba(124, 58, 237, 0.15)',
                                        fontSize: '0.92rem',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        <span><strong>Document:</strong> Contradiction Memo</span>
                                        <span><strong>Date:</strong> October 19, 2026</span>
                                        <span><strong>Team:</strong> Team 3</span>
                                        <span><strong>Author:</strong> Juan Reyna</span>
                                    </div>

                                    <p>
                                        <strong>Original assumption:</strong> Our charter assumed lack of motivation is a main reason people struggle with
                                        recreational activities, and that social support, accountability, and rewards would keep users engaged. Because of
                                        this, our scope included sharable progression cards, an activity feed, leaderboards, and certificates.
                                    </p>

                                    <p>
                                        <strong>What was found:</strong> Participants were already motivated. In INT-01, the participant does activities for
                                        fun, love, skill, and protection, "not for fame/awards," and small setbacks don't demotivate them. They also avoid
                                        sharing their progress because they don't like the pressure, even though they would like to overcome that. What
                                        actually stopped participants was time. INT-01 hadn't done much since last month because of school, and in INT-03
                                        work got in the way of going back to boxing, and time was the main reason they hadn't started golf lessons.
                                    </p>

                                    <p>
                                        <strong>What it means:</strong> Tracking is still valuable. INT-02 finds it difficult to know if they are improving
                                        and would like quantitative statistics or reinforcement from others, but spends no time reviewing or documenting
                                        their progress. INT-03 already uses golf apps to track stats and compares swing form with past videos. The problem
                                        is not a lack of motivation but a lack of time, and SkillUp's planned features rely on users spending extra time
                                        logging and sharing, which busy users are unlikely to do.
                                    </p>

                                    <p>
                                        <strong>What changes:</strong> SkillUp should make tracking quick and private by default, such as adding a recording
                                        already on the user's phone instead of filling out long logs. Sharing, leaderboards, and certificates should be
                                        optional, not the main reason to use the app. Going forward, we should test whether users return to SkillUp when
                                        tracking takes less time, rather than assuming social features and rewards will keep them engaged.
                                    </p>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Section 6: AI Use Disclosure (Collapsible in Documents View) */}
                    <div className="sprint-content">
                        <section id="ai-use-disclosure" className="sprint-section">
                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>AI Use Disclosure</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsAiDisclosureOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isAiDisclosureOpen}
                                        aria-controls="ai-use-disclosure-content"
                                    >
                                        {isAiDisclosureOpen ? (
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
                                        href="/documents/sprint3/Sprint 3 AI Use Disclosures.pdf"
                                        download="Sprint 3 AI Use Disclosures.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {/* Collapsible Notice Box when section is collapsed */}
                            {!isAiDisclosureOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsAiDisclosureOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsAiDisclosureOpen(true); }}
                                    aria-label="Expand AI Use Disclosure section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            AI Use Disclosure Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view the 5 AI use disclosures for Sprint 3.
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Disclosures</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="ai-use-disclosure-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '900px' }}>
                                    <h3>Sprint 3 AI Use Disclosures</h3>

                                    {/* 1. Template Generation */}
                                    <div className="contribution-card mb-4" style={{ marginBottom: "20px" }}>
                                        <h4 style={{ marginBottom: "15px" }}>Template Generation</h4>
                                        <div className="ai-disclosure-details">
                                            <p><strong>AI Tool Used:</strong> ChatGPT</p>
                                            <p><strong>PM AI Protocol Stage:</strong> Drafting and Restructuring</p>
                                            <p><strong>Purpose of AI Use:</strong> Used to create an initial template and organize sections for sprint 3 deliverables.</p>
                                            <p><strong>Changes or Rejected Output:</strong> The templates were reviewed and adjusted to fit the assignments. All research findings and content were created by the team.</p>
                                        </div>
                                    </div>

                                    {/* 2. Website Implementation - Uploading work */}
                                    <div className="contribution-card mb-4" style={{ marginBottom: "20px" }}>
                                        <h4 style={{ marginBottom: "15px" }}>Website Implementation</h4>
                                        <div className="ai-disclosure-details">
                                            <p><strong>AI Tool Used:</strong> Antigravity (Agentic AI)</p>
                                            <p><strong>PM AI Protocol Stage:</strong> Uploading work</p>
                                            <p><strong>Purpose of AI Use:</strong> Used to transfer document content directly to the website and to add new sections to the React site.</p>
                                            <p><strong>Changes or Rejected Output:</strong> Antigravity was strictly used for formatting and migrating existing content, not generating new PM content.</p>
                                        </div>
                                    </div>

                                    {/* 3. Website Implementation - Visual Improvements */}
                                    <div className="contribution-card mb-4" style={{ marginBottom: "20px" }}>
                                        <h4 style={{ marginBottom: "15px" }}>Website Implementation</h4>
                                        <div className="ai-disclosure-details">
                                            <p><strong>AI Tool Used:</strong> Antigravity (Agentic AI)</p>
                                            <p><strong>PM AI Protocol Stage:</strong> Visual Improvements</p>
                                            <p><strong>Purpose of AI Use:</strong> Used to create new view to make information easier to digest</p>
                                            <p><strong>Changes or Rejected Output:</strong> Antigravity was strictly used for design of the site and Moving content, but content was not generated by AI.</p>
                                        </div>
                                    </div>

                                    {/* 4. Handwritten Interview Notes - Isaac Padilla */}
                                    <div className="contribution-card mb-4" style={{ marginBottom: "20px" }}>
                                        <h4 style={{ marginBottom: "15px" }}>Handwritten Interview Notes</h4>
                                        <div className="ai-disclosure-details">
                                            <p><strong>Member:</strong> Isaac Padila</p>
                                            <p><strong>AI Tool Used:</strong> ChatGPT</p>
                                            <p><strong>PM AI Protocol Stage:</strong> Interviews</p>
                                            <p><strong>Purpose of AI Use:</strong> Used to transfer my handwritten notes to computer text.</p>
                                            <p><strong>Changes or Rejected Output:</strong> All interview notes were written by myself. Opinions and behavior were identified by me.</p>
                                        </div>
                                    </div>

                                    {/* 5. Handwritten Interview Notes - Juan Reyna */}
                                    <div className="contribution-card">
                                        <h4 style={{ marginBottom: "15px" }}>Handwritten Interview Notes</h4>
                                        <div className="ai-disclosure-details">
                                            <p><strong>Member:</strong> Juan Reyna</p>
                                            <p><strong>AI Tool Used:</strong> Claude</p>
                                            <p><strong>PM AI Protocol Stage:</strong> Interviews</p>
                                            <p><strong>Purpose of AI Use:</strong> Transferring handwritten notes to a file on my computer while also organizing them.</p>
                                            <p><strong>Change or rejected Output:</strong> Interview notes were handwritten by me during the interviews. Manually adjusted the notes that came from the AI, removing the added parts from AI and only keeping my original notes.</p>
                                        </div>
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

export default Sprint3;
