// Written content from the Sprint 5 Crisis Response Memo
export const crisisResponseData = {
    header: {
        to: "Star Crisis, Chief of Staff",
        from: "Team 3 - SkillUp Management Team",
        subject: "SkillUp Crisis Response",
        date: "November 12, 2026"
    },
    situation: {
        intro: "For this crisis, we are assuming SkillUp uses an external analysis provider to help generate progress reports. This was not originally added to our project documents. We selected SkillUp’s automated progress reporting component since it analyses user activities and gives data that helps with tracking progress and make certification decisions.",
        emergencies: [
            {
                priority: 1,
                title: "Incorrect Analysis",
                details: "Institution instructors have found errors in progress reports before SkillUp had notified them, and they have complained to the CEO. After investigating we have found that an update made by our external provider has caused progress reports for all of our pilot users to be incorrect.",
                impact: "Institutions used incorrect progress reports to determine eligibility for certifications. This has caused institutions to incorrectly approve or deny certifications to users, which now requires reassessing approved and denied certifications for all users who have been processed in the past day.",
                action: "We have made this top priority, to fix incorrect progress reports reaching our users and regain trust from institutions.",
                finances: "Our original contingency reserve for the Portfolio Management and Analysis slice was $2,450. After the previous scope change and current repair costs, we will have approximately $408 left. The provider’s service credits will also be issued 30 days after the incident is resolved."
            },
            {
                priority: 2,
                title: "Disproportionate Impact",
                details: "We have reported that reports provided to certificate users had a higher rate of error in progress reports than recreational activity users. We need to investigate why our certification progress reports reported higher inaccuracies than recreational users after the update from our external provider.",
                impact: "We have made this second priority, as we retest the system we should also find more information as to the inconsistencies. We have identified certification-seeking users as the disproportionately affected group."
            },
            {
                priority: 3,
                title: "Waldo’s Resignation",
                details: "Waldo, our lead developer is leaving in 10 business days, and we can’t hire a replacement. He manages the external API integration which is part of the project’s critical path, but his work has little documentation.",
                impact: "We have made this 3rd priority, since Waldo will be helping during his last days in resolving our priority issues. We are risking that the priority issues take up all 10 business days leaving no time for him to pass on knowledge. We have also planned to have a member follow Waldo’s steps and document his work."
            }
        ],
        riskReview: [
            {
                name: "Incorrect Analysis",
                review: "Missed: we had no formal risk register, and the only entries we found (budget risks in Sprint 2 and a candidate risk in Sprint 3) say nothing about our external provider, because we assumed its analysis would stay accurate after updates."
            },
            {
                name: "Disproportionate Impact",
                review: "Not anticipated, since we looked at our users as one group and never asked whether certificate users, whose reports institutions rely on for approvals, would be affected more than recreational ones."
            },
            {
                name: "Waldo’s Resignation",
                review: "We overlooked this one because our earlier planning centered on budget and never asked what would happen if a key developer left, so Waldo’s poorly documented API work had no backup owner. Having a formal risk register would have helped us find these risks earlier and assign owners to monitor them."
            }
        ]
    },
    decisionLog: [
        {
            time: "Afternoon",
            emergency: "1 and 3",
            decision: "Lead developer will take care of the heavier retesting during the first five days out of the 10 offboarding days.",
            optionsRejected: "Letting another team member do the retesting while Waldo was assigned to training and passing knowledge to others on the first day.",
            reasoning: "Waldo’s expertise can be used to tackle the issue earlier. Then, the team will later be eased in the transition period to Waldo’s responsibilities with guidance.",
            owner: "Juan Reyna, Fixer",
            reversible: "No"
        },
        {
            time: "Afternoon",
            emergency: "2",
            decision: "The third party analysis tool affected all users, and an integration team will have to manually check certifications for misclassifications.",
            optionsRejected: "Address only the incorrectly identified certifications during the analysis.",
            reasoning: "Manually checking for certifications prevents a user from getting credit for a certification they did not work on, and vice versa. This is significant since institutions might rely on the user's expertise.",
            owner: "Jonathan Hernandez, Juan Reyna, Ricardo Morales, Fixer",
            reversible: "Yes, until automated analysis passes all tests"
        },
        {
            time: "Afternoon",
            emergency: "3",
            decision: "Waldo’s responsibilities will be reassigned and transitioned after retesting has been completed.",
            optionsRejected: "Reassign Waldo’s responsibilities to other team members on day one of Waldo’s offboarding period.",
            reasoning: "Retesting is being prioritized as well as successfully resolving the external issue before changing the teams' tasks and schedule.",
            owner: "Isaac Padilla, Incident Commander",
            reversible: "No"
        }
    ],
    governance: {
        intro: "SkillUp did not have an AI Governance plan before this incident.",
        incidentOwner: {
            name: "Isaac Padilla",
            role: "Project Manager and Incident Commander",
            powers: "Has the ability to pause reports, assign the team’s work, and approve scope changes and message users. Able to escalate certification reversal decisions to the CEO. He owns it because the incident spans all three emergencies. In addition, Isaac owns Waldo’s knowledge transfer."
        },
        riskClassification: {
            classification: "EU AI Act: High Risk",
            explanation: "Institutes use our reports to approve or deny certifications, and wrong reports lead to wrong decisions. This requires human review of certification reports, testing, and logging of provider updates. Documentation of how reports work, and guidance to institutes. Estimated effort: about 10 days of teamwork."
        },
        biasMonitoring: {
            metric: "The gap in error rate between certification and recreational user’s reports from 50 sampled reports per group.",
            threshold: "Escalates to Isaac when the gap reaches 10% points, or when the certification error rate goes above 3%, our SLO error budget.",
            reviewers: "Juan Reyna and Ricardo Morales reviewing reports.",
            frequency: "Daily for 10 days after the fix, then weekly and after every provider update."
        },
        transparency: {
            whatWeKnow: "A provider update caused incorrect reports for all pilot users. Institutes used them for certification decisions. Certification users had more errors.",
            whatWeCantDetermine: "What provider changed, how many reports were wrong, why certification users were hit harder, or whether earlier reports were wrong.",
            whatWeLacked: "Provider change notes, logs of which version made each report, documentation of how reports are calculated, and accuracy data by user group."
        }
    },
    deliveryImpact: {
        sloBreach: "Our SLO requires that 97% of progress reports in a month accurately reflect a user’s activities. This means that in a month 3 of every 100 reviewed reports can be incorrect. The external provider’s update has caused incorrect reports for all of our pilot users, which could cause us to miss our objective. If 4 of the 100 reviewed reports are incorrect, our accuracy would be 96%, which is below our 97% target. At the moment we don’t have an exact count of reports reviewed or the accuracy.",
        errorBudget: "This issue could have used part or all of our budget, but we need to count how many reports were reviewed and the inaccuracy rate. Our current policy requires us to pause new analysis features if the error budget is exhausted. We need to investigate the incorrect reports, apply a fix, and retest before continuing with new features.",
        dashboardMetrics: "Our progress-report accuracy decreases as the number of incorrect reports increases. It has been reported that certification users have a higher error rate in progress reports than recreational users. We don’t have the error rate value at the moment for either group.",
        earlyDetection: "Our current process for detection is to review 100 progress reports each month. Although we have this check, it may not allow us to detect major fails quickly in cases like this one. To make sure that we don’t encounter this issue again we need to monitor report accuracy when new changes are made to our system or our external providers. We should compare error rates between our certification and recreational users to detect similar issues earlier."
    },
    riskRegister: [
        {
            field: "Risk",
            r1: "Updates from our external provider may cause incorrect progress reports for our users.",
            r2: "Rate of error on progress reports between our certificate and recreational users may be different.",
            r3: "A developer may leave our team before transferring important knowledge of their work."
        },
        {
            field: "Probability",
            r1: "Medium",
            r2: "Medium",
            r3: "Medium"
        },
        {
            field: "Impact",
            r1: "High",
            r2: "High",
            r3: "High"
        },
        {
            field: "Owner",
            r1: "Ricardo Morales",
            r2: "Juan Reyna",
            r3: "Isaac Padilla"
        },
        {
            field: "Early Warning Signal",
            r1: "Testing shows rate of error increase in progress reports after a provider update.",
            r2: "The error rate gap between certification and recreational reports starts to increase significantly.",
            r3: "Development processes are left undocumented and other developers cannot complete tasks without needing help from a lead developer."
        },
        {
            field: "Trigger",
            r1: "Testing confirms that an update from an external provider is giving incorrect information.",
            r2: "Testing confirms that there is a 10 percentage point gap in error rate between reports on certification and recreational users.",
            r3: "A lead developer is near the end of their time with us and important work is missing documentation."
        },
        {
            field: "Trigger Response",
            r1: "We need to stop sending the affected reports and investigate the issue. Once we have identified the cause we will apply a fix and retest before restoring reporting.",
            r2: "Investigate the difference, and correct the inaccuracies. We need to measure where inaccuracies were made for both groups and retest reports.",
            r3: "Assign another developer to work alongside a lead developer to help with documentation."
        },
        {
            field: "Mitigation",
            r1: "Start analysing progress reports when the provider makes an update.",
            r2: "Monitor and compare report accuracy between both user groups regularly.",
            r3: "Have other developers observe the work done by each other and document any implementation to help with transferring knowledge in transitions."
        },
        {
            field: "Evidence",
            r1: "The external provider’s update caused our progress reports to become incorrect and put our SLO at risk.",
            r2: "We found that certification users received a higher rate of error than our recreational users.",
            r3: "Waldo has resigned giving us 10 days to get as much knowledge from him due to undocumented work."
        },
        {
            field: "Last Response Validation",
            r1: "Never",
            r2: "Never",
            r3: "Never"
        }
    ],
    personnelTransition: {
        knowledgeTransfer: "Waldo is the lead developer on the project and has knowledge of APIs, but he has not documented his work. Before he leaves he must document his work and share his knowledge to the rest of the team to have understanding of how the APIs work, how to troubleshoot potential issues, and maintain or update the system in the future.",
        handoff: "For the first five days in Waldo's remaining time he must help in restoring and retesting the system. Ricardo Morales will be working with him and document Waldo's processes. For the last five days Waldo will share his knowledge of integration and APIs to Ricardo and Juan Reyna. Before Waldo leaves, Ricardo and Juan Reyna will complete integration tasks with Waldo’s supervision.",
        reassignment: "Ricardo Morales will become the main person responsible for the external API integration, with Juan Reyna as backup. Isaac Padilla will manage the transition.",
        cognitiveLoad: "With Waldo leaving, the amount of work that needs to be done by the rest of the team will become heavier since the responsibility of Waldo needs to be taken up by the others. Ricardo and Juan may need extra training to understand the API integration, so their responsibilities may be reduced.",
        scopeAdjustment: "If the rest of the team members are unable to carry out the tasks, then the team can postpone other functions of SkillUP, including advanced progress reports. This should, however, be done only with the approval of the project manager."
    },
    ceoBrief: {
        keyMessages: [
            "An update from our external provider has caused incorrect progress reports for all pilot users. We need to retest the system before restoring reports.",
            "Institutions used incorrect progress reports to make certification decisions. We need to review the decisions made over the past day.",
            "Certification-seeking users were affected more than recreational users. We need to investigate the difference in error rates between the two groups.",
            "Waldo, our lead developer, is leaving in 10 business days. We have assigned Ricardo Morales and Juan Reyna to learn and take over his responsibilities.",
            "Our current monthly accuracy checks may not detect problems quickly enough. We will increase monitoring when changes are made to our product or by external providers and also compare error rates between certification and recreational users."
        ],
        whatNotToSay: [
            "We will not say customer data has been exposed. The allegation has not been verified and the provider is still investigating. Saying this prematurely will cause unnecessary concerns.",
            "We will not say that the system is fixed. Even though our provider has provided a fix, we still need to test the system before restoring reports to our users.",
            "We will not say that all certification decisions were incorrect. Institutions used inaccurate reports but we have not confirmed which certification decisions were affected."
        ],
        executiveRecommendation: "We recommend pausing the project, due to the critical need to resolve the issue with the institution which costs us everyday that it is left unresolved. Also with Waldo leaving the team we have two developers shifting responsibilities, especially to our critical path of features. We will not reduce the project’s scope. We will be pausing to resolve the current issues, and resume once we have verified that we established fallbacks and our provider did make the appropriate fixes. We need the CEO’s approval for a potential 2 weeks delay to the project to avoid higher costs during this crisis and to have our developers properly transitioned to their new responsibilities.",
        signatures: [
            "Isaac Padilla",
            "Karina Rivera",
            "Juan Reyna",
            "Jonathan Hernandez",
            "Ricardo Morales"
        ]
    },
    appendixA: {
        description: "Our team worked on the crisis response during the scheduled class time on November 12, 2026. All team members participated in the overview, initial discussion, and distribution of the tasks. We met online through Teams, then after we established a starting point we continued to communicate through Teams messages. Each person was allowed to choose the sections they preferred to work on. Task distribution also depended on preference from previous responsibilities within our portal. Our team discussed every section during our meeting. After the meeting, each member was responsible for writing their section based on our discussion.",
        distribution: [
            { member: "Isaac Padilla", responsibilities: "Sections 1, 4, 5" },
            { member: "Jonathan Hernandez", responsibilities: "Section 1 - Risk Register" },
            { member: "Karina Rivera", responsibilities: "Section 2 - Decision Log" },
            { member: "Juan Reyna", responsibilities: "Section 3 - Governance Response" },
            { member: "Ricardo Morales", responsibilities: "Section 6 - Personnel Transition Plan" },
            { member: "Entire Team", responsibilities: "Section 7 - CEO Briefing" }
        ]
    },
    appendixB: [
        {
            tool: "Claude",
            sections: "Section 3",
            protocol: "Crisis, used to fix grammar fixes",
            changes: "N/A"
        },
        {
            tool: "ChatGPT",
            sections: "Section 4",
            protocol: "Crisis, used to review past SLO’s",
            changes: "N/A"
        }
    ]
};

export default crisisResponseData;

