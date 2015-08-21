$(function () {
    function getInt() {
        return Math.floor(Math.random() * 255);
    }
    function setColor() {
        $('#hello').attr('style', 'color: rgb(' + getInt() + ',' + getInt() + ',' + getInt() + ')');
        $('#hello').text(formatDate(new Date(), 'yyyy-mm-dd hh:mi:ss'));
    }
    function formatDate(date, sFormat) {
        sFormat = sFormat.toLowerCase();
        sFormat = sFormat.replace("yyyy", date.getFullYear());
        sFormat = sFormat.replace("yy", String(date.getFullYear()).substr(2))
        sFormat = sFormat.replace("mm", fullNum(date.getMonth() + 1))
        sFormat = sFormat.replace("dd", fullNum(date.getDate()));
        sFormat = sFormat.replace("hh", fullNum(date.getHours()));
        sFormat = sFormat.replace("mi", fullNum(date.getMinutes()));
        sFormat = sFormat.replace("ss", fullNum(date.getSeconds()));
        sFormat = sFormat.replace("SSS", fullNum(date.getMilliseconds()));
        return sFormat;
    }
    function fullNum(number) {
        if (number < 10) {
            number = "0" + number;
        }
        return number;
    }
    setInterval(setColor, 500);
});