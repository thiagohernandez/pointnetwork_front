export interface TabData {
  id: string;
  title: string;
  content: {
    header: string;
    subheader: string;
    url: string;
    image: string;
    features: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }[];
  };
}

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  date: string;
  url: string;
}

export interface BlogProps {
  posts: BlogPostProps[];
}

export interface ResourceProps {
  id: string;
  title: string;
  description: string;
  content: string;
  learn: {
    content: string;
  }[];
  target: {
    content: string;
  }[];
  img: string;
  imgHero: string;
  slug: string;
}
