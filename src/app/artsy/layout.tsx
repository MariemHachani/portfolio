import { Suspense } from "react"
import Template from "./temlplate"

export default function ArtsyLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}

      <Template key={1}>
        <Suspense fallback={<p>Loading feed...</p>}>
          {children}
        </Suspense>

      </Template>

    </section>
  )
}