let activeSection = 'profil';

let profilBtn = null;
let skillBtn = null;
let projectBtn = null;
let allNavBtn = null;

let closeBtn = null;

let profilHead = null;
let profilText = null;
let profilLink = null;

let skillList = null;
let projectSwipper = null;

const date = new Date();
let dateDisplay = null;

onload = () => {
  linuxBootLoader();
  initDomEl();
  initNavBtn();
  printTime();

  allNavBtn.forEach((btn) => {
    btn.addEventListener('click', handleChangeSection);
  });
  handleCloseBtnClick();

  swiper.init();
};

initNavBtn = () => {
  profilBtn = document.getElementById('profil-btn');
  skillBtn = document.getElementById('skill-btn');
  projectBtn = document.getElementById('project-btn');
  allNavBtn = [profilBtn, skillBtn, projectBtn];
};

initDomEl = () => {
  profilHead = document.getElementById('profil-head');
  profilText = document.getElementById('profil-text');
  profilLink = document.getElementById('profil-link');
  skillList = document.getElementById('skill-list');
  projectSwipper = document.getElementById('project-swipper');
};

handleProfilTranslateIn = () => {
  setTimeout(() => {
    profilHead.style.transform = 'translateX(0)';
    profilHead.style.opacity = '1';
    profilText.style.transform = 'translateX(0)';
    profilText.style.opacity = '1';
    profilLink.style.opacity = '1';
  }, 50);
};

handleProfilTranslateOut = () => {
  setTimeout(() => {
    profilHead.style.transform = 'translateX(150%)';
    profilHead.style.opacity = '0';
    profilText.style.transform = 'translateX(-150%)';
    profilText.style.opacity = '0';
    profilLink.style.opacity = '0';
  }, 50);
};

handleProfilChange = (target) => {
  if (activeSection === 'profil') handleProfilTranslateOut();
  console.log(activeSection);
  if (target === 'profil') handleProfilTranslateIn();
  if (target === 'skill') skillList.style.opacity = '1';
  if (target === 'project') projectSwipper.style.opacity = '1';
};

handleChangeSection = (e) => {
  const clickedElement = e.target.id.split('-')[0];
  handleProfilChange(clickedElement);
  console.log(activeSection);
  if (clickedElement !== activeSection) {
    if (activeSection) handleTranslateOut();
    handleTranslateIn(clickedElement);
    activeSection = clickedElement;
  } else {
    handleTranslateOut();
    activeSection = null;
  }
};

handleTranslateOut = () => {
  const activeElement = document.getElementById(`${activeSection}`);
  activeElement.style.transform = 'translate(0, 150%) scale(0)';
  activeElement.style.opacity = '0';
  if (activeSection === 'skill') skillList.style.opacity = '0';
  if (activeSection === 'project') projectSwipper.style.opacity = '0';

  setTimeout(() => {
    activeElement.style.transform = 'translate(-150%, 0) scale(0)';
  }, 600);
};

handleTranslateIn = (target) => {
  const targetElement = document.getElementById(`${target}`);
  setTimeout(() => {
    targetElement.style.opacity = '1';
    targetElement.style.transform = 'translate(0, 0) scale(1)';
  }, 100);
};

handleCloseBtnClick = () => {
  closeBtn = document.getElementsByClassName('window-btn');
  const sendOut = () => {
    handleTranslateOut();
    if (activeSection === 'skill') skillList.style.opacity = 0;
    if (activeSection === 'project') projectSwipper.style.opacity = 0;
    activeSection = null;
  };
  for (let i = 0; i < closeBtn.length; i++) {
    let child = closeBtn[i].children;
    for (let j = 0; j < child.length; j++) {
      child[j].addEventListener('click', sendOut);
    }
  }
};

printTime = () => {
  const month = [
    'janv.',
    'fevr.',
    'mars',
    'avr.',
    'mai',
    'juin',
    'juill.',
    'août',
    'sept.',
    'oct.',
    'nov.',
    'déc.',
  ];
  dateDisplay = document.getElementById('time');

  const dateLine = document.createElement('p');
  dateLine.innerText = `${date.getDate()} ${month[date.getMonth() - 1]}`;
  const timeLine = document.createElement('p');
  timeLine.innerText = `${date.getHours()}:${date.getMinutes()}`;
  setInterval(() => {
    let dateinterval = new Date();
    timeLine.innerText = `${
      dateinterval.getHours() < 10
        ? `0${dateinterval.getHours()}`
        : dateinterval.getHours()
    }:${
      dateinterval.getMinutes() < 10
        ? `0${dateinterval.getMinutes()}`
        : dateinterval.getMinutes()
    }`;
  }, 1000);

  dateDisplay.appendChild(dateLine);
  setInterval;
  dateDisplay.appendChild(timeLine);
};

linuxBootLoader = () => {
  const linuxBootArray = [
    '[  OK  ] Finished Tell Plymouth To Write Out Runtime Data.',
    '[  OK  ] Finished Create Volatile Files and Directories.',
    '         Starting Network Name Resolution...',
    '         Starting Network Time Synchronization...',
    '         Starting Update UTMP about System Boot/Shutdown...',
    '[  OK  ] Finished Update UTMP about System Boot/Shutdown.',
    '[  OK  ] Finished Load AppArmor profiles.',
    '         Starting Raise network interfaces...',
    '         Starting Load AppArmor profiles managed internally by snapd...',
    '[  OK  ] Finished Load AppArmor profiles managed internally by snapd.',
    '[  OK  ] Finished Raise network interfaces.',
    '[  OK  ] Started Network Time Synchronization.',
    '[  OK  ] Reached target System Initialization.',
    '[  OK  ] Started ACPI Events Check.',
    '[  OK  ] Started CUPS Scheduler.',
    '[  OK  ] Started Daily Cleanup of Temporary Directories.',
    '[  OK  ] Reached target Paths.',
    '[  OK  ] Reached target System Time Set.',
    '[  OK  ] Reached target System Time Synchronized.',
    '[  OK  ] Started Trigger anacron every hour.',
    '[  OK  ] Started Daily apt download activities.',
    '[  OK  ] Started Daily apt upgrade and clean activities.',
    '[  OK  ] Started Periodic ext4 Online Metadata Check for All Filesystems.',
    '[  OK  ] Started Discard unused blocks once a week.',
    '[  OK  ] Started Refresh fwupd metadata regularly.',
    '[  OK  ] Started Daily rotation of log files.',
    '[  OK  ] Started Daily man-db regeneration.',
    '[  OK  ] Started Message of the Day.',
    '[  OK  ] Started Clean PHP session files every 30 mins.',
    '[  OK  ] Started Ubuntu Advantage update messaging.',
    '[  OK  ] Reached target Timers.',
    '[  OK  ] Listening on ACPID Listen Socket.',
    '[  OK  ] Listening on Avahi mDNS/DNS-SD Stack Activation Socket.',
    '[  OK  ] Listening on CUPS Scheduler.',
    '[  OK  ] Listening on D-Bus System Message Bus Socket.',
    '         Starting Socket activation for snappy daemon.',
    '[  OK  ] Listening on UUID daemon activation socket.',
    '[  OK  ] Listening on Socket activation for snappy daemon.',
    '[  OK  ] Reached target Sockets.',
    '[  OK  ] Reached target Basic System.',
    '         Starting Accounts Service...',
    '[  OK  ] Started ACPI event daemon.',
    '         Starting Save/Restore Sound Card State...',
    '[  OK  ] Started Run anacron jobs.',
    '         Starting Avahi mDNS/DNS-SD Stack...',
    '         Starting Bluetooth service...',
    '[  OK  ] Started Regular background program processing daemon.',
    '[  OK  ] Started CUPS Scheduler.',
    '[  OK  ] Started D-Bus System Message Bus.',
    '         Starting Network Manager...',
    '[  OK  ] Started Save initial kernel messages after boot.',
    '         Starting Remove Stale Online ext4 Metadata Check Snapshots...',
    '         Starting Detect the available GPUs and deal with any system changes...',
    '         Starting LSB: Record successful boot for GRUB...',
    '         Starting LSB: disk temperature monitoring daemon...',
    '[  OK  ] Started irqbalance daemon.',
    '         Starting Initialize hardware monitoring sensors...',
    '[  OK  ] Started mintsystem.service.',
    '         Starting Dispatcher daemon for systemd-networkd...',
    '[  OK  ] Started Set the CPU Frequency Scaling governor.',
    '         Starting Clean php session files...',
    '         Starting Authorization Manager...',
    '         Starting Restore /etc/resolv.conf if the system crashed before the ppp link was shut down...',
    '         Starting System Logging Service...',
    '         Starting Snap Daemon...',
    '         Starting Login Service...',
    '         Starting Thermal Daemon Service...',
    '         Starting Ubuntu system adjustments...',
    '         Starting Disk Manager...',
    '         Starting WPA supplicant...',
    '[  OK  ] Started Network Name Resolution.',
    '[  OK  ] Finished Remove Stale Online ext4 Metadata Check Snapshots.',
    '[  OK  ] Finished Restore /etc/resolv.conf if the system crashed before the ppp link was shut down.',
    '[  OK  ] Finished Save/Restore Sound Card State.',
    '[  OK  ] Started System Logging Service.',
    '[  OK  ] Reached target Host and Network Name Lookups.',
    '[  OK  ] Reached target Sound Card.',
    '         Starting Tool to automatically collect and submit kernel crash signatures...',
    '[  OK  ] Started LSB: disk temperature monitoring daemon.',
    '[  OK  ] Finished Initialize hardware monitoring sensors.',
    '[  OK  ] Started LSB: Record successful boot for GRUB.',
    '         Starting GRUB failed boot detection...',
    '[  OK  ] Started Tool to automatically collect and submit kernel crash signatures.',
    '[  OK  ] Finished GRUB failed boot detection.',
    '[  OK  ] Started Avahi mDNS/DNS-SD Stack.',
    '[  OK  ] Started Make remote CUPS printers available locally.',
    '[  OK  ] Started WPA supplicant.',
    '[  OK  ] Started Bluetooth service.',
    '[  OK  ] Started Thermal Daemon Service.',
    '[  OK  ] Reached target Bluetooth.',
    '[  OK  ] Started Authorization Manager.',
    '         Starting Modem Manager...',
    '[  OK  ] Started Network Manager.',
    '[  OK  ] Reached target Network.',
    '         Starting The Apache HTTP Server...',
    '         Starting MySQL Community Server...',
    '         Starting OpenVPN service...',
    '         Starting Hostname Service...',
    '         Starting Permit User Sessions...',
    '[  OK  ] Finished OpenVPN service.',
    '[  OK  ] Finished Permit User Sessions.',
    '         Starting Hold until boot process finishes up...',
    '[  OK  ] Finished Detect the available GPUs and deal with any system changes.',
    '         Starting Light Display Manager...',
    '[  OK  ] Started Accounts Service.',
    '[  OK  ] Finished Ubuntu system adjustments.',
    '[  OK  ] Started Modem Manager.',
    '[  OK  ] Started Hostname Service.',
    '         Starting Network Manager Script Dispatcher Service...',
    '[  OK  ] Started Network Manager Script Dispatcher Service.',
    '[  OK  ] Started Disk Manager.',
    '[  OK  ] Finished Clean php session files.',
    '         Starting NVIDIA Persistence Daemon...',
    '[  OK  ] Started NVIDIA Persistence Daemon.',
    '[  OK  ] Started Dispatcher daemon for systemd-networkd.',
    '[  OK  ] Started The Apache HTTP Server.',
    '[  OK  ] Started Login Service.',
  ];
  // Change color of wanted 'OK' in array
  const colorizeMessage = (array) => {
    return array.map((line) => line.replace('OK', '<span>OK</span>'));
  };
  // Create random time in milliseconde
  const randomTime = (ms) => {
    return Math.floor(Math.random() * ms);
  };

  const loader = document.getElementById('loader');
  const colorArray = colorizeMessage(linuxBootArray);

  for (let i = 0; i < colorArray.length; i++) {
    setTimeout(() => {
      loader.innerHTML += `<p>${colorArray[i]}</p>`;
      window.scrollTo(0, loader.scrollHeight);
    }, randomTime(6100));
  }

  setTimeout(() => {
    loader.style.display = 'none';
    handleTranslateIn(activeSection);
    handleProfilTranslateIn();
  }, 6400);
};

// Swipper JS
const swiperConf = {
  init: false,
  effect: 'slide',
  followFinger: false,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  speed: 1600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
};
const swiper = new Swiper('.swiper-container', swiperConf);
