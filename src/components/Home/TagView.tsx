import React from 'react';

function TagView() {
  const dataTag = [
    'BNK48',
    'Jujutsu Kaisen (มหาเวทย์ผนึกมาร)',
    'BLACKPINK (นักร้องนักดนตรี)',
    'BABYMONSTER (นักร้องนักดนตรี)',
    'Time Tammarat',
    'ฟุตบอลไทย',
    'BTS (นักร้องนักดนตรี)',
    'NewJeans (นักร้องนักดนตรี)',
    'แบดมินตัน',
    'เกมบอลพันทิป',
    'ปัญหาชีวิต',
  ];

  return (
    <div className="w-full h-auto flex flex-col mt-10 md:w-1/5">
      <div className="bg-[#1f1d33] h-[50px] flex flex-col items-start justify-start text-start p-2 px-3 rounded-t-xl">
        <span className="flex items-start justify-start text-left text-[#FBC02D] border-b-2 border-[#FBC02D] h-full font-bold">
          แท็กฮิต
        </span>
      </div>

      <div className="bg-[#353156] flex flex-col items-start justify-start w-full p-1 px-5 py-3 rounded-b-xl gap-5 h-auto">
        {dataTag?.map((item) => (
          <div
            key={item}
            className="flex items-start justify-start w-full p-2 text-start text-white border-b hover:text-yellow-500 cursor-pointer hover:border-b-2 hover:shadow-lg hover:scale-105 transition delay-150 duration-300 ease-in-out"
          >
            <div className="flex flex-col items-start justify-start text-left w-full ml-2">
              <span className="text-[17px] font-normal line-clamp-2">
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TagView;
