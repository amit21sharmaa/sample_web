import { Box, Card, CardContent, Typography } from "@mui/material";
import { exploreServiceArray } from "./ExploreServiceArray";
import DesignedButton from "../common/DesignedButton";
import '../components/ExploreServices.css'
import { ServiceCard } from "../common/ServiceCard";

const ExploreServices = () => {
    return (
    <div className="exploreServices">
        <Box className="exploreServicesText">
            <Typography variant="h5" >
                Explore Our Services
            </Typography>
            <Typography sx={{lineHeight:'28px', color:'#47536B'}}>
                We are self-service data analytics software that lets you create visually.
            </Typography>
            <Box className="serviceComponent">
                {exploreServiceArray.map((item,key) => {
                    return (
                        <ServiceCard sourcePath={item.sourcePath} headerText={item.headerText} subHeaderText={item.subHeaderText} key={key} />
                    )
                })}
            </Box>
            <DesignedButton buttonName="Learn More" />
        </Box>
    </div>
  );
}

export default ExploreServices;