export interface IMain {
   carousels: IBanner[];
   recentNotices: INotice[];
   popularPetitions: IPetition[];
   recentConferences: [
      {
         id: number;
         title: string;
      },
   ];
}

export interface IBanner {
   id: number;
   url: string;
   redirectUrl: string | null;
}

export interface INotice {
   id: number;
   title: string;
}

export interface IPetition {
   id: number;
   title: string;
   petitionStatus: PetitionType;
   d_day: number;
}

export enum PetitionType {
   WAITING,
   ACTIVE,
   ANSWERED,
   EXPIRED,
}

export interface ICafeteria {
   mealData: string;
   breakfast: string;
   lunch: string;
   dinner: string;
   [key: string]: string;
}
