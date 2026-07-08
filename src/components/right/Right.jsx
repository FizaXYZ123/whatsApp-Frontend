import ChatUser from "./ChatUser";
import Messages from "./Messages";

function Right() {
  return (
    <div className="flex flex-col flex-1 h-screen bg-black">
      <ChatUser />
      <Messages />
    </div>
  );
}

export default Right;