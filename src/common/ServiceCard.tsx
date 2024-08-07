import { Card, CardContent, Typography } from "@mui/material";
import {SETVICECARDPROP} from "./interface";
import './servicecard.css';

export function ServiceCard(props: SETVICECARDPROP){
    return (
        <Card className="serviceComponentCard" elevation={0}>
            <CardContent>
                <Typography className="serviceCardImg" gutterBottom component="div">
                    <img src={props.sourcePath} alt={props.headerText} width='30%'/>
                </Typography>
                <Typography gutterBottom component="div" sx={{color:'#0F0049'}}>
                    {props.headerText}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.subHeaderText}
                </Typography>
            </CardContent>
        </Card>
    )
}