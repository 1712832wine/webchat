import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
} from "@ant-design/icons";
import ChatbotList from "./views/components/NavContent/ChatbotList/ChatbotList";
import Information from "./views/components/NavContent/Information/Information";
import NoteMessages from "./views/components/NavContent/NoteMessages/NoteMessages";
let routers = [
    {
        name: "Chatbots",
        icon: <DesktopOutlined />,
        path: "/chatbots",
        component: <ChatbotList />,
    },
    {
        name: "Noted Message",
        icon: <PieChartOutlined />,
        path: "/noted-message",
        component: <NoteMessages />,
    },
    {
        name: "Information",
        icon: <FileOutlined />,
        path: "/information",
        component: <Information />,
    },
];

export default routers;
