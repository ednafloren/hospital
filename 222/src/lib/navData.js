import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon  from '@mui/icons-material/Search';
import MedicationIcon  from '@mui/icons-material/Medication';
export const navData = [
    {
        id: 0,
        icon: <DashboardIcon/>,
        text: "Dashboard",
        link: "/home"
    },
    {
        id: 1,
        icon: <MedicationIcon/>,
        text: "Medicine Categories",
        link: "/medicineCategorytable"
    },
    {
        id: 2,
        icon: <MedicationIcon/>,
        text: "Medicine",
        link: "/medicinetable"
    },
    {
        id: 3,
        icon: <MedicalServicesIcon/>,
        text: "Medical Supplies Categories",
        link: "/medicalSuppliesCategoriesTable"
    },
    {
        id: 4,
        icon: <MedicalServicesIcon/>,
        text: "Medical Supplies",
        link: "/medicalSuppliesTable"
    },
    {
        id: 5,
        icon: <MedicalServicesIcon/>,
        text: "Received Purchases",
        link: "/receivedPurchasesTable"
    },
    {
        id: 6,
        icon: <MedicalServicesIcon/>,
        text: "Stock Order",
        link: "/stockOrderTable"
    },
    {
        id: 6,
        icon: <MedicalServicesIcon/>,
        text: "Dispensed Stock ",
        link: "/dispensedstockTable"
    },
    {
        id: 7,
        icon: <SummarizeIcon/>,
        text: "Reports",
        link: "/Report"
    },
    {
        id: 8,
        icon: <SearchIcon/>,
        text: "Search",
        link: "/Search"
    },
   
]