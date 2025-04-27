import MThar from '../assets/MThar.png'
import FuelIcon from '../assets/FuelIcon.png';
import ModelIcon from '../assets/ModelIcon.png'
import TransmissionIcon from '../assets/TransmissionIcon.png';
import MSGrandVitara from '../assets/MSGrandVitara.png'
import MSBreeza from '../assets/MSBreeza.png'
import MErtiga from '../assets/MErtiga.png'
import MXUV300 from '../assets/MXUV300.png'
import MXUV700 from '../assets/MXUV700.png'
import NMagnite from '../assets/NMagnite.png'
import MScorpio from '../assets/MScorpio.png'
import KSonet from '../assets/KSonet.png'
import HAura from '../assets/HAura.png'




const icons = {
    transmissionIcon: TransmissionIcon,
    fuelIcon: FuelIcon,
    modelIcon: ModelIcon
}

const carList = [
    {
        id: 1,
        profile: MThar,
        name: 'Mahindra Thar',
        category: 'Compact off-road SUV',
        pricingTier: 'Popular',
        fuelType: 'Petrol/Diesel',
        modelYear: 2024,
        transmissionType: 'Manual',
        ...icons,
    },
    {
        id: 2,
        profile: MXUV700,
        name: 'Mahindra XUV 700',
        category: 'Mid-size SUV',
        pricingTier: 'Premium',
        fuelType: 'Diesel',
        modelYear: 2024,
        transmissionType: 'Manual',
        ...icons,
    },
    {
        id: 3,
        profile: MScorpio,
        name: 'Mahindra Scorpio',
        category: 'Full-size SUV',
        pricingTier: 'Choice',
        fuelType: 'Diesel',
        modelYear: 2024,
        transmissionType: 'Manual',
        ...icons,
    },
    {
        id: 4,
        profile: NMagnite,
        name: 'Nissan Magnite',
        category: 'Subcompact SUV',
        pricingTier: 'High-Value',
        fuelType: 'Petrol',
        modelYear: 2024,
        transmissionType: 'Manual',
        ...icons,
    },
    {
        id: 5,
        profile: KSonet,
        name: 'Kia Sonet',
        category: 'Subcompact SUV',
        pricingTier: 'High-Value',
        fuelType: 'Petrol',
        modelYear: 2023,
        transmissionType: 'Manual',
        ...icons,
    },
    {
        id: 6,
        profile: MXUV300,
        name: 'Mahindra XUV 300',
        category: 'Subcompact SUV',
        pricingTier: 'Value',
        fuelType: 'Diesel',
        modelYear: 2023,
        transmissionType: 'Manual',
        ...icons,
    },
    {
        id: 7,
        profile: MSBreeza,
        name: 'Vitara Brezza',
        category: 'Subcompact SUV',
        pricingTier: 'Value',
        fuelType: 'CNG/Petrol',
        modelYear: 2023,
        transmissionType: 'Manual',
        ...icons,
    },
    {
        id: 8,
        profile: MSGrandVitara,
        name: 'Grand Vitara',
        category: 'Mid-size SUV',
        pricingTier: 'Cruise',
        fuelType: 'Cng',
        modelYear: 2024,
        transmissionType: 'Automatic',
        ...icons,
    },
    {
        id: 9,
        profile: MErtiga,
        name: 'Maruti Ertiga',
        category: ' MPV(Multi-purpose)',
        pricingTier: 'Cruise',
        fuelType: 'Cng/Petrol',
        modelYear: 2023,
        transmissionType: 'Manual',
        ...icons,
    },
    {
        id: 10,
        profile: HAura,
        name: 'Hyundai Aura',
        category: 'Compact Sedan',
        pricingTier: 'Standard',
        fuelType: 'Cng/Petrol',
        modelYear: 2024,
        transmissionType: 'Manual',
        ...icons,
    },
    
];

export default carList;
