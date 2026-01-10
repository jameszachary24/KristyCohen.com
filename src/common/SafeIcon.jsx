import React from 'react';
import * as FiIcons from 'react-icons/fi';

const SafeIcon = ({ icon, name, ...props }) => {
  // 1. If a direct icon component is passed, use it
  if (icon) {
    return React.createElement(icon, props);
  }

  // 2. If a name is passed, try to find it in FiIcons
  if (name) {
    const iconName = name.startsWith('Fi') ? name : `Fi${name}`;
    const ResolvedIcon = FiIcons[iconName];
    if (ResolvedIcon) {
      return React.createElement(ResolvedIcon, props);
    }
  }

  // 3. Fallback to AlertTriangle if nothing found
  return React.createElement(FiIcons.FiAlertTriangle, props);
};

export default SafeIcon;