import { useState } from "react";

function User() {
    const [selectedUser, setSelectedUser] = useState(0);

    const users = Array(12).fill({
        name: "Fiza Arora",
        email: "farora981@gmail.com",
        image:
            "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp",
    });

    return (
       <div className="h-full overflow-y-auto hide-scrollbar px-3 py-2">
            <div className="space-y-2">
                {users.map((user, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedUser(index)}
                        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200
                        ${
                            selectedUser === index
                                ? "bg-blue-600 shadow-md"
                                : "hover:bg-neutral-800"
                        }`}
                    >
                        {/* Avatar */}
                        <div className="avatar">
                            <div className="w-14 rounded-full border-2 border-green-500 overflow-hidden">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-center">
                                <h3
                                    className={`font-semibold truncate ${
                                        selectedUser === index
                                            ? "text-white"
                                            : "text-white"
                                    }`}
                                >
                                    {user.name}
                                </h3>

                            </div>

                            <div className="flex justify-between items-center mt-1">
                                <p
                                    className={`text-sm truncate ${
                                        selectedUser === index
                                            ? "text-blue-100"
                                            : "text-gray-400"
                                    }`}
                                >
                                    {user.email}
                                </p>

                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default User;