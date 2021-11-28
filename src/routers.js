import {
    MessageOutlined,
    NotificationOutlined,
    FileOutlined,
    HistoryOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import ChatbotList from "./views/components/NavContent/ChatbotList/ChatbotList";
let routers = [
    {
        name: "Chatbots",
        icon: <MessageOutlined />,
        path: "/chatbots",
        component: <ChatbotList />,
    },
    {
        name: "Hook",
        icon: <NotificationOutlined />,
        path: "/hook",
        component: <h5>Thông Báo</h5>,
    },
    {
        name: "Class Component",
        icon: <FileOutlined />,
        path: "/classcomponent",
        component: <h5>Tệp</h5>,
    },
    {
        name: "History Outlined",
        icon: <HistoryOutlined />,
        path: "/HistoryOutlined",
        component: <h5>Lịch Sử</h5>,
    },
    {
        name: "Setting",
        icon: <SettingOutlined />,
        path: "/setting",
        component: <h5>Cài Đặt</h5>,
    },
    
];

export default routers;
