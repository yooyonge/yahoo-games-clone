"use client"

import Link from "next/link"
import { Search, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import GameCard from "@/components/game-card"
import SideNavigation from "@/components/side-navigation"
import GamePopup from "@/components/game-popup"
import GameSection from "@/components/game-section"
import { useState } from "react"

interface Game {
  title: string
  image: string
  provider: string
  size?: "normal" | "wide" | "large"
  description?: string
}

const featuredGames: Game[] = [
  {
    title: "Bird Word Mahjong",
    image: "/placeholder.svg?height=200&width=300",
    provider: "Masque",
    size: "large",
    description: "Match tiles in a bamboo forest setting.",
  },
  {
    title: "Lucky O'Wilds",
    image: "/placeholder.svg?height=200&width=300",
    provider: "Masque",
    size: "large",
    description: "Spin the reels and find your pot of gold.",
  },
  {
    title: "Genesis Deluxe",
    image: "/placeholder.svg?height=150&width=200",
    provider: "Masque",
    description: "A classic casino game.",
  },
  {
    title: "Bubble Zone",
    image: "/placeholder.svg?height=150&width=300",
    provider: "Masque",
    size: "wide",
    description: "Pop bubbles to clear the board.",
  },
  {
    title: "Bubble Mouse",
    image: "/placeholder.svg?height=150&width=200",
    provider: "Masque",
    description: "A fun bubble shooter game.",
  },
  {
    title: "Bingo",
    image: "/placeholder.svg?height=150&width=200",
    provider: "Masque",
    description: "Classic bingo fun.",
  },
]

const popularGames: Game[] = [
  { title: "Solitaire", image: "/placeholder.svg?height=150&width=200", provider: "Yahoo Games", description: "The classic card game." },
  { title: "Mahjong Dimensions", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "A 3D mahjong game." },
  { title: "Blackjack", image: "/placeholder.svg?height=150&width=200", provider: "Yahoo Games", description: "Try to beat the dealer." },
  { title: "Word Wipe", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "Find words to clear the board." },
]

// ... and so on for other game sections

export default function HomePage() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null)

  const handleGameSelect = (game: Game) => {
    setSelectedGame(game)
  }

  const handleClosePopup = () => {
    setSelectedGame(null)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 px-4 py-3 bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold text-gray-900">yahoo!</span>
            <span className="text-xl font-bold text-blue-600">games</span>
          </Link>

          <div className="relative mx-4 flex-1 max-w-md">
            <div className="relative">
              <input
                type="search"
                placeholder="Search in Games"
                className="w-full rounded-full bg-gray-100 px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
              />
              <Button size="icon" variant="ghost" className="absolute right-1 top-1/2 -translate-y-1/2 text-gray-500">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm hover:text-blue-600">
              News
            </Link>
            <Link href="#" className="text-sm hover:text-blue-600">
              Finance
            </Link>
            <Link href="#" className="text-sm hover:text-blue-600">
              Sports
            </Link>
            <div className="relative group">
              <button className="text-sm hover:text-blue-600 flex items-center gap-1">
                More
                <span className="text-xs">▼</span>
              </button>
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-1 rounded-full border-blue-500 text-blue-600"
            >
              <Mail className="h-4 w-4" />
              <span>Mail</span>
            </Button>
            <Button size="sm" className="rounded-full bg-gray-900 text-white hover:bg-gray-800">
              Sign in
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex">
        {/* Side Navigation */}
        <SideNavigation />

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Featured Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-600">★</span>
              <h2 className="text-lg font-medium">Featured</h2>
            </div>

            <h1 className="text-5xl font-bold mb-1">
              Games
              <br />
              for you
            </h1>
            <p className="text-sm text-gray-500 mb-4">Games provided by Yahoo partners</p>

            <Button variant="outline" className="rounded-full px-6 border-gray-300 text-sm hover:bg-gray-100">
              See categories
            </Button>
          </div>

          {/* Featured Games Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {featuredGames.map((game) => (
              <GameCard key={game.title} {...game} onSelect={handleGameSelect} />
            ))}
          </div>

          {/* Popular Games Section */}
          <GameSection
            title="Popular Games"
            description="Most played games this week"
            games={popularGames}
            onGameSelect={handleGameSelect}
          />

          {/* Card Games Section */}
          <GameSection
            title="Card Games"
            description="Classic card games and more"
            games={[
              { title: "Spider Solitaire", image: "/placeholder.svg?height=150&width=200", provider: "Yahoo Games", description: "A challenging solitaire variant." },
              { title: "Poker", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "Texas Hold'em and more." },
              { title: "Hearts", image: "/placeholder.svg?height=150&width=200", provider: "Yahoo Games", description: "Avoid taking hearts!" },
              { title: "Rummy", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "Form melds and go out." },
            ]}
            onGameSelect={handleGameSelect}
          />

          {/* Puzzle Games Section */}
          <GameSection
            title="Puzzle Games"
            description="Challenge your brain"
            games={[
              { title: "Crossword", image: "/placeholder.svg?height=150&width=200", provider: "Yahoo Games", description: "Daily crossword puzzles." },
              { title: "Sudoku", image: "/placeholder.svg?height=150&width=200", provider: "Yahoo Games", description: "The classic number puzzle." },
              { title: "Word Search", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "Find hidden words." },
              { title: "2048", image: "/placeholder.svg?height=150&width=200", provider: "Yahoo Games", description: "Combine tiles to reach 2048." },
            ]}
            onGameSelect={handleGameSelect}
          />

          {/* Casino Games Section */}
          <GameSection
            title="Casino Games"
            description="Try your luck"
            games={[
              { title: "Slots", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "Spin the reels to win." },
              { title: "Roulette", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "Bet on your lucky numbers." },
              { title: "Baccarat", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "A simple and elegant card game." },
              { title: "Craps", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "Roll the dice and try to win." },
            ]}
            onGameSelect={handleGameSelect}
          />

          {/* Arcade Games Section */}
          <GameSection
            title="Arcade Games"
            description="Classic arcade action"
            games={[
              { title: "Snake", image: "/placeholder.svg?height=150&width=200", provider: "Yahoo Games", description: "Eat apples and grow your snake." },
              { title: "Tetris", image: "/placeholder.svg?height=150&width=200", provider: "Yahoo Games", description: "The classic falling block puzzle." },
              { title: "Pac-Man", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "Eat pellets and avoid ghosts." },
              { title: "Space Invaders", image: "/placeholder.svg?height=150&width=200", provider: "Masque", description: "Shoot down alien invaders." },
            ]}
            onGameSelect={handleGameSelect}
          />
        </main>
      </div>

      {/* Game Popup - This would be conditionally rendered */}
      {selectedGame && (
        <GamePopup
          title={`Play ${selectedGame.title}`}
          description={selectedGame.description || ""}
          image={selectedGame.image}
          onClose={handleClosePopup}
        />
      )}
    </div>
  )
}

