import Image from "next/image";

const UserCard = ({type}: {type:string}) => {
    return (
        <div className="rounded-2xl odd:bg-pelorous even:bg-elm p-4 flex-1 min-w-[130px]">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-webOrange">2024/25</span>
                <Image src="/more.png" alt="" width={20} height={20} />
            </div>
            <h1 className="text-2xl font-semibold my-4 text-white">1,045</h1>
            <h2 className="capitalize font-medium text-white">{type}</h2>
        </div>
    )
}

export default UserCard;