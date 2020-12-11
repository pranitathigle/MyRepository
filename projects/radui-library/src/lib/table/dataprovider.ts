export interface People {
    name: string;
    Sno: number;
    canspeak: boolean;
    canwrite: boolean;
  }

export const  PEOPLE_DATA: People[] = [
    {Sno: 1, name: 'John', canspeak: false, canwrite: false},
    {Sno: 2, name: 'Miller', canspeak: false, canwrite: false},
    {Sno: 3, name: 'Peter', canspeak: false, canwrite: false},
    ];
