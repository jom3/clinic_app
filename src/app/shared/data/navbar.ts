export interface Route{
  name:string;
  route:string;
}

export const ruotes:Route[] = [
  {
    name:'user',
    route:'/user'
  },
  {
    name:'staff',
    route:'/staff'
  },
  {
    name:'attention',
    route:'/attention'
  },
]
