import { 
  Globe, Facebook, Twitter, Instagram, Linkedin, MessageCircle, 
  Youtube, Github, Twitch, Slack, MessageSquare, Send, Phone,
  Ghost, Music, Hash, Pin, Share2
} from "lucide-react";

export const getSocialIcon = (platform: string) => {
  const p = platform.toLowerCase();
  switch (p) {
    case 'facebook': return Facebook;
    case 'twitter': return Twitter;
    case 'instagram': return Instagram;
    case 'linkedin': return Linkedin;
    case 'whatsapp': return MessageCircle;
    case 'youtube': return Youtube;
    case 'website': return Globe;
    case 'github': return Github;
    case 'twitch': return Twitch;
    case 'slack': return Slack;
    case 'reddit': return MessageSquare;
    case 'tiktok': return Music;
    case 'snapchat': return Ghost;
    case 'tumblr': return Hash;
    case 'pinterest': return Pin;
    default: return Globe;
  }
};
