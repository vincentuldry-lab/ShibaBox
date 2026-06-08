
function initTwitch(){
 const parent = location.hostname || 'localhost';
 const player = document.getElementById('twitchPlayer');
 const chat = document.getElementById('twitchChat');
 if(player){
   player.innerHTML = `<iframe src="https://player.twitch.tv/?channel=kazaelia&parent=${parent}" allowfullscreen></iframe>`;
 }
 if(chat){
   chat.innerHTML = `<iframe src="https://www.twitch.tv/embed/kazaelia/chat?parent=${parent}"></iframe>`;
 }
}


const ITEMS = [{"id": 1, "name": "Shiba Classic", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_01_uncommon.png"}, {"id": 2, "name": "Shiba Crème", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_02_uncommon.png"}, {"id": 3, "name": "Shiba Roux", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_03_uncommon.png"}, {"id": 4, "name": "Shiba Blanc", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_04_uncommon.png"}, {"id": 5, "name": "Shiba Noir", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_05_uncommon.png"}, {"id": 6, "name": "Shiba Sesame", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_06_uncommon.png"}, {"id": 7, "name": "Shiba Lunettes", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_07_uncommon.png"}, {"id": 8, "name": "Shiba Bandana", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_08_uncommon.png"}, {"id": 9, "name": "Shiba Couronne", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_09_uncommon.png"}, {"id": 10, "name": "Shiba Fleurs", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_10_uncommon.png"}, {"id": 11, "name": "Shiba Plage", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_11_uncommon.png"}, {"id": 12, "name": "Shiba Café", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_12_uncommon.png"}, {"id": 13, "name": "Shiba Pizza", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_13_uncommon.png"}, {"id": 14, "name": "Shiba Musique", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_14_uncommon.png"}, {"id": 15, "name": "Shiba Chibi", "rarity": "UNCOMMON", "rarityLabel": "PEU COMMUN", "image": "assets/keychains/keychain_15_uncommon.png"}, {"id": 16, "name": "Shiba Cowboy", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_16_common.png"}, {"id": 17, "name": "Shiba Pirate", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_17_common.png"}, {"id": 18, "name": "Shiba Ninja", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_18_common.png"}, {"id": 19, "name": "Shiba Samouraï", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_19_common.png"}, {"id": 20, "name": "Shiba Astronaute", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_20_common.png"}, {"id": 21, "name": "Shiba Pilote", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_21_common.png"}, {"id": 22, "name": "Shiba Docteur", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_22_common.png"}, {"id": 23, "name": "Shiba Policier", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_23_common.png"}, {"id": 24, "name": "Shiba Écolier", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_24_common.png"}, {"id": 25, "name": "Shiba Rocker", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_25_common.png"}, {"id": 26, "name": "Shiba Hipster", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_26_common.png"}, {"id": 27, "name": "Shiba Magicien", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_27_common.png"}, {"id": 28, "name": "Shiba Sportif", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_28_common.png"}, {"id": 29, "name": "Shiba Détective", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_29_common.png"}, {"id": 30, "name": "Shiba Skate", "rarity": "COMMON", "rarityLabel": "COMMUN", "image": "assets/keychains/keychain_30_common.png"}, {"id": 31, "name": "Shiba Dragon", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_31_rare.png"}, {"id": 32, "name": "Shiba Phoenix", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_32_rare.png"}, {"id": 33, "name": "Shiba Loup", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_33_rare.png"}, {"id": 34, "name": "Shiba Guerrier", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_34_rare.png"}, {"id": 35, "name": "Shiba Sorcier", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_35_rare.png"}, {"id": 36, "name": "Shiba Chevalier", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_36_rare.png"}, {"id": 37, "name": "Shiba Paladin", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_37_rare.png"}, {"id": 38, "name": "Shiba Viking", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_38_rare.png"}, {"id": 39, "name": "Shiba Gladiateur", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_39_rare.png"}, {"id": 40, "name": "Shiba Empereur", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_40_rare.png"}, {"id": 41, "name": "Shiba Royal", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_41_rare.png"}, {"id": 42, "name": "Shiba Divin", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_42_rare.png"}, {"id": 43, "name": "Shiba Lumière", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_43_rare.png"}, {"id": 44, "name": "Shiba Tempête", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_44_rare.png"}, {"id": 45, "name": "Shiba Ultime", "rarity": "RARE", "rarityLabel": "RARE", "image": "assets/keychains/keychain_45_rare.png"}, {"id": 46, "name": "Shiba Galaxy", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_46_epic.png"}, {"id": 47, "name": "Shiba Diamant", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_47_epic.png"}, {"id": 48, "name": "Shiba Or Massif", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_48_epic.png"}, {"id": 49, "name": "Shiba Cristal", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_49_epic.png"}, {"id": 50, "name": "Shiba Cyberpunk", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_50_epic.png"}, {"id": 51, "name": "Shiba Classic", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_51_epic.png"}, {"id": 52, "name": "Shiba Crème", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_52_epic.png"}, {"id": 53, "name": "Shiba Roux", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_53_epic.png"}, {"id": 54, "name": "Shiba Blanc", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_54_epic.png"}, {"id": 55, "name": "Shiba Noir", "rarity": "EPIC", "rarityLabel": "ÉPIQUE", "image": "assets/keychains/keychain_55_epic.png"}, {"id": 56, "name": "Shiba Sesame", "rarity": "LEGENDARY", "rarityLabel": "LÉGENDAIRE", "image": "assets/keychains/keychain_56_legendary.png"}, {"id": 57, "name": "Shiba Lunettes", "rarity": "LEGENDARY", "rarityLabel": "LÉGENDAIRE", "image": "assets/keychains/keychain_57_legendary.png"}, {"id": 58, "name": "Shiba Bandana", "rarity": "LEGENDARY", "rarityLabel": "LÉGENDAIRE", "image": "assets/keychains/keychain_58_legendary.png"}, {"id": 59, "name": "Shiba Couronne", "rarity": "LEGENDARY", "rarityLabel": "LÉGENDAIRE", "image": "assets/keychains/keychain_59_legendary.png"}, {"id": 60, "name": "Shiba Fleurs", "rarity": "LEGENDARY", "rarityLabel": "LÉGENDAIRE", "image": "assets/keychains/keychain_60_legendary.png"}];
const rates = [['LEGENDARY',0.05],['EPIC',0.2],['RARE',5],['COMMON',20],['UNCOMMON',74.75]];
let coins = Number(localStorage.getItem('coinsV114') || 500);
let inventory = JSON.parse(localStorage.getItem('inventoryV114') || '[]');
let stats = JSON.parse(localStorage.getItem('statsV114') || '{"opened":0,"m5":false,"m20":false,"rare":false,"shiny":false}');
let invFilter = 'ALL', boardMode='score';
let freeCrates = Number(localStorage.getItem('freeCratesV114') || 0);
let watchMinutes = Number(localStorage.getItem('watchMinutesV114') || 0);
let currentStreamId = localStorage.getItem('currentStreamV114') || 'kazaelia-default';
const byRarity = r => ITEMS.filter(i => i.rarity === r);
const pick = arr => arr[Math.floor(Math.random()*arr.length)];
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.remove('hidden');setTimeout(()=>t.classList.add('hidden'),2200)}
function scrollToId(id){document.getElementById(id)?.scrollIntoView({behavior:'smooth'})}
function saveAll(){localStorage.setItem('coinsV114',coins);localStorage.setItem('inventoryV114',JSON.stringify(inventory));localStorage.setItem('statsV114',JSON.stringify(stats))}
function setCoins(){document.getElementById('coins').textContent=coins.toFixed(0);saveAll()}
function getDrop(){
 const roll=Math.random()*100; let acc=0, rarity='UNCOMMON';
 for(const [r,chance] of rates){acc+=chance;if(roll<acc){rarity=r;break}}
 const item={...pick(byRarity(rarity))}; item.shiny=Math.random()<0.0001; item.time=Date.now(); return item;
}
function makeCard(item, cls='key-card', locked=false){
 return `<button class="${cls} ${item.rarity} ${item.shiny?'is-shiny':''} ${locked?'locked':''}" data-card="${item.id}" data-locked="${locked}"><img src="${item.image}" alt="${item.name}"><b>${locked?'???':item.name}</b><small>${locked?'À DÉBLOQUER':item.rarityLabel}</small>${item.shiny&&!locked?'<small class="shiny">★ SHINY</small>':''}</button>`;
}

function saveTwitchRewards(){
 localStorage.setItem('freeCratesV114', freeCrates);
 localStorage.setItem('watchMinutesV114', watchMinutes);
 localStorage.setItem('currentStreamV114', currentStreamId);
}
function updateRewardsUI(){
 const fc=document.getElementById('freeCrates');
 if(fc) fc.textContent=freeCrates;
 const bar=document.getElementById('watchProgress');
 const txt=document.getElementById('watchText');
 const pct=Math.min(100,(watchMinutes/60)*100);
 if(bar) bar.style.width=pct+'%';
 if(txt) txt.textContent=`${watchMinutes} / 60 min`;
 saveTwitchRewards();
}
function addFreeCrate(reason){
 freeCrates += 1;
 saveTwitchRewards();
 updateRewardsUI();
 toast(`+1 caisse gratuite : ${reason}`);
}
function addWatchMinutes(mins){
 watchMinutes += mins;
 while(watchMinutes >= 60){
   watchMinutes -= 60;
   freeCrates += 1;
   toast('+1 caisse gratuite : 60 min de visionnage');
 }
 updateRewardsUI();
}
function startWatchTimer(){ /* Twitch rewards removed */ }

function renderStatic(){
 document.getElementById('ticker').innerHTML=ITEMS.slice(45,60).map(i=>makeCard(i,'mini')).join('');
 renderDrops(); renderInventory(); renderMissions(); renderLeaderboard(); renderCollection(); setCoins();
}
function renderDrops(){const drops=inventory.slice(-12).reverse();document.getElementById('lastDrops').innerHTML=(drops.length?drops:ITEMS.slice(0,12)).map(i=>makeCard(i)).join('')}
function renderInventory(){
 const shown=invFilter==='ALL'?inventory:inventory.filter(i=>i.rarity===invFilter);
 document.getElementById('inventoryGrid').innerHTML=shown.length?shown.slice().reverse().map(i=>makeCard(i)).join(''):'<p class="hint">Aucun porte-clé ici.</p>';
 document.getElementById('inventoryCount').textContent=inventory.length;
 document.getElementById('collectionCount').textContent=new Set(inventory.map(i=>i.id)).size+' / 60';
}
function renderCollection(){
 const owned=new Set(inventory.map(i=>i.id));
 document.getElementById('collectionGrid').innerHTML=ITEMS.map(i=>makeCard(i,'key-card',!owned.has(i.id))).join('');
}
function renderMissions(){
 document.getElementById('m5').textContent=stats.m5?'Terminée ✅':`Progression: ${Math.min(stats.opened,5)}/5 · Récompense +30`;
 document.getElementById('m20').textContent=stats.m20?'Terminée ✅':`Progression: ${Math.min(stats.opened,20)}/20 · Récompense +100`;
 document.getElementById('mRare').textContent=stats.rare?'Terminée ✅':'Drop un Rare ou mieux · Récompense +50';
 document.getElementById('mShiny').textContent=stats.shiny?'Terminée ✅':'Drop un Shiny · Jackpot +500';
}
function scoreOf(i){return ({LEGENDARY:1000,EPIC:500,RARE:100,COMMON:50,UNCOMMON:20}[i.rarity]||0)+(i.shiny?2000:0)}

function renderLeaderboard(){
 const score=inventory.reduce((s,i)=>s+scoreOf(i),0);
 let rows;
 if(['daily','weekly','monthly'].includes(boardMode)){
   rows = fakeBattleRows(boardMode).map((r,i)=>[`#${i+1}`, r[0], `${r[1]} victoires`]);
 } else {
   rows=[['#1','Vincoune',score+' pts'],['#2','ShibaMaster','18650 pts'],['#3','Kazaelia Fan','13840 pts'],['#4','DogeLord','9210 pts'],['#5','NeonPuppy','7420 pts']];
 }
 document.getElementById('leaderboardBox').innerHTML=rows.map(r=>`<button class="leader-row" data-action="profile"><b>${r[0]} ${r[1]}</b><span>${r[2]}</span></button>`).join('');
}

function spinAnimation(finalItem){
 const roulette=document.getElementById('roulette'), wrap=document.querySelector('.roulette-wrap'), rollItems=[];
 const finalIndex = 42;
 for(let i=0;i<finalIndex;i++)rollItems.push(pick(ITEMS));
 rollItems.push(finalItem);
 for(let i=0;i<14;i++)rollItems.push(pick(ITEMS));

 roulette.style.transition='none';
 roulette.style.transform='translateX(0)';
 roulette.innerHTML=rollItems.map(i=>makeCard(i,'key-card')).join('');

 requestAnimationFrame(()=>requestAnimationFrame(()=>{
   const finalCard = roulette.children[finalIndex];
   const wrapCenter = wrap.clientWidth / 2;
   const cardCenter = finalCard.offsetLeft + finalCard.offsetWidth / 2;
   const randomMicroOffset = 0; // garde la récompense parfaitement sous la flèche
   const target = -(cardCenter - wrapCenter + randomMicroOffset);

   roulette.style.transition='transform 4.8s cubic-bezier(.08,.75,.13,1)';
   roulette.style.transform=`translateX(${target}px)`;
 }));
}
function applyMissions(drop){
 stats.opened++;
 if(!stats.m5&&stats.opened>=5){stats.m5=true;coins+=30;toast('Mission 5 box : +30 coins')}
 if(!stats.m20&&stats.opened>=20){stats.m20=true;coins+=100;toast('Mission 20 box : +100 coins')}
 if(!stats.rare&&['RARE','EPIC','LEGENDARY'].includes(drop.rarity)){stats.rare=true;coins+=50;toast('Mission rare : +50 coins')}
 if(!stats.shiny&&drop.shiny){stats.shiny=true;coins+=500;toast('SHINY : +500 coins')}
}
function openOne(showSpin=true){
 if(coins<10){toast('Pas assez de coins. Daily disponible !');return}
 coins-=10; setCoins();
 const drop=getDrop(); if(showSpin)spinAnimation(drop);
 setTimeout(()=>{inventory.push(drop);applyMissions(drop);saveAll();setCoins();
 document.getElementById('result').innerHTML=`<button class="win ${drop.rarity} ${drop.shiny?'is-shiny':''}" data-card="${drop.id}"><img src="${drop.image}"><div><h2>${drop.name}</h2><b>${drop.rarityLabel}</b>${drop.shiny?'<p class="shiny">★ SHINY</p>':''}</div></button>`;
 renderDrops();renderInventory();renderMissions();renderLeaderboard();renderCollection();
 }, showSpin?4900:150)
}
function daily(){
 const last=Number(localStorage.getItem('dailyV114')||0),now=Date.now();
 if(now-last<86400000){toast('Daily déjà pris aujourd’hui.');return}
 localStorage.setItem('dailyV114',now);coins+=50;setCoins();toast('+50 coins')
}
function showCard(id, locked=false){
 const item=ITEMS.find(i=>i.id==id); if(!item)return;
 document.getElementById('modalContent').innerHTML=locked?`<h2>Verrouillé</h2><img src="${item.image}"><p>Ouvre des box pour débloquer ce porte-clé.</p>`:`<h2>${item.name}</h2><img src="${item.image}"><h3>${item.rarityLabel}</h3><p>ID #${item.id}</p>`;
 document.getElementById('modal').classList.remove('hidden')
}
function closeModal(){document.getElementById('modal').classList.add('hidden')}
document.addEventListener('click',e=>{
 const sc=e.target.closest('[data-scroll]'); if(sc){scrollToId(sc.dataset.scroll);return}
 const card=e.target.closest('[data-card]'); if(card){showCard(card.dataset.card,card.dataset.locked==='true');return}
 const fil=e.target.closest('[data-inv-filter]'); if(fil){invFilter=fil.dataset.invFilter;renderInventory();toast('Filtre : '+invFilter);return}
 const board=e.target.closest('[data-board]'); if(board){boardMode=board.dataset.board;renderLeaderboard();return}
 const act=e.target.closest('[data-action]'); if(act){const a=act.dataset.action;
  if(a==='daily')daily();
  if(a==='simulateFollow')addFreeCrate('follow');
  if(a==='simulateSub')addFreeCrate('sub');
  if(a==='simulateResub')addFreeCrate('renouvellement de sub');
  if(a==='simulateGiftSub')addFreeCrate('sub offert');
  if(a==='simulateWatchMinute')addWatchMinutes(1);
  if(a==='simulate60min')addWatchMinutes(60); if(a==='open5'){for(let i=0;i<5;i++)openOne(i===0);toast('x5 lancé')} if(a==='resetDemo'){if(confirm('Reset ?')){localStorage.clear();location.reload()}}
  if(a==='shinyInfo')toast('Shiny = 0,01% bonus ultra rare'); if(a==='openTwitch')window.open('https://www.twitch.tv/kazaelia','_blank');
  if(a==='twitchBonus'){toast('Récompenses Twitch désactivées dans cette version')} if(a==='profile')toast('Profil Vincoune'); if(a==='support')toast('Support démo'); if(a==='credits')toast('ShibaBox by Vincoune'); if(a==='closeModal')closeModal();
 }
});
document.getElementById('openBtn').addEventListener('click',()=>openOne(true));
const battleBtn = document.getElementById('battleBtn');
if(battleBtn) battleBtn.addEventListener('click', startBattle);
document.getElementById('dailyBtn').addEventListener('click',daily);
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal()});
initTwitch();
startWatchTimer();

/* V11.4 Battle 1v1: no Twitch rewards */
freeCrates = 0;
watchMinutes = 0;

const opponents = ["ShibaMaster","KazaeliaFan","DogeLord","NeonPuppy","KeychainKing","SamuraiShiba","GoldenDoggo"];
let battleStats = JSON.parse(localStorage.getItem('battleStatsV114') || '{"daily":0,"weekly":0,"monthly":0,"history":[]}');

function saveBattleStats(){
  localStorage.setItem('battleStatsV114', JSON.stringify(battleStats));
}
function fakeBattleRows(mode){
  const base = [
    ["Vincoune", battleStats[mode] || 0],
    ["ShibaMaster", mode==="daily"?7:mode==="weekly"?31:96],
    ["KazaeliaFan", mode==="daily"?5:mode==="weekly"?28:82],
    ["DogeLord", mode==="daily"?4:mode==="weekly"?18:61],
    ["NeonPuppy", mode==="daily"?3:mode==="weekly"?14:47]
  ];
  return base.sort((a,b)=>b[1]-a[1]);
}
function renderBattleHistory(){
  const box = document.getElementById('battleHistory');
  if(!box) return;
  if(!battleStats.history.length){
    box.innerHTML = '<p class="hint">Aucune battle pour le moment.</p>';
    return;
  }
  box.innerHTML = battleStats.history.slice(0,8).map(b=>`
    <div class="battle-row ${b.win?'win':'lose'}">
      <b>${b.win?'Victoire':'Défaite'} vs ${b.opponent}</b>
      <span>${b.win?'+50 coins':'-50 coins'}</span>
    </div>
  `).join('');
}
function startBattle(){
  if(coins < 50){
    toast('Pas assez de coins pour lancer une battle.');
    return;
  }
  coins -= 50;
  setCoins();

  const opponent = opponents[Math.floor(Math.random()*opponents.length)];
  const opponentName = document.getElementById('opponentName');
  const result = document.getElementById('battleResult');
  if(opponentName) opponentName.textContent = opponent;
  if(result) result.textContent = 'Combat en cours... 50/50';

  setTimeout(()=>{
    const win = Math.random() < 0.5;
    if(win){
      coins += 100;
      battleStats.daily += 1;
      battleStats.weekly += 1;
      battleStats.monthly += 1;
    }
    battleStats.history.unshift({win, opponent, date:Date.now()});
    battleStats.history = battleStats.history.slice(0,30);
    saveBattleStats();
    setCoins();
    renderBattleHistory();
    renderLeaderboard();

    if(result){
      result.textContent = win ? `Victoire contre ${opponent} ! Tu gagnes 100 coins.` : `Défaite contre ${opponent}. Tu perds ta mise.`;
    }
    toast(win ? 'Victoire Battle : +50 coins net' : 'Défaite Battle : -50 coins');
  }, 1400);
}

renderBattleHistory();
renderStatic();
