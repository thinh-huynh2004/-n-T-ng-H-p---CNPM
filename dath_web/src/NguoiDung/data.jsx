
export const book = [
    {
        img: "./assets/img/harry-potter.jpg",
        Bname: "Harry Potter",
        author: "J.K.Rowling",
        BId: "abc1432",
        Date_publish: "01-01-2010",
        status: "Có thể mượn",
    },
    {
        img: "./assets/img/database.jpg",
        Bname: "Fundamental of database systems 7th edition",
        author: "Elmasri & Navathe",
        BId: "abc1433",
        Date_publish: "01-01-2020",
        status: "Không thể mượn",
    },
    // Add more books as needed
];

export const bookReturn = [
    {
        img: "./assets/img/harry-potter.jpg",
        Bname: "Harry Potter and the Deathly Hallows",
        author: "J.K.Rowling",
        BId: "abc1432",
        borrowDate: "15/10/2024",
        returnDate: "29/10/2024",
        status: "Đã hoàn trả",
        amount: 1
    },
    {
        img: "./assets/img/database.jpg",
        Bname: "Fundamental of Database Systems 7th Edition",
        author: "Elmasri & Navathe",
        BId: "abc1433",
        borrowDate: "15/10/2024",
        returnDate: "29/10/2024",
        status: "Chưa hoàn trả",
        amount: 1
    },
    // Add more returned books as needed
];

export const BookBorrow = [
    {
        img: "./assets/img/database.jpg",
        Bname: "Fundamental of Database Systems 7th Edition",
        author: "Elmasri & Navathe",
        BId: "abc1433",
        borrowDate: "15/10/2024",
        returnDate: "30/10/2024",
        status: "Chưa hoàn trả",
        amount: "1",
        amountRenew: "1",
    },
];

export const RegistBorrow = [
    {
        img: "./assets/img/database.jpg",
        Bname: "Fundamental of Database Systems 7th Edition",
        author: "Elmasri & Navathe",
        BId: "abc1433",
        borrowDate: "15/10/2024",
        returnDate: "30/10/2024",
        status: "Không thể mượn",
        amount: "1",
    },
    {
        img: "./assets/img/harry-potter.jpg",
        Bname: "Harry Potter and the Deathly Hallows",
        author: "J.K.Rowling",
        BId: "abc1432",
        borrowDate: "15/10/2024",
        returnDate: "29/10/2024",
        status: "Có thể mượn",
        amount: "1",
    },
];

export const ReceivedMessage = [
    {
        img: "./assets/img/Avatar.png",
        senderName: "Quản lý thư viện",
        senderTime: "5:40 PM",
        content: "Thông báo về việc gia hạn"
    },
    {
        img: "./assets/img/Avatar.png",
        senderName: "Quản lý thư viện",
        senderTime: "5:40 PM",
        content: "Thông báo về việc gia hạn"
    },
    {
        img: "./assets/img/Avatar.png",
        senderName: "Quản lý thư viện",
        senderTime: "5:40 PM",
        content: "Thông báo về việc gia hạn"
    },
    {
        img: "./assets/img/Avatar.png",
        senderName: "Quản lý thư viện",
        senderTime: "5:40 PM",
        content: "Thông báo về việc gia hạn"
    },
    {
        img: "./assets/img/Avatar.png",
        senderName: "Quản lý thư viện",
        senderTime: "5:40 PM",
        content: "Thông báo về việc gia hạn"
    }
]

export const NoticeToUser = [
    {
        title: "Thông báo về một số sách sắp đến hạn hoàn trả",
        senderName: "Nguyễn Văn A",
        senderDate: "25/10/2024"
    },
    {
        title: "Thông báo về một số sách sắp đến hạn hoàn trả",
        senderName: "Nguyễn Văn A",
        senderDate: "25/10/2024"
    },
    {
        title: "Thông báo về một số sách sắp đến hạn hoàn trả",
        senderName: "Nguyễn Văn A",
        senderDate: "25/10/2024"
    },
    {
        title: "Thông báo về một số sách sắp đến hạn hoàn trả",
        senderName: "Nguyễn Văn A",
        senderDate: "25/10/2024"
    }
]