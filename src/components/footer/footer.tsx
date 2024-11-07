

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-custom-dark-blue text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Sport Map | Copyright: {data}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer