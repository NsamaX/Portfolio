import type { Lang } from './translations';
import enProjects from '../locales/en.projects.json';
import thProjects from '../locales/th.projects.json';

export interface ProjectImage {
  label: string;
  src: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  tags: string[];
  type: string;
  repo: string | null;
  live: string | null;
  images: ProjectImage[];
  year: string;
  role: string;
}

const PH = 'https://t4.ftcdn.net/jpg/02/47/78/41/360_F_247784137_EOknrsH4UQ2yc0Rn1jrEaM839mWjtITx.jpg';

function resolvePH(projects: ProjectItem[]): ProjectItem[] {
  return projects.map(p => ({
    ...p,
    images: p.images.map(img => ({ ...img, src: img.src === 'ph' ? PH : img.src })),
  }));
}

const projectsData: Record<Lang, ProjectItem[]> = {
  en: resolvePH(enProjects as ProjectItem[]),
  th: resolvePH(thProjects as ProjectItem[]),
};

export default projectsData;
