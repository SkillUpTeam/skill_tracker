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
        { id: 'project-estimation-starter', label: 'Project Estimation Starter' },
        { id: 'lesson-9-activity', label: 'Lesson 9 Activity' },
        { id: 'estimation-appendix', label: 'Estimation Appendix' },
        { id: 'roi-analysis', label: 'ROI Analysis' },
        { id: 'budget-estimation', label: 'Budget Estimation' },
        { id: 'change-log', label: 'Change Log'},
        { id: 'ai-use-disclosure', label: 'AI Use Disclosure' }
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
                        <p>SkillUp is aimed at people who enjoy recreational activities but need a centralized platform where they can track their progress, accomplishments, and contributions in one place. People can sometimes have difficulty staying motivated or consistently participating in their hobbies because they are unable to easily quantify or visualize their progress. </p>
                        <p>With SkillUp, users can increase their engagement in recreational activities while having access to a platform where they can showcase their experiences, track their progress, connect with others, and continue learning. By providing these features in one centralized platform, SkillUp encourages users to remain active and motivated as they develop their skills and pursue their interests. </p>
                        <p>SkillUp also gives users the opportunity to connect with experienced instructors, take courses, and obtain certifications, all with the goal of expanding their knowledge and developing new skills. In addition to providing value to users, these features create potential monetary value for the platform through partnerships with instructors, organizations, sponsors, and other outside contributors. SkillUp can provide these partners with a platform to promote their products, courses, and services to users who are already interested in recreational activities and skill development. </p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Go/No-Go Recommendation</h3>
                        <p>Our team has decided to proceed with SkillUp after determining that the project has the potential to reach a broad audience. Because SkillUp is designed to provide a personalized experience, it can appeal to users with a variety of recreational interests. Additionally, our interviewees shared common struggles related to staying motivated and tracking their progress, indicating that the platform could address meaningful user's needs. </p>
                        <p>However, for the initial release, we decided to “Go” with a controlled initial scope by focusing on the core features of the platform. One of the main features is a personal portfolio where users can maintain a centralized archive of their recreational activities, accomplishments, and experiences while also tracking and visualizing their progress over time. </p>
                    </div>
                </section>
            </div>

            <div className="sprint-content">
                {/* Project Estimation Starter */}
                <section id="project-estimation-starter" className="sprint-section">
                    <div className="section-heading">
                        <h2>Project Estimation Starter</h2>
                        <a
                            href="/documents/sprint2/ProjectEstimationStarter.pdf"
                            download="ProjectEstimationStarter.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                        >
                            Download PDF
                        </a>
                    </div>

                    <div className="sprint-topic">
                        <h3>A First Look at Your Project's Size</h3>
                        <p><strong>Team:</strong> 3 &nbsp;&nbsp;&nbsp; <strong>Project:</strong> SkillUp</p>
                        <p>Work through every step together as a team. Have your Sprint 1 charter open (scope boundary and stakeholder map) and your interview notes. Everything you write here becomes the starting point for today's user stories and for the two estimates in Part 2.</p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 1. List what Release 1 must do (as a team)</h3>
                        <p>Start from the "in scope" items in your charter and the strongest needs from your interviews. Write 5 to 8 capabilities as what the system must do, not how. Then mark the hidden work each one will need using the key below.</p>
                        <p><strong>Hidden work key:</strong> T = Testing S = Security or privacy I = Integration with other systems D = Data (collection, cleaning, migration) H = Hosting and deployment U = Usability and accessibility O = Documentation or training</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Capability (what, not how)</th>
                                    <th>Evidence (charter or interview)</th>
                                    <th>Hidden work</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>A user can record recreational activities they have completed</td>
                                    <td>Project Charter, Interview 2 in Phase 2</td>
                                    <td>T, S, D, U</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>A user can track their progress across recreational activities through a personalized portfolio.</td>
                                    <td>Project Charter, Interview 2 in Phase 1</td>
                                    <td>T, S, D, U</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>A user can find resources that can help them start or improve in a recreational activity</td>
                                    <td>Project Charter, Interview 5 in Phase 2</td>
                                    <td>S, I, D, U</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Instructors can create lessons and provide resources for recreational activities</td>
                                    <td>Project Charter</td>
                                    <td>T, S, D, U, O</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>A user can connect with other users based on shared recreational activities.</td>
                                    <td>Project Charter, Interview 8 in Phase 2</td>
                                    <td>T, S, I, D, U</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>A user can find an instructor and request to book a s lesson</td>
                                    <td>Project Charter, Interview 4 in Phase 2</td>
                                    <td>T, S, I, D, U</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>A user can discover recreational activities and events.</td>
                                    <td>Project Charter, Interview 4 in Phase 2</td>
                                    <td>T, S, I, D, U</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>A user can set personalized goals for their recreational activities and track progress toward them..</td>
                                    <td>Project Charter, Interview 4 in Phase 1</td>
                                    <td>T, S, D, U</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 2. Take the outside view: your own experience (as a team)</h3>
                        <p>As a team, pick the most similar thing any of you has built before: a class project, internship feature, hackathon app, or side project.</p>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Answer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>What was it?</td>
                                    <td>A journal/mood tracker mobile app.</td>
                                </tr>
                                <tr>
                                    <td>How long was it expected to take?</td>
                                    <td>It was expected to take about 2 weeks.</td>
                                </tr>
                                <tr>
                                    <td>How long did it take?</td>
                                    <td>It took the full 2 weeks.</td>
                                </tr>
                                <tr>
                                    <td>What took longer than expected?</td>
                                    <td>Figuring out how modal views and sheets work in SwiftUI.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 3. Take the outside view: similar products (as a team, web search)</h3>
                        <p>Divide the searching, then decide together. Find three real products that solve a problem close to yours. Include at least one small product (a startup or an app from a small team) and at least one big product (a large company platform or a government system). For each, find out how long it took to reach its first public release, what went well, and what went wrong.</p>
                        <p><strong>How to find the timeline and the story</strong></p>
                        <ol>
                            <li>Launch announcements, company blogs, and founder interviews often say when building started and when the product first went public.</li>
                            <li>Press coverage, app store version histories, and the Internet Archive's Wayback Machine help confirm first release dates.</li>
                            <li>Postmortems, conference talks, and, for government systems, GAO and Inspector General reports explain what worked and what did not.</li>
                            <li>Measure from the start of development to the first public release, and write down what that first release included. A limited first version and a full launch are different numbers.</li>
                            <li>Every date and figure needs a source you can link. If you cannot find one, write "unknown." AI tools may suggest products to look at, but they are not a source.</li>
                        </ol>

                        <h4>Step 3 worksheet: similar products</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product A (small)</th>
                                    <th>Product B (big)</th>
                                    <th>Product C (your choice)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Product and company</strong></td>
                                    <td>Everyday.app</td>
                                    <td>Skill Share</td>
                                    <td>Strava, Inc</td>
                                </tr>
                                <tr>
                                    <td><strong>Why it is similar to your project</strong></td>
                                    <td>Everyday.app and SkillUp allow users to track their activities, establish personal goals and monitor their progress. Everyday seems to focus more on habits rather than recreational activities and does not offer any resourcces.</td>
                                    <td>This product offers learning resources with a paywall, while ours offers them for free or through instructors.</td>
                                    <td>Strava and SkillUp allow users to record recreational activities, track personal progress, set goals, and connect with people with similar interests. Strava focuses primarily on physical activities, while SkillUp expands to many more recreational activities.</td>
                                </tr>
                                <tr>
                                    <td><strong>Development started</strong></td>
                                    <td>Development started early 2017.</td>
                                    <td>Skill Share started development in November 2010.</td>
                                    <td>Development started between 2007-2008.</td>
                                </tr>
                                <tr>
                                    <td><strong>First public release</strong></td>
                                    <td>It became publicly available in March 2017.</td>
                                    <td>Skill Share's online platform launched in April of 2011.</td>
                                    <td>Strava early beta version opened in May 2009.</td>
                                </tr>
                                <tr>
                                    <td><strong>Time to first release</strong></td>
                                    <td>It took approximately 3 weeks to develop the first working version. But unconfirmed development to first release.</td>
                                    <td>Time period between development and launch is roughly 6 months.</td>
                                    <td>Approximately 1-2 years.</td>
                                </tr>
                                <tr>
                                    <td><strong>What the first release included</strong></td>
                                    <td>Habit tracker that allowed users to record daily habits and see their progress on a board.</td>
                                    <td>The site included only offline courses, which only connected users to local classes near them. Did not allow users to take courses online with video calls or plain video lectures.</td>
                                    <td>First release focuses on cycling and had a website where users could upload GPS ativity data, track their performance, and compare results with other cyclists.</td>
                                </tr>
                                <tr>
                                    <td><strong>Team size, if known</strong></td>
                                    <td>One developer</td>
                                    <td>There were 2 co-founding members when development started.</td>
                                    <td>There were 6 founding members.</td>
                                </tr>
                                <tr>
                                    <td><strong>What worked</strong></td>
                                    <td>The developer focused on essential features and kept application simple. This allowed him to create first working version in 3 weeks. He also shared the app online which helped receive feedback.</td>
                                    <td>Testing their concept early using a strategy called Minimum Viable Product, where they sold classes through an event hosting site to see if people would actually buy into it.</td>
                                    <td>Testing early prototype with cycling leaderboards and testing with small groups of athletes.</td>
                                </tr>
                                <tr>
                                    <td><strong>What did not work</strong></td>
                                    <td>After being shared on reddit the server struggled to handle the increase in traffic.</td>
                                    <td>Their initial launch did not originally have their online courses; they allowed users to enroll in local sessions through the website. This did not work due to scaling issues and market reach. Users had to be in specific geological locations to attend the courses, while instructors had to find locations for the class to be in.</td>
                                    <td>Founders had the idea in the 1990s, but available technology was insufficient. GPS were uncommon, and smartphones did not exist. These limitations delayed the development of Strava.</td>
                                </tr>
                                <tr>
                                    <td><strong>Sources (links)</strong></td>
                                    <td>
                                        <a href="https://everyday.app/" target="_blank" rel="noopener noreferrer">https://everyday.app/</a><br />
                                        <a href="https://everyday.app/blog/everydaycheck-interview-on-indiehackers/" target="_blank" rel="noopener noreferrer">https://everyday.app/blog/everydaycheck-interview-on-indiehackers/</a>
                                    </td>
                                    <td>
                                        Website itself (<a href="https://www.skillshare.com/" target="_blank" rel="noopener noreferrer">SkillShare</a>), News article from (<a href="#" target="_blank" rel="noopener noreferrer">Article</a>). Techcrunch Article (<a href="#" target="_blank" rel="noopener noreferrer">Article</a>), Fox Businees (<a href="#" target="_blank" rel="noopener noreferrer">Article</a>), Harvard Platform (<a href="#" target="_blank" rel="noopener noreferrer">Article</a>), Mixergy (<a href="#" target="_blank" rel="noopener noreferrer">Article</a>)
                                    </td>
                                    <td><a href="https://research.contrary.com/company/strava" target="_blank" rel="noopener noreferrer">https://research.contrary.com/company/strava</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 4. Compare (as a team)</h3>
                        <ol>
                            <li>
                                <strong>Look at the hidden-work column in Step 1. Which letter appears most often? Did any of your similar products struggle with that same kind of work?</strong>
                                <p>The most often letters are S, D, and U<br />The ones that appear similar are Steps 1, 2, and 8 with T, S, D, and U.<br />Others that appear similar are Steps 5, 6, and 7 with T, S, I, D, and U</p>
                            </li>
                            <li>
                                <strong>How long did your similar products take to reach a first release, and with how many people? What does that suggest about the first release of your project?</strong>
                                <p>The simpler similar product, Everyday.app, took about three weeks to reach its first release and was developed by one person. The next product, Skillshare, took about six months to reach its first release and was initially developed by two people. The last product, Strava, took approximately one to two years to reach its first release and was founded by six members. This suggests that based on the complexity and planned features of our project, it would be beneficial to release an MVP and focus on the most important features.</p>
                            </li>
                            <li>
                                <strong>Name one practice from the "what worked" rows your team will copy, and one mistake from the "what did not work" rows you will avoid.</strong>
                                <p>The thing that worked was Practice A where they focused on the essential features and application for the app that was able to launch in 3 weeks and what not worked was Practice A after sharing it on Reddit the server struggled to hand the amount of increased traffic</p>
                            </li>
                        </ol>
                        
                        <div className="highlight-box" style={{ marginTop: "20px", padding: "15px", backgroundColor: "var(--light-bg, #f8f9fa)", borderRadius: "8px", borderLeft: "4px solid var(--primary-color, #0056b3)" }}>
                            <p style={{ margin: 0, fontWeight: "500", fontSize: "1.1rem" }}>Our comparables suggest a first release would take <span style={{ textDecoration: "underline", fontWeight: "bold" }}>6</span> to <span style={{ textDecoration: "underline", fontWeight: "bold" }}>12</span> months with a team of <span style={{ textDecoration: "underline", fontWeight: "bold" }}>5</span>.</p>
                            <p style={{ margin: "10px 0 0 0", fontStyle: "italic", color: "var(--text-muted, #6c757d)" }}>Keep this sheet. You will use Step 1 to write user stories, and Steps 2 and 3 give you comparators for analogous estimation in Part 2.</p>
                        </div>
                    </div>
                </section>
            </div>

            <div className="sprint-content">
                {/* Lesson 9 Activity */}
                <section id="lesson-9-activity" className="sprint-section">
                    <div className="section-heading">
                        <h2>Lesson 9 Activity: Estimate One Slice of Your Project</h2>
                        <a
                            href="/documents/sprint2/Lesson9Activity.pdf"
                            download="Lesson9Activity.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                        >
                            Download PDF
                        </a>
                    </div>

                    <div className="sprint-topic">
                        <p><strong>Team:</strong> 3 &nbsp;&nbsp;&nbsp; <strong>Project:</strong> SkillUp</p>
                        <h3>What this activity is for</h3>
                        <p>Your Sprint 2 business case has to answer a question every sponsor asks: how much work would this take, and what would it cost? You are not going to build the system in this course. You are doing what a project manager does before a project is approved: estimating the work so a decision can be made.</p>
                        <p>Estimating a whole project at once hides mistakes. So you will start small. Pick one or two major parts of your project, called a slice, and estimate only that slice. A small slice lets you count everything, check every number, and see clearly where your assumptions matter.</p>
                        <p>You will estimate the same slice twice, using two methods that start from different information. Then you will compare the two answers, explain why they differ, and present a range with your assumptions written down. That range becomes the Estimation Appendix on your Sprint 2 portal page.</p>

                        <h3>How the activity fits together</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Step</th>
                                    <th>What you do</th>
                                    <th>What you end up with</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Pick your slice</td>
                                    <td>One or two major parts of your project, with their stories, screens, and data listed</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Choose two estimation methods</td>
                                    <td>Two methods that use different starting information</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Estimate the slice with each method</td>
                                    <td>Two effort estimates, both in team hours</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Check the estimates for team size</td>
                                    <td>Confidence that coordination costs are included</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Compare the two estimates</td>
                                    <td>A written explanation of why they differ</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Present the result</td>
                                    <td>A dated range, in hours, dollars, and weeks, ready for the business case</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 1. Pick your slice</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Our slice</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Slice name (one or two major parts)</strong></td>
                                    <td>User Portfolio Management and Analysis</td>
                                </tr>
                                <tr>
                                    <td><strong>Why we chose it</strong></td>
                                    <td>This slice is our core use system that glues together every other critical subsystem in our project for it to work together to achieve the projects' goal.</td>
                                </tr>
                                <tr>
                                    <td><strong>Screens or forms where users enter data</strong></td>
                                    <td>User will have a portfolio where they can see all their activities. Users will have a screen to record new recreational activities.</td>
                                </tr>
                                <tr>
                                    <td><strong>Reports, results, or lookups users see</strong></td>
                                    <td>Report on progress per activity. Users can look up their past reports.</td>
                                </tr>
                                <tr>
                                    <td><strong>Data the slice stores</strong></td>
                                    <td>Recreational Activities (photos, description, date/time, duration)</td>
                                </tr>
                                <tr>
                                    <td><strong>Other systems it connects to</strong></td>
                                    <td>Certificates, instructors</td>
                                </tr>
                                <tr>
                                    <td><strong>Out of the slice (not included)</strong></td>
                                    <td>Social Aspect Slice</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>Stories in the slice</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>User story</th>
                                    <th>MoSCoW</th>
                                    <th>Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>As a user, I want to record my recreational activities so that I can track my journey.</td>
                                    <td>Must</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>As a user, I want to track my progress for individual recreational activities so that I can see my improvement over time.</td>
                                    <td>Must</td>
                                    <td>13</td>
                                </tr>
                                <tr>
                                    <td>As a user, I want to view my progress and accomplishments across all of my recreational activities in one place so that I do not have to track them separately.</td>
                                    <td>Should</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>As a user, I want to customize my portfolio so that I can personalize it to fit my preferences.</td>
                                    <td>Could</td>
                                    <td>3</td>
                                </tr>
                                <tr>
                                    <td>As a user, I want to set personalized goals so that I can track my progress toward achieving them.</td>
                                    <td>Should</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td><strong>Total points</strong></td>
                                    <td></td>
                                    <td><strong>31</strong></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 2. Choose two methods</h3>
                        <p><strong>Our two methods:</strong> 1. Analogous 2. Story points to cost</p>
                        <p><strong>Why these two use different starting information:</strong> Analogous uses estimates from a similar real product, while Story points to cost is based on our own estimate of the project's work. One uses real data while the other is an assumption of our team's effort and velocity.</p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 3. Estimate the slice</h3>
                        
                        <h4>Story Points:</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Input</th>
                                    <th>Value</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Slice points</td>
                                    <td>31</td>
                                    <td>From your Step 1 story table</td>
                                </tr>
                                <tr>
                                    <td>Team size</td>
                                    <td>5</td>
                                    <td>Five or six at most</td>
                                </tr>
                                <tr>
                                    <td>Hours per person per sprint</td>
                                    <td>40</td>
                                    <td>State your assumption</td>
                                </tr>
                                <tr>
                                    <td>Velocity: low / middle / high</td>
                                    <td>15 / 19 / 25</td>
                                    <td>Assumptions until you have sprint data</td>
                                </tr>
                                <tr>
                                    <td>Sprints needed (low to high velocity)</td>
                                    <td>2.07 / 1.63 / 1.24</td>
                                    <td>Slice points ÷ velocity</td>
                                </tr>
                                <tr>
                                    <td>Effort in hours (low to high)</td>
                                    <td>414 / 326 / 248</td>
                                    <td>Sprints × team size × hours per person per sprint</td>
                                </tr>
                            </tbody>
                        </table>

                        <h4>3D. Analogous</h4>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Answer</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Comparable product, team size, and time to first release</strong></td>
                                    <td>Everyday.app, 1 developer, approximately 3 weeks to first working version.</td>
                                </tr>
                                <tr>
                                    <td><strong>Person-months (team size × months)</strong></td>
                                    <td>1 * ¾ = 0.75</td>
                                </tr>
                                <tr>
                                    <td><strong>Fraction of their release our slice matches (low to high), and why</strong></td>
                                    <td>Low: 1, High: 1.5. Our slice contains the core functionality of Everyday's initial release which includes recording activities and viewing progress, but it adds functionality such as progress by individual recreational activity, a portfolio with customization, and personalized goals. Because our slice contains more features than Everyday's initial release, we are doing all (1) or more (1.5). We estimate our slice to be the same size and 50% larger than Everyday.</td>
                                </tr>
                                <tr>
                                    <td><strong>Team size adjustment and why</strong></td>
                                    <td>We plan to add 20% more time for coordination due to having 5 team members compared to the individual developer.</td>
                                </tr>
                                <tr>
                                    <td><strong>Adjusted effort in hours (low to high)</strong></td>
                                    <td>Low: 0.75 * 1 = .75 person-months<br />High: .75 * 1.5 = 1.125 person-months<br />Assuming 160 hours per person month<br />Low: 0.75 * 160 = 120 hours<br />HIgh: 1.125 * 160 = 180 hours<br />Apply 20% for coordination<br />Low: 144 hours<br />High: 216 hours</td>
                                </tr>
                                <tr>
                                    <td><strong>Confidence (low, medium, high) and why</strong></td>
                                    <td>Low confidence because Everyday.app is similar to the core functionality of our slice. However, its initial release was developed by one person, while our team has five members, and our slice includes additional functionality. The 20% coordination adjustment and the estimated slice size are assumptions, so the final effort could vary.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 4. Check your estimates for team size</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Check</th>
                                    <th>Yes / No</th>
                                    <th>Why it matters</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Our team is five or six people at most.</td>
                                    <td>Yes</td>
                                    <td>Beyond six, split into two teams.</td>
                                </tr>
                                <tr>
                                    <td>We counted our communication paths: n(n − 1) ÷ 2 = __10__</td>
                                    <td>Yes</td>
                                    <td>Five people share 10 paths; ten share 45.</td>
                                </tr>
                                <tr>
                                    <td>We added explicit work for integrating the pieces of the slice.</td>
                                    <td>Yes</td>
                                    <td>Breaking work into pieces hides the cost of putting it back together.</td>
                                </tr>
                                <tr>
                                    <td>We did not assume that more people means proportionally more output.</td>
                                    <td>Yes</td>
                                    <td>Coordination grows faster than headcount.</td>
                                </tr>
                                <tr>
                                    <td>We estimated for the team we have.</td>
                                    <td>Yes</td>
                                    <td>Not for a larger team we wish we had.</td>
                                </tr>
                                <tr>
                                    <td>We adjusted, not copied, timelines from much larger teams.</td>
                                    <td>Yes</td>
                                    <td>Their effort includes their coordination costs.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 5. Compare your two estimates</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Method 1</th>
                                    <th>Method 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Method</strong></td>
                                    <td>Analogous</td>
                                    <td>Story Points</td>
                                </tr>
                                <tr>
                                    <td><strong>Estimate in hours (low to high)</strong></td>
                                    <td>144 hrs. - 216 hrs.</td>
                                    <td>248 hrs - 414 hrs</td>
                                </tr>
                                <tr>
                                    <td><strong>Middle value in hours</strong></td>
                                    <td>180 hours</td>
                                    <td>326 Hours</td>
                                </tr>
                                <tr>
                                    <td><strong>Input that drives it most</strong></td>
                                    <td>The slice compared with the Everyday app</td>
                                    <td>Velocity (low, middle, high)</td>
                                </tr>
                                <tr>
                                    <td><strong>Is that input measured or assumed?</strong></td>
                                    <td>Assumed</td>
                                    <td>Assumed, we do not have sprint data to help measure.</td>
                                </tr>
                            </tbody>
                        </table>
                        <p><strong>Gap:</strong> larger middle value ÷ smaller middle value = <strong>1.81</strong></p>

                        <h4>Questions to answer</h4>
                        <ol>
                            <li>
                                <strong>Do your two methods depend on the same assumption? If so, their agreement proves little.</strong>
                                <p>No they start from different information</p>
                            </li>
                            <li>
                                <strong>Which single input moves the answer most? Try changing it and see.</strong>
                                <p>Assumed velocity seems to be a major contributor to estimate</p>
                            </li>
                            <li>
                                <strong>What information would narrow the gap, and when could you get it?</strong>
                                <p>Knowing the actual team velocity once we finish the first sprint</p>
                            </li>
                        </ol>

                        <h4>Our explanation of the gap</h4>
                        <p>Both methods depend on different information. Analogue mainly focuses on the Everyday.app and how it compares to our time slice while Story Points mainly has its own story points and assumed velocity. For now, we don't have sprint data yet, so we don't have an answer to that yet. Once our team completes a sprint, we can use our actual velocity to make a more accurate estimation and help narrow done gaps between the two methods.</p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Step 6. Present the estimate</h3>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Field</th>
                                    <th>Our estimate</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>Slice estimated</strong></td>
                                    <td>User Portfolio Management and Analysis</td>
                                </tr>
                                <tr>
                                    <td><strong>Range in hours (low to high)</strong></td>
                                    <td>144 – 414 hrs.</td>
                                </tr>
                                <tr>
                                    <td><strong>Expected hours: (O + 4M + P) ÷ 6, and why we chose M</strong></td>
                                    <td>(144 + 4(253) + 414) / 6 = 262 hrs.<br />We chose M as 253 because it's the middle average between the two middle values of both methods.</td>
                                </tr>
                                <tr>
                                    <td><strong>Cost range and loaded rate used</strong></td>
                                    <td>$60/hour<br />We estimated this from the average market value of a software engineer.<br />Cost range would be $7,200 low, $13,100 expected, and $20,700 high.</td>
                                </tr>
                                <tr>
                                    <td><strong>Calendar estimate in weeks, and hours per week assumed</strong></td>
                                    <td>Assuming 5 team members × 20 hours per person per week = 100 team hours/week, the range is approximately 1.4–4.1 weeks, with the expected 262 hours taking approximately 2.6 weeks.</td>
                                </tr>
                                <tr>
                                    <td><strong>Methods used</strong></td>
                                    <td>Analogous and story points</td>
                                </tr>
                                <tr>
                                    <td><strong>Key assumptions</strong></td>
                                    <td>The 20% additional effort<br />Story Point velocity is assumed at 15/19/25 points per sprint<br />Each members works 40 hours per week</td>
                                </tr>
                                <tr>
                                    <td><strong>Team size assumed</strong></td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td><strong>What would change this estimate</strong></td>
                                    <td>Changes to the slice or scope, actual team velocity of each sprint</td>
                                </tr>
                                <tr>
                                    <td><strong>Date of this estimate</strong></td>
                                    <td>09/29/26</td>
                                </tr>
                            </tbody>
                        </table>
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

            <div className="sprint-content">
                <section id='change-log' className="sprint-section">
                    <div className="section-heading">
                        <h2>Sprint Change Log</h2>
                        <a
                            href="/documents/sprint2/Sprint2_Change_Log.pdf"
                            download="Sprint2_Change_Log.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                        >
                            Download PDF
                        </a>
                    </div>

                    <div className="sprint-topic">

                    <h3>1. Change Log Header</h3>
                    <table className="table table-bordered">
                        <tbody>
                        <tr><th>Project</th><td>SkillUp</td></tr>
                        <tr><th>Sprint</th><td>Sprint 2</td></tr>
                        <tr><th>Prior version</th><td>Project Charter v1.0 (09/15/2026), Market Research (09/21/2026), Strategy-to-Project Chain</td></tr>
                        <tr><th>Date of this version</th><td>October 5, 2026</td></tr>
                        <tr><th>Logged by</th><td>Team 3</td></tr>
                        <tr><th>Reviewed by</th><td>Team 3</td></tr>
                        </tbody>
                    </table>

                    <h3>2. Change Summaries</h3>
                    <table className="table table-bordered">
                        <thead>
                        <tr><th>ID</th><th>Area</th><th>What changed</th><th>Reason type</th><th>Status</th></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>CL-2-00</td>
                            <td>Assumptions</td>
                            <td>No prior content revised; 10 new cost and delivery assumptions introduced</td>
                            <td>New information</td>
                            <td>Active</td>
                        </tr>
                        </tbody>
                    </table>

                    <h3>3. Change Entries</h3>
                    <h4>CL-2-00: No revisions to prior sprint deliverables</h4>
                    <table className="table table-bordered">
                        <tbody>
                        <tr><th>Date decided</th><td>October 5, 2026</td></tr>
                        <tr><th>Decided by</th><td>Team 3</td></tr>
                        <tr><th>Status</th><td>Active</td></tr>
                        </tbody>
                    </table>

                    <p>
                        This sprint added new work (the one-page budget for the User Portfolio Management and Analysis slice)
                        but did not revise any content from the Project Charter, Market Research, or Strategy-to-Project Chain.
                        All prior documents remain as submitted. The charter’s assumptions describe user behavior; this
                        sprint’s assumptions describe cost and delivery, so none of them contradict each other.
                    </p>

                    <h4>New assumptions introduced this sprint</h4>
                    <table className="table table-bordered">
                        <thead>
                        <tr><th>Assumption</th><th>Introduced in</th><th>Relation to prior documents</th><th>Why it was needed</th></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Budget covers the User Portfolio Management and Analysis slice only</td>
                            <td>Budget §1</td>
                            <td>Draws on charter scope (Log Activities, Progress Tracking, Goal settings) and the research’s achievement-portfolio pillar; choosing one slice is new</td>
                            <td>Defines what the budget covers</td>
                        </tr>
                        <tr>
                            <td>Platform is delivered as an iOS app, Android app, and website</td>
                            <td>Budget §1</td>
                            <td>Not stated in any prior document</td>
                            <td>Drives platform-specific development and testing effort</td>
                        </tr>
                        <tr>
                            <td>1,000–2,000 active users at launch</td>
                            <td>Budget §1</td>
                            <td>Charter success criteria describe user growth without a number</td>
                            <td>Sizes hosting and the user-load risk</td>
                        </tr>
                        <tr>
                            <td>6–12-month overall development timeline</td>
                            <td>Budget §1</td>
                            <td>Charter only says the project finishes before the deadline provided</td>
                            <td>Places the slice within the project schedule</td>
                        </tr>
                        <tr>
                            <td>Slice runs 2 months within that timeline</td>
                            <td>Budget §5, §10</td>
                            <td>New</td>
                            <td>Basis for staffing plan and time-phasing</td>
                        </tr>
                        <tr>
                            <td>5 team members, partially allocated to the slice</td>
                            <td>Budget §1, §2</td>
                            <td>Team of 5 matches the research roster; partial allocation is new</td>
                            <td>Basis for FTE-months</td>
                        </tr>
                        <tr>
                            <td>160 nominal / 130 productive hours per FTE-month</td>
                            <td>Budget §4</td>
                            <td>New</td>
                            <td>Converts hours to FTE-months</td>
                        </tr>
                        <tr>
                            <td>Loaded rate of $10,400 per FTE-month ($80 per productive hour)</td>
                            <td>Budget §6 and §7</td>
                            <td>New</td>
                            <td>Basis for labor cost</td>
                        </tr>
                        <tr>
                            <td>Project-wide licenses and shared costs excluded from the slice</td>
                            <td>Budget non-labor</td>
                            <td>New</td>
                            <td>Keeps the slice to its direct costs</td>
                        </tr>
                        <tr>
                            <td>Support at 0.20 FTE; operating costs scoped to the slice’s share</td>
                            <td>Budget §8</td>
                            <td>New</td>
                            <td>Basis for annual operating cost</td>
                        </tr>
                        </tbody>
                    </table>

                    <h4>Budget items that trace to prior documents</h4>
                    <table className="table table-bordered">
                        <thead>
                        <tr><th>Budget item</th><th>Prior source</th></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Team of 5 people</td>
                            <td>Market Research team roster; Charter constraint that all work uses existing team members</td>
                        </tr>
                        <tr>
                            <td>Security and compliance tools ($3,200) and security rework risk</td>
                            <td>Charter constraint: protect users’ account and progress information</td>
                        </tr>
                        <tr>
                            <td>Slice features: activity tracking, progress reporting, goals</td>
                            <td>Charter scope (Log Activities, Progress Tracking, Goal settings); Strategy doc’s achievement portfolio</td>
                        </tr>
                        <tr>
                            <td>Budgeting one slice rather than every feature</td>
                            <td>Charter feature constraint: not all features will be in the first version</td>
                        </tr>
                        </tbody>
                    </table>

                    <h4>Downstream impact</h4>
                    <table className="table table-bordered">
                        <thead>
                        <tr><th>Affected page or document</th><th>What changed there</th><th>Updated?</th></tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>None</td>
                            <td>No prior pages or documents were affected. New assumptions apply to future sprint estimates.</td>
                            <td>N/A</td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </section>
            </div>

            <div className="sprint-content">
                {/* AI Use Disclosure */}
                <section id="ai-use-disclosure" className="sprint-section">
                    <div className="section-heading">
                        <h2>AI Use Disclosure</h2>
                        <a
                            href="/documents/sprint2/Sprint2AIUse.pdf"
                            download="Sprint2AIUse.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pdf-button"
                        >
                            Download PDF
                        </a>
                    </div>

                    <div className="sprint-topic">
                        <h3>AI Use Policy</h3>
                        <p>AI use on the portal follows the CS 4390/5388 syllabus.</p>
                        
                        <h4>AI is permitted for:</h4>
                        <ul className="contribution-bullets">
                            <li>Generating initial drafts of PM artifacts for team review and revision</li>
                            <li>Suggesting risk categories, stakeholder types, or estimation approaches that the team then evaluates</li>
                            <li>Summarizing or restructuring content the team has already produced</li>
                            <li>Grammar and clarity checks</li>
                            <li>Generating alternative framings for comparison</li>
                        </ul>

                        <h4>AI is not permitted for:</h4>
                        <ul className="contribution-bullets">
                            <li>The individual reflection or individual estimation memo</li>
                            <li>Any exam response</li>
                            <li>The go/no-go reasoning and justification in any sprint deliverable</li>
                        </ul>
                        
                        <h4>Disclosure requirement:</h4>
                        <p>Every sprint contribution statement must include an AI use disclosure: which tool was used, at which stage of the PM AI Protocol, and what the team changed or rejected from the AI output. A page you cannot defend in the final Q&A is treated as if you did not produce it, whether or not AI was involved.</p>
                    </div>

                    <div className="sprint-topic">
                        <h3>Sprint 2 AI Use Disclosures</h3>
                        
                        <div className="contribution-card mb-4" style={{ marginBottom: "20px" }}>
                            <h4 style={{ marginBottom: "15px" }}>Template Generation</h4>
                            <div className="ai-disclosure-details">
                                <p><strong>AI Tool Used:</strong> ChatGPT</p>
                                <p><strong>PM AI Protocol Stage:</strong> Drafting and Restructuring</p>
                                <p><strong>Purpose of AI Use:</strong> Used to create an initial template for the Building the Budget deliverable.</p>
                                <p><strong>Changes or Rejected Output:</strong> AI was not used for the final content itself, only the structural template.</p>
                            </div>
                        </div>

                        <div className="contribution-card">
                            <h4 style={{ marginBottom: "15px" }}>Website Implementation</h4>
                            <div className="ai-disclosure-details">
                                <p><strong>AI Tool Used:</strong> Antigravity (Agentic AI)</p>
                                <p><strong>PM AI Protocol Stage:</strong> Uploading work</p>
                                <p><strong>Purpose of AI Use:</strong> Used to transfer document content directly to the website and to add new sections to the React site.</p>
                                <p><strong>Changes or Rejected Output:</strong> Antigravity was strictly used for formatting and migrating existing content, not generating new PM content.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default Sprint2;