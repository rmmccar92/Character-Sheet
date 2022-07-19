// TODO: Can remove any unnedded global layout components by adding here

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="layout">{children}</div>;
}
