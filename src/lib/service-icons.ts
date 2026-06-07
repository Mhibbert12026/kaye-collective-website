import {
  Briefcase,
  Building2,
  Compass,
  GraduationCap,
  Mic,
  Sprout,
  TrendingUp,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

const serviceIconMap: Record<string, LucideIcon> = {
  "Leadership Development": Users,
  "Team Development": Users,
  "Organizational Transformation": Building2,
  "Talent Programming": GraduationCap,
  "Fractional HR Leadership": Briefcase,
  "Speaking & Facilitation": Mic,
  "Executive Coaching": UserRound,
  "Mid-Career Acceleration": TrendingUp,
  "Early Career Activation": Sprout,
  "Life & Leadership Coaching": Compass,
};

export function getServiceIcon(title: string): LucideIcon {
  return serviceIconMap[title] ?? Compass;
}

const whoWeServeIconMap: Record<string, LucideIcon> = {
  Organizations: Building2,
  Leaders: Compass,
  "Event Planners": Mic,
};

export function getWhoWeServeIcon(title: string): LucideIcon {
  return whoWeServeIconMap[title] ?? Compass;
}

const workshopApproachIconMap: Record<string, LucideIcon> = {
  "Strategic Workshop Design": Compass,
  "Leadership Development": Users,
  "Facilitation Expertise": Mic,
  "Action-Oriented Experiences": TrendingUp,
  "Executive Engagement": UserRound,
};

export function getWorkshopApproachIcon(title: string): LucideIcon {
  return workshopApproachIconMap[title] ?? Compass;
}

const speakingTopicIconMap: Record<string, LucideIcon> = {
  "Career & Performance": TrendingUp,
  "Leadership & Culture": Users,
  "Communication & Facilitation": Mic,
};

export function getSpeakingTopicIcon(cluster: string): LucideIcon {
  return speakingTopicIconMap[cluster] ?? Mic;
}
