Vue.component('page-header', {
  props: ['headerViewModel'],
  template: `
  <header class="w-full fixed top-0 left-0 z-50 px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-40 py-6" id="navbar">
  <nav class="flex items-center justify-between">
  <div class="mb-2 sm:mb-0 flex flex-row">
    <div class="h-10 w-11 self-center mr-2">
    <svg id="efec5e00-3a03-4cc7-a116-3276bdc4c472" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 648.60069 736.67681">
    <ellipse cx="610.96096" cy="812.82349" rx="5.51263" ry="98.0657" transform="translate(-478.54174 1340.81747) rotate(-89.90804)" fill="#e6e6e6"/><path d="M598.57568,615.54492a250.68464,250.68464,0,1,1,177.26026-73.42383A249.04472,249.04472,0,0,1,598.57568,615.54492Zm0-499.36865c-137.125,0-248.68408,111.55908-248.68408,248.68408S461.45068,613.54492,598.57568,613.54492c137.12452,0,248.68409-111.55957,248.68409-248.68457S735.7002,116.17627,598.57568,116.17627Z" transform="translate(-275.69966 -81.66159)" fill="#e6e6e6"/><rect x="163.92283" y="291.28877" width="19.02674" height="65.86179" fill="#3f3d56"/><polygon points="195.515 344.761 149.239 289.708 56.349 290.557 0 345.442 1.139 346.174 0.732 346.174 0.732 460.334 195.39 460.334 195.39 346.174 195.515 344.761" fill="#3f3d56"/><polygon points="149.287 289.825 91.475 357.603 91.475 460.334 195.39 460.334 195.39 344.71 149.287 289.825" fill="#6c63ff"/><rect x="133.18731" y="403.52263" width="21.22214" height="18.75793" fill="#3f3d56"/><rect x="133.18731" y="371.05471" width="21.22214" height="18.46045" fill="#3f3d56"/><rect x="133.18731" y="403.52263" width="21.22214" height="18.75793" fill="#fff"/><rect x="133.18731" y="371.05471" width="21.22214" height="18.46045" fill="#fff"/><rect x="38.87462" y="398.54533" width="21.22215" height="18.75793" fill="#3f3d56"/><rect x="38.87462" y="366.07742" width="21.22215" height="18.46045" fill="#3f3d56"/><rect x="38.87462" y="398.54533" width="21.22215" height="18.75793" fill="#fff"/><rect x="38.87462" y="366.07742" width="21.22215" height="18.46045" fill="#fff"/><rect x="465.65112" y="1.58093" width="19.02674" height="65.86179" fill="#3f3d56"/><polygon points="453.211 56.466 453.211 236.624 647.869 236.624 647.869 56.466 647.462 56.466 648.601 55.734 592.252 0.849 499.362 0 453.086 55.053 453.211 56.466" fill="#3f3d56"/><polygon points="453.211 55.002 453.211 236.624 557.126 236.624 557.126 67.896 499.314 0.117 453.211 55.002" fill="#6c63ff"/><rect x="494.19124" y="113.81479" width="21.22214" height="18.75793" fill="#3f3d56"/><rect x="494.19124" y="81.34688" width="21.22214" height="18.46045" fill="#3f3d56"/><rect x="494.19124" y="113.81479" width="21.22214" height="18.75793" fill="#fff"/><rect x="494.19124" y="81.34688" width="21.22214" height="18.46045" fill="#fff"/><rect x="588.50392" y="108.83749" width="21.22215" height="18.75793" fill="#3f3d56"/><rect x="588.50392" y="76.36958" width="21.22215" height="18.46045" fill="#3f3d56"/><rect x="588.50392" y="108.83749" width="21.22215" height="18.75793" fill="#fff"/><rect x="588.50392" y="76.36958" width="21.22215" height="18.46045" fill="#fff"/><rect x="494.19124" y="179.81225" width="21.22214" height="18.75793" fill="#fff"/><rect x="494.19124" y="147.34433" width="21.22214" height="18.46045" fill="#fff"/><rect x="588.50392" y="174.83494" width="21.22215" height="18.75793" fill="#fff"/><rect x="588.50392" y="142.36703" width="21.22215" height="18.46045" fill="#fff"/><circle cx="334.41991" cy="179.97807" r="30.58812" fill="#a0616a"/><path d="M578.70474,317.029l52.08248-.82671c-4.47987-12.344-6.4213-23.902-3.30682-33.89494l-39.68189-4.13354Q595.841,297.60139,578.70474,317.029Z" transform="translate(-275.69966 -81.66159)" fill="#a0616a"/><path d="M533.23591,522.05207l8.6487,23.0632a13.96613,13.96613,0,0,1-11.38624,18.76725h0a13.96613,13.96613,0,0,1-15.64647-14.40019l1.02321-26.60357,7.44036-136.40649,30.58812,9.09376Z" transform="translate(-275.69966 -81.66159)" fill="#a0616a"/><polygon points="289.778 696.669 314.579 694.189 336.9 477.592 368.315 698.323 391.463 697.496 397.25 455.271 286.471 455.271 289.778 696.669" fill="#2f2e41"/><path d="M646.49463,250.06578s-8.26706,18.18753-14.054,19.01424-15.70741,9.92047-14.054,14.054.82671,16.53412-15.70742,14.88071-15.70741-3.30682-15.70741-3.30682-26.45459-50.42907.82671-63.65637S639.05428,227.74472,646.49463,250.06578Z" transform="translate(-275.69966 -81.66159)" fill="#2f2e41"/><path d="M668.427,767.32533l-.99365,20.86654s15.14469,23.62066-3.73456,23.62066c-.18879,0,.18641.00059,0,0-13.65339-.04323-25.99342,6.10144-24.3794-7.45628l2.2792-19.14531,3.97458-20.86654Z" transform="translate(-275.69966 -81.66159)" fill="#2f2e41"/><path d="M565.68423,767.32533l.99364,20.86654s-15.14469,23.62066,3.73456,23.62066c.1888,0-.18641.00059,0,0,13.6534-.04323,25.99342,6.10144,24.37941-7.45628l-2.27921-19.14531-3.97457-20.86654Z" transform="translate(-275.69966 -81.66159)" fill="#2f2e41"/><path d="M553.07685,546.85325l123.1792-5.78694c-22.97278-73.72-23.14272-134.041,5.78694-189.58558a29.74026,29.74026,0,0,0-17.9743-27.31383l-35.76159-15.405L582.83836,311.242,552.8359,327.74335A35.715,35.715,0,0,0,534.37929,360.863C560.64618,423.56619,562.1464,485.3961,553.07685,546.85325Z" transform="translate(-275.69966 -81.66159)" fill="#e6e6e6"/><path d="M575.39792,403.0064l-68.61661-11.57389,11.3049-28.06733a73.96326,73.96326,0,0,1,44.77157-42.38384l6.75319-2.299Z" transform="translate(-275.69966 -81.66159)" fill="#e6e6e6"/><path d="M790.63436,339.90593l21.12184-8.80075a15.91941,15.91941,0,0,0,7.34454-23.18348l0,0a15.9194,15.9194,0,0,0-25.54645-1.88069l-15.67316,18.2574-61.4352,44.0851-41.76339-17.336-4.97519,34.63933,52.17621,13.58949Z" transform="translate(-275.69966 -81.66159)" fill="#a0616a"/><path d="M679.30034,399.10317l34-32-9-11c-8.04381-19.97084-26.53769-28.18352-46.919-35.12183l-6.7532-2.299-5.32782,54.42079Z" transform="translate(-275.69966 -81.66159)" fill="#e6e6e6"/></svg>
    </div>
    <div class="ml-2">
      <a href="/home" class="text-2xl no-underline app-text-color  font-sans font-bold">ReviewBĐS.vn</a><br>
      <span class="text-xs text-grey-dark">Chuyên trang review, trao đổi thông tin về BĐS</span>
    </div>
  </div>
    <div class="block sm:hidden">
      <button type="button" class="navbar-toggler">
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
        <span class="navbar-toggler-bar"></span>
      </button>
    </div>

    <div class="hidden sm:flex">
      <ul class="flex flex-col sm:flex-row">
        <li><a href="#" class="sm:px-4 py-2 sm:hidden md:block">Giới thiệu</a></li>
        <li><a href="#" class="sm:px-8 py-2 block app-bg-color text-white rounded-sm ml-4">Đăng nhập</a></li>
      </ul>
    </div>
  </nav>
</header>`
});
 

Vue.component('search-place-advanced', {
  props: ['search'], 
  template: `<div class="w-full max-w-screen-xl mx-auto p-6">
  <div class="relative rounded overflow-hidden border border-grey-light mb-8 bg-white">
    <div class="border-b border-grey-light p-4 bg-grey-lighter py-8">
      <div class="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
        <div class="sm:flex sm:items-center px-2 py-4">
          <div class="flex-grow">
            <h3 class="font-normal px-2 py-3 leading-tight">Contacts</h3>
            <input type="text" placeholder="Search teams or members"
              class="my-2 w-full text-sm bg-grey-light text-grey-darkest rounded h-10 p-3 focus:outline-none" />
            <div class="w-full">
              <div class="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                <div class="w-8 h-10 text-center py-1">
                  <p class="text-3xl p-0 text-green-dark">&bull;</p>
                </div>
                <div class="w-4/5 h-10 py-3 px-1">
                  <p class="hover:text-blue-dark">Kevin Durant</p>
                </div>
                <div class="w-1/5 h-10 text-right p-3">
                  <p class="text-sm text-grey-dark">Member</p>
                </div>
              </div>
              <div class="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                <div class="w-8 h-10 text-center py-1">
                  <p class="text-3xl p-0 text-grey-dark">&bull;</p>
                </div>
                <div class="w-4/5 h-10 py-3 px-1">
                  <p class="hover:text-blue-dark">James Harden</p>
                </div>
                <div class="w-1/5 h-10 text-right p-3">
                  <p class="text-sm text-grey-dark">Team</p>
                </div>
              </div>
              <div class="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                <div class="w-8 h-10 text-center py-1">
                  <p class="text-3xl p-0 text-green-dark">&bull;</p>
                </div>
                <div class="w-4/5 h-10 py-3 px-1">
                  <p class="hover:text-blue-dark">Michael Jordan</p>
                </div>
                <div class="w-1/5 h-10 text-right p-3">
                  <p class="text-sm text-grey-dark">Member</p>
                </div>
              </div>
              <div class="flex cursor-pointer my-1 hover:bg-blue-lightest rounded">
                <div class="w-8 h-10 text-center py-1">
                  <p class="text-3xl p-0 text-grey-dark">&bull;</p>
                </div>
                <div class="w-4/5 h-10 py-3 px-1">
                  <p class="hover:text-blue-dark">Tim Duncan</p>
                </div>
                <div class="w-1/5 h-10 text-right p-3">
                  <p class="text-sm text-grey-dark">Team</p>
                </div>
              </div>
              <div class="flex my-1 cursor-pointer hover:bg-blue-lightest rounded">
                <div class="w-8 h-10 text-center py-1">
                  <p class="text-3xl p-0 text-grey-dark">&bull;</p>
                </div>
                <div class="w-4/5  h-10 py-3 px-1">
                  <p class="hover:text-blue-dark">Lebrr James</p>
                </div>
                <div class="w-1/5 h-10 text-right p-3">
                  <p class="text-sm text-grey-dark">Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sm:flex bg-grey-light sm:items-center px-2 py-4">
          <div class="flex-grow text-right">
            <button class="text-grey-darkest hover:text-grey-dark py-2 px-4 rounded">
              Cancel
            </button>
            <button class="bg-blue hover:bg-blue-dark text-white py-2 px-4 rounded">
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
} );


Vue.component('page-banner', {
  props: ['bannerViewModel'],
  template: `
  <div class="relative w-full sm:w-2/3 lg:w-1/2 z-10">
  <h1 class="text-3xl lg:text-4xl xl:text-5xl leading-tight font-bold">Hàng trăm nghìn địa điểm, hàng triệu thông tin miễn phí đến với bạn.</h1>
  <p class="text-base leading-snug text-gray-700 mt-4">Trao đổi thông tin khách quan, cái nhìn đa chiều về dự án bđs, đất nền, nhà ở, quy hoạch... ở Việt Nam</p>
  <div class="w-full block sm:inline-block py-4 mt-8">
  <div class="relative text-gray-600">
  <input id="searchbox" type="search" name="serch" placeholder="Tên địa điểm, tên dự án..." 
  class="bg-white pl-2 w-full h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" style="padding-left: 10px;" autofocus>
  <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
    <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" 
    style="enable-background:new 0 0 56.966 56.966;margin-right:10px" xml:space="preserve" width="512px" height="512px">
      <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
    </svg>
  </button>
</div>
  </div>
</div>`
});


var app = new Vue({
  el: '#app',
  data: {
    seen: true,
    headerViewModel: {
      PageTitle: 'ReviewBds.vn'
    }
  }
})