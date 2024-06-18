
const Headphone = `https://i.pngimg.me/thumb/f/720/comhiclipartidnpn.jpg`
const Card = () => {
    return (
        <div className='border p-4 max-w-[500px] w-[80%] rounded-md shadow-2xl'>
            <div className='mb-4 '>
                <img src={Headphone} alt="product image" className="w-full h-full object-cover" />
            </div>
            <div>
                <span className="font-semibold mb-2">Title of the Product</span><br />
                <span className="font-semibold text-sm">Description:</span><br />
                <p className="font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Quas quisquam asperiores autem tempora iure placeat <br />
                    nulla consequuntur, voluptatem deleniti adipisci similique quos. <br />
                    Doloremque nobis illum dolor. Quia nisi neque a?
                </p>
                <p>
                    some other things
                </p>
            </div>
        </div>
    )
}

export default Card