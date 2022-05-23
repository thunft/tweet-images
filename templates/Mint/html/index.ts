import { IData } from "scripts/generateImageOfCollection"

export const getBody = ({ name, mintDate, blockchain, imageURI, websiteURL }: IData) => {
  return `
  <body class="w-[1012px]">
    <div class="relative h-[506px] w-[1012px] overflow-hidden bg-gradient-to-b from-[#0C0025] via-[#160044] to-[#0C0025] p-14">
      <div class="grid h-full grid-cols-5 gap-12">
        <div class="card-shadow col-span-2 my-auto flex h-[320px] max-w-max flex-col gap-4 rounded-xl border border-neutral-100 bg-[#292929]/50 p-6 pt-4">
          <span class="font-bold text-neutral-100">${name}</span>
          <img class="h-[240px] w-[240px] rounded-xl" src="${imageURI}" alt="" />
        </div>
        <div class="col-span-3 flex flex-col justify-center gap-8">
          <span class="text-6xl font-bold text-neutral-100">${name}</span>
          <span class="text-8xl font-bold text-neutral-100/10">MINT</span>
          <div class="flex max-w-max items-center justify-center rounded-xl border border-neutral-200 bg-[#292929]/50 p-2 px-8">
            <span class="font-bold text-neutral-100">${websiteURL}</span>
          </div>
        </div>
        <div class="absolute top-0 right-0">
          <div class="rounded-bl-full bg-neutral-200/10 p-4">
            <span class="pl-6 text-xl font-bold text-neutral-100">${mintDate}</span>
          </div>
        </div>
        <div class="absolute -bottom-10 -right-10">
          <img class="h-[300px] w-[300px] opacity-10" src="${blockchain}" alt="" />
        </div>
        <div class="absolute bottom-12">
          <img class="opacity-50" src="https://thunft.vercel.app/assets/images/Logo.svg" alt="" />
        </div>
      </div>
    </div>
  </body>
  `
}