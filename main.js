const channels = [
  {
    name: "STV LIVE",
    src: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    name: "THE STATIC",
    src: "https://www.w3schools.com/html/movie.mp4"
  },
  {
    name: "DETROIT AFTER DARK",
    src: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

let currentChannel = 0;

const player = document.getElementById("player");
const channelName = document.getElementById("channelName");
const guideList = document.getElementById("guideList");

function loadChannel(index){

  currentChannel = index;

  player.src = channels[index].src;

  channelName.innerText =
    `CH 0${index + 1} — ${channels[index].name}`;

  renderGuide();
}

function renderGuide(){

  guideList.innerHTML = "";

  channels.forEach((channel, index)=>{

    const div = document.createElement("div");

    div.className =
      index === currentChannel
      ? "guide-item active-channel"
      : "guide-item";

    div.innerHTML = `
      <strong>CH 0${index + 1}</strong>
      <br>
      ${channel.name}
    `;

    div.onclick = ()=> loadChannel(index);

    guideList.appendChild(div);

  });

}

/* BUTTONS */

document
.getElementById("nextBtn")
.onclick = ()=>{

  currentChannel++;

  if(currentChannel >= channels.length){
    currentChannel = 0;
  }

  loadChannel(currentChannel);

};

document
.getElementById("prevBtn")
.onclick = ()=>{

  currentChannel--;

  if(currentChannel < 0){
    currentChannel = channels.length - 1;
  }

  loadChannel(currentChannel);

};

/* CLOCK */

function updateClock(){

  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour:'2-digit',
    minute:'2-digit'
  });

  document.getElementById("clock")
  .innerText = time;

}

setInterval(updateClock, 1000);

updateClock();

/* START */

loadChannel(0);
