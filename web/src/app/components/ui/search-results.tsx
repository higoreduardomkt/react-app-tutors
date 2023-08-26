import Image from './image'

export default function SearchResults() {
  return (
    <div className="absolute top-[60px] right-0 left-0 rounded-md bg-header shadow-lg">
      <div className="max-h-[480px] scrollbar scrollbar-thumb-primary scrollbar-track-header pr-3 overflow-y-auto">
        {
          Array.from({length: 10}).map((_, i) => (
          <div key={i} className="flex  gap-2 p-3 truncate">
            <Image src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg" className="h-[72px] max-w-[100px] roudend-md" />
            <div>
              <p className="text-base truncate">Title</p>
              <ul className="flex flex-wrap gap-x-1.5 text-sm opacity-70">
                <li>Terror,</li>
                <li>Suspense</li>
              </ul>
            </div>
          </div>
          ))
        }
      </div>
      <button type="button" className="w-full shadow-lg px-3 py-1.5 bg-primary rounded-md hover:bg-body">More results</button>
    </div>
  )
}
