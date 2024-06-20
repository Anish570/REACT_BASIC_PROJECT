
const UserShrimmer = () => {
    return (
        <div className='max-w-[500px] rounded-lg w-[300px] h-[400px] shadow-2xl border flex flex-col space-y-2 py-10 p-2'>
            <div className='rounded-[50%] bg-gray-400 animate-pulse self-center  w-32 h-32'></div>
            <div className='w-full flex flex-col justify-center items-center space-y-2'>
                <h1 className='w-[70%] rounded-lg h-5 bg-gray-400 animate-pulse'></h1>
                <span className='w-[90%] rounded-lg bg-gray-400 animate-pulse h-[150px]'></span>
            </div>
        </div>
    )
}

export default UserShrimmer