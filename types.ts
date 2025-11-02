export interface Link {
  label: string;
  url: string;
}

export interface Highlight {
  title: string;
  links: Link[];
  date?: string;
}

export interface JobRole {
  title: string;
  period: string;
  description?: string;
  achievements: Array<{
    text: string;
    links?: Link[];
  }>;
}

export interface CompanyExperience {
  company: string;
  roles: JobRole[];
}