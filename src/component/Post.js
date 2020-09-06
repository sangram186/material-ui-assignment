import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    height: 'auto',
    margin: '0 auto 15px'
  },
});


const Post = (props) => {
    const {title, id} = props.postApi;
    const classes = useStyles();
    return (
        <div>
            {/* <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, quia nostrum! Voluptates dicta et, veritatis delectus accusantium reiciendis quasi ipsa.</h2> */}
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="250"
                    image={`https://picsum.photos/id/${id}/1500/998`}
                    title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h3">
                            {title.toUpperCase()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    
                        <Link style={{textDecoration: 'none'}} to={`/post/${id}`}><Button variant="contained" color="primary">Read more..</Button></Link>
                    
                </CardActions>
        </Card>
    </div>
    );
};

export default Post;