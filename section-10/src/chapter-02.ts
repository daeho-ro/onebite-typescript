/*
 * Pick<T, K>
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글',
  content: '옛날 콘텐츠',
};

/*
 * Omit<T, K>
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, 'title'> = {
  tags: ['ts'],
  content: '초안...',
  thumbnailUrl: 'https://...',
};

/*
 * Record<K, v>
 */

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string; size: number }>;
