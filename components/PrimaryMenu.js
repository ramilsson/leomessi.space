export default function PrimaryMenu({ render: Render }) {
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Games',
      url: '/games',
    },
  ];

  return <Render menuItems={menuItems} />;
}
