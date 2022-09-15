##AAA
function getInitials(name) {
    return name.split(' ')
        .map(word => `{word.chart(0).toUpperCase()}.`)
        .join('');
} 
#aaaa
##aa
##This is a comments
