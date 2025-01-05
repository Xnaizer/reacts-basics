
function AccordionItem({ number, question, answer, curOpen, setCurOpen }) {
    // Mengecek apakah item ini terbuka
    const isOpen = number === curOpen;
  
    // Fungsi untuk toggle accordion
    function toggleAccordion() {
      setCurOpen(isOpen ? null : number); // Jika sudah terbuka, tutup; jika belum, buka
    }
  
    return (
      <div
        className={`${
          isOpen ? "border-t-[4px] border-[#526d82]" : "border-t-[4px] border-white"
        } shadow-[0_0_30px_rgba(0,0,0,0.1)] p-5 pr-12 cursor-pointer grid grid-cols-[auto_1fr_auto] gap-x-6 gap-y-8 items-center`}
        onClick={toggleAccordion}
      >
        <p className="text-2xl font-medium">
          {number < 10 ? `0${number}` : number}
        </p>
        <p className="text-2xl font-medium">{question}</p>
        <p className="text-2xl font-medium">{isOpen ? "-" : "+"}</p>
        {isOpen && <div className="col-span-full pb-4 leading-6">{answer}</div>}
      </div>
    );
  }
  
  export default AccordionItem;