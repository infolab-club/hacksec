/**
 * Функция определения поведения UI элементов.
 */
function setOnClickListeners() {
    // Кнопка "Открыть камеру"
    document.getElementById('button_open_camera').addEventListener('click', () => {
        startScan();
        openPage('camera')
        startGame("");
    });
    //  document.getElementById('button_close').addEventListener('click', () => {
    //     openPage('project');
    // });
    // Кнопка "Начать играть"
    document.getElementById('button_open_game').addEventListener('click', () => {
        openPage('game');
        // startGame("");
    });
    // Кнопка "Взломать" (проект)
    document.getElementById('button_hack').addEventListener('click', () => {
        isSuccessful = onCheckButton();
        if (isSuccessful) {
            openPage('project');
            showProjectDescription(wayco);
        }
    });
    // Кнопка "Закрыть камеру"
    document.getElementById('button_close_camera').addEventListener('click', () => {
        openPage('profile');
    });
    // Кнопка "Завершить игру"
    document.getElementById('button_close_game').addEventListener('click', () => {
        openPage('project');
    });
    // Кнопка "Закрыть проект"
    document.getElementById('button_close_project').addEventListener('click', () => {
        openPage('profile');
    });

    document.getElementById('button_open_manifesto').addEventListener('click', () => {
        openPage('project');
        showProjectDescription(manifesto);
    });

    document.getElementById('button_open_wayco').addEventListener('click', () => {
        openPage('project');
        showProjectDescription(wayco);
    });

    document.getElementById('button_open_recycling_starter').addEventListener('click', () => {
        openPage('project');
        showProjectDescription(recyclingStarter);
    });

    document.getElementById('button_open_isc').addEventListener('click', () => {
        openPage('project');
        showProjectDescription(isc);
    });

    document.getElementById('button_open_rush_zone').addEventListener('click', () => {
        openPage('project');
        showProjectDescription(rushZone);
    });

}
