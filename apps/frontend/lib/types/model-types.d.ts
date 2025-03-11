export type Video = {
  id: number;
  slug?: string;
  url: string;
  title: string;
  description?: string;
  authorId: number;
  author: User;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  comments: Comment[];
  tags: Tag[];
  likes: Like[];
  category?: Category;
  categoryId?: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  bio?: string;
  avatar?: string;
  password?: string;
  createdAt: Date;
  updatedAt: Date;
  videos: Video[];
  comments: Comment[];
  likes: Like[];
};

export type Comment = {
  id: number;
  content: string;
  videoId: number;
  video: Video;
  authorId: number;
  author: User;
  createdAt: Date;
  updatedAt: Date;
};

export type Tag = {
  id: number;
  name: string;
  videos: Video[];
};

export type Category = {
  id: number;
  name: string;
  videos: Video[];
};
