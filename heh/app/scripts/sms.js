//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"bm仝键","phone":"18733171780"}]})
//notify_message_received({"messages":[{"create_date":"Tue Jan 15 15:28:44 格林尼治标准时间+0800 2013","message":"jj308","phone":"18733171780"}]})
var native_accessor = {
    send_sms: function (phone, message) {
//        native_access.send_sms({"receivers":[{"name":'name', "phone":phone}]}, {"message_content":message});
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
        var activity = JSON.parse(localStorage.getItem('activities')) || []
        var message = {"name": "name", "phone": "phone"}   //竞价时，name就是价格
        var shus = JSON.parse(localStorage.getItem('shus'))
        var oo = localStorage.getItem('ttt')

        message.name = duanxin.substr(2).trim()
        message.phone = json_message.messages[0].phone
//       console.log(activity[0].messages[0].phone)
//       console.log(message.phone)
        //报名收发短信
        if (duanxin.search(/bm/i) == 0) {
            for (var i = 0; i < activity.length; i++) {
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
        }


        //竞价收发短信
        if (duanxin.search(/jj/i) == 0) {
            if (shus[0].color == "true") //判断竞价是否开始
            {
                if (shus[0].messages.length == 0) {
                    for (var a = 0; a < activity.length; a++)//遍历报名数组
                    {
                        if (activity[a].activity == oo)//找到当前报名活动
                        {
                            var action = _.find(activity, function (act) {
                                return act.activity == localStorage.ttt
                            }).messages
                            var even = _.find(action, function (act) {
                                return act.phone == message.phone
                            })
                            if (even)//判断竞价人是否报名该活动
                            {
                                console.log(2)
                                shus[0].messages.unshift(message)
                                localStorage.setItem("shus", JSON.stringify(shus))
                                native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，竞价成功!")
                                refresh_pages()
//                              break
                            }
                            else {
                                native_accessor.send_sms(json_message.messages[0].phone, "未报名活动，不能参加竞价1")
                                break
                            }
                        }
                    }
                }
                else {

                    for (var i = 0; i < shus[0].messages.length; i++) {
                        if (message.phone == shus[0].messages[i].phone) {
//                            native_accessor.send_sms(json_message.messages[0].phone, "报名已成功，请勿重复报名")
                            native_accessor.send_sms(json_message.messages[0].phone, "竞价已成功，请勿重复竞价")
                            return;
                        }
                        else {

                            for (var a = 0; a < activity.length; a++)//遍历活动列表
                            {

                                if (activity[a].activity == oo)//找到当前活动
                                {
                                    var action = _.find(activity, function (act) {
                                        return act.activity == localStorage.ttt
                                    }).messages
//                                    console.log(action)
                                    var even = _.find(action, function (act) {
                                        return act.phone == message.phone
                                    })
                                    if (even)//判断竞价人是否,li8报名
                                    {
                                        shus[0].messages.unshift(message)
                                        localStorage.setItem("shus", JSON.stringify(shus))
                                        native_accessor.send_sms(json_message.messages[0].phone, "恭喜您，竞价成功！")
                                        refresh_pages()
//                                          break;
                                    }
                                    else {
                                        native_accessor.send_sms(json_message.messages[0].phone, "未报名活动，不能参加竞价")
                                        return
                                    }

                                }
                            }

                            break
                        }
                    }
                }
            }
            else {
                native_accessor.send_sms(json_message.messages[0].phone, "竞价未开始，请耐心等待");
            }
        }
    }
}
//每当有报名信息收录时，页面自动刷新
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
