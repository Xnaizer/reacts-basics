import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import { useState, useEffect } from "react";
import Navbar from "./components/Nav";

// const friendsDataApp = [
//   {
//     id: 1,
//     name: "John Doe",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: 10,
//   },
//   {
//     id: 2,
//     name: "Jane Doe",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 3,
//     name: "Max Rico",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 30,
//   },
  
// ];

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  // ini usestate yang digunakan ketika kita membuka form tambah teman dan membuka form split bill, maka salah satunya akan tertutup. hal ini sama seperti yang dilakukan saat membuat frequently asked questions

  function handleShowAddFriend() {
    setShowAddFriend((isiShowAddFriend) => !isiShowAddFriend);
    setSelectedFriend(null);
  }
  // function diatas akan menampilkan form tambah teman ketika tombol add friend di klik

  const [friends, setFriends] = useState(() => {
    const storedFriends = localStorage.getItem("friends");
    return storedFriends ? JSON.parse(storedFriends) : [
      {
          id: 1,
          name: "Xnaizer",
          image: "https://i.pravatar.cc/48?u=118836",
          balance: 100,
      },
      {
          id: 2,
          name: "Jane Doe",
          image: "https://i.pravatar.cc/48?u=933372",
          balance: 200000,
      },
      {
          id: 3,
          name: "Max Rico",
          image: "https://i.pravatar.cc/48?u=499476",
          balance: 550000,
      },
    ];
  });
  // ini adalah usestate untuk mengambil data teman dari friendsDataApp dan melakukan modifikasi terhadap data tersebut dengan menambahkan data baru atau menghapus data yang sudah ada.

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  // function diatas akan menambahkan data teman baru ketika tombol add friend di klik, ...friends adalah spread operator yang digunakan untuk mengambil data teman yang sudah ada dan friend adalah data teman baru yang akan ditambahkan.

  const [selectedFriend, setSelectedFriend] = useState(null);
  // fungsi diatas adalah useState untuk melakukan seleksi teman yang di pilih dan menampilkan form split bill ketika teman tersebut di klik.

  function handleSelectFriend(friend) {
    setSelectedFriend((currentFriend) => 
      currentFriend?.id === friend.id ? null : friend
    );
    // jika friend.id sama dengan currentFriend.id maka currentFriend akan null
    setShowAddFriend(false); // ketika teman di klik maka form tambah teman akan tertutup
  }
  


  function handleSplitBill(value) {
    setFriends(
        friends.map((friend) => {
            // Periksa apakah ID teman cocok dengan teman yang dipilih
            if (friend.id === selectedFriend?.id) {
                return {
                    ...friend,
                    balance: friend.balance + value, // Perbarui balance
                };
            }
            return friend; // Kembalikan teman lain tanpa perubahan
        })
    );

    setSelectedFriend(null);
  }

  useEffect(() => {
    localStorage.setItem("friends", JSON.stringify(friends));
  }, [friends]);


  return (
    <>
      <Navbar />
      <div className=" mx-auto p-8 bg-gray-100  flex justify-center items-start gap-6 ">

        
        {/* Bagian kiri */}
        <div className="flex flex-col gap-12 ">
          <FriendList 
          friends={friends}
          selectedFriend={selectedFriend}
          handleSelectFriend={handleSelectFriend}/>

          {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend}/>}
          {/* jika showAddFriend true maka tampilkan FormAddFriend */}


          <button className="bg-slate-500 text-white px-2 py-8 rounded-xl text-2xl hover:bg-slate-600" onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}</button>
        </div>

        {/* Bagian kanan */}
        {selectedFriend && (
          <div className="w-1/2">
              <FormSplitBill 
              selectedFriend={selectedFriend} handleSplitBill={handleSplitBill}
              key={selectedFriend.id} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;

