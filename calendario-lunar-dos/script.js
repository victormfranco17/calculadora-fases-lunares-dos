// Fases lunares (solo para simulación)
const lunarPhases = [
    { date: '2023-01-07', phase: 'luna-llena' },
    { date: '2023-01-14', phase: 'cuarto-menguante' },
    { date: '2023-01-22', phase: 'luna-nueva' },
    { date: '2023-01-29', phase: 'cuarto-creciente' },
    { date: '2023-02-05', phase: 'luna-llena' },
    { date: '2023-02-12', phase: 'cuarto-menguante' },
    { date: '2023-02-20', phase: 'luna-nueva' },
    { date: '2023-02-27', phase: 'cuarto-creciente' },
    { date: '2023-03-07', phase: 'luna-llena' },
    { date: '2023-03-14', phase: 'cuarto-menguante' },
    { date: '2023-03-22', phase: 'luna-nueva' },
    { date: '2023-03-29', phase: 'cuarto-creciente' },
    { date: '2023-04-05', phase: 'luna-llena' },
    { date: '2023-04-12', phase: 'cuarto-menguante' },
    { date: '2023-04-20', phase: 'luna-nueva' },
    { date: '2023-04-27', phase: 'cuarto-creciente' },
    { date: '2023-05-05', phase: 'luna-llena' },
    { date: '2023-05-12', phase: 'cuarto-menguante' },
    { date: '2023-05-20', phase: 'luna-nueva' },
    { date: '2023-05-27', phase: 'cuarto-creciente' },
    { date: '2023-06-03', phase: 'luna-llena' },
    { date: '2023-06-10', phase: 'cuarto-menguante' },
    { date: '2023-06-18', phase: 'luna-nueva' },
    { date: '2023-06-25', phase: 'cuarto-creciente' },
    { date: '2023-07-03', phase: 'luna-llena' },
    { date: '2023-07-10', phase: 'cuarto-menguante' },
    { date: '2023-07-18', phase: 'luna-nueva' },
    { date: '2023-07-25', phase: 'cuarto-creciente' },
    { date: '2023-08-01', phase: 'luna-llena' },
    { date: '2023-08-08', phase: 'cuarto-menguante' },
    { date: '2023-08-16', phase: 'luna-nueva' },
    { date: '2023-08-23', phase: 'cuarto-creciente' },
    { date: '2023-08-31', phase: 'luna-llena' },
    { date: '2023-09-07', phase: 'cuarto-menguante' },
    { date: '2023-09-15', phase: 'luna-nueva' },
    { date: '2023-09-22', phase: 'cuarto-creciente' },
    { date: '2023-09-30', phase: 'luna-llena' },
    { date: '2023-10-06', phase: 'cuarto-menguante' },
    { date: '2023-10-14', phase: 'luna-nueva' },
    { date: '2023-10-21', phase: 'cuarto-creciente' },
    { date: '2023-10-29', phase: 'luna-llena' },
    { date: '2023-11-05', phase: 'cuarto-menguante' },
    { date: '2023-11-13', phase: 'luna-nueva' },
    { date: '2023-11-20', phase: 'cuarto-creciente' },
    { date: '2023-11-28', phase: 'luna-llena' },
    { date: '2023-12-04', phase: 'cuarto-menguante' },
    { date: '2023-12-12', phase: 'luna-nueva' },
    { date: '2023-12-19', phase: 'cuarto-creciente' },
    { date: '2023-12-27', phase: 'luna-llena' },
    // Agrega más fechas y fases lunares según tus necesidades
];

// Días recomendados para cortarse el cabello y sembrar
const hairCutDays = ['2023-07-23', '2023-07-24', '2023-07-25', '2023-07-26'];
const plantingDays = ['2023-07-01', '2023-07-02', '2023-07-18', '2023-07-19', '2023-07-20', '2023-07-28', '2023-07-29'];

// Obtener el elemento del calendario
const calendar = document.getElementById('calendar');

// Crear el calendario lunar mensual
function createLunarCalendar(year, month) {
    const firstDay = new Date(year, month - 1, 1).getDay();
    const totalDays = new Date(year, month, 0).getDate();

    const monthDiv = document.createElement('div');
    monthDiv.classList.add('month');

    const monthTitle = document.createElement('h2');
    monthTitle.textContent = getMonthName(month) + ' ' + year;
    monthDiv.appendChild(monthTitle);

    const weekDiv = document.createElement('div');
    weekDiv.classList.add('week');

    // Agregar días de la semana
    const daysOfWeek = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    for (let i = 0; i < 7; i++) {
        const dayOfWeek = document.createElement('div');
        dayOfWeek.classList.add('day');
        dayOfWeek.textContent = daysOfWeek[i];
        weekDiv.appendChild(dayOfWeek);
    }
    monthDiv.appendChild(weekDiv);

    // Agregar días del mes
    let dayCount = 1;
    for (let i = 0; i < 6; i++) {
        const weekDiv = document.createElement('div');
        weekDiv.classList.add('week');

        for (let j = 0; j < 7; j++) {
            const dayDiv = document.createElement('div');
            dayDiv.classList.add('day');

            if (i === 0 && j < firstDay) {
                dayDiv.textContent = '';
            } else if (dayCount <= totalDays) {
                dayDiv.textContent = dayCount;

                const currentDate = new Date(year, month - 1, dayCount).toISOString().split('T')[0];
                const lunarPhase = getLunarPhase(currentDate);
                dayDiv.classList.add(lunarPhase.phase);

                if (hairCutDays.includes(dayCount)) {
                    dayDiv.title = 'Crecimiento fuerte del cabello';
                }

                if (plantingDays.includes(dayCount)) {
                    dayDiv.title = 'Crecimiento rápido del cabello';
                }

                dayCount++;
            }

            weekDiv.appendChild(dayDiv);
        }

        monthDiv.appendChild(weekDiv);
    }

    calendar.appendChild(monthDiv);
}

// Obtener el nombre del mes
function getMonthName(month) {
    const months = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return months[month - 1];
}

// Obtener la fase lunar para una fecha específica
function getLunarPhase(date) {
    const lunarPhase = lunarPhases.find(phase => phase.date === date);
    return lunarPhase ? lunarPhase.phase : '';
}

// Crear calendario lunar mensual
createLunarCalendar(2023, 1); // Ejemplo: Enero 2.023
createLunarCalendar(2023, 2); // Ejemplo: Febrero 2.023
createLunarCalendar(2023, 3); // Ejemplo: Marzo 2.023
createLunarCalendar(2023, 4); // Ejemplo: Abril 2.023
createLunarCalendar(2023, 5); // Ejemplo: Mayo 2.023
createLunarCalendar(2023, 6); // Ejemplo: Junio 2.023
createLunarCalendar(2023, 7); // Ejemplo: Julio 2.023
createLunarCalendar(2023, 8); // Ejemplo: Agosto 2.023
createLunarCalendar(2023, 9); // Ejemplo: Septiembre 2.023
createLunarCalendar(2023, 10); // Ejemplo: Otubre 2.023
createLunarCalendar(2023, 11); // Ejemplo: Noviembre 2.023
createLunarCalendar(2023, 12); // Ejemplo: Diciembre 2.023
