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
        { id: 'roi-analysis', label: 'ROI Analysis' },
        { id: 'budget-estimation', label: 'Budget Estimation' }
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
                        <h3>Scope of Estimate</h3>
                        <p>
                            The estimate covers the User Portfolio Management and Analysis slice of SkillUp. This slice
                            includes recording recreational activities, tracking progress for individual activities, viewing 
                            overall accomplishments, customizing the user’s portfolio, and setting personalized goals. 
                            The selected stories total 31 story points.
                        </p>
                        <p>
                            Two primary estimation methods were used to evaluate the slice using different starting 
                            information. Analogous Estimation starts from the development effort of a similar real 
                            product, while Story Points start from the team’s own backlog estimates and an assumed 
                            velocity. Using these methods, we received the following:
                        </p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Method</th>
                                    <th>Low</th>
                                    <th>Most Likely</th>
                                    <th>High</th>
                                    <th>Main Basis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Analogous</td>
                                    <td>144 hrs</td>
                                    <td>180 hrs</td>
                                    <td>216 hrs</td>
                                    <td>Everyday.app comparison</td>
                                </tr>
                                <tr>
                                    <td>Story Points</td>
                                    <td>248 hrs</td>
                                    <td>326 hrs</td>
                                    <td>414 hrs</td>
                                    <td>31 story points and assumed velocity</td>
                                </tr>
                                <tr>
                                    <td>Bottom-Up Budget Estimate</td>
                                    <td></td>
                                    <td>305 hrs</td>
                                    <td></td>
                                    <td>Detailed work-package estimates</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            The two primary estimation methods produce an overall range of 144-414 team hours. The 
                            Bottom-Up method estimated 305 hours, which also falls within the range produced by the 
                            other two methods, and we chose it as the planning value for budgeting.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Analogous Estimation</h3>
                        <p>
                            For the analogous estimate, the team used Everyday.app as the comparable product since 
                            it had similar functionality to our slice. Everyday.app was developed by one developer and 
                            took approximately three weeks.
                        </p>
                        <p>
                            We estimated that the SkillUp slice represents between 100%-150% of Everyday.app’s 
                            functionality. Both products allow to record actions and track your progress, but SkillUp 
                            extends functionality by offering tracking for recreational activities, customize your 
                            portfolio, and set personalized goals. The initial estimate of 120-180 hours was then 
                            increased by 20% for coordination due to having a 5-person team. Results:
                        </p>
                        <p>
                            Low: 144 hours &nbsp;&nbsp;&nbsp; Middle: 180 hours &nbsp;&nbsp;&nbsp; High: 216 hours
                        </p>
                        <p>
                            We have lower confidence in these estimates due to the slice-size comparison and the 
                            20% coordination adjustment being assumptions.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Story Points Estimation</h3>
                        <p>
                            The Story Points method starts with the team’s backlog. The selected slice had 31 story 
                            points, and the estimate assumes a team of 5 people, with 40 hours per person per sprint. 
                            Since the team does not have past sprint data, we estimated a velocity of 15 / 19 / 25 points 
                            per sprint for low, middle and high velocity scenarios. This gave us the following results:
                        </p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Assumed Velocity</th>
                                    <th>Sprints Required</th>
                                    <th>Estimated Effort</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>25 points/sprint</td>
                                    <td>1.24</td>
                                    <td>248 hrs</td>
                                </tr>
                                <tr>
                                    <td>19 points/sprint</td>
                                    <td>1.63</td>
                                    <td>326 hrs</td>
                                </tr>
                                <tr>
                                    <td>15 points/sprint</td>
                                    <td>2.07</td>
                                    <td>414 hrs</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            The Story Points range is between 248-414 hours, with 326 as the middle estimate. Since 
                            we have not completed a sprint yet, velocity is our biggest uncertainty, but once the team 
                            completes actual sprints, we can replace our assumptions with accurate data.
                        </p>
                        <p>
                            The two primary methods produced different estimates due to relying on different 
                            assumptions. Analogous Estimation depended on similarity of Skill Up to Everyday.app, 
                            while Story Points depended on assumed sprint velocity.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Bottom-Up Planning Estimate</h3>
                        <p>
                            For this method we broke down the slice into specific work packages:
                        </p>
                        <ul>
                            <li>User portfolio and Activity Tracking – 70 hrs</li>
                            <li>Progress Tracking and Reporting – 90 hrs</li>
                            <li>Portfolio Customization and Goals – 55 hrs</li>
                            <li>UX Design – 40 hrs</li>
                            <li>Testing and QA – 50 hrs</li>
                        </ul>
                        <p>
                            Since the 305-hour Bottom-Up estimate falls within the 144-414 hour range from the 
                            previous two estimates, and it is tied in to planned work packages, we selected 305 hours 
                            as the planning estimate.
                        </p>
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

            <div className="sprint-content">
                {/* Budget Estimation */}
                <section id="budget-estimation" className="sprint-section">
                    <div className="section-heading">
                        <h2>Budget Estimation</h2>
                        <a
                            href="/documents/sprint2/BudgetEstimation_Lesson9.pdf"
                            download="BudgetEstimation_Lesson9.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                        >
                            Download PDF
                        </a>
                    </div>

                    <div className="sprint-topic">
                        <h3>1. Assumptions</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Cost-driving assumption</th>
                                    <th>Why it affects cost</th>
                                    <th>Owner</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>The budget is based on the User Portfolio Management and Analysis Slice</td>
                                    <td>Changes or adding to the slice increases effort and cost</td>
                                    <td>Project Manager</td>
                                </tr>
                                <tr>
                                    <td>Team size of 5 people</td>
                                    <td>Changes in team causes extra coordination efforts</td>
                                    <td>Project Manager</td>
                                </tr>
                                <tr>
                                    <td>Apple and Android Apps and Website access to the platform</td>
                                    <td>We need to test and develop platform specific features.</td>
                                    <td>Integration Lead</td>
                                </tr>
                                <tr>
                                    <td>Platform must support 1k – 2k active users at launch</td>
                                    <td>Lower expected users will result in wasted resources. Having more than expected users will require to scale up.</td>
                                    <td>Technical Lead</td>
                                </tr>
                                <tr>
                                    <td>6–12-month development timeline</td>
                                    <td>Delays increase labor and costs.</td>
                                    <td>Project Manager</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>2. Work Packages</h3>
                        <p>Note: 5 People are partially allocated for this slice</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Work package</th>
                                    <th>Role</th>
                                    <th>Estimated hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>User Portfolio and Activity Tracking</td>
                                    <td>Developers</td>
                                    <td>70</td>
                                </tr>
                                <tr>
                                    <td>Progress Tracking and Reporting</td>
                                    <td>Developers</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>Portfolio Customization and Goals</td>
                                    <td>Developers</td>
                                    <td>55</td>
                                </tr>
                                <tr>
                                    <td>UX Design</td>
                                    <td>UX</td>
                                    <td>40</td>
                                </tr>
                                <tr>
                                    <td>Testing and QA</td>
                                    <td>QA</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td><strong>Total delivery effort</strong></td>
                                    <td></td>
                                    <td><strong>305</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>3. Estimating Efforts</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Method</th>
                                    <th>Optimistic / inputs</th>
                                    <th>Most likely</th>
                                    <th>Pessimistic</th>
                                    <th>Result (hours)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Analogous</td>
                                    <td>144 hrs</td>
                                    <td>180 hrs</td>
                                    <td>216 hrs</td>
                                    <td>180 hrs</td>
                                </tr>
                                <tr>
                                    <td>Story Points</td>
                                    <td>248 hrs</td>
                                    <td>326 hrs</td>
                                    <td>414 hrs</td>
                                    <td>326 hrs</td>
                                </tr>
                                <tr>
                                    <td>Bottom Up</td>
                                    <td>Work Package estimates</td>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>305 hrs</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Planning value: 305 hours</p>
                        <p>
                            Explanation: Analogous and Story points are estimation methods from Lesson 9. The middle 
                            estimates from lesson 9 were 180 and 326 with an overall range of 144-414hrs. The Bottom-Up 
                            estimate is based on planned work and is within the range of Lesson 9 estimates, we are using 
                            305 hours for the planning value.
                        </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>4. Convert Hours to FTE-Months</h3>
                        <p>Nominal hours per FTE-month: 160 hours &nbsp;&nbsp;&nbsp; Productive hours per FTE-month: 130</p>
                        <p>FTE = Hours / Productive Project Hours</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th>Hours</th>
                                    <th>FTE-months</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>QA</td>
                                    <td>50</td>
                                    <td>0.38</td>
                                </tr>
                                <tr>
                                    <td>UX</td>
                                    <td>40</td>
                                    <td>0.31</td>
                                </tr>
                                <tr>
                                    <td>Developers</td>
                                    <td>215</td>
                                    <td>1.65</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><strong>Total project hours: 305</strong></td>
                                    <td><strong>Total FTE-months: 2.34</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <p><small>Total FTE-months = 2.34 using rounded role values.</small></p>
                    </div>

                    <div className="sprint-topic">
                        <h3>5. Staff Plan</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th>M1</th>
                                    <th>M2</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>QA</td>
                                    <td>0.10</td>
                                    <td>0.28</td>
                                    <td>0.38</td>
                                </tr>
                                <tr>
                                    <td>UX</td>
                                    <td>0.25</td>
                                    <td>0.06</td>
                                    <td>0.31</td>
                                </tr>
                                <tr>
                                    <td>Developers</td>
                                    <td>0.90</td>
                                    <td>0.75</td>
                                    <td>1.65</td>
                                </tr>
                                <tr>
                                    <td><strong>Total FTE-Months</strong></td>
                                    <td><strong>1.25</strong></td>
                                    <td><strong>1.09</strong></td>
                                    <td><strong>2.34</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Staffing table total FTE-months: 2.34 &nbsp;&nbsp;&nbsp; Matches conversion above? Yes</p>
                    </div>

                    <div className="sprint-topic">
                        <h3>6/7. Calculated Loaded Labor Rate</h3>
                        <p>
                            Loaded rate assumption: $10,400 per FTE-month, equivalent to $80 per productive hour based 
                            on 130 productive hours per month
                        </p>
                        
                        <h4>Loaded Labor</h4>
                        <p>Loaded rate: $10,400 per FTE-month OR $80 per productive hour</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Role</th>
                                    <th>FTE-months</th>
                                    <th>Loaded rate</th>
                                    <th>Labor cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>QA</td>
                                    <td>0.38</td>
                                    <td>$10,400</td>
                                    <td>$3,952</td>
                                </tr>
                                <tr>
                                    <td>UX</td>
                                    <td>0.31</td>
                                    <td>$10,400</td>
                                    <td>$3,224</td>
                                </tr>
                                <tr>
                                    <td>Developers</td>
                                    <td>1.65</td>
                                    <td>$10,400</td>
                                    <td>$17,160</td>
                                </tr>
                                <tr>
                                    <td><strong>Labor Total</strong></td>
                                    <td><strong>2.34</strong></td>
                                    <td></td>
                                    <td><strong>$24,336</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <h4>Non-Labor</h4>
                        <p>
                            Note: Project-wide software licenses and other shared costs are excluded from this slice budget. 
                            This section includes only non-labor costs directly attributable to the selected slice.
                        </p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>How computed</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Development and Test hosting</td>
                                    <td>Set up environment for testing and development purposes.<br/>($150 / Month) * 2 months</td>
                                    <td>$300</td>
                                </tr>
                                <tr>
                                    <td>Security & Compliance tools</td>
                                    <td>Data privacy checks, secure API, user data safeguards etc.<br/>($1,600/month x 2 months)</td>
                                    <td>$3,200</td>
                                </tr>
                                <tr>
                                    <td>Training Materials</td>
                                    <td>Onboarding guides, documentation, and resource creation ($500 x 2 kits)</td>
                                    <td>$1,000</td>
                                </tr>
                                <tr>
                                    <td><strong>Non-Labor Total</strong></td>
                                    <td></td>
                                    <td><strong>$4,500</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Labor Total</td>
                                    <td>$24,336</td>
                                </tr>
                                <tr>
                                    <td>Non-Labor</td>
                                    <td>$4,500</td>
                                </tr>
                                <tr>
                                    <td><strong>Base Build Estimate</strong></td>
                                    <td><strong>$28,836</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>8. Cost of Ownership</h3>
                        <h4>Annual Operating Cost of the Selected Slice</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Operating item</th>
                                    <th>How computed</th>
                                    <th>Annual cost</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Production Hosting</td>
                                    <td>Estimated share of production infrastructure for this slice:<br/>$500/month × 12 months</td>
                                    <td>$6,000</td>
                                </tr>
                                <tr>
                                    <td>Support & Maintenance</td>
                                    <td>0.20 FTE × $10,400/month × 12 months</td>
                                    <td>$24,960</td>
                                </tr>
                                <tr>
                                    <td>Security and Compliance Services</td>
                                    <td>Estimated slice share:<br/>$400/month × 12 months</td>
                                    <td>$4,800</td>
                                </tr>
                                <tr>
                                    <td><strong>Operating Total</strong></td>
                                    <td></td>
                                    <td><strong>$35,760/year</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>9. Price the Risks (Contingency Reserve)</h3>
                        <p>EMV = probability (chance) × cost impact</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Risk</th>
                                    <th>Chance</th>
                                    <th>Cost impact</th>
                                    <th>EMV</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Security/Compliance rework</td>
                                    <td>30%</td>
                                    <td>$4,000</td>
                                    <td>$1,200</td>
                                </tr>
                                <tr>
                                    <td>Over-expected user load</td>
                                    <td>25%</td>
                                    <td>$3,000</td>
                                    <td>$750</td>
                                </tr>
                                <tr>
                                    <td>Portfolio and statistics rework</td>
                                    <td>20%</td>
                                    <td>$2,500</td>
                                    <td>$500</td>
                                </tr>
                                <tr>
                                    <td><strong>Contingency reserve</strong></td>
                                    <td></td>
                                    <td></td>
                                    <td><strong>$2,450</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Contingency reserve = sum of EMV = $2,450</p>
                        <p>Cost baseline = base build + contingency = $28,836 + $2,450 = $31,286</p>
                        <p>Management reserve rate: 5% =&gt; Management reserve: $1,564</p>
                        <p>Total budget request = cost baseline + management reserve = $32,850</p>
                    </div>

                    <div className="sprint-topic">
                        <h3>10. Time-Phase</h3>
                        <p>Labor = FTE-Month (Month Specific) * Labor Rate</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Month</th>
                                    <th>Labor</th>
                                    <th>Non-Labor</th>
                                    <th>Total</th>
                                    <th>Cumulative</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>$13,000</td>
                                    <td>$1,750</td>
                                    <td>$14,750</td>
                                    <td>$14,750</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>$11,336</td>
                                    <td>$2,750</td>
                                    <td>$14,086</td>
                                    <td>$28,836</td>
                                </tr>
                                <tr>
                                    <td><strong>Total</strong></td>
                                    <td><strong>$24,336</strong></td>
                                    <td><strong>$4,500</strong></td>
                                    <td><strong>$28,836</strong></td>
                                    <td><strong>$28,836</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>One-Page Budget Summary</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Budget line</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Labor</td>
                                    <td>$24,336</td>
                                </tr>
                                <tr>
                                    <td>Non-labor</td>
                                    <td>$4,500</td>
                                </tr>
                                <tr>
                                    <td>Base build estimate</td>
                                    <td>$28,836</td>
                                </tr>
                                <tr>
                                    <td>Contingency reserve</td>
                                    <td>$2,450</td>
                                </tr>
                                <tr>
                                    <td>Cost baseline</td>
                                    <td>$31,286</td>
                                </tr>
                                <tr>
                                    <td>Management reserve</td>
                                    <td>$1,564</td>
                                </tr>
                                <tr>
                                    <td><strong>Total budget request</strong></td>
                                    <td><strong>$32,850</strong></td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Annual operating cost (separate): $ 35,760 / year</p>
                        <p>
                            Most important assumption / budget note: The budget is for the Portfolio Management and 
                            Analysis slice and assumes a two-month development period. The overall SkillUp project is 
                            expected to take 6-12 months, support 1,000-2,000 active users at launch, and the planned 
                            staffing and third-party costs remain within the estimated ranges.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default Sprint2;