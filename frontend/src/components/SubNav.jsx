import React from 'react';

function SubNav({ links}) {
    return (
        <nav className="sprint-subnav">
            {links.map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                    {link.label}
                </a>
            ))}
        </nav>
    );
}

export default SubNav;