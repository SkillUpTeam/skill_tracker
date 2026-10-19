import React from 'react';
import {
    DollarSign,
    TrendingUp,
    ShieldCheck,
    CheckCircle2,
    Calendar,
    Layers,
    Cpu,
    Sparkles,
    Check,
    Users,
    AlertCircle,
    Activity,
    Compass,
    Award,
    FileText
} from 'lucide-react';
import './Presentation.css';

function Sprint2PresentationView() {
    const quickLinks = [
        { id: 'pres-business-case', label: 'Business Case' },
        { id: 'pres-estimation-starter', label: 'Estimation Starter' },
        { id: 'pres-lesson9', label: 'Lesson 9 Activity' },
        { id: 'pres-appendix', label: 'Estimation Appendix' },
        { id: 'pres-roi', label: 'ROI Analysis' },
        { id: 'pres-budget', label: 'Budget Estimation' },
        { id: 'pres-changelog', label: 'Change Log' },
        { id: 'pres-ai-disclosure', label: 'AI Disclosure' },
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

            {/* 1. Business Case & Value Analysis */}
            <section id="pres-business-case" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <TrendingUp size={14} />
                        <span>Business Case & Strategic Scope</span>
                    </div>
                    <h2 className="slide-title">Business Case & Value Analysis</h2>
                    <p className="slide-subtitle">
                        Evaluating user motivation, market need, monetization potential, and our formal Go/No-Go release decision.
                    </p>
                </div>

                <div className="slide-columns-2">
                    <div className="slide-card">
                        <h3 style={{ margin: '0 0 0.85rem', color: 'var(--purple)', fontSize: '1.2rem' }}>
                            Value Analysis
                        </h3>
                        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            SkillUp is aimed at people who enjoy recreational activities but need a centralized platform where they can track their progress, accomplishments, and contributions in one place. People often struggle to stay motivated or consistently participate in hobbies because they cannot easily quantify or visualize their progress.
                        </p>
                        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            SkillUp enables users to showcase experiences, connect with others, access experienced instructors, take courses, and obtain certifications. These features also create potential monetary value through partnerships with instructors, organizations, and sponsors.
                        </p>
                    </div>

                    <div className="slide-card" style={{ borderLeft: '4px solid #10b981', background: 'rgba(16, 185, 129, 0.04)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <Award size={22} color="#10b981" />
                            <h3 style={{ margin: 0, color: '#10b981', fontSize: '1.2rem' }}>
                                Go/No-Go Recommendation
                            </h3>
                        </div>
                        <p style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.6 }}>
                            Decision: "GO" with a controlled initial scope.
                        </p>
                        <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                            Our team determined SkillUp addresses meaningful needs across diverse recreational interests. For the initial release, we decided to "Go" by focusing strictly on the core platform slice: <strong>User Portfolio Management and Analysis</strong>, allowing users to maintain a centralized archive of activities and visualize progress over time.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Project Estimation Starter */}
            <section id="pres-estimation-starter" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Layers size={14} />
                        <span>Project Estimation Starter • Team 3</span>
                    </div>
                    <h2 className="slide-title">A First Look at Your Project's Size</h2>
                    <p className="slide-subtitle">
                        Team: 3 &nbsp;•&nbsp; Project: SkillUp &nbsp;•&nbsp; Release 1 capabilities, hidden work analysis, and outside view calibration.
                    </p>
                </div>

                {/* Step 1: Capabilities */}
                <h3 style={{ color: 'var(--purple)', margin: '1.5rem 0 0.75rem', fontSize: '1.2rem' }}>
                    Step 1. List What Release 1 Must Do & Hidden Work Key
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem', padding: '0.65rem 1rem', background: 'var(--background)', borderRadius: 10, border: '1px solid rgba(124, 58, 237, 0.15)' }}>
                    <span style={{ fontSize: '0.82rem', fontWeight: 700, marginRight: '0.5rem' }}>Hidden Work Key:</span>
                    <span className="hidden-tag tag-T">T = Testing</span>
                    <span className="hidden-tag tag-S">S = Security or privacy</span>
                    <span className="hidden-tag tag-I">I = Integration</span>
                    <span className="hidden-tag tag-D">D = Data</span>
                    <span className="hidden-tag tag-H">H = Hosting and deployment</span>
                    <span className="hidden-tag tag-U">U = Usability and accessibility</span>
                    <span className="hidden-tag tag-O">O = Documentation or training</span>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{ width: '40px' }}>#</th>
                                <th>Capability (what, not how)</th>
                                <th>Evidence (charter or interview)</th>
                                <th>Hidden Work</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>A user can record recreational activities they have completed</td>
                                <td>Project Charter, Interview 2 in Phase 2</td>
                                <td><span className="hidden-work-tags"><span className="hidden-tag tag-T">T</span><span className="hidden-tag tag-S">S</span><span className="hidden-tag tag-D">D</span><span className="hidden-tag tag-U">U</span></span></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>A user can track their progress across recreational activities through a personalized portfolio.</td>
                                <td>Project Charter, Interview 2 in Phase 1</td>
                                <td><span className="hidden-work-tags"><span className="hidden-tag tag-T">T</span><span className="hidden-tag tag-S">S</span><span className="hidden-tag tag-D">D</span><span className="hidden-tag tag-U">U</span></span></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>A user can find resources that can help them start or improve in a recreational activity</td>
                                <td>Project Charter, Interview 5 in Phase 2</td>
                                <td><span className="hidden-work-tags"><span className="hidden-tag tag-S">S</span><span className="hidden-tag tag-I">I</span><span className="hidden-tag tag-D">D</span><span className="hidden-tag tag-U">U</span></span></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Instructors can create lessons and provide resources for recreational activities</td>
                                <td>Project Charter</td>
                                <td><span className="hidden-work-tags"><span className="hidden-tag tag-T">T</span><span className="hidden-tag tag-S">S</span><span className="hidden-tag tag-D">D</span><span className="hidden-tag tag-U">U</span><span className="hidden-tag tag-O">O</span></span></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>A user can connect with other users based on shared recreational activities.</td>
                                <td>Project Charter, Interview 8 in Phase 2</td>
                                <td><span className="hidden-work-tags"><span className="hidden-tag tag-T">T</span><span className="hidden-tag tag-S">S</span><span className="hidden-tag tag-I">I</span><span className="hidden-tag tag-D">D</span><span className="hidden-tag tag-U">U</span></span></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>A user can find an instructor and request to book a lesson</td>
                                <td>Project Charter, Interview 4 in Phase 2</td>
                                <td><span className="hidden-work-tags"><span className="hidden-tag tag-T">T</span><span className="hidden-tag tag-S">S</span><span className="hidden-tag tag-I">I</span><span className="hidden-tag tag-D">D</span><span className="hidden-tag tag-U">U</span></span></td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>A user can discover recreational activities and events.</td>
                                <td>Project Charter, Interview 4 in Phase 2</td>
                                <td><span className="hidden-work-tags"><span className="hidden-tag tag-T">T</span><span className="hidden-tag tag-S">S</span><span className="hidden-tag tag-I">I</span><span className="hidden-tag tag-D">D</span><span className="hidden-tag tag-U">U</span></span></td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>A user can set personalized goals for their recreational activities and track progress toward them.</td>
                                <td>Project Charter, Interview 4 in Phase 1</td>
                                <td><span className="hidden-work-tags"><span className="hidden-tag tag-T">T</span><span className="hidden-tag tag-S">S</span><span className="hidden-tag tag-D">D</span><span className="hidden-tag tag-U">U</span></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Step 2: Own Experience */}
                <h3 style={{ color: 'var(--purple)', margin: '2rem 0 0.75rem', fontSize: '1.2rem' }}>
                    Step 2. Outside View: Team Experience
                </h3>
                <table className="table">
                    <thead>
                        <tr><th>Question</th><th>Answer</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>What was it?</td><td>A journal/mood tracker mobile app.</td></tr>
                        <tr><td>How long was it expected to take?</td><td>It was expected to take about 2 weeks.</td></tr>
                        <tr><td>How long did it take?</td><td>It took the full 2 weeks.</td></tr>
                        <tr><td>What took longer than expected?</td><td>Figuring out how modal views and sheets work in SwiftUI.</td></tr>
                    </tbody>
                </table>

                {/* Step 3: Similar Products */}
                <h3 style={{ color: 'var(--purple)', margin: '2rem 0 0.75rem', fontSize: '1.2rem' }}>
                    Step 3. Outside View: Similar Products Worksheet
                </h3>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Dimension</th>
                                <th>Product A (small): Everyday.app</th>
                                <th>Product B (big): Skillshare</th>
                                <th>Product C: Strava, Inc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Why similar</strong></td>
                                <td>Allows users to track activities, set goals, monitor progress. Focuses on daily habits without resources.</td>
                                <td>Offers learning resources with paywall, while SkillUp offers them free or through instructors.</td>
                                <td>Record activities, track progress, connect users with similar interests. Focuses on cycling/physical.</td>
                            </tr>
                            <tr>
                                <td><strong>Timeline</strong></td>
                                <td>Early 2017 → March 2017 (~3 weeks first version)</td>
                                <td>Nov 2010 → April 2011 (~6 months launch)</td>
                                <td>2007-2008 → May 2009 beta (~1-2 years)</td>
                            </tr>
                            <tr>
                                <td><strong>Team size</strong></td>
                                <td>1 developer</td>
                                <td>2 co-founders</td>
                                <td>6 founding members</td>
                            </tr>
                            <tr>
                                <td><strong>What worked</strong></td>
                                <td>Focused on essential features, kept app simple, shared online for early feedback.</td>
                                <td>Tested MVP concept by selling classes through an event hosting site first.</td>
                                <td>Tested early prototypes with athlete groups and cycling leaderboards.</td>
                            </tr>
                            <tr>
                                <td><strong>What failed</strong></td>
                                <td>Server struggled to handle sudden traffic surge after Reddit post.</td>
                                <td>Initial offline-only local classes struggled with geographic and scaling constraints.</td>
                                <td>Conceived in 1990s but delayed until GPS and smartphone technology matured.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Step 4: Compare */}
                <div className="slide-card" style={{ marginTop: '1.5rem', background: 'rgba(124, 58, 237, 0.05)' }}>
                    <h4 style={{ margin: '0 0 0.5rem', color: 'var(--purple)' }}>Step 4. Team Comparison Takeaways</h4>
                    <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
                        • <strong>Most frequent hidden work:</strong> S, D, and U (Security, Data, and Usability).
                    </p>
                    <p style={{ margin: '0 0 0.5rem', fontSize: '0.9rem' }}>
                        • <strong>Estimated first release window:</strong> <strong>6 to 12 months</strong> with our team of <strong>5</strong>.
                    </p>
                    <p style={{ margin: 0, fontSize: '0.9rem' }}>
                        • <strong>Practice copied:</strong> Everyday.app's focus on essential MVP features. <strong>Mistake avoided:</strong> Under-provisioning server capacity for traffic spikes.
                    </p>
                </div>
            </section>

            {/* 3. Lesson 9 Activity: Estimate One Slice */}
            <section id="pres-lesson9" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Activity size={14} />
                        <span>Lesson 9 Activity • Slice Estimation</span>
                    </div>
                    <h2 className="slide-title">Lesson 9 Activity: Estimate One Slice of Your Project</h2>
                    <p className="slide-subtitle">
                        Team: 3 &nbsp;•&nbsp; Project: SkillUp &nbsp;•&nbsp; Slicing, user stories, dual estimation methods, and team coordination checks.
                    </p>
                </div>

                {/* Step 1: Pick slice & Stories */}
                <h3 style={{ color: 'var(--purple)', margin: '1rem 0 0.5rem', fontSize: '1.2rem' }}>
                    Step 1. Pick Your Slice: User Portfolio Management and Analysis
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    Chosen because it is our core system that glues together every critical subsystem. Out of slice: Social Aspect Slice.
                </p>

                <h4 style={{ marginTop: '1.25rem', color: 'var(--text-primary)' }}>Stories in the Slice (Total: 31 Points)</h4>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table">
                        <thead>
                            <tr><th>User Story</th><th>MoSCoW</th><th>Points</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>As a user, I want to record my recreational activities so that I can track my journey.</td><td>Must</td><td>5</td></tr>
                            <tr><td>As a user, I want to track my progress for individual recreational activities so that I can see my improvement over time.</td><td>Must</td><td>13</td></tr>
                            <tr><td>As a user, I want to view my progress and accomplishments across all of my recreational activities in one place so that I do not have to track them separately.</td><td>Should</td><td>5</td></tr>
                            <tr><td>As a user, I want to customize my portfolio so that I can personalize it to fit my preferences.</td><td>Could</td><td>3</td></tr>
                            <tr><td>As a user, I want to set personalized goals so that I can track my progress toward achieving them.</td><td>Should</td><td>5</td></tr>
                            <tr style={{ fontWeight: 800 }}><td>Total Points</td><td></td><td>31</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Dual Estimation: Story Points & Analogous */}
                <h3 style={{ color: 'var(--purple)', margin: '2rem 0 0.75rem', fontSize: '1.2rem' }}>
                    Step 2 & 3. Dual Estimation Methods
                </h3>
                <div className="slide-columns-2">
                    <div className="slide-card">
                        <h4 style={{ margin: '0 0 0.5rem', color: 'var(--purple)' }}>Method 1: Story Points</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                            Based on 31 slice points, team of 5, and 40 hrs/person/sprint (200 team hrs/sprint).
                        </p>
                        <table className="table" style={{ margin: 0, fontSize: '0.88rem' }}>
                            <thead>
                                <tr><th>Velocity Scenario</th><th>Sprints</th><th>Effort</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>High (25 pts/sprint)</td><td>1.24</td><td>248 hrs</td></tr>
                                <tr><td>Middle (19 pts/sprint)</td><td>1.63</td><td>326 hrs</td></tr>
                                <tr><td>Low (15 pts/sprint)</td><td>2.07</td><td>414 hrs</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="slide-card">
                        <h4 style={{ margin: '0 0 0.5rem', color: 'var(--purple)' }}>Method 2: Analogous (Everyday.app)</h4>
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                            Everyday.app (1 dev, 3 weeks = 0.75 person-mo). Slice is 1.0x to 1.5x size + 20% team coordination adjustment.
                        </p>
                        <table className="table" style={{ margin: 0, fontSize: '0.88rem' }}>
                            <thead>
                                <tr><th>Estimate Level</th><th>Computation</th><th>Hours</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Low (1.0x)</td><td>0.75 mo × 160h + 20%</td><td>144 hrs</td></tr>
                                <tr><td>Middle</td><td>Midpoint of range</td><td>180 hrs</td></tr>
                                <tr><td>High (1.5x)</td><td>1.125 mo × 160h + 20%</td><td>216 hrs</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Step 5 & 6: Compare & Present */}
                <h3 style={{ color: 'var(--purple)', margin: '2rem 0 0.75rem', fontSize: '1.2rem' }}>
                    Step 5 & 6. Method Comparison & Final Presentation
                </h3>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table">
                        <thead>
                            <tr><th>Field</th><th>Our Estimate</th><th>Notes</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Slice Estimated</strong></td><td>User Portfolio Management and Analysis</td><td>31 story points</td></tr>
                            <tr><td><strong>Range in Hours</strong></td><td>144 – 414 hrs</td><td>Low: Analogous low, High: Story points low-velocity</td></tr>
                            <tr><td><strong>Expected Hours (PERT)</strong></td><td><strong>262 hrs</strong></td><td>(144 + 4(253) + 414) / 6 = 262 hrs (M=253 average of 180 and 326)</td></tr>
                            <tr><td><strong>Loaded Rate & Cost</strong></td><td><strong>$60/hour</strong></td><td>Low: $7,200 &nbsp;•&nbsp; Expected: $13,100 &nbsp;•&nbsp; High: $20,700</td></tr>
                            <tr><td><strong>Calendar Estimate</strong></td><td>1.4 – 4.1 weeks</td><td>Expected: 2.6 weeks (assuming 100 team hrs/week)</td></tr>
                            <tr><td><strong>Ratio Gap</strong></td><td>1.81x</td><td>326 middle ÷ 180 middle (narrowed once actual sprint velocity is measured)</td></tr>
                            <tr><td><strong>Date of Estimate</strong></td><td>09/29/26</td><td>Team 3</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 4. Estimation Appendix */}
            <section id="pres-appendix" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Cpu size={14} />
                        <span>Work Breakdown Structure</span>
                    </div>
                    <h2 className="slide-title">Estimation Appendix: Work Packages & Planning Value</h2>
                    <p className="slide-subtitle">
                        Reconciling analogous, story point, and bottom-up work package estimates to establish our 305-hour planning baseline.
                    </p>
                </div>

                <div style={{ overflowX: 'auto' }}>
                    <table className="table">
                        <thead>
                            <tr><th>Estimation Method</th><th>Low</th><th>Most Likely</th><th>High</th><th>Main Basis</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Analogous</td><td>144 hrs</td><td>180 hrs</td><td>216 hrs</td><td>Everyday.app comparison</td></tr>
                            <tr><td>Story Points</td><td>248 hrs</td><td>326 hrs</td><td>414 hrs</td><td>31 story points & assumed velocity</td></tr>
                            <tr style={{ background: 'rgba(124, 58, 237, 0.08)', fontWeight: 700 }}>
                                <td>Bottom-Up Budget Estimate</td><td>-</td><td>305 hrs</td><td>-</td><td>Detailed work-package estimates (Adopted Planning Value)</td></tr>
                        </tbody>
                    </table>
                </div>

                <h4 style={{ marginTop: '1.5rem', color: 'var(--purple)' }}>Work Package Breakdown (305 Hours Total)</h4>
                <div className="slide-columns-2">
                    <div className="slide-card">
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.92rem' }}>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>User portfolio and Activity Tracking:</span> <strong>70 hrs</strong>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Progress Tracking and Reporting:</span> <strong>90 hrs</strong>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Portfolio Customization and Goals:</span> <strong>55 hrs</strong>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>UX Design:</span> <strong>40 hrs</strong>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Testing and QA:</span> <strong>50 hrs</strong>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', borderTop: '2px solid var(--purple)', paddingTop: '0.5rem', fontWeight: 800, color: 'var(--purple)' }}>
                                <span>Total Delivery Effort:</span> <span>305 hrs</span>
                            </li>
                        </ul>
                    </div>

                    <div className="slide-card">
                        <h4 style={{ margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>Planning Rationale</h4>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            Because the 305-hour Bottom-Up estimate falls cleanly within the 144–414 hour range established by Analogous and Story Points, and is tied directly to planned work packages, 305 hours was selected as the planning baseline for the budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. ROI Analysis */}
            <section id="pres-roi" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <DollarSign size={14} />
                        <span>Financial Viability</span>
                    </div>
                    <h2 className="slide-title">ROI Analysis: Financial Baseline & Projected Returns</h2>
                    <p className="slide-subtitle">
                        Total investment baseline and monetization avenues for the SkillUp portfolio slice.
                    </p>
                </div>

                <div className="slide-columns-2">
                    <div className="slide-card">
                        <h3 style={{ margin: '0 0 1rem', color: 'var(--purple)', fontSize: '1.15rem' }}>
                            Total Investment & Financial Baseline
                        </h3>
                        <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            <li><strong>Base Build Estimate (Labor + Non-Labor):</strong> $28,836</li>
                            <li><strong>Cost Baseline (with Contingency Reserve):</strong> $31,286</li>
                            <li><strong>Total Budget Request (with 5% Management Reserve):</strong> $32,850</li>
                            <li><strong>Annual Operating Cost (Post-Launch Support & Hosting):</strong> $35,760 / year</li>
                        </ul>
                    </div>

                    <div className="slide-card">
                        <h3 style={{ margin: '0 0 1rem', color: 'var(--purple)', fontSize: '1.15rem' }}>
                            Projected Returns & Monetization
                        </h3>
                        <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                            <li><strong>Instructor & Course Commissions:</strong> Revenue splits from third-party instructors offering specialized courses, training, and certifications.</li>
                            <li><strong>Sponsored Content & Promotions:</strong> Paid promotional placements for equipment manufacturers and outside contributors.</li>
                            <li><strong>Data Monetization:</strong> Selling anonymized trend analytics to equipment makers and researchers among expected launch base of 1,000 to 2,000 active users.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* 6. Budget Estimation */}
            <section id="pres-budget" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <DollarSign size={14} />
                        <span>Budget Estimation Deliverable</span>
                    </div>
                    <h2 className="slide-title">Budget Estimation: Complete Cost Model</h2>
                    <p className="slide-subtitle">
                        Full labor, non-labor, contingency, and management reserve calculations for the 305-hour User Portfolio Slice.
                    </p>
                </div>

                {/* 1. Assumptions */}
                <h3 style={{ color: 'var(--purple)', margin: '1rem 0 0.5rem', fontSize: '1.15rem' }}>
                    1. Cost-Driving Assumptions
                </h3>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table">
                        <thead>
                            <tr><th>Cost-driving assumption</th><th>Why it affects cost</th><th>Owner</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Budget based on User Portfolio Management and Analysis Slice</td><td>Changes or adding to slice increases effort and cost</td><td>Project Manager</td></tr>
                            <tr><td>Team size of 5 people</td><td>Changes in team causes extra coordination efforts</td><td>Project Manager</td></tr>
                            <tr><td>Apple and Android Apps and Website access</td><td>Need to test and develop platform specific features</td><td>Integration Lead</td></tr>
                            <tr><td>Platform must support 1k – 2k active users at launch</td><td>Lower users wastes resources; higher users requires scaling</td><td>Technical Lead</td></tr>
                            <tr><td>6–12-month development timeline</td><td>Delays increase labor and costs</td><td>Project Manager</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* 2 & 4. Labor and FTE Conversion */}
                <h3 style={{ color: 'var(--purple)', margin: '2rem 0 0.5rem', fontSize: '1.15rem' }}>
                    Labor Conversion & Costs ($10,400/FTE-month • $80/hr productive • 130 hrs/mo)
                </h3>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table">
                        <thead>
                            <tr><th>Role</th><th>Hours</th><th>FTE-Months</th><th>Loaded Rate</th><th>Labor Cost</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>QA</td><td>50</td><td>0.38</td><td>$10,400</td><td>$3,952</td></tr>
                            <tr><td>UX</td><td>40</td><td>0.31</td><td>$10,400</td><td>$3,224</td></tr>
                            <tr><td>Developers</td><td>215</td><td>1.65</td><td>$10,400</td><td>$17,160</td></tr>
                            <tr style={{ fontWeight: 800 }}><td>Labor Total</td><td>305</td><td>2.34</td><td></td><td>$24,336</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Non-Labor & Base Build */}
                <div className="slide-columns-2" style={{ marginTop: '1.5rem' }}>
                    <div className="slide-card">
                        <h4 style={{ margin: '0 0 0.75rem', color: 'var(--purple)' }}>Non-Labor Directly Attributable ($4,500)</h4>
                        <table className="table" style={{ margin: 0, fontSize: '0.88rem' }}>
                            <thead>
                                <tr><th>Item</th><th>Computation</th><th>Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Dev and Test hosting</td><td>$150/mo × 2 months</td><td>$300</td></tr>
                                <tr><td>Security & Compliance tools</td><td>$1,600/mo × 2 months</td><td>$3,200</td></tr>
                                <tr><td>Training Materials</td><td>$500 × 2 kits</td><td>$1,000</td></tr>
                                <tr style={{ fontWeight: 800 }}><td>Non-Labor Total</td><td></td><td>$4,500</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="slide-card">
                        <h4 style={{ margin: '0 0 0.75rem', color: 'var(--purple)' }}>Annual Operating Cost ($35,760/yr)</h4>
                        <table className="table" style={{ margin: 0, fontSize: '0.88rem' }}>
                            <thead>
                                <tr><th>Operating Item</th><th>Computation</th><th>Annual Cost</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Production Hosting</td><td>$500/mo × 12 months</td><td>$6,000</td></tr>
                                <tr><td>Support & Maintenance</td><td>0.20 FTE × $10,400/mo × 12</td><td>$24,960</td></tr>
                                <tr><td>Security & Compliance</td><td>$400/mo × 12 months</td><td>$4,800</td></tr>
                                <tr style={{ fontWeight: 800 }}><td>Operating Total</td><td></td><td>$35,760/yr</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Contingency Reserves & EMV */}
                <h3 style={{ color: 'var(--purple)', margin: '2rem 0 0.5rem', fontSize: '1.15rem' }}>
                    Contingency Reserve: Expected Monetary Value (EMV)
                </h3>
                <div style={{ overflowX: 'auto' }}>
                    <table className="table">
                        <thead>
                            <tr><th>Identified Risk</th><th>Chance</th><th>Cost Impact</th><th>EMV</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Security/Compliance rework</td><td>30%</td><td>$4,000</td><td>$1,200</td></tr>
                            <tr><td>Over-expected user load</td><td>25%</td><td>$3,000</td><td>$750</td></tr>
                            <tr><td>Portfolio and statistics rework</td><td>20%</td><td>$2,500</td><td>$500</td></tr>
                            <tr style={{ fontWeight: 800 }}><td>Contingency Reserve (Sum of EMV)</td><td></td><td></td><td>$2,450</td></tr>
                        </tbody>
                    </table>
                </div>

                {/* Time-Phased & Summary Stack */}
                <div className="financial-waterfall-box">
                    <h4 style={{ margin: '0 0 1rem', color: 'var(--text-primary)' }}>One-Page Budget Summary Waterfall</h4>
                    <div className="financial-steps-row">
                        <div className="financial-step-card">
                            <span className="fin-step-label">Labor Total</span>
                            <div className="fin-step-amount">$24,336</div>
                            <span className="fin-step-sub">305 hrs (2.34 FTE-mo)</span>
                        </div>
                        <div className="financial-step-card">
                            <span className="fin-step-label">Non-Labor</span>
                            <div className="fin-step-amount">$4,500</div>
                            <span className="fin-step-sub">Hosting, Sec, Training</span>
                        </div>
                        <div className="financial-step-card">
                            <span className="fin-step-label">Base Build</span>
                            <div className="fin-step-amount">$28,836</div>
                            <span className="fin-step-sub">Direct Project Cost</span>
                        </div>
                        <div className="financial-step-card">
                            <span className="fin-step-label">Contingency</span>
                            <div className="fin-step-amount">+$2,450</div>
                            <span className="fin-step-sub">Risk EMV Buffer</span>
                        </div>
                        <div className="financial-step-card highlight">
                            <span className="fin-step-label" style={{ color: 'var(--purple)' }}>Cost Baseline</span>
                            <div className="fin-step-amount">$31,286</div>
                            <span className="fin-step-sub">Approved Baseline</span>
                        </div>
                        <div className="financial-step-card highlight" style={{ border: '2px solid #10b981' }}>
                            <span className="fin-step-label" style={{ color: '#10b981' }}>Total Request</span>
                            <div className="fin-step-amount" style={{ color: '#10b981' }}>$32,850</div>
                            <span className="fin-step-sub">Includes 5% Mgmt ($1,564)</span>
                        </div>
                    </div>

                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(124, 58, 237, 0.15)', fontSize: '0.88rem' }}>
                        <strong>Time-Phased Spend:</strong> Month 1: $14,750 (Labor $13,000 + Non-Labor $1,750) &nbsp;|&nbsp; Month 2: $14,086 (Labor $11,336 + Non-Labor $2,750) &nbsp;|&nbsp; Cumulative: $28,836.
                    </div>
                </div>
            </section>

            {/* 7. Change Log */}
            <section id="pres-changelog" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <Calendar size={14} />
                        <span>Sprint 2 Governance</span>
                    </div>
                    <h2 className="slide-title">Sprint Change Log (October 5, 2026)</h2>
                    <p className="slide-subtitle">
                        Project: SkillUp &nbsp;•&nbsp; Prior Version: Project Charter v1.0 (09/15/26), Market Research (09/21/26), Strategy-to-Project Chain &nbsp;•&nbsp; Logged & Reviewed by: Team 3
                    </p>
                </div>

                <div className="slide-card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                        <span style={{ background: 'var(--purple)', color: '#fff', padding: '0.2rem 0.6rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 800 }}>
                            CL-2-00 • ASSUMPTIONS
                        </span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Status: Active • Reason: New Information</span>
                    </div>
                    <h4 style={{ margin: '0 0 0.5rem', color: 'var(--text-primary)' }}>
                        No revisions to prior sprint deliverables; 10 new cost and delivery assumptions introduced
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                        This sprint added new work (the one-page budget for the User Portfolio Management and Analysis slice) but did not revise any content from the Project Charter, Market Research, or Strategy-to-Project Chain. All prior documents remain as submitted. The charter's assumptions describe user behavior; this sprint's assumptions describe cost and delivery, so none of them contradict each other.
                    </p>
                </div>
            </section>

            {/* 8. AI Use Disclosure */}
            <section id="pres-ai-disclosure" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <ShieldCheck size={14} />
                        <span>CS 4390/5388 Syllabus Protocol</span>
                    </div>
                    <h2 className="slide-title">AI Use Disclosure & Policy Compliance</h2>
                    <p className="slide-subtitle">
                        Every sprint contribution includes an explicit AI use disclosure adhering to academic integrity standards.
                    </p>
                </div>

                <div className="slide-columns-2">
                    <div className="slide-card">
                        <h4 style={{ margin: '0 0 0.5rem', color: 'var(--purple)' }}>AI Use Policy Guidelines</h4>
                        <p style={{ fontSize: '0.86rem', fontWeight: 700, margin: '0.5rem 0 0.25rem', color: '#10b981' }}>Permitted for:</p>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                            <li>Generating initial drafts of PM artifacts for team review and revision</li>
                            <li>Suggesting risk categories, stakeholder types, or estimation approaches</li>
                            <li>Summarizing or restructuring content the team already produced</li>
                            <li>Grammar and clarity checks</li>
                            <li>Generating alternative framings for comparison</li>
                        </ul>
                        <p style={{ fontSize: '0.86rem', fontWeight: 700, margin: '0.75rem 0 0.25rem', color: '#ef4444' }}>Not permitted for:</p>
                        <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                            <li>Individual reflection or individual estimation memo</li>
                            <li>Any exam response</li>
                            <li>Go/no-go reasoning and justification in any sprint deliverable</li>
                        </ul>
                    </div>

                    <div className="slide-card">
                        <h4 style={{ margin: '0 0 0.75rem', color: 'var(--purple)' }}>Sprint 2 AI Disclosures</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div className="team-ai-pill">
                                <strong>1. Template Generation (ChatGPT):</strong>
                                <p style={{ margin: '0.2rem 0', fontSize: '0.8rem' }}><strong>Stage:</strong> Drafting and Restructuring</p>
                                <p style={{ margin: '0.2rem 0', fontSize: '0.8rem' }}><strong>Purpose:</strong> Used to create an initial template for the Building the Budget deliverable.</p>
                                <p style={{ margin: '0.2rem 0', fontSize: '0.8rem' }}><strong>Changes:</strong> AI was not used for the final content itself, only the structural template.</p>
                            </div>

                            <div className="team-ai-pill">
                                <strong>2. Website Implementation (Antigravity AI):</strong>
                                <p style={{ margin: '0.2rem 0', fontSize: '0.8rem' }}><strong>Stage:</strong> Uploading work</p>
                                <p style={{ margin: '0.2rem 0', fontSize: '0.8rem' }}><strong>Purpose:</strong> Used to transfer document content directly to the website and add new sections to the React site.</p>
                                <p style={{ margin: '0.2rem 0', fontSize: '0.8rem' }}><strong>Changes:</strong> Antigravity was strictly used for formatting and migrating existing content, not generating new PM content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Sprint2PresentationView;
