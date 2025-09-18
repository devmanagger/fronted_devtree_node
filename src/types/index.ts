
export  type User ={
    handle: string;
    name: string;
    email: string;
    id:string,
    description:string;
    image:string;
    links?:string
}
export type RegisterForm = Pick<User,'name'|'email'|'handle'> & {
   password: string;
    password_confirmation: string;
}
export type LoginForm = Pick<User,'email'> & {
   password: string;
}
export type ProfileForm = Pick<User,'handle'|'description'> & {
   image?: FileList;
}


//Social link type
export type SocialNetwork = {
    id:number;
    name: string;
    url: string;
    enabled: boolean;
}
// pick type from social network
export type DevTreeLinks = Pick<SocialNetwork,'name'|'url'|'enabled'>
