$(() => {
    let socket = io.connect('http://localhost:3000')

    let message = $("#message")
    let username = $("#username")
    let send_message = $("#send_message")
    let send_username = $("#send_username")
    let chatroom = $("#chatroom")

    send_message.click(() => {
        socket.emit('new_message', { message: message.val() })
    })

    socket.on('new_message', (data) => {
        console.log(data)
        chatroom.append("<p class='message'>" + data.username + ": " + data.message + "</p>")
    })

    send_username.click(() => {
        console.log(username.val())
        socket.emit('change_username', { username: username.val() })
    })
})