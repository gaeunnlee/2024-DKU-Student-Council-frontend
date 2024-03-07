export interface IPost {
   id: number;
   title: string;
   body: string;
   author: string;
   tag: [{ id: number; name: string }];
   createdAt: string;
   images: [
      {
         id: number;
         url: string;
         thumbnailUrl: string;
         originalName: string;
         mimeType: string;
      },
   ];
   files: [
      {
         id: number;
         url: string;
         originalName: string;
         mimeType: string;
      },
   ];
   likes: number;
   views: number;
   liked: boolean;
   mine: boolean;
   blinded: boolean;
}
