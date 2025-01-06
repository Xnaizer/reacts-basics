function Friend({ friend, selectedFriend, handleSelectFriend }) {
    const isSelected = selectedFriend?.id === friend.id;

    return (
        <li
            className={`grid grid-cols-[60px_1fr_auto] gap-24 items-center p-8 rounded-lg shadow-md transition ${
                isSelected ? "bg-slate-600 text-white" : "bg-slate-50 hover:shadow-lg"
            }`}
        >
            <img
                src={friend.image}
                alt={friend.name}
                className="rounded-full w-[60px] h-[60px] object-cover"
            />

            <div>
                <h3 className="font-bold text-4xl">{friend.name}</h3>
                {friend.balance < 0 && (
                    <p className="text-red-500 text-2xl mt-2">
                        Kamu memiliki hutang Rp.{Math.abs(friend.balance)} ke {friend.name}
                    </p>
                )}

                {friend.balance > 0 && (
                    <p className="text-green-500 text-2xl mt-2">
                        {friend.name} memiliki hutang Rp.{Math.abs(friend.balance)} ke kamu
                    </p>
                )}

                {friend.balance === 0 && (
                    <p className="text-gray-500 text-2xl mt-2">
                        Kamu dan {friend.name} tidak memiliki hutang
                    </p>
                )}
            </div>

            <button
                className={`px-8 py-6 rounded-xl text-2xl transition ${
                    isSelected ? "bg-red-500 hover:bg-red-600" : "bg-slate-500 hover:bg-slate-600 text-white"
                }`}
                onClick={() => handleSelectFriend(friend)}
            >
                {isSelected ? "Close" : "Select"}
            </button>
        </li>
    );
}

export default Friend;
