var manifesto = 'Manifesto';
var wayco = 'WayCo';
var recyclingStarter = 'Recycling Starter';
var isc = 'ISC';
var rushZone = 'Rush Zone';

var img1 = document.getElementById('project_screen1');
var img2 = document.getElementById('project_screen2');
var img3 = document.getElementById('project_screen3');

function showProjectDescription(project) {
    text = ""
    switch (project) {
        case manifesto:
            text = "Manifesto — коммерческий проект, разрабатываемый совместно с компанией Моторика " +
                "(занимается производством бионических протезов).\n" +
                "Мы разработали приложение для смарт-часов, которое позволяет настраивать протезы и " +
                "отображает информацию о них на часах. Такие часы будут встроены в специальные типы протезов, " +
                "изготовляемых на заказ. Взаимодействие с протезом происходит по Bluetooth.\n" +
                "\n" +
                "ОС: Tizen, приложение писалось на JavaScript.\n" +
                "На данный момент мы продолжаем выпустать обновления, добавляя новые функции " +
                "(последнее — контроль за состоянием пользователя и отправка этой информации " +
                "медицинским экспертам компании).\n" +
                "\n" +
                "Нам нужны JavaScript разработчики.\n";
            img1.src = 'src/img/screenshots/manifest0.jpg';
            img2.src = 'src/img/screenshots/manifest1.jpg';
            img3.src = 'src/img/screenshots/manifest2.jpg';
            break;
        case wayco:
            text = "WayCo — наш стартап по удалённому заказу кофе.\n" +
                "Перед тем, как пойти на работу/учёбы, ты можешь сделать заказ в кофейне " +
                "через наш сервис к определённому времени. И когда ты подойдёшь, " +
                "просто забираешь заказ без необходимости стоять в очереди или ждать его приготовления.\n" +
                "Кроме того, есть возможность динамического определения времени прибытия в кофейню " +
                "по геолокации и дорожной ситуации.";
            img1.src = 'src/img/screenshots/wayco0.jpg';
            img2.src = 'src/img/screenshots/wayco1.jpg';
            img3.src = 'src/img/screenshots/wayco2.jpg';
            break;
        case recyclingStarter:
            text = "Recycling Starter — сервис для автоматизации раздельного сбора отходов в университетах. " +
                "Он позволяет отмечать заполненность контейнеров для РСО и автоматически вызывать перерабатывающие " +
                "компании, которые очищают контейнеры.\n" +
                "С 10 августа он запуститься на базе инфраструктуры ИТМО.GREEN в первом корпусе. Кроме того, осенью " +
                "сервис запуститься в ТюмГУ.\n" +
                "\n" +
                "Сервис состоит из многих частей:\n" +
                "* Frontend — HTML5 / CSS3 / JavaScript / React\n" +
                "* Backend — Python Flask\n" +
                "* iOS — Swift\n" +
                "* Android — Java\n" +
                "\n" +
                "Данный проект выигрывал в экологическом хакатоне и кейс-чемпионате.\n" +
                "\n" +
                "Но он всё равно испытывает потребность в разработчиках: Frontend, Backend и iOS т.к. работы много."
            img1.src = 'src/img/screenshots/restarter0.jpg';
            img2.src = 'src/img/screenshots/restarter1.jpg';
            img3.src = 'src/img/screenshots/restarter2.jpg';
            break;
        case isc:
            text = "ISC — Android приложение предназначенное для лаборантов центра инфохимии. " +
                "С помощью него они могут подключаться по Bluetooth к портативным потенциостатам. " +
                "И после этого проводить различные замеры.\n" +
                "Данные при замере в реалтайме (опять же по Bluetooth) передаются на смартфон/планшет " +
                "и отрисовываются на графиках.\n" +
                "Также в приложении можно просматривать историю замеров и выгружать их в облако.\n" +
                "\n" +
                "Приложение написано на Java.";
            img1.src = 'src/img/screenshots/isc0.jpg';
            img2.src = 'src/img/screenshots/isc1.jpg';
            img3.src = 'src/img/screenshots/isc2.jpg';
            break;
        case rushZone:
            text = "Казуальная мобильная игра — коммерческий проект с YouTube каналом \"Ну и бред\"." +
                " Смесь ранера и шутера на апокалипсическую тематику.\n" +
                "Наш клуб отвечает за его разработку, канал за продвижение игры.\n" +
                "Монетизация строиться на рекламе за вознаграждение и внутриигровых покупках.\n" +
                "\n" +
                "Это один из предстоящих проектов, которые ещё не публиковались в Info Lab.\n" +
                "На данный момент там прорабатывается концепт, создаются 3D модели, " +
                "рисуются арты и дизайн интерфейса.\n" +
                "\n" +
                "На проект нужны будут Unity-разработчики (C#), дизайнеры, " +
                "художники, project manager, 3D модельщики, геймдизайнеры, композиторы.";
            img1.src = 'src/img/screenshots/rush0.jpg';
            img2.src = 'src/img/screenshots/rush1.jpg';
            img3.src = 'src/img/screenshots/rush2.jpg';
            break;
    }
    document.getElementById('project_description').textContent = text;
    document.getElementById('project_title').textContent = project;
}