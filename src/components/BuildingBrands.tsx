import { Box, Typography } from "@mui/material";
import DesignedButton from "../common/DesignedButton";
import picturePath from '../assests/BuildingBrands.jpg';
import clickup from '../assests/clickup.png';
import dropbox from '../assests/dropbox.png';
import github from '../assests/github.png';
import '../components/BuildingBrand.css';

const BuildingBrand = () => {
    return(
        <div>
            <Box className = "buildingBrand">
                <Box className = "buildingBrandText">
                    <Typography variant="h3" sx={{mb:3}}>
                        Building Brands in the <span style={{color:"#6153CD"}}>Digital Age</span> 
                    </Typography>
                    <Typography sx={{color:"#47536B",mb:3, fontSize:'1.5rem'}} >
                        Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights. 
                    </Typography>
                    <DesignedButton buttonName="Learn More" />
                </Box>
                <Box className="brandImg">
                    <img src={picturePath} alt="BuildingBrands" className="BuildingBrandsPicture" />
                </Box>
            </Box>
            <Box className = "buildingBrandCompanyLogo">
                <Typography >
                    Powering next-gen companies
                </Typography>
                <Box className = "buildingBrandCompanyLogoBox">
                    <img className="logoimg" src={clickup} alt="clickup" style={{}} />
                    <img className="logoimg" src={dropbox} alt="dropbox" style={{}} />
                    <img className="logoimg" src={github} alt="github" style={{}} />
                </Box>
            </Box>
        </div>
    )
}

export default BuildingBrand;