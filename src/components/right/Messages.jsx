function Messages() {
    return (
        <div className="flex flex-col flex-1 min-h-0 bg-gray-900">
            {/* Scrollable Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 hide-scrollbar">
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">
                        Put me on the Council and not make me a Master!??
                    </div>
                </div>

                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">
                        Calm down, Anakin.
                    </div>
                </div>

                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">
                        Put me on the Council and not make me a Master!??
                    </div>
                </div>

                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">
                        Calm down, Anakin.
                    </div>
                </div>

                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">
                        Put me on the Council and not make me a Master!??
                    </div>
                </div>

                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">
                        Calm down, Anakin.
                    </div>
                </div>

                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">
                        Put me on the Council and not make me a Master!??
                    </div>
                </div>

                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">
                        Calm down, Anakin.
                    </div>
                </div>

                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">
                        Put me on the Council and not make me a Master!??
                    </div>
                </div>

                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">
                        Calm down, Anakin.
                    </div>
                </div>

                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">
                        Put me on the Council and not make me a Master!??
                    </div>
                </div>

                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">
                        Calm down, Anakin.
                    </div>
                </div>
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-700 bg-slate-800 p-3">
    <div className="flex items-center gap-3 rounded-full bg-slate-700 px-4 py-2">

        {/* Input */}
        <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none border-none text-sm"
        />

        {/* Send Button */}
        <button
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
        >
         <i class="fa-solid fa-paper-plane"></i>
        </button>
    </div>
</div>
        </div>
    );
}

export default Messages;