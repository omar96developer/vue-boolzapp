Vue.config.devtools = true

const vueApp = new Vue({
    el: '#app',
    data: {
        searchedUser: '',
        newMessage: '',
        activeChat: {},
        chatList: [
            {
                name: 'Michele',
                img: '_1',
                visible: true,
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        text: "Hai portato a spasso il cane?",
                        status: "sent"
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        text: "Ricordati di dargli da mangiare",
                        status: "sent",
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        text: "Tutto fatto!",
                        status: "received",
                    }
                ]
            },
            {
                name: 'Fabio',
                img: '_2',
                visible: true,
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        text: "Ciao come stai?",
                        status: "sent",
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received",
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        text: "Mi piacerebbe ma devo andare a fare la spesa.",
                        status: "sent",
                    }
                ]
            },
            {
                name: 'Samuele',
                img: '_3',
                visible: true,
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        text: "La Marianna va in campagna",
                        status: "received",
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent",
                    },
                    {
                        date: new Date('03/10/2021 14:01:54'),
                        text: "Ah scusa!",
                        status: "received",
                    }
                ]
            },
            {
                name: 'Luisa',
                img: '_6',
                visible: true,
                messages: [
                    {
                        date: new Date('01/10/2021 11:03:55'),
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent",
                    },
                    {
                        date: new Date('01/10/2021 17:04:00'),
                        text: "Si, ma preferirei andare al cinema",
                        status: "received",
                    },
                    
                ]
            }
        ]
    },
    methods: {
        createAvatarPath(avatar) {
            return `./img/avatar${avatar}.jpg`
        },
        setActiveChat(activeChat, i) {
            this.activeChat = activeChat
            this.activeChat.index = i
        },
        getLastMessage(index) {
            if (this.chatList.length === 0) {
                return ''
            }

            const lastMessageIndex = this.chatList[index].messages.length - 1
            return this.chatList[index].messages[lastMessageIndex].text
        },
        getLastMessageDate(index) {
            if (this.chatList.length === 0) {
                return ''
            }

            const lastMessageIndex = this.chatList[index].messages.length - 1
            return this.chatList[index].messages[lastMessageIndex].date.toLocaleString()
        },
        getLastMessageDateActiveUser() {
            if (this.activeChat.length === 0) {
                return ''
            }
            
            const lastMessageIndex = this.activeChat.messages.length - 1
            return this.activeChat.messages[lastMessageIndex].date.toLocaleString()
        },
        sendMessage() {
            this.addMessage(this.newMessage, "sent");
      
            setTimeout(() => {
                this.addMessage("Ok", "received");
            }, 1000)

            this.newMessage = ''
        },
        addMessage(text, status) {
            this.activeChat.messages.push({
                date: dayjs().format('DD/MM/YYYY, HH:mm:ss'),
                status,
                text
            })
        },
        filterUsers() {
            if (!this.searchedUser) {
                return this.chatList
            }

            return this.chatList.filter(user => {
                return user.name.toLowerCase().includes(
                    this.searchedUser.trim().toLowerCase()
                )
            })
        },
    },
    beforeMount() {
        this.activeChat = this.chatList[0]
        this.activeChat.index = 0
    }
})