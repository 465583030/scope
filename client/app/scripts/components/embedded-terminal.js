import React from 'react';

import { getNodeColor, getNodeColorDark } from '../utils/color-utils';
import Terminal from './terminal';

export default function EmeddedTerminal({pipe, details, containerMargin}) {
  const nodeId = pipe.get('nodeId');
  const node = details.get(nodeId);
  const d = node && node.details;
  const titleBarColor = d && getNodeColorDark(d.rank, d.label);
  const statusBarColor = d && getNodeColor(d.rank, d.label);
  const title = d && d.label;

  // React unmount/remounts when key changes, this is important for cleaning up
  // the term.js and creating a new one for the new pipe.
  return (
    <div className="terminal-embedded">
      <Terminal pipe={pipe} titleBarColor={titleBarColor}
        statusBarColor={statusBarColor} containerMargin={containerMargin} title={title} />
    </div>
  );
}
