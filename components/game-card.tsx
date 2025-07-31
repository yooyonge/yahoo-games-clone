interface Game {
  title: string
  image: string
  provider: string
  size?: "normal" | "wide" | "large"
  description?: string
}

interface GameCardProps extends Game {
  onSelect: (game: Game) => void
}

export default function GameCard({ title, image, provider, size = "normal", description, onSelect }: GameCardProps) {
  const sizeClasses = {
    normal: "col-span-1 row-span-1",
    wide: "col-span-1 md:col-span-2 row-span-1",
    large: "col-span-1 md:col-span-1 row-span-2",
  }

  const handleClick = () => {
    onSelect({ title, image, provider, size, description })
  }

  return (
    <div
      onClick={handleClick}
      className={`${sizeClasses[size]} relative group overflow-hidden rounded-xl shadow-md border border-gray-200 cursor-pointer`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity z-10" />

      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transition-transform group-hover:scale-105"
      />

      <div className="absolute bottom-0 left-0 p-3 z-20">
        <div className="flex items-center gap-1">
          {provider === "Masque" && <span className="text-red-500 text-xs">★</span>}
          <span className="text-xs text-gray-200">{provider}</span>
        </div>
        <h3 className="text-white font-medium">{title}</h3>
      </div>
    </div>
  )
}

