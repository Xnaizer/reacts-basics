function Friend({ friend }) {
    return (
        <li className="grid grid-cols-[120px_1fr_auto] gap-24 items-center p-12 bg-slate-50 rounded-lg shadow-md hover:shadow-lg transition">
            <img
                src={friend.image}
                alt={friend.name}
                className="rounded-full w-[120px] h-[120px] object-cover"
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

            <button className="bg-slate-500 text-white px-16 py-8 rounded-xl text-2xl hover:bg-slate-600">
                Pilih
            </button>
        </li>
    );
}

export default Friend;
