import HomeIcon from "@/utils/icons/HomeIcon";
import OrderIcon from "@/utils/icons/OrderIcon";
import ProfileIcon from "@/utils/icons/ProfileIcon";
import TaskIcon from "@/utils/icons/TaskIcon";
import TaskIcon2 from "@/utils/icons/TaskIcon2";
import Link from "next/link";

const NavData = [
    {
        id: "nav1",
        text: "Manage Task",
        Icon: HomeIcon,
        link: "/home",
    },
    {
        id: "nav2",
        text: "Create Task",
        Icon: OrderIcon,
        link: "/create-task",
    },
    {
        id: "nav3",
        text: "To-do Task",
        Icon: TaskIcon,
        link: "/todotask",
    },
    {
        id: "nav4",
        text: "OnGoinge Task",
        Icon: TaskIcon2,
        link: "/ongoingtask",
    },
    {
        id: "nav5",
        text: "Completed Task",
        Icon: ProfileIcon,
        link: "/completedtask",
    },
    {
        id: "nav6",
        text: "My Profile",
        Icon: TaskIcon,
        link: "/profile",
    },
];

export default NavData;
