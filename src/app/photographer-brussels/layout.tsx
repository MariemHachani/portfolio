import { Suspense } from "react"
import Template from "./temlplate"
import Loading from "./loading"
import Footer from "./_components/footer"
import Header from "../components/header"

export default function ArtsyLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Template key={1}>
        <Suspense fallback={<Loading />}>
          <Header />
          {children}
          <Footer />

        </Suspense>

      </Template>
    </section>
  )
}