import Link from "next/link";
const menus=[
  {
    id: 1,
    title: "register",
    url: "/dashboard/register",
  },
  {
    id: 2,
    title: "signup",
    url: "/dashboard/login",
  },
];
export default function Dashboard({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
      <div>
        <h1>Main dashboard text</h1>
        <div>
          <ul>
            {menus.map(menu=>(
              <Link href={menu.url} key={menu.id}>{menu.title}</Link>
            ))}
          </ul>
        </div>
        {children}
      </div>
  )
}