
const Skeleton = () => {
    return (
        <div className='border p-4 max-w-[500px] w-[80%] h-[80%] rounded-md shadow-2xl '>
            <div className='mb-4 py-2 px-8 h-[60%]'>
                <div className="w-full h-full object-contain bg-gray-400 rounded-lg animate-pulse" />
            </div>
            <div className='space-y-3'>
                <div className="bg-slate-400 w-[40%] h-4 rounded-lg animate-pulse "> </div>
                <div className="text-sm bg-slate-400 rounded-lg w-[20%] h-4 animate-pulse"></div>
                <p className="w-full h-20 bg-slate-400 rounded-lg animate-pulse">
                </p>
                <p className='w-[30%] rounded-lg float-start bg-slate-400 h-4'></p>
            </div>
        </div>
    )
}

export default Skeleton