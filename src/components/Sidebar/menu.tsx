import {
  HomeOutlined,
  //   ClockCircleOutlined,
  //   FileDoneOutlined,
  //   ScheduleOutlined,
  //   BarChartOutlined,
  //   FormOutlined,
  UserOutlined,
  //   InsertRowLeftOutlined,
} from "@ant-design/icons";

export const HomeSiderMenuList = [
  {
    path: "/home/index",
    icon: <HomeOutlined />,
    name: "首页",
  },
  {
    path: "/home/user",
    icon: <UserOutlined />,
    name: "user",
    children: [
      {
        path: "/home/user/",
        name: "userInfo",
      },
    ],
  }
];
