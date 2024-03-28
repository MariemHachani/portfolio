import Footer from "./_components/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>
    {children}
    <Footer /></div>
}