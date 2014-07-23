//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
        console.log(phone, message);
    },

    receive_message: function (json_message) {
        if (typeof this.process_received_message === 'function') {
            this.process_received_message(json_message);
        }
    },

    process_received_message: function (json_message) {

        var duanxin = json_message.messages[0].message.replace(/\s/g, "");


//        提取短信中的信息，创建messages数组，将提取出来的信息已数组形式存放在messages中
        var activity = JSON.parse(localStorage.getItem('activities'))
        var message = {"name": "name", "phone": "phone"}


        message.name = duanxin.substr(2).trim()
        message.phone = json_message.messages[0].phone
//       console.log(activity[0].messages[0].phone)
//console.log(message.phone)
        if (duanxin.search(/bm/i) == 0) {
            for (var i = 0; i < activity.length; i++) {
                var oo = localStorage.getItem('ttt')
                if (activity[i].tureth == "true") {
//                console.log(activity[i].messages.length)
                    if (activity[i].messages.length == 0) {
                        activity[i].messages.unshift(message);
                        localStorage.setItem("activities", JSON.stringify(activity));
                        native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，报名成功！")
                        refresh_pages()
                    }
                    else {
                        for (var k = 0; k < activity[i].messages.length; k++) {
//                        console.log("fsd")
                            if (message.phone == activity[i].messages[k].phone) {
                                native_accessor.send_sms(json_message.messages[0].phone, "报名已成功，请勿重复报名")

                                return;
                            }

                        }
                        activity[i].messages.unshift(message);
                        localStorage.setItem("activities", JSON.stringify(activity));
                        native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，报名成功！")
                        refresh_pages()

                        return;

                    }
                    return;
                }

            }
            native_accessor.send_sms(json_message.messages[0].phone, "报名未开始，请耐心等待");
//        break;

        }
    }
}
function refresh_pages() {
    var refresh_page = document.getElementById('wrapper')
    if (refresh_page) {
        var scope = angular.element(refresh_page).scope();
        scope.$apply(function () {
            scope.diaoyong();
        })
    }
}

function notify_message_received(message_json) {
    //console.log(JSON.stringify(message_json));
    //JSON.stringify(message_json);
    //alert(JSON.stringify(message_json.messages));
    native_accessor.receive_message(message_json);
    //phone_number=message_json.messages[0].phone;
}
