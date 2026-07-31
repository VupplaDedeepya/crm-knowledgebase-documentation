import React from 'react';
import Link from '@theme-original/DocSidebarItem/Link';
import {
  LayoutDashboard,
  UserPlus,
  Layers3,
  Search,
  Sparkles,
  RefreshCw,
  Download,
  StickyNote,
  CheckSquare,
  Calendar,
  Mail,
  Building2,
  Users,
  Settings,
  Workflow,
  Plug,
  Inbox,
  Tag,
  Shield,
  Clock3,
  FileText,
  FolderOpen,
} from 'lucide-react';
import styles from './styles.module.css';

const ICON_MAP = [
  {match: /overview|intro/i, Icon: LayoutDashboard},
  {match: /creat/i, Icon: UserPlus},
  {match: /bulk/i, Icon: Layers3},
  {match: /custom.?view|smart.?view|view/i, Icon: FolderOpen},
  {match: /search|filter/i, Icon: Search},
  {match: /nudge/i, Icon: Sparkles},
  {match: /conversion|convert/i, Icon: RefreshCw},
  {match: /export/i, Icon: Download},
  {match: /note/i, Icon: StickyNote},
  {match: /task/i, Icon: CheckSquare},
  {match: /meeting|calendar/i, Icon: Calendar},
  {match: /email/i, Icon: Mail},
  {match: /organization|branding|profile|localization|work.?schedule/i, Icon: Building2},
  {match: /contact|user/i, Icon: Users},
  {match: /role|access|permission/i, Icon: Shield},
  {match: /setting|configure|global/i, Icon: Settings},
  {match: /workflow|automation|sequence|scoring/i, Icon: Workflow},
  {match: /integration|capture/i, Icon: Plug},
  {match: /pulse|inbox|channel|conversation|webchat|widget/i, Icon: Inbox},
  {match: /tag/i, Icon: Tag},
  {match: /activit/i, Icon: Clock3},
  {match: /deal|proposal|quote|score/i, Icon: FileText},
];

function resolveIcon(label = '', href = '') {
  const haystack = `${label} ${href}`;
  const found = ICON_MAP.find(({match}) => match.test(haystack));
  return found?.Icon || FileText;
}

export default function DocSidebarItemLinkWrapper(props) {
  const level = props.level ?? 0;
  const label = props.item?.label || '';
  const href = props.item?.href || '';

  // Nested items follow Getting Started style: text + rail, no icons
  if (level > 0) {
    return <Link {...props} />;
  }

  const Icon = resolveIcon(label, href);

  return (
    <div className={styles.sidebarItem}>
      <span className={styles.sidebarIcon} aria-hidden="true">
        <Icon size={15} strokeWidth={2} />
      </span>
      <Link {...props} />
    </div>
  );
}
