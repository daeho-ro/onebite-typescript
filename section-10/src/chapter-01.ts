/*
 * Partial<T>
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: '제목 나중에 짓자',
  content: '초안...',
};

/*
 * Required<T>
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: '한입 타스 후기',
  tags: ['ts'],
  content: '초안...',
  thumbnailUrl: 'https://...',
};

/*
 * Readonly<T>
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글 입니다.',
  tags: [],
  content: '초안...',
};

// readonlyPost.content = '';
