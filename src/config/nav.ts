interface ILink {
  id: number;
  href: string;
  name: string;
}

export const links: ILink[] = [
  {
    id: 1,
    href: '/',
    name: 'Home',
  },
  {
    id: 2,
    href: '/chat',
    name: 'Conversations',
  },
  {
    id: 3,
    href: '/profile',
    name: 'Profile',
  },
];
