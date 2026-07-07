function Search() {
    return (
        <div className="p-4">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search conversations..."
                    className="w-full h-11 rounded-xl bg-[#1f1f1f] border border-gray-700 pl-11 pr-4 text-white placeholder:text-gray-400 outline-none focus:border-blue-500 transition"
                />

                <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            </div>
        </div>
    );
}

export default Search;