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
  UserPlus,
  Users,
  Zap,
} from 'lucide-react';

const ICONS = {
  docs: FileText,
  leads: UserPlus,
  deals: Handshake,
  contacts: Users,
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
