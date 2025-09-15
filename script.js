// =============================
// ТРЕНАЖЕР С 10 ВКЛАДКАМИ
// =============================
// Как пользоваться:
// 1) Заполни массивы во `categories` ниже. Каждая вкладка — это свой массив слов.
// 2) Названия вкладок можно менять (ключи объекта categories). Кол-во вкладок = 10.
// 3) Приложение само создаст панель вкладок и позволит переключаться между ними.

// -----------------------------
// 10 вкладок (категорий) со словами
// Формат элемента: { native: "Русская/Украинская фраза", en: "English" }
// -----------------------------
const categories = {
  "Повсякденні вирази": [
     { native: "Привіт!", en: "Hello!" },
    { native: "Як справи?", en: "How are you?" },
    { native: "Я в порядку, дякую.", en: "I'm fine, thank you." },
    { native: "Як тебе звати?", en: "What's your name?" },
    { native: "Мене звати Олексій.", en: "My name is Oleksiy." },
    { native: "Приємно познайомитися.", en: "Nice to meet you." },
    { native: "Будь ласка.", en: "Please." },
    { native: "Дякую дуже.", en: "Thank you very much." },
    { native: "Прошу, нема за що.", en: "You're welcome." },
    { native: "Перепрошую.", en: "Excuse me." },
    { native: "Мені шкода.", en: "I'm sorry." },
    { native: "Я не розумію.", en: "I don't understand." },
    { native: "Повторіть, будь ласка.", en: "Could you repeat, please?" },
    { native: "Звідки ти?", en: "Where are you from?" },
    { native: "Я з України.", en: "I am from Ukraine." }
  ],
  "Щоденні дії": [
   { native: "Я прокидаюся рано.", en: "I get up early." },
    { native: "Я йду на роботу.", en: "I go to work." },
    { native: "Я вивчаю англійську щодня.", en: "I study English every day." },
    { native: "Вранці я роблю каву.", en: "I make coffee in the morning." },
    { native: "Я приймаю душ.", en: "I take a shower." },
    { native: "Я чищу зуби.", en: "I brush my teeth." },
    { native: "Я готую вечерю.", en: "I cook dinner." },
    { native: "Я мию посуд.", en: "I wash the dishes." },
    { native: "Я лягаю спати пізно.", en: "I go to bed late." },
    { native: "Я працюю з дому.", en: "I work from home." },
    { native: "Я їду в офіс на машині.", en: "I drive to the office." },
    { native: "Я їду автобусом.", en: "I take the bus." },
    { native: "Я ходжу пішки до спортзалу.", en: "I walk to the gym." },
    { native: "Я читаю перед сном.", en: "I read before bed." },
    { native: "Я слухаю подкасти.", en: "I listen to podcasts." }
  ],
  "Подорожі": [ { native: "Де знаходиться станція метро?", en: "Where is the subway station?" },
    { native: "Скільки коштує квиток?", en: "How much is a ticket?" },
    { native: "Мені потрібне таксі.", en: "I need a taxi." },
    { native: "Будь ласка, відвезіть мене за цією адресою.", en: "Please take me to this address." },
    { native: "У мене є бронювання.", en: "I have a reservation." },
    { native: "Я хотів би заселитися.", en: "I would like to check in." },
    { native: "О котрій виселення?", en: "What time is checkout?" },
    { native: "Сніданок включено?", en: "Is breakfast included?" },
    { native: "Де можна обміняти гроші?", en: "Where can I exchange money?" },
    { native: "Чи можу я заплатити картою?", en: "Can I pay by card?" },
    { native: "Я загубив багаж.", en: "I lost my baggage." },
    { native: "Де вихід B12?", en: "Where is gate B12?" },
    { native: "Скільки триває політ?", en: "How long is the flight?" },
    { native: "Чи є безкоштовний Wi Fi?", en: "Is there free Wi Fi?" },
    { native: "Можна місце біля вікна?", en: "Can I have a window seat?" }],
  "Їжа та ресторан": [{ native: "Стіл на двох, будь ласка.", en: "A table for two, please." },
    { native: "Меню, будь ласка.", en: "The menu, please." },
    { native: "Що ви порадите?", en: "What do you recommend?" },
    { native: "У мене алергія на горіхи.", en: "I’m allergic to nuts." },
    { native: "Без цукру, будь ласка.", en: "No sugar, please." },
    { native: "Вода звичайна чи газована?", en: "Still or sparkling water?" },
    { native: "Я б хотів цю страву.", en: "I’d like this dish." },
    { native: "Можна рахунок?", en: "Can I have the bill?" },
    { native: "Решту залиште собі.", en: "Keep the change." },
    { native: "Було дуже смачно.", en: "It was delicious." },
    { native: "Це гостре?", en: "Is this spicy?" },
    { native: "Я не їм м’яса.", en: "I don’t eat meat." },
    { native: "Можна з собою?", en: "Can I take it to go?" },
    { native: "Є веганські варіанти?", en: "Do you have vegan options?" },
    { native: "Ще одну каву, будь ласка.", en: "Another coffee, please." }],
  "Покупки та гроші": [{ native: "Скільки це коштує?", en: "How much does this cost?" },
    { native: "Можна приміряти?", en: "Can I try it on?" },
    { native: "Є більший розмір?", en: "Do you have a larger size?" },
    { native: "Є менший розмір?", en: "A smaller size?" },
    { native: "Де примірочна?", en: "Where is the fitting room?" },
    { native: "Я це беру.", en: "I’ll take it." },
    { native: "Чи приймаєте повернення?", en: "Do you accept returns?" },
    { native: "Можу заплатити готівкою?", en: "Can I pay in cash?" },
    { native: "Можу заплатити карткою?", en: "Can I pay by card?" },
    { native: "Мені потрібен чек.", en: "I need a receipt." },
    { native: "Занадто дорого.", en: "It’s too expensive." },
    { native: "Є знижка?", en: "Do you have a discount?" },
    { native: "Я просто дивлюся.", en: "I’m just looking." },
    { native: "Запакуйте як подарунок, будь ласка.", en: "Can you pack it as a gift?" },
    { native: "Де банкомат?", en: "Where is the ATM?" }],
  "Робота та навчання": [ { native: "У мене зустріч о десятій.", en: "I have a meeting at ten." },
    { native: "Давайте заплануємо дзвінок.", en: "Let’s schedule a call." },
    { native: "Я надішлю вам електронний лист.", en: "I’ll send you an email." },
    { native: "Я прикріпив файл.", en: "I attached the file." },
    { native: "Поділіться, будь ласка, посиланням.", en: "Can you share the link?" },
    { native: "Дедлайн завтра.", en: "The deadline is tomorrow." },
    { native: "Мені потрібно більше часу.", en: "I need more time." },
    { native: "Я завершив завдання.", en: "I finished the task." },
    { native: "Я працюю над новим проєктом.", en: "I’m working on a new project." },
    { native: "Зробімо перерву.", en: "Let’s take a break." },
    { native: "Чи могли б ви це пояснити?", en: "Could you explain this?" },
    { native: "Я цього не зрозумів.", en: "I didn’t catch that." },
    { native: "Я з вами згоден.", en: "I agree with you." },
    { native: "Я не згоден.", en: "I disagree." },
    { native: "Це має сенс.", en: "That makes sense." }],
  "Здоров’я": [{ native: "Мені зле.", en: "I don’t feel well." },
    { native: "У мене болить голова.", en: "I have a headache." },
    { native: "У мене болить горло.", en: "I have a sore throat." },
    { native: "У мене температура.", en: "I have a fever." },
    { native: "Мені потрібен лікар.", en: "I need a doctor." },
    { native: "Де аптека?", en: "Where is the pharmacy?" },
    { native: "Мені потрібні ці ліки.", en: "I need this medicine." },
    { native: "У мене алергія на пеніцилін.", en: "I’m allergic to penicillin." },
    { native: "Болить тут.", en: "It hurts here." },
    { native: "Скільки триватиме відновлення?", en: "How long will it take to recover?" },
    { native: "Викличте, будь ласка, швидку.", en: "Can you call an ambulance?" },
    { native: "Мені потрібен бинт.", en: "I need a bandage." },
    { native: "У мене запаморочення.", en: "I feel dizzy." },
    { native: "Мені потрібно відпочити.", en: "I need to rest." },
    { native: "Мені вже краще.", en: "I’m feeling better." }],
  "Дім та побут": [{ native: "Я орендую квартиру.", en: "I rent an apartment." },
    { native: "Я шукаю кімнату.", en: "I’m looking for a room." },
    { native: "Інтернет не працює.", en: "The internet doesn’t work." },
    { native: "Вода холодна.", en: "The water is cold." },
    { native: "Світло вимкнене.", en: "The light is off." },
    { native: "Чи можете це полагодити?", en: "Can you fix it?" },
    { native: "Мені потрібен сантехнік.", en: "I need a plumber." },
    { native: "Мені потрібен електрик.", en: "I need an electrician." },
    { native: "Де можна викинути сміття?", en: "Where can I throw the trash?" },
    { native: "Я прибираю кухню.", en: "I’m cleaning the kitchen." },
    { native: "Я перу одяг.", en: "I’m doing laundry." },
    { native: "Сусіди шумлять.", en: "The neighbors are noisy." },
    { native: "Я переїжджаю наступного місяця.", en: "I’m moving next month." },
    { native: "Я чекаю на доставку.", en: "I’m waiting for a delivery." },
    { native: "Ключ не працює.", en: "The key doesn’t work." }],
  "Технології та онлайн": [{ native: "Надішліть мені файл, будь ласка.", en: "Please send me the file." },
    { native: "Я не можу увійти.", en: "I can’t log in." },
    { native: "Я забув пароль.", en: "I forgot my password." },
    { native: "Я скину пароль.", en: "I will reset the password." },
    { native: "Сайт не працює.", en: "The website is down." },
    { native: "Оновіть сторінку.", en: "Refresh the page." },
    { native: "Натисніть кнопку.", en: "Click the button." },
    { native: "Завантажте документ.", en: "Upload the document." },
    { native: "Завантажте додаток.", en: "Download the app." },
    { native: "Оновіть програмне забезпечення.", en: "Update the software." },
    { native: "Увімкніть сповіщення.", en: "Enable notifications." },
    { native: "Вимкніть рекламу.", en: "Disable ads." },
    { native: "Увімкніть темний режим.", en: "Turn on dark mode." },
    { native: "Поділіться екраном.", en: "Share the screen." },
    { native: "Приєднайтеся до зустрічі.", en: "Join the meeting." }],
  "Емоції та спілкування": [ { native: "Мені це подобається.", en: "I like it." },
    { native: "Мені це не подобається.", en: "I don’t like it." },
    { native: "Я обожнюю цю пісню.", en: "I love this song." },
    { native: "Мені нудно.", en: "I’m bored." },
    { native: "Я втомився.", en: "I’m tired." },
    { native: "Я зараз зайнятий.", en: "I’m busy right now." },
    { native: "Я вільний сьогодні ввечері.", en: "I’m free this evening." },
    { native: "Давай зустрінемось завтра.", en: "Let’s meet tomorrow." },
    { native: "Подзвони мені пізніше.", en: "Call me later." },
    { native: "Напиши, коли приїдеш.", en: "Text me when you arrive." },
    { native: "Вибач за запізнення.", en: "Sorry for being late." },
    { native: "Вітаю!", en: "Congratulations!" },
    { native: "Удачі!", en: "Good luck!" },
    { native: "Не хвилюйся.", en: "Don’t worry." },
    { native: "До скорої зустрічі.", en: "See you soon." }],
};

// -----------------------------
// Служебные переменные
// -----------------------------
let activeTab = Object.keys(categories)[0];
let currentIndex = 0;
let score = 0;
let shuffledWords = [];

// -----------------------------
// DOM элементы (как и раньше)
// -----------------------------
const wordBox = document.getElementById("wordBox");
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const feedback = document.getElementById("feedback");
const correctAnswer = document.getElementById("correctAnswer");
const scoreBox = document.getElementById("score");

// -----------------------------
// Утилиты
// -----------------------------
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getActiveWords() {
  return categories[activeTab] || [];
}

function setControlsEnabled(enabled) {
  userInput.disabled = !enabled;
  checkBtn.disabled = !enabled;
}

// -----------------------------
// Рендер панели вкладок (создаём динамически)
// -----------------------------
function renderTabs() {
  // Если панели ещё нет — создаём
  let tabsBar = document.getElementById("tabsBar");
  if (!tabsBar) {
    tabsBar = document.createElement("div");
    tabsBar.id = "tabsBar";
    // Простые стили по месту, чтобы без CSS-файла
    tabsBar.style.display = "flex";
    tabsBar.style.flexWrap = "wrap";
    tabsBar.style.gap = "6px";
    tabsBar.style.marginBottom = "10px";

    // Вставим панель вкладок перед wordBox
    if (wordBox && wordBox.parentNode) {
      wordBox.parentNode.insertBefore(tabsBar, wordBox);
    } else {
      document.body.prepend(tabsBar);
    }
  } else {
    tabsBar.innerHTML = ""; // перерисовать
  }

  // Кнопки вкладок
  Object.keys(categories).forEach((name) => {
    const btn = document.createElement("button");
    btn.textContent = name;
    btn.classList.add("tab-btn");
    if (name === activeTab) {
      btn.classList.add("active");
    }

    btn.addEventListener("click", () => {
      if (activeTab !== name) {
        switchTab(name);
      }
    });

    tabsBar.appendChild(btn);
  });
}

// -----------------------------
// Переключение вкладки
// -----------------------------
function switchTab(name) {
  activeTab = name;
  // Сброс состояния
  currentIndex = 0;
  score = 0;
  scoreBox.textContent = `Счёт: ${score}`;
  feedback.textContent = "";
  correctAnswer.textContent = "";
  checkBtn.textContent = "Проверить";

  const words = getActiveWords();
  if (!words.length) {
    wordBox.textContent = "В этой вкладке пока нет слов. Добавь их в categories.";
    setControlsEnabled(false);
    renderTabs();
    return;
  }

  shuffledWords = shuffleArray([...words]);
  setControlsEnabled(true);
  userInput.value = "";
  userInput.focus();
  renderTabs();
  showNextWord();
}

// -----------------------------
// Показ следующего слова
// -----------------------------
function showNextWord() {
  const words = getActiveWords();

  if (!words.length) {
    wordBox.textContent = "В этой вкладке пока нет слов. Добавь их в categories.";
    setControlsEnabled(false);
    return;
  }

  if (currentIndex >= shuffledWords.length) {
    wordBox.textContent = "Готово! Все слова пройдены.";
    setControlsEnabled(false);

    // Сохранение результата по вкладке (как раньше, но добавим имя вкладки)
    const today = new Date().toISOString().split("T")[0];
    fetch("/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score, date: today, tab: activeTab }),
    });
    return;
  }

  const currentWord = shuffledWords[currentIndex];
  wordBox.textContent = currentWord.native;
  userInput.value = "";
  feedback.textContent = "";
  correctAnswer.textContent = "";
  userInput.focus();
}

// -----------------------------
// Проверка ответа
// -----------------------------
function checkAnswer() {
  const currentWord = shuffledWords[currentIndex];
  if (!currentWord) return; // защита

  const userAnswer = userInput.value.trim().toLowerCase();

  if (userAnswer === currentWord.en.toLowerCase()) {
    feedback.textContent = "✅ Правильно!";
    score++;
    scoreBox.textContent = `Счёт: ${score}`;
  } else {
    feedback.textContent = "❌ Неправильно!";
    correctAnswer.textContent = `Правильно: ${currentWord.en}`;
    // Не двигаем индекс и не запускаем таймер — ждём нажатия кнопки
    checkBtn.textContent = "Ок";
    return;
  }

  checkBtn.textContent = "Ок";
}

// -----------------------------
// Инициализация
// -----------------------------
function init() {
  renderTabs();
  switchTab(activeTab); // загрузить первую вкладку
}

document.addEventListener("DOMContentLoaded", init);

// -----------------------------
// Обработчики
// -----------------------------
checkBtn.addEventListener("click", () => {
  if (checkBtn.textContent === "Ок") {
    // перейти к следующему слову вручную
    currentIndex++;
    correctAnswer.textContent = "";
    feedback.textContent = "";
    checkBtn.textContent = "Проверить";
    showNextWord();
    return;
  }
  checkAnswer();
});

userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (checkBtn.textContent === "Ок") {
      currentIndex++;
      correctAnswer.textContent = "";
      feedback.textContent = "";
      checkBtn.textContent = "Проверить";
      showNextWord();
    } else {
      checkAnswer();
    }
  }
});