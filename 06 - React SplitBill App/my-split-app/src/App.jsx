import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const friendsDataApp = [
  {
    id: 1,
    name: "John Doe",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: 10,
  },
  {
    id: 2,
    name: "Jane Doe",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 3,
    name: "Max Rico",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 30,
  },
  
];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  // ini usestate yang digunakan ketika kita membuka form tambah teman dan membuka form split bill, maka salah satunya akan tertutup. hal ini sama seperti yang dilakukan saat membuat frequently asked questions

  function handleShowAddFriend() {
    setShowAddFriend((isiShowAddFriend) => !isiShowAddFriend);
  }
  // function diatas akan menampilkan form tambah teman ketika tombol add friend di klik

  const [friends, setFriends] = useState(friendsDataApp);
  // ini adalah usestate untuk mengambil data teman dari friendsDataApp dan melakukan modifikasi terhadap data tersebut dengan menambahkan data baru atau menghapus data yang sudah ada.

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  // function diatas akan menambahkan data teman baru ketika tombol add friend di klik, ...friends adalah spread operator yang digunakan untuk mengambil data teman yang sudah ada dan friend adalah data teman baru yang akan ditambahkan.


  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen flex justify-center items-start gap-12 mt-72">
      {/* Bagian kiri */}
      <div className="flex flex-col gap-12 w-2/3">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend}/>}
        {/* jika showAddFriend true maka tampilkan FormAddFriend */}


        <button className="bg-slate-500 text-white px-2 py-8 rounded-xl text-2xl hover:bg-slate-600" onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</button>
      </div>

      {/* Bagian kanan */}
      <div className="w-1/3">
        <FormSplitBill />
      </div>
    </div>
  );
}

export default App;

