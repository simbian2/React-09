let id; // 전역변수 선언
let user_array = [];
let admin_array = [];
io.sockets.on('connection', (socket) => {

    let cookies = socket.handshake.headers.cookie;
    if (cookies != undefined) {
        let cookieArr = cookies.split(';');
        cookieArr.forEach(async v => {
            let [key, value] = v.trim().split('=');
            if (key == 'AccessToken') {
                let payload = value.split('.')[1];
                let { userid, exp } = JSON.parse(Buffer.from(payload, 'base64').toString());

                let admin_check = await areYouAdmin(userid)
                console.log('admin_check', admin_check)
                if (admin_check==1){
                    admin_array.push({socketID:socket.id, userid,}); console.log('is admin');
                } else {
                    user_array.push({socketID:socket.id, userid,}); console.log('is user');
                   
                    let data = {socketID:socket.id, userid,}
                    if (admin_array.length > 0){
                        admin_array.forEach(v =>{
                            //0-0. 일단 접속을 한다 E 이 때 어드민 한테만 접속 정보를 넘긴다.
                            socket.to(v.socketID).emit('Userin',data)
                        })
                    }
                }
                console.log('user_array=',user_array)
                console.log('admin_array=',admin_array)
            }
        })

        let chat_user;
        let chat_socketID
        //0-1. 접속 정보를 클릭 시 정보를 보낸다
        //Please의 존재 이유
        socket.on('Please', data=>{
            console.log('Please를 통해 온 userid, socketID',data.userid, data.socketID)
            chat_user = data.userid;
            chat_socketID = data.socketID;
        })

        //2-22. 자기가 쓴 글이 뜨게 한다
        // 메세지 받기 ---------------222222222
        socket.on('send',async (data) => {
            console.log('보낸 메세지 받은 data', data);
            let {msg, socketID} = data;
            let ADMIN = admin_array[admin_array.length-1].socketID;
            let userid;

            for (let i = 0; i <user_array.length; i++){
                console.log('socketID==', socketID)
                console.log('user_arry==',user_array[i])
                if ( user_array[i].socketID == socketID ){
                    userid = user_array[i].userid
                    break;

                } else {
                    userid = admin_array[0].userid
                }
            }

            //3-33.  관리자가 보낸 것은 유저에게, 유저가 보낸 것은 관리자에게 E
            let admin_check = await areYouAdmin(userid)
            if (admin_check==1){
                //관리자 -> 사용자 
                //Please의 존재 이유
                console.log('admin_check=1일떄ㅒㅒ ')
                socket.to(chat_socketID).emit('msg',msg)
            } else {
                // 사용자 -> 관리자 
                console.log('admin_check=1 아닐 떄 ㅒㅒ ')
                console.log('admin 한테 메세지 보내기-->',ADMIN)
                socket.to(ADMIN).emit('msg', msg);
            }
        })

    }
    
})

async function areYouAdmin(userid){
    let user_level = await users.findOne({where:{userid,}})
    return user_level.dataValues.admin;
}

const chat = io.of('/chat')
chat.on('connection', socket=>{

})
