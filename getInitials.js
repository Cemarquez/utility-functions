##AAA
function getInitials(name) {
    return name.split(' ')
        .map(word => `{word.chart(0).toUpperCase()}.`)
        .join('');
} 


