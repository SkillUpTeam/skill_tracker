import React from 'react';
import { FileText, Presentation } from 'lucide-react';

function SprintModeToggle({ mode, setMode }) {
    return (
        <div className="sprint-mode-bar-container">
            <div className="sprint-mode-bar">
                <div className="sprint-mode-switcher" role="tablist" aria-label="Sprint View Mode Switcher">
                    <button
                        role="tab"
                        aria-selected={mode === 'document'}
                        className={`sprint-mode-btn ${mode === 'document' ? 'active' : ''}`}
                        onClick={() => setMode('document')}
                    >
                        <FileText size={17} className="btn-icon" />
                        <span className="mode-btn-text">Detailed Spec</span>
                    </button>

                    <button
                        role="tab"
                        aria-selected={mode === 'presentation'}
                        className={`sprint-mode-btn ${mode === 'presentation' ? 'active' : ''}`}
                        onClick={() => setMode('presentation')}
                    >
                        <Presentation size={17} className="btn-icon" />
                        <span className="mode-btn-text">Visual Overview</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SprintModeToggle;
