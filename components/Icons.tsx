import React from 'react';
import { ArrowUpRight, Linkedin, Twitter, Mail, Newspaper } from 'lucide-react';

export const ExternalLinkIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <ArrowUpRight className={className} />
);

export const LinkedInIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Linkedin className={className} />
);

export const XIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Twitter className={className} />
);

export const SubstackIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <Newspaper className={className} />
);
