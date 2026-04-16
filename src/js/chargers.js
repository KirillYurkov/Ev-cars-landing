// Получаем данные из нужного JSON файла
let pathToChargers = "./json_files/chargers.json";
// Получаем данные из нужного JSON файла
async function loadChargersJSON(path) {
  try {
    let response = await fetch(path);
    //console.log(response);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    let data = await response.json();
    //console.log(data);
    displayChargers(data);
  } catch (error) {
    console.log(`Ошибка загрузки данных chargers`);
  }
}

function displayChargers(chargerData) {
  //Куда выводим
  let chargersDiv = document.querySelector(".charger__cards");
    for(let charger of chargerData){
      console.log(charger)
      let html = ` 
          <article class="charger-card">
      <img 
      src="../img/chargers/${charger.image}"  
      srcset="../img/chargers/${charger.image2}"
      alt="${charger.desc}"  class="charger-card__img"   />
      <h3 class="charger-card__title title--h3">${charger.title}</h3>
      <p class="charger-card__desc desc--h3">
       ${charger.desc}
      </p>
      <div class="charger-card__price">
        <span class="charger-card__price--orig">$${charger.price.original}</span>
        <span class="charger-card__price--cur">$${charger.price.current}</span>
      </div>
    </article>
                    `;
      chargersDiv.insertAdjacentHTML("beforeend", html);
    
  }
}
//Вызываем функцию после загрузки документа
loadChargersJSON(pathToChargers);
