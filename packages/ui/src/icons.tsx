import { CaretSortIcon } from "@radix-ui/react-icons";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  ArrowLeft,
  Bold,
  Book,
  CheckIcon,
  ChevronDown,
  ChevronLeft,
  CircleDotDashed,
  Clipboard,
  Code,
  Code2,
  Copy,
  ExternalLink,
  Github,
  GripVertical,
  Heading1,
  Heading2,
  Heading3,
  HelpCircle,
  Highlighter,
  Home,
  Inbox,
  Italic,
  LayoutList,
  Lock,
  Maximize2,
  Minimize2,
  MoreHorizontal,
  MoreVertical,
  Palette,
  PenBox,
  Plus,
  RemoveFormatting,
  Search,
  Settings,
  Strikethrough,
  Subscript,
  Superscript,
  Trash,
  Trash2,
  Underline,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  search: Search,
  inbox: Inbox,
  issues: CircleDotDashed,
  newIssue: PenBox,
  info: HelpCircle,
  maximize: Maximize2,
  minimize: Minimize2,
  caretSortIcon: CaretSortIcon,
  checkIcon: CheckIcon,
  horizontalMore: MoreHorizontal,
  trash: Trash,
  heading1: Heading1,
  heading2: Heading2,
  heading3: Heading3,
  plus: Plus,
  gripVertical: GripVertical,
  removeFormatting: RemoveFormatting,
  clipBoard: Clipboard,
  copy: Copy,
  trash2: Trash2,
  bold: Bold,
  italic: Italic,
  underline: Underline,
  strikethrough: Strikethrough,
  code: Code,
  code2: Code2,
  highlighter: Highlighter,
  palette: Palette,
  moreVertical: MoreVertical,
  subscript: Subscript,
  superscript: Superscript,
  alignLeft: AlignLeft,
  alignCenter: AlignCenter,
  alignRight: AlignRight,
  alignJustify: AlignJustify,
  projects: LayoutList,
  github: Github,
  book: Book,
  settings: Settings,
  externalLink: ExternalLink,
  home: Home,
  back: ArrowLeft,
  lock: Lock,
  users: Users,
};
