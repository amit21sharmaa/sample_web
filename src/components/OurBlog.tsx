import { Box, Card, Typography } from "@mui/material";
import DesignedButton from "../common/DesignedButton";
import realtimeAnalytics1 from "../assests/Realtime analytics1.png";
import realtimeAnalytics2 from "../assests/Realtime analytics2.jpg";
import realtimeAnalytics3 from "../assests/Realtime analytics3.jpg";
import { BlogCard } from "../common/BlogCard";
import '../components/OurBlog.css'

const blogPicturePathArray = [realtimeAnalytics1, realtimeAnalytics2, realtimeAnalytics3];

const OurBlog = () => {
    return (
    <div className="ourBlog">
        <Box className="ourBlogBox">
            <Typography variant="h5" sx={{ mb:2,fontSize:'1.5rem'}}>
                Our Blogs
            </Typography>
            <Box className="ourBlogSubBox">
                <Box className="blogComponents">
                    {blogPicturePathArray.map((item,key) =>{
                        return(
                            <BlogCard key={key} imgSRC = {item} />
                        )
                    })}
                </Box>
            <DesignedButton buttonName="Learn More" />
            </Box>
        </Box>
    </div>
  );
}

export default OurBlog;