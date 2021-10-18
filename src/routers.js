import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
} from "@ant-design/icons";
import ChatbotList from "./views/components/Nav/ChatbotList";
let routers = [
    {
        name: "Dashboard",
        icon: <DesktopOutlined />,
        path: "/dashboard",
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
