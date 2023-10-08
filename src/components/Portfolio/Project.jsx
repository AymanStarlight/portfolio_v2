function Project({name, img}) {
  return (
    <div className="flex flex-col items-center pr-12">
        <img src={img} className="rounded-3xl "/>
        <p className="text-secondary-dark font-manrope font-semibold bg-white/25 backdrop-blur-lg inline-block text-center w-56 py-2 rounded-full relative bottom-12">{name}</p>
    </div>
  )
}
export default Project