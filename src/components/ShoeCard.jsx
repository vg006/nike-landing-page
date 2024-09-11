const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage !== imgURL.bigShoe) changeBigShoeImage(imgURL.bigShoe);
    }

    return (
        <div
        className={`border-2 rounded-full ${bigShoeImage === imgURL.bigShoe ? `border-coral-red` : `border-transparent`} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}>
            <div className={`flex justify-center items-center bg-card bg-center bg-cover sm:w-40 h-40 max-sm:p-4 rounded-full max-xl:w-[100px] max-xl:h-[100px]`}>
                <img
                    src={imgURL.thumbnail}
                    alt={`shoe`}
                    width={120}
                    height={120}
                    className={`object-contain max-xl:w-[80px] max-xl:h-[80px]`} />
            </div>

        </div>
    )
}

export default ShoeCard;