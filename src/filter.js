import moment from 'moment';

const config = {
    currency(value) {
        if(isNaN(value)){
            return value;
        } else {
            return value.toLocaleString('id-ID')
        }
    },
    capitalize(value){
        const words = value.split(" ");

        for (let i = 0; i < words.length; i++) {
            if(words[i][0]){
                words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
            }
        }

        return words.join(" ");
    },
    truncate(text, length = 20, clamp = '...') {
        var node = document.createElement('div');
        node.innerHTML = text;
        var content = node.textContent;
        return content.length > length ? content.slice(0, length) + clamp : content;
    },
    ucword(value) {
        if (!value) return '';
        value = value.toString();
        value = value.toLowerCase();
        return (value + '').replace(/^([a-z])|\s+([a-z])/g, function ($1) {
            return $1.toUpperCase();
        });
    },
    formatDate(value) {
        if (value) {
            return moment(value).format("DD MMM YYYY");
        }
    },
    formatDayDateTime(value) {
        if (value) {
            moment.updateLocale("en",{
                weekdays : [
                    "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"
                ],
            })
            return moment(value).format("dddd, DD MMM HH:mm");
        }
    },
    formatDateTime(value) {
        if (value) {
            return moment(value).format("DD MMM YYYY hh:mm");
        }
    },
    formatTime(value) {
        if (value) {
            return moment(value).format("hh:mm");
        }
    },
}

export default config;
