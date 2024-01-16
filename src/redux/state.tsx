export type RootStateType = {
    ProfilePage: ProfilePageType
    DialogsPage: DialogsPageType
}
export type PostType = {
    id:string
    message:string
    likesCount:number
} 
export type ProfilePageType = {
    Posts: PostType[]  
}
export type DialogItemType = {
    id: string;
    name: string;

};
export type MessageType = {
    id: string;
    message: string;
};

export type DialogsPageType = {
    DialogsData: DialogItemType[]
    MessagesData: MessageType[]
}


export let state: RootStateType = {
    ProfilePage: {
        Posts: [
            { id: '1', message: 'Hello', likesCount: 12 },
            { id: '2', message: 'By by', likesCount: 13 },
        ],
    },
    DialogsPage : {
        DialogsData: [
            { id: "1", name: "Mger" },
            { id: "2", name: "David" },
            { id: "3", name: "Violetta" },
            { id: "4", name: "Andrey" },
            { id: "5", name: "Sasha" },
            { id: "6", name: "Davit" },
        ],
        MessagesData:  [
            { id: "1", message: "Lorem, ipsum dolor.meM" },
            { id: "2", message: "Lorem, ipsum dolor sit amet consectetur adipisicing." },
            { id: "3", message: "Violetta" },
            { id: "4", message: "Lorem ipsum dolor sit." },
            { id: "5", message: "Sasha" },
            { id: "6", message: "Davit" },
        ],
    }
}