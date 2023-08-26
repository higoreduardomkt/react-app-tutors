export default function Footer() {
  return (
    <footer className="w-full px-6 py-10 mt-10 mx-auto flex items-center justify-center bg-body text-sm leading-normal text-center text-slate-500">
      &copy; {new Date().getFullYear()} Movielia. All rights reserved, make with&nbsp;
      <span className="text-red-500">&#10084;</span> by&nbsp;
      <a href="/" className="font-semibold text-slate-700 dark:text-white dark:border-white border-b border-zinc-600 pb-1" target="_blank">Dudu</a>
    </footer>
  )
}
