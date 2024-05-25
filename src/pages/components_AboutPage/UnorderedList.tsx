import React from 'react';
import ListItem from './ListItem';

interface UnorderedListProps {
  items: string[];
  hasBadge?: boolean;
  badgeText?: string[];
  badgeColor?: string;
}

const UnorderedList: React.FC<UnorderedListProps> = ({
  items,
  hasBadge = false,
  badgeText,
  badgeColor = 'primary',
}) => (
  <ul className="list-unstyled">
    {items.map((item, index) => (
      <ListItem
        key={index}
        item={item}
        hasBadge={hasBadge}
        badgeText={badgeText?.[index]}
        badgeColor={badgeColor}
      />
    ))}
  </ul>
);

export default UnorderedList;