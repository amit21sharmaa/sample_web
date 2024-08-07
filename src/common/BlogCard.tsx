import { Box, Card, Typography } from "@mui/material";
import {BLOGCARDPROPS} from "./interface";
import "./blogCard.css";

export function BlogCard(props: BLOGCARDPROPS){
    return (
        <Box className="blogCard">
            <img src={props.imgSRC} className="blogImg" alt="realtimeAnalytics" />
            <Card elevation={0} sx={{backgroundColor:'white'}}>
                <Typography variant="h6"sx={{pt:1,pl:1, color:'#0F0049'}}>
                    Realtime analytics
                </Typography>
                <Typography className="blogcardtext" sx={{fontSize:'10px', color:'#0F0049'}}>
                    “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible. 
                </Typography>
            </Card>
        </Box>
    )
}