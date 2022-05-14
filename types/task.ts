export type PublicationData = {
  text: string;
  media: string;
};

export type Publication = {
  pubDate: Date;
  data: PublicationData[];
  isPublished: boolean;
};

export type PublicationList = {
  tasks: Publication[];
};
