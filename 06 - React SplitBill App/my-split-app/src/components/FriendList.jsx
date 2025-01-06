import Friend from "./Friend";


function FriendList({ friends, selectedFriend, handleSelectFriend }) {
    return (
        <ul className="flex flex-col gap-6 bg-white p-12 rounded-xl shadow-lg max-h-[600px] overflow-y-auto">
            {friends.map((friend) => (
                <Friend
                    friend={friend}
                    key={friend.id}
                    selectedFriend={selectedFriend}
                    handleSelectFriend={handleSelectFriend}
                />
            ))}
        </ul>
    );
}

export default FriendList;
