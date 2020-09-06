import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { Button } from '@material-ui/core';
import Comment from './Comment';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
      marginTop: '50px'
    },
    media: {
      height: 0,
      paddingTop: '40%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

const PostDetails = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const {postId} = useParams();
    const [postDetails, setPostDetails] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPostDetails(data))
        .catch(err => console.log(err));
    }, []);
    const {body, title, id} = postDetails;

    

    return (
        <div className='width'>

<Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
      />
      <CardMedia
        className={classes.media}
        image={`https://picsum.photos/id/${id}/1500/998`}
      />
      <CardContent>
      <Typography gutterBottom variant="h6" component="h3">{title}</Typography>
        <Typography variant="body2" color="textSecondary" component="p"> {body}
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.<br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui voluptate, quaerat mollitia, a ipsum molestiae dicta voluptatum culpa error harum debitis quis vero aperiam magnam incidunt aut eveniet at delectus iusto fugiat dolorum molestias sint porro. Sunt adipisci vitae amet repudiandae, cum tenetur iure nobis culpa dicta ut pariatur optio labore maiores. Commodi cupiditate optio sint totam nemo accusamus odit. Eum culpa accusantium eligendi laborum assumenda, harum voluptatum quo perspiciatis cupiditate consectetur <br/><br/> fugit inventore enim dolorem commodi corrupti ducimus minus excepturi eveniet temporibus facere! Dicta quis, ducimus fuga consequatur, consequuntur dolore dolorum nobis ipsam provident facere impedit blanditiis consectetur laborum culpa reiciendis. Quaerat nobis error quis facere in maiores illo reiciendis non dolorem consequatur facilis, commodi odio modi ducimus hic laudantium, repellendus ut veniam deserunt soluta nesciunt sint incidunt vel eveniet? Nisi magnam<br/> qui illo molestiae provident nulla excepturi ab, delectus nesciunt vitae deserunt repudiandae similique vero fugiat, laborum consequatur natus ullam pariatur. Molestias vel deserunt rem. Ex sed minus ab, perspiciatis, ducimus in ad ipsam possimus, amet officia quis molestiae? Nihil quis inventore provident laborum eveniet officiis facere dolorum facilis repudiandae, sapiente officia et molestias soluta distinctio magni praesentium beatae, voluptatum architecto iste dolorem earum neque rem! Id!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
          
          
        
          <Button className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })} onClick={handleExpandClick}>See Comments.. <span>💬</span></Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Comment id={id}></Comment>
        </CardContent>
      </Collapse>
    </Card>

            {/* <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    
                    title="Shrimp and Chorizo Paella"
                  />
                  <CardMedia
                    className={classes.media}
                    image={`https://picsum.photos/id/${id}/1500/998`}
                    title="Paella dish"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h3">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"> {body}
                      This impressive paella is a perfect party dish and a fun meal to cook together with your
                      guests. Add 1 cup of frozen peas along with the mussels, if you like.<br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui voluptate, quaerat mollitia, a ipsum molestiae dicta voluptatum culpa error harum debitis quis vero aperiam magnam incidunt aut eveniet at delectus iusto fugiat dolorum molestias sint porro. Sunt adipisci vitae amet repudiandae, cum tenetur iure nobis culpa dicta ut pariatur optio labore maiores. Commodi cupiditate optio sint totam nemo accusamus odit. Eum culpa accusantium eligendi laborum assumenda, harum voluptatum quo perspiciatis cupiditate consectetur <br/><br/> fugit inventore enim dolorem commodi corrupti ducimus minus excepturi eveniet temporibus facere! Dicta quis, ducimus fuga consequatur, consequuntur dolore dolorum nobis ipsam provident facere impedit blanditiis consectetur laborum culpa reiciendis. Quaerat nobis error quis facere in maiores illo reiciendis non dolorem consequatur facilis, commodi odio modi ducimus hic laudantium, repellendus ut veniam deserunt soluta nesciunt sint incidunt vel eveniet? Nisi magnam<br/> qui illo molestiae provident nulla excepturi ab, delectus nesciunt vitae deserunt repudiandae similique vero fugiat, laborum consequatur natus ullam pariatur. Molestias vel deserunt rem. Ex sed minus ab, perspiciatis, ducimus in ad ipsam possimus, amet officia quis molestiae? Nihil quis inventore provident laborum eveniet officiis facere dolorum facilis repudiandae, sapiente officia et molestias soluta distinctio magni praesentium beatae, voluptatum architecto iste dolorem earum neque rem! Id!
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                  </CardActions>
            </Card> */}


        </div>
    );
};

export default PostDetails;