import Friend from "./Friend";


function FriendList({ friends }) {
    return (
        <ul className="flex flex-col gap-6 bg-white p-12 rounded-xl shadow-lg max-h-[625px] overflow-y-auto">
            {friends.map((friend) => (
                <Friend friend={friend} key={friend.id} />
            ))}
        </ul>
    );
}

export default FriendList;
