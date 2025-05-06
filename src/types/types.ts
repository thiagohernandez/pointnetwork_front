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
