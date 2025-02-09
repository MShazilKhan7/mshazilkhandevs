interface ImageData {
  alt: string;
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}
export interface IAuthor {
  image?: ImageData;
  name: string;
  designation: string;
  bio: string;
  post?: any;
  slug: {
    current: string;
  };
}

export interface Tag {
  title: string;
  slug: {
    current: string;
    _type: string;
  };
}

export interface IArticleHeaderData {
  author: IAuthor;
  _createdAt: Date;
  publishedAt: Date;
  title: string;
  tags: Tag[];
  thumbnail: string;
  meta_description: string;
  category?: string;
  mainImage: any;
  body: any;
  estimatedReadingTime: number;
}

export interface ISnippetHeaderData {
  date: string;
  title: string;
}

export interface ISnippet {
  path: string;
  preview: ISnippetHeaderData;
  seo?: iSEO;
}

export interface IOpenSourceData {
  date: string;
  title: string;
}

export type PillVariant = "outlined" | "hover-outlined" | "simple" | "text";

export interface IOpenSource {
  path?: string;
  preview?: IOpenSourceData;
  seo?: iSEO;
  title: string;
  url: string;
}

export interface iArticle {
  path: string;
  featureArticle?: boolean;
  preview: IArticleHeaderData;
  seo?: iSEO;
}

export interface iSEO {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  twitterHandle?: string;
  author?: string;
  url?: string;
}

export interface iNavLink {
  label: string;
  path: string;
  type?: string;
  newTab?: boolean;
}

export interface iNavSocials {
  link: string;
  icon: any;
}

export interface IContentCardDetails {
  buttonText?: string;
  post: IContentPost;
}

export interface IContentPost {
  title: string;
  slug: string;
  tags: Tag[];
  thumbnail: any;
  images: any[];
}

export interface ILegal {
  _createdAt: Date;
  _updatedAt: Date;
  publishedAt: Date;
  title: string;
  body: any;
  meta_description: string;
  slug: string;
}
