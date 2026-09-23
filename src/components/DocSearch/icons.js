import {
  BookOpen,
  Building2,
  Calendar,
  FileText,
  Handshake,
  LayoutGrid,
  MessageSquare,
  Puzzle,
  Settings,
  Zap,
} from 'lucide-react';
import {LeadsIcon, ContactsIcon} from '../icons';

const ICONS = {
  docs: FileText,
  leads: LeadsIcon,
  deals: Handshake,
  contacts: ContactsIcon,
  organizations: Building2,
  activities: LayoutGrid,
  calendar: Calendar,
  pulse: MessageSquare,
  automation: Zap,
  settings: Settings,
  integrations: Puzzle,
  default: BookOpen,
};

export function getCategoryIcon(iconKey) {
  return ICONS[iconKey] || ICONS.default;
}
