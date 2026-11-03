// Written content from the Sprint 4 Activities document (slides excluded)
const sprint4Activities = {
    "metrics": [
        [
            "Change lead time",
            "At the moment that code gets deployed as someone adds changes but we are shifting to a predeployment process. New changes will be held until review before being deployed."
        ],
        [
            "Deployment frequency",
            "We will deploy at the end of two weeks (once every sprint)."
        ],
        [
            "Recovery time",
            "Currently it will take 2 hours for our team to recover due to the fact that we first have to discover the issue and communicate the issue to the team. The team will then have to take their time to fix the issue. By shifting to the new predeployed we shorten the time for this issue since we can analyze the predeployment and be more aware once we do deploy."
        ],
        [
            "Rework rate",
            "Usually the change fail rate is at around 30% where by reviewing other’s work we end up having to rework to ensure we follow consistency and the project goals."
        ],
        [
            "Change fail rate",
            "At the moment we have not dealt with any change fail rate during production, so it would be 0%. Due to the simplicity of the site we are only handling frontend and files without the need of a server or database."
        ]
    ],
    "partA": [
        [
            "1",
            "95% of logged activities appear in the user's portfolio within one second, measured each week.",
            "SLO",
            "A target, no consequence"
        ],
        [
            "2",
            "Zero earned certifications and course completions are inaccessible after course removal.",
            "SLO",
            "A target, no consequence"
        ],
        [
            "3",
            "95% of active course and certification listings are checked weekly.",
            "SLO",
            "A target, no consequence"
        ],
        [
            "4",
            "Percentage of progress reports that accurately reflect users’ logged activities, measured each week.",
            "SLI",
            "A measurement, no target"
        ],
        [
            "5",
            "If less than 95% of progress reports are accurate in a month, affected paying customers receive a refund of their monthly analytics fee.",
            "SLA",
            "A target with an explicit consequence"
        ],
        [
            "6",
            "Average time required to generate a user’s skill progress report, measured each week",
            "SLI",
            "A measurement, no target"
        ]
    ],
    "partARewrite": [
        "6",
        "Skillup will always generate progress reports quickly.",
        "None",
        "Vague an absolute statement"
    ],
    "partBNote": "(I picked public visitors/users of SkillUp as the users that would be impacted more by a failure this sprint)",
    "partB": [
        [
            "Definition",
            "Percentage of successfully logged activities that appear in the user’s portfolio within one second.",
            "Percentage of generated progress reports that accurately reflect user’s logged activities."
        ],
        [
            "Measurement",
            "Every week, front-end developers record the time between saving an activity and its appearance in the portfolio using browser developer tools.",
            "Every month, the QA team reviews 100 generated progress reports and compares them against users’ recorded activities to identify inaccuracies."
        ],
        [
            "SLO",
            "95% of logged activities appear in the user's portfolio within one second, measured each week.",
            "97% of progress reports accurately reflect users’ logged activities, measured monthly."
        ],
        [
            "Rule Check",
            "Simple to measure, avoids absolute targets.",
            "Simple to measure, avoids absolute targets, and allows adjustments as the platform improves."
        ],
        [
            "Who would notice",
            "SkillUp users who rely on the application to record recreational activities and track their progress.",
            "SkillUp users who rely on accurate progress reports to evaluate their skill improvement."
        ]
    ],
    "targets": [
        [
            "Percentage of logged activities appearing in the portfolio within one second.",
            "95%",
            "Weekly",
            "Front-end developers"
        ],
        [
            "Percentage of accurate progress reports",
            "97%",
            "Monthly",
            "QA team"
        ]
    ],
    "budgets": [
        [
            "Objective",
            "95% of logged activities appear in the user’s portfolio within one second, measured weekly.",
            "97% of progress reports accurately reflect users’ logged activities, measured monthly."
        ],
        [
            "Budget",
            "Up to 5 out of every 100 logged activities may take longer than one second to appear each week.",
            "Up to 3 out of 100 reviewed progress reports may be inaccurate each month."
        ],
        [
            "Policy Action",
            "If the error budget is spent, pause new feature releases, investigate performance issues, and test improvements before resuming new features.",
            "If the error budget is spent, pause new analytics features, investigate inaccurate reports, correct calculation errors, and retest before resuming updates."
        ],
        [
            "Owner",
            "Front-end Development Lead",
            "QA Lead"
        ],
        [
            "Who we tell, and when",
            "Notify the SkillUp Project Manager within one business day of discovering that the error budget has been spent.",
            "Notify the SkillUp Project Manager within one business day of discovering the error budget has been spent."
        ]
    ],
    "severity": [
        [
            "Severity 1",
            "A system-wide failure prevents users from saving activities or accessing their progress records.",
            "Within 1 hour",
            "Within 2 hours"
        ],
        [
            "Severity 2",
            "Community discussion features are unavailable to some users, but activity tracking and progress reports remain functional.",
            "Within 8 hours",
            "Within 1 business day"
        ],
        [
            "Severity 3",
            "Minor visual or formatting issues appear on user profiles.",
            "Within 5 business days",
            "During the weekly update, if the issue repeats."
        ]
    ],
    "roles": [
        [
            "Incident Commander",
            "Coordinates the response, assigns responsibilities, and makes decisions.",
            "Isaac Padilla"
        ],
        [
            "Fixers",
            "1-2 people who investigate and correct the problem",
            "Juan Reyna, Jonathan Hernandez, Ricardo Morales"
        ],
        [
            "Communicator",
            "Updates the project manager, team, and affected stakeholders.",
            "Karina Rivera"
        ]
    ],
    "review": [
        [
            "Summary",
            [
                "During Sprint 3, two download buttons on the live project website pointed to incorrect file paths, preventing visitors from accessing the intended documents through those buttons. The issue was later resolved through a commit on October 19, 2026."
            ]
        ],
        [
            "Impact",
            [
                "During Sprint 3, two download buttons on the live website did not give access to the intended documents. This affected the availability of those documents for the instructor and other visitors. This only affected access to those specific documents and not the entire website. It is unknown if visitors attempted to download the document while the links were broken."
            ]
        ],
        [
            "Timeline",
            [
                "On October 19, 2026, 10:33 PM, commit 3a554f7 added Sprint 3 documents and download buttons. Two buttons referenced file names that did not match the uploaded PDF files.",
                "On October 19, 2026, 10:38PM, commit 4129677 corrected the two download links to reference the actual PDF filenames. The corrections were committed five minutes after the initial change."
            ]
        ],
        [
            "Contributing Causes",
            [
                "The issues happened because two download buttons referenced filenames that did not match the actual PDF files stored in the project. The incorrect file paths were included when the Sprint 3 content was added and was corrected on the following commit. The filename references were not verified before the initial commit was deployed. Creating a new process for checking download links on existing files could prevent similar issues."
            ]
        ],
        [
            "What Went Well",
            [
                "The issue was corrected quickly, with a fixing commit five minutes after the original commit. The correction required updating the button links to point to the correct PDF filenames, without needing to modify the documents."
            ]
        ]
    ],
    "actions": [
        [
            "Verify all document download links work correctly before deploying website updates.",
            "Juan Reyna",
            "November 2, 2026"
        ],
        [
            "Require changes to be reviewed and tested on the development branch before merging them into main for deployment.",
            "Isaac Padilla",
            "November 2, 2026"
        ]
    ]
};

export default sprint4Activities;
