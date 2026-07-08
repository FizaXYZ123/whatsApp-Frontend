function ChatUser() {
    return (
        <>

            <div className="flex gap-2 py-2 bg-blue-600">
                <div className="avatar">
                    <div className="w-12 rounded-full border-2 border-green-500 overflow-hidden">
                        <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                </div>

                <div className="text-white font-semibold text-sm">
                    <h1>Fiza Arora</h1>
                    <span>
                        online
                    </span>
                </div>

            </div>

        </>
    )
}

export default ChatUser