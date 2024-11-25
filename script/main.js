document.addEventListener('DOMContentLoaded', function() {
    const monthsBr = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    const tableDays = document.getElementById('dias');

    function GetDaysCalendar(mes, ano) {
        document.getElementById('mes').innerHTML = monthsBr[mes];
        document.getElementById('ano1').innerHTML = ano;

        let firstDayofWeek = new Date(ano, mes, 1).getDay() - 1; 
        let dtNow = new Date();
        let getLastDayThisMonth = new Date(ano, mes + 1, 0).getDate();
        
        for (let i = -firstDayofWeek, index = 0; i < (42 - firstDayofWeek); i++, index++) {
            let dt = new Date(ano, mes, i);
            let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.classList.remove('mes-anterior');
            dayTable.classList.remove('proximo-mes');
            dayTable.classList.remove('dia-atual');
            dayTable.innerHTML = dt.getDate();
            
            if (dt.getFullYear() == dtNow.getFullYear() && dt.getMonth() == dtNow.getMonth() && dt.getDate() == dtNow.getDate()) {
                dayTable.classList.add('dia-atual');
            }
            
            if (i < 1) {
                dayTable.classList.add('mes-anterior');
            }
            if (i > getLastDayThisMonth) {
                dayTable.classList.add('proximo-mes');
            }
        }
    }

    let now = new Date();
    let mes = now.getMonth();
    let ano = now.getFullYear();
    GetDaysCalendar(mes, ano);

    const botao_proximo = document.getElementById('btn_prev');
    const botao_anterior = document.getElementById('btn_ant');

    botao_proximo.onclick = function() {
        mes++;
        if (mes > 11) {
            mes = 0;
            ano++;
        }
        GetDaysCalendar(mes, ano);
    }

    botao_anterior.onclick = function() {
        mes--;
        if (mes < 0) {
            mes = 11;
            ano--;
        }
        GetDaysCalendar(mes, ano);
    }
});
