export interface Movie {
  title: string;
  posterUrl: string;
}

export interface ContactData {
  firstName: string;
  lastName: string;
  age: string | null;
  hideEmail: boolean;
  email: string | null;
  comment: string;
}
