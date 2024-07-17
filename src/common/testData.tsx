import {Review} from "./type.tsx";

export const reviewData: Review[] = [
    {
        id: 1,
        title: "테스트 제목 test title111111111111111111111111111111111111111111111111111111111111111111",
        content: "<p>content</p><img src='https://www.shutterstock.com/image-photo/ginger-cat-paw-on-table-600nw-2401009167.jpg'/><p>content</p><img src='https://www.treehugger.com/thmb/gOTFHVe3iTBVOhunhqSj2_TK86k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-922841020-e4bf98b5345042c0b04b3884a2ed91a4.jpg'/><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>",
        reviewTags: [
            {id: 1, tag: "tag1"},
            {id: 2, tag: "tag2"},
            {id: 3, tag: "tag3"},
            {id: 4, tag: "tag4"},
            {id: 5, tag: "tag5"},
            {id: 6, tag: "tag6"},
            {id: 7, tag: "tag7"},
            {id: 8, tag: "tag8"},
            {id: 9, tag: "tag9"},
            {id: 10, tag: "tag10"},
        ],
        member: {
            email: "test@example.com",
            nickname: "test user"
        },
        likeCount: 10,
        createDate: new Date("2024-07-11"),
        updateDate: new Date("2024-07-11"),
    },
    {
        id: 2,
        title: "테스트 제목 test",
        content: "<p>content</p><img src='https://www.shutterstock.com/image-photo/ginger-cat-paw-on-table-600nw-2401009167.jpg'/><p>content</p><img src='https://www.treehugger.com/thmb/gOTFHVe3iTBVOhunhqSj2_TK86k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-922841020-e4bf98b5345042c0b04b3884a2ed91a4.jpg'/><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>",
        reviewTags: [
            {id: 11, tag: "tag1"},
            {id: 12, tag: "tag2"},
            {id: 13, tag: "tag3"},
        ],
        member: {
            email: "test@example.com",
            nickname: "test user"
        },
        likeCount: 10,
        createDate: new Date("2024-07-11"),
        updateDate: new Date("2024-07-11"),
    },
    {
        id: 3,
        title: "테스트 제목 test",
        content: "<p>content</p><img src='https://www.shutterstock.com/image-photo/ginger-cat-paw-on-table-600nw-2401009167.jpg'/><p>content</p><img src='https://www.treehugger.com/thmb/gOTFHVe3iTBVOhunhqSj2_TK86k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-922841020-e4bf98b5345042c0b04b3884a2ed91a4.jpg'/><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>",
        reviewTags: [
            {id: 14, tag: "tag1"},
            {id: 15, tag: "tag2"},
            {id: 16, tag: "tag3"},
        ],
        member: {
            email: "test@example.com",
            nickname: "test user"
        },
        likeCount: 10,
        createDate: new Date("2024-07-11"),
        updateDate: new Date("2024-07-11"),
    },
    {
        id: 4,
        title: "테스트 제목 test",
        content: "<p>content</p><img src='https://www.shutterstock.com/image-photo/ginger-cat-paw-on-table-600nw-2401009167.jpg'/><p>content</p><img src='https://www.treehugger.com/thmb/gOTFHVe3iTBVOhunhqSj2_TK86k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-922841020-e4bf98b5345042c0b04b3884a2ed91a4.jpg'/><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p><p>content</p>",
        reviewTags: [
            {id: 17, tag: "tag1"},
            {id: 18, tag: "tag2"},
            {id: 19, tag: "tag3"},
        ],
        member: {
            email: "test@example.com",
            nickname: "test user"
        },
        likeCount: 10,
        createDate: new Date("2024-07-11"),
        updateDate: new Date("2024-07-11"),
    },

]