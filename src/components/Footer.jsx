const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="h-[8vh] flex items-center justify-center text-[#959CB6] text-sm">© {year} ALL RIGHTS RESERVED</footer>
  )
}

export default Footer