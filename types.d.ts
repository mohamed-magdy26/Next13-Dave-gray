interface SearchResult {
  query?: {
    pages?: Page[];
  };
}

interface Thumbnail {
  source: string;
  width: number;
  height: number;
}
interface Page {
  pageid: number;
  ns: number;
  title: string;
  index: number;
  thumbnail: Thumbnail;
  pageimage: string;
  extract: string;
}
