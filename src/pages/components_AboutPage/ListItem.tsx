import React from 'react';

interface ListItemProps {
  item: string;
  hasBadge?: boolean;
  badgeText?: string;
  badgeColor?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  item,
  hasBadge = false,
  badgeText,
  badgeColor = 'primary',
}) => (
  <li className="mb-2">
    {item}
    {hasBadge && <span className={`badge bg-${badgeColor}`}>{badgeText}</span>}
  </li>
);

export default ListItem;