import {
  FacebookIcon,
  LinkedInIcon,
  TwitterIcon,
  YouTubeIcon,
} from "@/components/icons";

const socialLinks = [
  { label: "Share on Facebook", icon: FacebookIcon, href: "#" },
  { label: "Share on Twitter", icon: TwitterIcon, href: "#" },
  { label: "Share on LinkedIn", icon: LinkedInIcon, href: "#" },
  { label: "Share on YouTube", icon: YouTubeIcon, href: "#" },
] as const;

export function SocialShare() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(({ label, icon: Icon, href }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-muted-bg hover:text-foreground"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
