import {Review} from "./type.tsx";

export const reviewData: Review[] = [
    {
        id: 1,
        title: "테스트 제목 test title111111111111111111111111111111111111111111111111111111111111111111",
        content: "<p>content</p><img src='https://www.shutterstock.com/image-photo/ginger-cat-paw-on-table-600nw-2401009167.jpg'/><p>content</p><img src='https://www.treehugger.com/thmb/gOTFHVe3iTBVOhunhqSj2_TK86k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-922841020-e4bf98b5345042c0b04b3884a2ed91a4.jpg'/><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>",
        reviewTags: ["tag1", "tag2", "tag3", "tag4", "tag5", "tag6", "tag7", "tag8", "tag9", "tag10", "tag11"],
        member: {
            email: "test@example.com",
            nickname: "test user"
        },
        like: 10,
        createDate: new Date("2024-07-11"),
        updateDate: new Date("2024-07-11"),
    },
    {
        id: 2,
        title: "테스트 제목 test",
        content: "<p>content</p><img src='https://www.shutterstock.com/image-photo/ginger-cat-paw-on-table-600nw-2401009167.jpg'/><p>content</p><img src='https://www.treehugger.com/thmb/gOTFHVe3iTBVOhunhqSj2_TK86k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-922841020-e4bf98b5345042c0b04b3884a2ed91a4.jpg'/><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>",
        reviewTags: ["tag1", "tag2", "tag3"],
        member: {
            email: "test@example.com",
            nickname: "test user"
        },
        like: 10,
        createDate: new Date("2024-07-11"),
        updateDate: new Date("2024-07-11"),
    },
    {
        id: 3,
        title: "테스트 제목 test",
        content: "<p>content</p><img src='https://www.shutterstock.com/image-photo/ginger-cat-paw-on-table-600nw-2401009167.jpg'/><p>content</p><img src='https://www.treehugger.com/thmb/gOTFHVe3iTBVOhunhqSj2_TK86k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-922841020-e4bf98b5345042c0b04b3884a2ed91a4.jpg'/><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>",
        reviewTags: ["tag1", "tag2", "tag3"],
        member: {
            email: "test@example.com",
            nickname: "test user"
        },
        like: 10,
        createDate: new Date("2024-07-11"),
        updateDate: new Date("2024-07-11"),
    },
    {
        id: 4,
        title: "테스트 제목 test",
        content: "<p>content</p><img src='https://www.shutterstock.com/image-photo/ginger-cat-paw-on-table-600nw-2401009167.jpg'/><p>content</p><img src='https://www.treehugger.com/thmb/gOTFHVe3iTBVOhunhqSj2_TK86k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-922841020-e4bf98b5345042c0b04b3884a2ed91a4.jpg'/><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>",
        reviewTags: ["tag1", "tag2", "tag3"],
        member: {
            email: "test@example.com",
            nickname: "test user"
        },
        like: 10,
        createDate: new Date("2024-07-11"),
        updateDate: new Date("2024-07-11"),
    },

]