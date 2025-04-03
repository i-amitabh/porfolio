import { clientReviews } from "../constant"

const Clients = () => {
  return (
    <section className="sm:px-10 px-5 my-20">
        <h3 className="sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent">
            Hear from My Clients
        </h3>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-12">
            {clientReviews.map(({ id, name, review, img, position }) => (
                <div key={id} className="rounded-lg md:p-10 p-5 col-span-1 bg-black-300 bg-opacity-50">
                    <div>
                        <p className="text-white font-light">{review}</p>
                        <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start gap-5 mt-7">
                            <div className="flex gap-3">
                                <img src={img} alt={name} className="w-12 h-12 rounded-full" />
                                <div className="flex flex-col">
                                    <p className="font-semibold text-[#E4E4E6]">{name}</p>
                                    <p className="text-[#62646C] md:text-base text-sm font-light">{position}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end items-center gap-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <img 
                                key={index} 
                                src='/assets/star.png' 
                                className="w-5 h-5" 
                                alt="star icon"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Clients