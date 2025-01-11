import PropTypes, { func } from "prop-types"; // Import PropTypes untuk validasi props
import { useState } from "react";

const content = [
  {
    id: 1,
    title: "Pendidikan Berkualitas",
    body: "Mendapatkan pendidikan yang baik dan relevan dengan minat dan tujuan karir Anda adalah langkah pertama menuju sukses. Ini membantu membangun fondasi pengetahuan dan keterampilan yang diperlukan.",
  },
  {
    id: 2,
    title: "Kerja Keras dan Konsistensi",
    body: "Kerja keras, dedikasi, dan konsistensi adalah kunci untuk mencapai tujuan. Tetap fokus pada upaya Anda, terus belajar, dan tidak mudah menyerah adalah bagian penting dari perjalanan menuju sukses.",
  },
  {
    id: 3,
    title: "Networking dan Kolaborasi",
    body: "Membangun hubungan dengan orang lain di bidang Anda, belajar dari mereka, dan bekerja sama dalam proyek-proyek yang relevan dapat membuka pintu untuk peluang baru dan memperluas jaringan profesional Anda.",
  },
];

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}

function Tabbed({ content }) {
  const [activeTab, setActiveTab] = useState(0); // State untuk tab yang aktif

  return (
    <div>
      <div className="tabs">
        <Tab num={0} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={1} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={2} activeTab={activeTab} onClick={setActiveTab} />
        <Tab num={3} activeTab={activeTab} onClick={setActiveTab} />
      </div>

      {/* Menampilkan konten berdasarkan tab yang aktif */}
      {activeTab <= 2 ? (
        <TabContent item={content.at(activeTab)} key={content.at(activeTab).id} />
      ) : (
        <AnotherTabContent />
      )}
    </div>
  );
}

// Validasi props untuk komponen Tabbed
Tabbed.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired, // title harus berupa string dan wajib ada
      body: PropTypes.string.isRequired,  // body harus berupa string dan wajib ada
      id: PropTypes.number.isRequired, // id harus berupa angka dan wajib ada
    })
  ).isRequired, // content harus berupa array dan wajib diisi
};

function Tab({ num, activeTab, onClick }) {
  return (
    <button
      className={activeTab === num ? "tab active" : "tab"} // Memberikan class berdasarkan tab yang aktif
      onClick={() => onClick(num)} // Mengatur tab aktif saat tombol diklik
    >
      Tab {num + 1}
    </button>
  );
}

// Validasi props untuk komponen Tab
Tab.propTypes = {
  num: PropTypes.number.isRequired, // num harus berupa angka dan wajib ada
  activeTab: PropTypes.number.isRequired, // activeTab harus berupa angka dan wajib ada
  onClick: PropTypes.func.isRequired, // onClick harus berupa fungsi dan wajib ada
};

function TabContent({ item }) {
  const [showDetails, setShowDetails] = useState(true); // State untuk mengatur visibilitas konten
  const [likes, setLikes] = useState(0); // State untuk menyimpan jumlah likes

  function handleInc() {
    setLikes(likes + 1); // Menambahkan likes
  }

  function handleUndo() {
    setShowDetails(true);
    setLikes(0);
    console.log(showDetails, likes);
  } 

  function handleUndoLater() {
    setTimeout(handleUndo, 2000);
  }


  function handleLikes() {  
    setLikes((likes) => likes + 1);
    // setLikes((likes) => likes + 1);
    // setLikes((likes) => likes + 1);
  }

  function handleTreeLikes() {
    handleLikes()
    handleLikes()
    handleLikes()
  }

  return (
    <div className="tab-content">
      <h4>{item.title}</h4> {/* Menampilkan judul konten */}
      {showDetails && <p>{item.body}</p>} {/* Menampilkan body jika showDetails true */}

      <div className="tab-actions">
        <button onClick={() => setShowDetails((h) => !h)}>
          {showDetails ? "Sembunyikan" : "Tampilkan"} Isi
        </button>

        <div className="hearts-counter">
          <span>{likes} 👍</span>
          <button onClick={handleInc}>+1</button>
          <button onClick={handleTreeLikes}>+3</button>
        </div>
      </div>

      <div className="tab-undo">
        <button onClick={handleUndo}>Batal</button>
        <button onClick={handleUndoLater}>Batal dalam 2d</button>
      </div>
    </div>
  );
}

// Validasi props untuk komponen TabContent
TabContent.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired, // title harus berupa string dan wajib ada
    body: PropTypes.string.isRequired,  // body harus berupa string dan wajib ada
  }).isRequired, // item harus berupa objek dengan struktur tertentu dan wajib ada
};

function AnotherTabContent() {
  return (
    <div className="tab-content">
      <h4>Saya adalah tab yg berbeda, jadi data pada State akan hilang 💣</h4>
      <p>
        Pada saat kamu kembali ke tab yang memiliki data, maka akan hilang dan
        mulai dari awal.
      </p>
    </div>
  );
}
