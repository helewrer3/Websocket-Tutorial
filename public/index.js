let socket = io();
$('#loginBox').show()
$('#chatBox').hide()

$('#btnStrt').click(() => {
    socket.emit('login', {
        username: $('#inpUser').val(),
        password: $('#inpPass').val()
    })
})

socket.on('logged_in', () => {
    $('#loginBox').hide()
    $('#chatBox').show()
})

$('#btnSnd').click(() => {
    socket.emit('msg_send', {
        to: $('#inpUserTo').val(),
        msg: $('#inpMsg').val()
    })
})

socket.on('msg_rcvd', (data) => {
    console.log(data);
    $('#lstMsg').append($('<li>').text(`[${data.from}]: ${data.msg}`))
})

socket.on('login_failed', () => {
    window.alert('Login Failed')
})