interface IDrop {
  mintDate: string;
  twitterHandle: string;
  image: string;
}

export interface IDailyMintBody {
  drops: IDrop[];
  date: string,
}

const getHtmlOfDrops = (drops: IDrop[]) => {
  const content = drops.map(({ mintDate, twitterHandle, image }) => {
    return `
      <div class="flex max-w-max flex-col items-center gap-2">
        <span class="text-lg font-bold text-white">${mintDate}</span>
        <div class="relative flex h-36 w-36 justify-center">
          <div class="absolute -bottom-2 z-10 flex justify-center rounded-full bg-neutral-200 px-4">
            <span class="text-lg font-bold text-indigo-900">@${twitterHandle}</span>
          </div>
          <img class="absolute rounded-full ring-4 ring-neutral-200" src="${image}" />
        </div>
      </div>
    `;
  });
  return content.join('');
}

export const getBody = ({ drops, date }: IDailyMintBody) => {
  return `
  <body class="w-[1012px]">
  <div class="relative h-[560px] w-[1012px] overflow-hidden bg-gradient-to-b from-[#0C0025] via-[#160044] to-[#0C0025] p-6 px-12">
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-center gap-4">
        <img class="rounded-full w-12 h-12" src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" alt="" />
        <h1 class="text-center text-3xl font-bold text-neutral-100">Daily Mints on Solana - ${date}</h1>
        <img class="rounded-full w-12 h-12" src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png" alt="" />
      </div>
      <div class="flex min-h-[420px] flex-wrap items-center justify-center gap-x-24 gap-y-8">
        ${getHtmlOfDrops(drops)}
      </div>
      <div class="flex justify-between text-sm text-neutral-400">
        <svg width="99" height="23" viewBox="0 0 99 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M34.89 8.77H31.7V19H27.3V8.77H24.11V5.25H34.89V8.77ZM43.8 19V14.138H40.5V19H36.1V5.25H40.5V10.112H43.8V5.25H48.2V19H43.8ZM54.4786 5.25V15.568H56.0406C56.5979 15.568 56.9793 15.502 57.1846 15.37C57.3899 15.2233 57.4926 14.9007 57.4926 14.402V5.25H61.8926V12.972C61.8926 14.2187 61.8119 15.2233 61.6506 15.986C61.4893 16.7487 61.1886 17.394 60.7486 17.922C60.3086 18.45 59.7073 18.8167 58.9446 19.022C58.1819 19.2273 57.1919 19.33 55.9746 19.33C54.7573 19.33 53.7673 19.2273 53.0046 19.022C52.2566 18.8167 51.6626 18.45 51.2226 17.922C50.7826 17.394 50.4819 16.7487 50.3206 15.986C50.1593 15.2233 50.0786 14.2187 50.0786 12.972V5.25H54.4786ZM71.8459 19L68.4799 14.116C68.3625 13.9547 68.2892 13.6027 68.2599 13.06H68.1719V19H63.7719V5.25H67.9079L71.2739 10.134C71.3912 10.2953 71.4645 10.6473 71.4939 11.19H71.5819V5.25H75.9819V19H71.8459ZM86.3279 13.896H82.5879V19H78.1879V5.25H87.2079L86.6579 8.77H82.5879V10.618H86.3279V13.896ZM98.3119 8.77H95.1219V19H90.7219V8.77H87.5319V5.25H98.3119V8.77Z" fill="url(#paint0_linear_2_11)" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.57884 4.5H17.4271L22.1779 14.0017L17.819 15.0914L18.9212 19.5H9.01091L4.95044 10.0256L8.69291 8.95629L7.57884 4.5ZM11.4212 7.5L12.3071 11.0437L9.04957 11.9744L10.9891 16.5H15.0788L14.181 12.9086L17.8221 11.9983L15.573 7.5H11.4212Z" fill="url(#paint1_linear_2_11)" />
          <defs>
            <linearGradient id="paint0_linear_2_11" x1="62.4146" y1="-4.38857e-08" x2="61.559" y2="23.0022" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1D853B" />
              <stop offset="1" stop-color="#44CF6C" />
            </linearGradient>
            <linearGradient id="paint1_linear_2_11" x1="13.5" y1="5" x2="13.5" y2="19" gradientUnits="userSpaceOnUse">
              <stop stop-color="#44CF6C" />
              <stop offset="1" stop-color="#1D853B" />
            </linearGradient>
          </defs>
        </svg>
        <div class="flex gap-2 divide-x divide-neutral-400">
          <div class="flex justify-center px-4">
            <span>Updated ${date}</span>
          </div>
          <div class="flex justify-center px-4">
            <span>thunft.com</span>
          </div>
          <div class="flex items-center justify-center gap-2 px-4">
            <span>@Thunftdrop</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
  `
}