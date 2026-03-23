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

export const getSocialColor = (platform: string) => {
  const p = platform.toLowerCase();
  switch (p) {
    case 'facebook': return '#1877f2';
    case 'twitter': return '#000000';
    case 'instagram': return '#e1306c'; // Standard Instagram color
    case 'linkedin': return '#0a66c2';
    case 'whatsapp': return '#25d366';
    case 'youtube': return '#ff0000';
    case 'github': return '#181717';
    case 'twitch': return '#9146ff';
    case 'slack': return '#4a154b';
    case 'reddit': return '#ff4500';
    case 'tiktok': return '#000000';
    case 'snapchat': return '#fffc00';
    case 'tumblr': return '#35465c';
    case 'pinterest': return '#bd081c';
    case 'website': return '#3b82f6';
    default: return '#6b7280'; // Gray
  }
};
