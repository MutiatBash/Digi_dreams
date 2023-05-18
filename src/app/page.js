import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-[Poppins]">
      <header class="top-0 left-0 right-0 bg-[#1A0329]">
        {/* NAVBAR */}
        <nav class="flex flex-row justify-between items-center py-4 px-10">
          <ul class="flex flex-row gap-x-8 items-center">
            <li>
              <a href="#">
                <img src="../images/logo.png" alt="" class="w-8" />
              </a>
            </li>
            <li>
              <a href="#" class="text-base text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="text-base text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" class="text-base text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" class="text-base text-white">
                Teams
              </a>
            </li>
          </ul>
          <div class="flex flex-row justify-between items-center gap-x-8">
            <a href="#" class="text-base text-white">
              Connect Wallet
            </a>
            <button class="rounded-lg bg-gradient-to-br from-[#C293FF] via-[#82C2FF] via-[#7DEFDA] to-[#FFD29D] py-3 text-white px-4">
              Explore Now
            </button>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <div>
        <div class="main flex flex-row justify-between items-center px-10 py-10 mx-8 gap-x-8">
          <div class="main-text w-3/5 flex flex-col justify-between gap-y-8">
            <h1 class="text-7xl/[62px] font-extrabold w-3/4 text-transparent bg-clip-text bg-gradient-to-r from-[#FF1B6B] via-[#82C2FF] to-[#FFD29D]  ">
              Digi Dreams
            </h1>
            <p class="w-3/4 text-white">
              Explore the limitless world that we prepared for you with amazing
              features
            </p>
            <button class="rounded-lg bg-gradient-to-br from-[#C293FF] via-[#82C2FF] via-[#7DEFDA] to-[#FFD29D] py-3 text-white px-4 self-start">
              Explore Now
            </button>
          </div>
          <div class="image w-2/5">
            <img src="../images/hero-img.png" alt="" />
          </div>
        </div>
        <img src="../images/wave.png" class="w-100" />
      </div>

      {/* About SECTION */}
      <section>
        <div class="main flex flex-row justify-between items-center px-8 py-10 mx-8 gap-x-8">
          <div class="image w-3/6">
            <img src="../images/landing-crystal.png" alt="" class="w-4/5" />
          </div>
          <div class="main-text w-3/6 flex flex-col justify-between gap-y-8">
            <h1 class="text-3xl/[62px] font-extrabold text-white ">
              Social Media to unify the Web3 world
            </h1>
            <p class="text-lg/[60px] text-white">
              Digi Dream’s vital mission is to inform and connect every Web3
              sector, about the opportunities of this industry. Through a
              platform which optimizes your time
            </p>
            <img src="../images/people-group.png" class="w-28 self-end" />
            <p class="text-white self-end">used every day by hundreds</p>
          </div>
        </div>
      </section>
      {/* VIDEO SECTION */}
      <section>
        <div class="main flex flex-col justify-between items-center px-8 py-10 mx-8 gap-x-8">
          <div class="image w-3/6 self-end">
            <img src="../images/star.png" alt="" class="w-1/5" />
          </div>
          <div class="bg-indigo-500 w-3/5 "> hello</div>
        </div>
      </section>
      {/* PHONE SECTION */}
      <section>
        <div class="main flex flex-col justify-between items-center px-8 py-10 mx-8 gap-x-8">
          <div class="image w-3/6">
            <img src="../images/phone.png" alt="" class="w-4/5" />
          </div>
          <div class="bg-[#BAA5996E]"></div>
        </div>
      </section>
    </main>
  );
}
