import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  hasBadge?: boolean;
  badgeText?: string;
  badgeColor?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  hasBadge = false,
  badgeText,
  badgeColor = 'primary',
}) => (
  <section className="mb-5">
    <h2 className="mb-3 text-primary">{title}</h2>
    <hr />
    {hasBadge && <span className={`badge bg-${badgeColor}`}>{badgeText}</span>}
    {children}
  </section>
);

export default Section;