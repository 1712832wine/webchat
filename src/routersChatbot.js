import MessageBox from "./views/components/Content/MessageBox/MessageBox";
let routers = [
    {
        name: "Chatbot 1",
        path: "/dashboard/chatbot1",
        component: <MessageBox />,
    },
    {
        name: "Chatbot 2",
        path: "/dashboard/chatbot2",
        component: <h2>chatbot2 content</h2>,
    },
];

export default routers;
