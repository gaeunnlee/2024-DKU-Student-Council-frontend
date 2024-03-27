export interface PageResponse {
   hasNext: boolean;
   totalPage: number;
   totalElement: number;
   page: number;
   size: number;
   first: boolean;
   last: boolean;
}

export interface ContentResponse {
   id: number;
   title: string;
   author: string;
   body?: string;
   createdAt: string;
   images: ContentImageResponse[];
   files: ContentFileResponse[];
   likes: number;
   views: number;
   commentCount?: number;
   tag: ContentTagResponse[];
   blinded: boolean;
}

export interface ContentImageResponse {
   id: number;
   url: string;
   thumbnailUrl: string;
   originalName: string;
   mimeType: string;
}

export interface ContentFileResponse {
   id: number;
   url: string;
   originalName: string;
   mimeType: string;
}

export interface ContentTagResponse {
   id: number | null;
   name: string | null;
}
