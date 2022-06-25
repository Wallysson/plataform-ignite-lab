import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex flex-1 flex-col lg:flex-row">
        { slug ? <Video lessonSlug={slug}/> : <div className="flex-1"/> }
        <Sidebar />  
      </main>
    </div>
  )
}