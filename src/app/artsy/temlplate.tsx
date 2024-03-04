import Footer from "./_footer/page";

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>
    {children}
    <Footer /></div>
}