import Image from 'next/image';
import React from 'react'

function ClassView() {
  const MenuClass = [
    {
      id: 9,
      name: "ชายคา",
      name_en: "home",
      slug: "home",
      description:
        "บ้าน คอนโดมิเนียม ตกแต่งบ้าน เฟอร์นิเจอร์ เครื่องใช้ไฟฟ้า เครื่องครัว",
      link_url: "https://pantip.com/forum/home",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-home.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 13,
      name: "บลูแพลนเน็ต",
      name_en: "blueplanet",
      slug: "blueplanet",
      description:
        "เที่ยวไทย เที่ยวต่างประเทศ ทะเล ภูเขา เกาะ น้ำตก ดำน้ำ สายการบิน",
      link_url: "https://pantip.com/forum/blueplanet",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-blueplanet.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 24,
      name: "สินธร",
      name_en: "sinthorn",
      slug: "sinthorn",
      description: "หุ้น เศรษฐกิจ การลงทุน LTF RMF ธนาคาร เงินตราต่างประเทศ",
      link_url: "https://pantip.com/forum/sinthorn",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-sinthorn.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 25,
      name: "สีลม",
      name_en: "silom",
      slug: "silom",
      description:
        "การบริหารจัดการ การตลาด ทรัพยากรบุคคล งานขาย SME ภาษีนิติบุคคล",
      link_url: "https://pantip.com/forum/silom",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-silom.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 23,
      name: "สวนลุมพินี",
      name_en: "lumpini",
      slug: "lumpini",
      description:
        "สุขภาพกาย สุขภาพจิต โรคมะเร็ง โรคไมเกรน โรคภูมิแพ้ ปวดประจำเดือน",
      link_url: "https://pantip.com/forum/lumpini",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-lumpini.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 10,
      name: "ซิลิคอนวัลเลย์",
      name_en: "siliconvalley",
      slug: "siliconvalley",
      description:
        "คอมมือใหม่ อินเทอร์เน็ต ซอฟต์แวร์ ฮาร์ดแวร์ เกม เขียนโปรแกรม Gadget",
      link_url: "https://pantip.com/forum/siliconvalley",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-siliconvalley.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 2,
      name: "ก้นครัว",
      name_en: "food",
      slug: "food",
      description: "ร้านอาหาร สูตรอาหาร อาหารคาว อาหารหวาน เบเกอรี่ ไอศกรีม",
      link_url: "https://pantip.com/forum/food",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-food.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 28,
      name: "กรีนโซน",
      name_en: "greenzone",
      slug: "greenzone",
      description:
        "อนุรักษ์สิ่งแวดล้อม อนุรักษ์พลังงาน Green Living การออกแบบเพื่อสิ่งแวดล้อม ผลิตภัณฑ์รักษ์โลก เกษตรอินทรีย์",
      link_url: "https://pantip.com/forum/greenzone",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-greenzone.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 35,
      name: "กรุงโซล",
      name_en: "korea",
      slug: "korea",
      description:
        "K-POP ซีรีส์เกาหลี นักแสดงเกาหลี อาหารเกาหลี เที่ยวเกาหลี แฟชั่นเกาหลี ภาษาเกาหลี",
      link_url: "https://pantip.com/forum/korea",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-korea.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 1,
      name: "กล้อง",
      name_en: "camera",
      slug: "camera",
      description: "กล้องถ่ายรูป กล้อง DSLR กล้องวิดีโอ เทคนิคการถ่ายรูป",
      link_url: "https://pantip.com/forum/camera",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-camera.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 30,
      name: "การ์ตูน",
      name_en: "cartoon",
      slug: "cartoon",
      description:
        "การ์ตูนญี่ปุ่น การ์ตูนไทย การ์ตูนฝรั่ง อนิเมะ วาดการ์ตูน ของสะสมจากการ์ตูน คอสเพลย์",
      link_url: "https://pantip.com/forum/cartoon",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-cartoon.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 36,
      name: "แก็ดเจ็ต",
      name_en: "gadget",
      slug: "gadget",
      description:
        "Gadget, Action Camera, Drone, Game Console, Smartwatch, Smartband",
      link_url: "https://pantip.com/forum/gadget",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-gadget.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 3,
      name: "แกลเลอรี่",
      name_en: "gallery",
      slug: "gallery",
      description: "ภาพถ่ายบุคคล ภาพถ่ายทิวทัศน์ ภาพถ่ายมาโคร",
      link_url: "https://pantip.com/forum/gallery",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-gallery.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 4,
      name: "ไกลบ้าน",
      name_en: "klaibann",
      slug: "klaibann",
      description: "เรียนต่อต่างประเทศ ทำงานต่างประเทศ วีซ่า",
      link_url: "https://pantip.com/forum/klaibann",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-klaibann.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 5,
      name: "จตุจักร",
      name_en: "jatujak",
      slug: "jatujak",
      description:
        "สัตว์เลี้ยง สุนัข แมว ต้นไม้ จัดสวน ของสะสม งานฝีมือ เกษตรกรรม",
      link_url: "https://pantip.com/forum/jatujak",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-jatujak.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 6,
      name: "เฉลิมกรุง",
      name_en: "chalermkrung",
      slug: "chalermkrung",
      description: "นักร้องนักดนตรี เพลง เครื่องดนตรี คอนเสิร์ต มิวสิควิดีโอ",
      link_url: "https://pantip.com/forum/chalermkrung",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-chalermkrung.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 7,
      name: "เฉลิมไทย",
      name_en: "chalermthai",
      slug: "chalermthai",
      description: "ภาพยนตร์ ดาราภาพยนตร์ ค่ายหนัง เทศกาลหนัง หนังสั้น",
      link_url: "https://pantip.com/forum/chalermthai",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-chalermthai.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 8,
      name: "ชานเรือน",
      name_en: "family",
      slug: "family",
      description: "ครอบครัว ตั้งครรภ์ ตั้งชื่อลูก การเลี้ยงลูก การสอนลูก",
      link_url: "https://pantip.com/forum/family",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-family.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 34,
      name: "ดิโอลด์สยาม",
      name_en: "theoldsiam",
      slug: "theoldsiam",
      description:
        "ผู้สูงอายุ สุขภาพผู้สูงอายุ ชีวิตหลังเกษียณ สิทธิผู้สูงอายุ ท่องเที่ยวผู้สูงอายุ",
      link_url: "https://pantip.com/forum/theoldsiam",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-theoldsiam.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 11,
      name: "โต๊ะเครื่องแป้ง",
      name_en: "beauty",
      slug: "beauty",
      description: "เครื่องสำอาง เสริมสวย แฟชั่น เครื่องประดับ ลดความอ้วน",
      link_url: "https://pantip.com/forum/beauty",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-beauty.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 12,
      name: "ถนนนักเขียน",
      name_en: "writer",
      slug: "writer",
      description: "แต่งนิยาย เรื่องสั้น กลอน นิทาน",
      link_url: "https://pantip.com/forum/writer",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-writer.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 31,
      name: "บางขุนพรหม",
      name_en: "tvshow",
      slug: "tvshow",
      description: "ละคร นักแสดง ซีรี่ส์ รายการโทรทัศน์ สถานีโทรทัศน์",
      link_url: "https://pantip.com/forum/tvshow",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-tvshow.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 32,
      name: "บางรัก",
      name_en: "bangrak",
      slug: "bangrak",
      description: "ความรัก แต่งงาน พรีเวดดิ้ง ปัญหาชีวิตคู่",
      link_url: "https://pantip.com/forum/bangrak",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-bangrak.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 33,
      name: "พรหมชาติ",
      name_en: "horoscope",
      slug: "horoscope",
      description: "ดูดวง ฮวงจุ้ย ไพ่ยิปซี ทำนายฝัน พระเครื่อง",
      link_url: "https://pantip.com/forum/horoscope",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-horoscope.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 14,
      name: "พันทิป",
      name_en: "pantip",
      slug: "pantip",
      description: "ข้อเสนอแนะถึงพันทิป วิธีการใช้งานพันทิป กิจกรรมพันทิป",
      link_url: "https://pantip.com/forum/pantip",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-pantip.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 15,
      name: "ภูมิภาค",
      name_en: "region",
      slug: "region",
      description: "ภาคเหนือ ภาคอีสาน ภาคกลาง ภาคตะวันออก ภาคตะวันตก ภาคใต้",
      link_url: "https://pantip.com/forum/region",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-region.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 16,
      name: "มาบุญครอง",
      name_en: "mbk",
      slug: "mbk",
      description: "โทรศัพท์มือถือ Smartphone Tablet iOS Android",
      link_url: "https://pantip.com/forum/mbk",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-mbk.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 100,
      name: "รวมมิตร",
      name_en: "all",
      slug: "",
      description: "รวมกระทู้จากทุกห้อง",
      link_url: "https://pantip.com/forum",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-all.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 17,
      name: "รัชดา",
      name_en: "ratchada",
      slug: "ratchada",
      description: "รถยนต์ มอเตอร์ไซค์ เครื่องเสียงรถยนต์ แต่งรถ การจราจร",
      link_url: "https://pantip.com/forum/ratchada",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-ratchada.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 18,
      name: "ราชดำเนิน",
      name_en: "rajdumnern",
      slug: "rajdumnern",
      description:
        "การเมือง รัฐศาสตร์ กฎหมาย สภาผู้แทน รัฐบาล ฝ่ายค้าน พรรคการเมือง",
      link_url: "https://pantip.com/forum/rajdumnern",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-rajdumnern.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 99,
      name: "ไร้สังกัด",
      name_en: "isolate",
      slug: "isolate",
      description: "กระทู้อื่นๆ ที่ไม่สังกัดห้องไหนเลย",
      link_url: "https://pantip.com/forum/isolate",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-isolate.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 19,
      name: "ศาลาประชาคม",
      name_en: "social",
      slug: "social",
      description: "กฎหมาย ปัญหาสังคม ปัญหาชีวิต เศรษฐกิจ คุ้มครองผู้บริโภค",
      link_url: "https://pantip.com/forum/social",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-social.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 20,
      name: "ศาสนา",
      name_en: "religious",
      slug: "religious",
      description: "ศาสนาพุทธ ศาสนาคริสต์ ศาสนาอิสลาม เที่ยววัด ทำบุญ",
      link_url: "https://pantip.com/forum/religious",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-religious.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 21,
      name: "ศุภชลาศัย",
      name_en: "supachalasai",
      slug: "supachalasai",
      description: "กีฬา ฟุตบอล บาสเกตบอล มวยสากล กอล์ฟ จักรยาน นักกีฬา",
      link_url: "https://pantip.com/forum/supachalasai",
      room_icon_url:
        "https://ptcdn.info/mobile/icon_room/pt-forum-supachalasai.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 22,
      name: "สยามสแควร์",
      name_en: "siam",
      slug: "siam",
      description:
        "ชีวิตวัยรุ่น การเรียน โรงเรียน มหาวิทยาลัย ความรักวัยรุ่น เกม",
      link_url: "https://pantip.com/forum/siam",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-siam.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 26,
      name: "หว้ากอ",
      name_en: "wahkor",
      slug: "wahkor",
      description: "วิทยาศาสตร์ วิศวกรรม เทคโนโลยี ฟิสิกส์ ดาราศาสตร์ อวกาศ",
      link_url: "https://pantip.com/forum/wahkor",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-wahkor.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 27,
      name: "ห้องสมุด",
      name_en: "library",
      slug: "library",
      description:
        "หนังสือ หนังสือนิยาย ภาษาไทย ภาษาจีน ภาษาอังกฤษ ปรัชญา ประวัติศาสตร์",
      link_url: "https://pantip.com/forum/library",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-library.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
    {
      id: 29,
      name: "หอศิลป์",
      name_en: "art",
      slug: "art",
      description: "ศิลปะ ภาพวาด ประวัติศาสตร์ศิลป์ สื่อประสม Graphic Design",
      link_url: "https://pantip.com/forum/art",
      room_icon_url: "https://ptcdn.info/mobile/icon_room/pt-forum-art.svg",
      is_pinned: false,
      pinned_time: null,
      order: null,
    },
  ];
  return (
    <div className="w-full h-auto flex flex-col mt-10 md:px-10 gap-2">
    <div className="bg-purple-800 rounded-xl w-auto">
      <span className="items-start text-left flex justify-start text-white p-1 pl-2 font-bold">
        เลือกห้อง
      </span>
    </div>

    <div className="grid grid-cols-5 h-[300px] overflow-auto w-full md:grid-cols-10 flex-row gap-2   md:h-[200px] ">
      {MenuClass?.map((item) => {
        return (
          <div
            key={item?.id}
            className="border bg-purple-700 col-span-1 md:!w-[120px] h-[78px] p-2 text-center items-center flex flex-col gap-1 justify-center rounded-xl cursor-pointer hover:border-b-2 hover:shadow-lg hover:scale-110  transition delay-150 duration-300 ease-in-out"
          >
            <Image
              src={`${item?.room_icon_url}`}
              alt="Clerk – Authentication & User Management for Next.js"
              width={30}
              height={30}
              className="object-cover w-[40px] h-[40px]"
            />
            <span className="text-white font-normal w-full text-[14px]">
              {item?.name}
            </span>
          </div>
        );
      })}
    </div>
  </div>
  )
}



export default ClassView