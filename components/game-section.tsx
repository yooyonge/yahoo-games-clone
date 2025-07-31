import Link from "next/link"
import GameCard from "./game-card"
import { ChevronRight } from "lucide-react"

interface Game {
  title: string
  image: string
  provider: string
  size?: "normal" | "wide" | "large"
  description?: string
}

interface GameSectionProps {
  title: string
  description: string
  games: Game[]
  onGameSelect: (game: Game) => void
}

export default function GameSection({ title, description, games, onGameSelect }: GameSectionProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <Link href="#" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
          View all
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {games.map((game) => (
          <GameCard key={game.title} {...game} onSelect={onGameSelect} />
        ))}
      </div>
    </section>
  )
}

