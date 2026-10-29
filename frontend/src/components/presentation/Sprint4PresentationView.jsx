import React from 'react';
import {
    Activity,
    Clock,
    Rocket,
    AlertTriangle,
    RotateCcw,
    LifeBuoy,
    CheckCircle2
} from 'lucide-react';
import './Presentation.css';

function Sprint4PresentationView() {
    const quickLinks = [
        { id: 'pres-delivery-metrics', label: 'Delivery Metrics' },
        { id: 'pres-delivery-decisions', label: 'Metric Decisions' }
    ];

    const metricCards = [
        { icon: Clock, title: 'Change Lead Time', value: 'Median about 8h', detail: 'Sprint 1: 1h 21m. Sprint 2: 30h 18m. Sprint 3: 8h 17m.' },
        { icon: Rocket, title: 'Deployment Frequency', value: 'About 8.8 per week', detail: '53 publishes, but only 5 publish days across Sprints 1 to 3.' },
        { icon: AlertTriangle, title: 'Change Fail Rate', value: '8% (4/53)', detail: 'Sprint 1: 6%. Sprint 2: 0%. Sprint 3: 14%.' },
        { icon: RotateCcw, title: 'Rework Rate', value: '9% (5/53)', detail: 'Sprint 1: 10%. Sprint 2: 0%. Sprint 3: 14%.' },
        { icon: LifeBuoy, title: 'Recovery Time', value: 'Median about 55m', detail: 'Sprint 1: 4m and 1h 45m. Sprint 3: 5m and 5h 22m.' }
    ];

    const decisions = [
        { metric: 'Change Lead Time', decision: 'Updates are modified, validated through local testing, and deployed as soon as functionality is successfully verified', fired: 'Yes, all sprints' },
        { metric: 'Deployment Frequency', decision: 'Releases to the live site occur on a weekly cycle, or more frequently, depending on documentation completeness and formal content verification.', fired: 'Yes, all sprints' },
        { metric: 'Change Fail Rate', decision: 'Upon encountering any deployment failure or defect, development is paused to execute npm run build, inspect build logs for errors, and complete a review prior to pushing.', fired: 'Yes, all sprints' },
        { metric: 'Rework Rate', decision: 'Following the emergence of building errors, direct pushes to the main branch were discontinued, changes must now be integrated and verified across peer repositories before being merged into main.', fired: 'Yes, Sprint 3' },
        { metric: 'Recovery Time', decision: 'If a live site push creates defects, the responsible publisher immediately reverts the offending commit and notifies the team via the primary communication channel.', fired: 'Yes, Sprint 3' }
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

            {/* 1. Delivery Metrics */}
            <section id="pres-delivery-metrics" className="presentation-section-card">
                <div className="slide-header-block">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                        <div>
                            <div className="slide-badge-pill">
                                <Activity size={14} />
                                <span>DORA Metrics for Our Portal</span>
                            </div>
                            <h2 className="slide-title">Delivery Metrics, Sprints 1 to 3</h2>
                            <p className="slide-subtitle">
                                Five delivery metrics measured from our repository's commit history. All 53 publishes fell on just 5 days, each one a deadline day or the day before it.
                            </p>
                        </div>
                        <a
                            href="/documents/sprint4/Sprint 4 Delivery Metrics.pdf"
                            download="Sprint 4 Delivery Metrics.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                            style={{ alignSelf: 'flex-start' }}
                        >
                            Download PDF
                        </a>
                    </div>
                </div>

                <div className="slide-columns-3" style={{ marginBottom: '1.5rem' }}>
                    {metricCards.map(({ icon: Icon, title, value, detail }) => (
                        <div className="slide-card" key={title}>
                            <div className="slide-card-header">
                                <div className="slide-card-icon">
                                    <Icon size={18} />
                                </div>
                                <h4 className="slide-card-title">{title}</h4>
                            </div>
                            <p style={{ margin: '0 0 0.4rem', fontSize: '1.25rem', fontWeight: 800, color: 'var(--purple)' }}>
                                {value}
                            </p>
                            <p className="slide-card-body" style={{ margin: 0 }}>
                                {detail}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 2. Metric Decisions */}
            <section id="pres-delivery-decisions" className="presentation-section-card">
                <div className="slide-header-block">
                    <div className="slide-badge-pill">
                        <CheckCircle2 size={14} />
                        <span>One Decision per Metric</span>
                    </div>
                    <h2 className="slide-title">Metric Decisions</h2>
                    <p className="slide-subtitle">
                        Each metric names the decision it triggers, so a teammate can check at sprint end whether it was followed.
                    </p>
                </div>

                <div className="slide-columns-2">
                    {decisions.map(({ metric, decision, fired }) => (
                        <div className="slide-card" key={metric}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem', gap: '0.5rem' }}>
                                <h4 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--purple)', fontWeight: 700 }}>{metric}</h4>
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
                                    {fired}
                                </span>
                            </div>
                            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {decision}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Sprint4PresentationView;
