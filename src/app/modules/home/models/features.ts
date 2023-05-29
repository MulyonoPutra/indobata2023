export interface Features {
  headerTitle: string;
  headerDescription: string;
  content: Content[];
}

export interface Content {
  id: number;
  icon: string;
  title: string;
  description: string;
}
