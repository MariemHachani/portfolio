
export default function LogicalLayout(props: {
    children: React.ReactNode
    about: React.ReactNode
    projects: React.ReactNode
  }) {
    return (
      <section className="flex flex-col px-5 pt-24 min-h-screen">
        {props.children}
        {props.about}
        {props.projects}
      </section>
    )
  }