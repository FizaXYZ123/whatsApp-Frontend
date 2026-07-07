import Search from "./Search";
import User from "./User";

function Left() {
    return (
        <div className="w-[30%] min-w-[320px] bg-[#0f0f0f] text-white border-r border-gray-800 flex flex-col">

            {/* Header */}
            <div className="px-6 pt-5 pb-3 border-b border-gray-800">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-wide">
                            Chats
                        </h1>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                        <i className="fa-solid fa-comments text-white"></i>
                    </div>
                </div>
            </div>

            <Search />

            <div className="border-b border-gray-800"></div>

            <div className="flex-1 overflow-hidden">
                <User />
            </div>
        </div>
    );
}

export default Left;