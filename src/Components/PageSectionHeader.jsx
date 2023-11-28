import React from 'react';

function PageSectionHeader({ icon, title, subtitle, textColor, subtextColor, bgColor }) {
    return (
        <h1 className={`my-name text-4xl flex items-center justify-center gap-2 transition-colors duration-300 ${textColor} ${bgColor}`}>
            {icon && <ion-icon name={icon}></ion-icon>}
            {title} {subtitle && <span className={`transition-colors duration-300 ${subtextColor}`}>{subtitle}</span>}
        </h1>
    )
}

export default PageSectionHeader;