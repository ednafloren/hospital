import DashboardIcon from '@mui/icons-material/Dashboard';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon  from '@mui/icons-material/Search';
import MedicationIcon from 'mdi-material-ui/Pill'; // Assuming you have the Material Design Icons library installed
import CheckCircleIcon from '@mui/icons-material/CheckCircle';import InventoryIcon from '@mui/icons-material/Inventory';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HealingIcon from '@mui/icons-material/Healing';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BandageIcon from '@mui/icons-material/LocalHospital';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DescriptionIcon from '@mui/icons-material/Description';
import SendIcon from '@mui/icons-material/Send';
import StorageIcon from '@mui/icons-material/Storage';
import ArchiveIcon from '@mui/icons-material/Archive';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export const navData = [
    {
        id: 0,
        icon: < EqualizerIcon/>,
        text: "Dashboard",
        link: "/home"
    },
    {
        id: 1,
        icon: <HealingIcon/>,
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
        icon: <HealthAndSafetyIcon/>,
        text: "Medical Supplies",
        link: "/medicalSuppliesTable"
    },
    {
        id: 5,
        icon: <CheckCircleIcon/>,
        text: "Received Purchases",
        link: "/receivedPurchasesTable"
    },
    {
        id: 6,
        icon: <AddShoppingCartIcon />,
        text: "Stock Order",
        link: "/stockOrderTable"
    },
    {
        id: 6,
        icon: <LocalShippingIcon/>,
        text: "Dispensed Stock ",
        link: "/dispensedstockTable"
    },
    {
        id: 7,
        icon: <DescriptionIcon />,
        text: "Reports",
        link: "/Report"
    },
    // {
    //     id: 8,
    //     icon: <SearchIcon/>,
    //     text: "Search",
    //     link: "/Search"
    // },
   
]