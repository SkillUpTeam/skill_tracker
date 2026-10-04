import React from "react";
import SubNav from "../components/SubNav";

const sprint2Documents = {
    businessCase: {},
    estimationAppendix: {},
    roiAnalysis: {},
}

function Sprint2() {
    const subNavLinks =[
        { id: 'business-case', label: 'Business Case' },
        { id: 'estimation-appendix', label: 'Estimation Appendix' },
        { id: 'roi-analysis', label: 'ROI Analysis' }
    ];

    return (
        <main className="sprint-page">
            {/* Sprint 2 Sub-Navigation */}
            <SubNav links={subNavLinks} />

            <div className="sprint-header">
                <h1>Sprint 2</h1>
            </div>

            <div className="sprint-content">
                {/* Business Case */}
                <section id="business-case" className="sprint-section">
                    <div className="section-heading">
                        <h2>Business Case</h2>
                    </div>

                    <div className="sprint-topic">
                        <h3>Value Analysis</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Go/No-Go Recommendation</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </section>
            </div>

            <div className="sprint-content">
                {/* Estimation Appendix */}
                <section id="estimation-appendix" className="sprint-section">
                    <div className="section-heading">
                        <h2>Estimation Appendix</h2>
                    </div>

                    <div className="sprint-topic">
                        <h3>Methods Used</h3>

                        <h4>1. [Method 1 RENAME]</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                        <h4>2. [Method 2 RENAME]</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </section>
            </div>

            <div className="sprint-content">
                {/* ROI Analysis */}
                <section id="roi-analysis" className="sprint-section">
                    <div className="section-heading">
                        <h2>ROI Analysis</h2>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default Sprint2;