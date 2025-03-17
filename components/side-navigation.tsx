import Link from "next/link"
import {
  Compass,
  Clock,
  Flame,
  PlayIcon as PlayingCards,
  Dices,
  FileText,
  CastleIcon as ChessKnight,
  Puzzle,
  MoreHorizontal,
} from "lucide-react"

export default function SideNavigation() {
  const navItems = [
    { icon: <Compass className="h-5 w-5" />, label: "Discover", href: "#" },
    { icon: <Clock className="h-5 w-5" />, label: "Recent", href: "#" },
    { icon: <Flame className="h-5 w-5" />, label: "Popular", href: "#" },
    { icon: <PlayingCards className="h-5 w-5" />, label: "Card", href: "#" },
    { icon: <Dices className="h-5 w-5" />, label: "Casino", href: "#" },
    { icon: <FileText className="h-5 w-5" />, label: "Word", href: "#" },
    { icon: <ChessKnight className="h-5 w-5" />, label: "Board", href: "#" },
    { icon: <Puzzle className="h-5 w-5" />, label: "Puzzle", href: "#" },
    { icon: <MoreHorizontal className="h-5 w-5" />, label: "More", href: "#" },
  ]

  return (
    <aside className="hidden md:block w-16 lg:w-20 border-r border-gray-200 shrink-0">
      <nav className="sticky top-0 py-4">
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item, index) => (
            <li key={index} className="w-full">
              <Link
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 px-2 py-1 text-gray-500 hover:text-blue-600 transition-colors"
              >
                {item.icon}
                <span className="text-xs">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

