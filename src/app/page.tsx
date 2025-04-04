
import Cover from "@/components/Cover"
import Introduction from "@/components/Introduction"
import TransitionPage from "@/components/transition.page"

export default function Home() {
  return (
    <main>
    <TransitionPage />
    <div className="flex flex-col min-h-screen bg-primary">
      <Cover />
      <Introduction />
    </div>
    </main>
    
  )
}

