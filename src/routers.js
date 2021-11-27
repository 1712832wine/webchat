import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
} from "@ant-design/icons";
import ChatbotList from "./views/components/NavContent/ChatbotList/ChatbotList";
let routers = [
    {
        name: "Chatbots",
        icon: <DesktopOutlined />,
        path: "/chatbots",
        component: <ChatbotList />,
    },
    {
        name: "Hook",
        icon: <PieChartOutlined />,
        path: "/hook",
        component: <h3>2</h3>,
    },
    {
        name: "Class Component",
        icon: <FileOutlined />,
        path: "/classcomponent",
        component: <h3>3</h3>,
    },
];

export default routers;
