export interface UserDetails {
  id: number;
  name: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
