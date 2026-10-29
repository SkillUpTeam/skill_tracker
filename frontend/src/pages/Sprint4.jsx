import React, { useState, useEffect } from "react";
import SubNav from "../components/SubNav";
import SprintModeToggle from "../components/SprintModeToggle";
import Sprint4PresentationView from "../components/presentation/Sprint4PresentationView";
import { Eye, EyeOff } from "lucide-react";

function Sprint4() {
    const [viewMode, setViewMode] = useState(() => {
        return localStorage.getItem('sprint_view_mode') || 'presentation';
    });

    useEffect(() => {
        localStorage.setItem('sprint_view_mode', viewMode);
    }, [viewMode]);

    // Collapsible state for Delivery Metrics section in documents view
    const [isDeliveryMetricsOpen, setIsDeliveryMetricsOpen] = useState(true);

    const subNavLinks = [
        { id: 'delivery-metrics', label: 'Delivery Metrics' }
    ];

    return (
        <main className="sprint-page">
            {/* Sprint 4 Sub-Navigation (shown in Document Mode) */}
            {viewMode === 'document' && <SubNav links={subNavLinks} />}

            <div className="sprint-header" style={{ paddingBottom: '1rem' }}>
                <h1>Sprint 4</h1>
                <p>
                    Explore our delivery metrics for Sprints 1 to 3 and the decisions each metric triggers for Sprint 4.
                </p>
            </div>

            {/* View Mode Switcher */}
            <SprintModeToggle
                mode={viewMode}
                setMode={setViewMode}
            />

            {viewMode === 'presentation' ? (
                <Sprint4PresentationView />
            ) : (
                <>
                    {/* Section 1: Delivery Metrics */}
                    <div className="sprint-content">
                        <section id="delivery-metrics" className="sprint-section">
                            <div className="section-heading" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h2>Delivery Metrics, Sprints 1 to 3</h2>
                                </div>
                                <div className="collapsible-header-actions">
                                    <button
                                        type="button"
                                        onClick={() => setIsDeliveryMetricsOpen(prev => !prev)}
                                        className="collapsible-toggle-btn"
                                        aria-expanded={isDeliveryMetricsOpen}
                                        aria-controls="delivery-metrics-content"
                                    >
                                        {isDeliveryMetricsOpen ? (
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
                                        href="/documents/sprint4/Sprint 4 Delivery Metrics.pdf"
                                        download="Sprint 4 Delivery Metrics.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="pdf-button"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            </div>

                            {!isDeliveryMetricsOpen ? (
                                <div
                                    className="collapsed-notice-box"
                                    onClick={() => setIsDeliveryMetricsOpen(true)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsDeliveryMetricsOpen(true); }}
                                    aria-label="Expand Delivery Metrics section"
                                >
                                    <div>
                                        <strong style={{ color: 'var(--purple)', display: 'block', fontSize: '1.05rem', marginBottom: '0.25rem' }}>
                                            Delivery Metrics Section Collapsed
                                        </strong>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            Click to expand and view how we counted, the gathered data, the five metrics, and the decision each one triggers.
                                        </span>
                                    </div>
                                    <span className="collapsible-toggle-btn" style={{ pointerEvents: 'none' }}>
                                        <Eye size={15} />
                                        <span>Show Metrics</span>
                                    </span>
                                </div>
                            ) : (
                                <div id="delivery-metrics-content" className="sprint-topic" style={{ marginTop: '1.5rem', maxWidth: '100%' }}>
                                    {/* 1. How We Counted */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>How We Counted</h3>
                                        <ul>
                                            <li><strong>Source:</strong> the commit history of main in SkillUpTeam/skill_tracker. It has 53 changes and 8 merge commits. There is no CI, no pull requests and no deploy log.</li>
                                            <li><strong>Publish:</strong> every commit to main counts as one publish, assuming the site redeploys on each push. This is an upper bound.</li>
                                            <li><strong>Unplanned fix:</strong> a commit that corrects something already live, such as a broken link, a missing file, a broken toggle or a layout slip.</li>
                                        </ul>
                                    </div>

                                    {/* 2. Gather */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Step 1: Gather</h3>
                                        <p><strong>Publishes per week (W38 to W43):</strong> 10, 21, 1, 7, 0, 14. By sprint that is 31, 8 and 14. All 53 publishes fall on just 5 days, and each one is a deadline day or the day before it.</p>
                                        <p><strong>Trace A, Sprint 2 page:</strong> first commit Oct 4 17:13 (c75dc05), live Oct 5 23:31 (a903e7a). Lead time about <strong>30h 18m</strong>.</p>
                                        <p><strong>Trace B, Sprint 3 page:</strong> first commit Oct 19 15:19 (48f166d), live Oct 19 23:36 (b661cf2). Lead time about <strong>8h 17m</strong>.</p>
                                    </div>

                                    {/* 3. Compute */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Step 2: Compute</h3>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Metric</th>
                                                    <th>Sprint 1</th>
                                                    <th>Sprint 2</th>
                                                    <th>Sprint 3</th>
                                                    <th>Overall</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Change lead time</strong></td>
                                                    <td>1h 21m</td>
                                                    <td>30h 18m</td>
                                                    <td>8h 17m</td>
                                                    <td>Median about 8h</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Deployment frequency</strong></td>
                                                    <td>31 on 2 days</td>
                                                    <td>8 on 2 days</td>
                                                    <td>14 on 1 day</td>
                                                    <td>About 8.8 per week, 5 publish days</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Change fail rate</strong></td>
                                                    <td>6% (2/31)</td>
                                                    <td>0% (0/8)</td>
                                                    <td>14% (2/14)</td>
                                                    <td>8% (4/53)</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Rework rate</strong></td>
                                                    <td>10% (3/31)</td>
                                                    <td>0% (0/8)</td>
                                                    <td>14% (2/14)</td>
                                                    <td>9% (5/53)</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Recovery time</strong></td>
                                                    <td>4m, 1h 45m</td>
                                                    <td>n/a</td>
                                                    <td>5m, 5h 22m</td>
                                                    <td>Median about 55m</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p><strong>The breaks:</strong> Sprint 1 published empty download sections and merged two constraints into one bullet. Sprint 3 pointed Jonathan's download buttons at missing files and shipped one shared expand/collapse toggle. The repo does not record when a break was noticed, so recovery time runs from the bad publish to the fix.</p>
                                    </div>

                                    {/* 4. Decide */}
                                    <div style={{ marginBottom: '2.5rem' }}>
                                        <h3>Step 3: Decide</h3>
                                        <table className="table table-bordered">
                                            <thead>
                                                <tr>
                                                    <th>Metric</th>
                                                    <th>Decision</th>
                                                    <th>Fired in S1 to S3?</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td><strong>Change lead time</strong></td>
                                                    <td>Updates are modified, validated through local testing, and deployed as soon as functionality is successfully verified</td>
                                                    <td>Yes, all sprints</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Deployment frequency</strong></td>
                                                    <td>Releases to the live site occur on a weekly cycle, or more frequently, depending on documentation completeness and formal content verification.</td>
                                                    <td>Yes, all sprints</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Change fail rate</strong></td>
                                                    <td>Upon encountering any deployment failure or defect, development is paused to execute npm run build, inspect build logs for errors, and complete a review prior to pushing.</td>
                                                    <td>Yes, all sprints</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Rework rate</strong></td>
                                                    <td>Following the emergence of building errors, direct pushes to the main branch were discontinued, changes must now be integrated and verified across peer repositories before being merged into main.</td>
                                                    <td>Yes, Sprint 3</td>
                                                </tr>
                                                <tr>
                                                    <td><strong>Recovery time</strong></td>
                                                    <td>If a live site push creates defects, the responsible publisher immediately reverts the offending commit and notifies the team via the primary communication channel.</td>
                                                    <td>Yes, Sprint 3</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p><strong>Next for Sprint 4:</strong> use the host's deploy list instead of commits, log breaks as GitHub issues, and prefix fix commits with "fix:".</p>
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

export default Sprint4;
